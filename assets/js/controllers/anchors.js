/**
 * anchors.js — переходы по якорям.
 *
 * Две проблемы, которые он решает.
 *
 * 1. Секции подставляются через fetch уже после загрузки страницы. Браузер
 *    ищет элемент по хэшу сразу при открытии, в этот момент его ещё нет
 *    в DOM — и прокрутки не происходит. Со стороны это выглядит так:
 *    «Контакты» просто выбрасывают на верх главной. Поэтому после сборки
 *    партиалов хэш отрабатываем сами.
 *
 * 2. Блоки «Контакты» и «Стек» есть и на главной, и на «Обо мне». Ссылка
 *    вида /index.html#contacts уводила с текущей страницы, хотя нужный
 *    блок уже под ногами. Теперь если элемент с таким id есть на открытой
 *    странице, просто прокручиваем к нему, не перезагружая её.
 *
 * Отступ сверху берётся из --header-h: иначе фиксированная шапка
 * накрывает заголовок секции.
 */

import { qs, qsa } from '../core/dom.js';
import { smooth } from './smooth-scroll.js';

function headerOffset() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--header-h');
  return (parseFloat(raw) || 0) + 16;
}

function scrollToId(id, animated) {
  const target = document.getElementById(id);
  if (!target) return false;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
  const soft = animated && !reduced;

  // если работает плавная прокрутка — едем её движком, иначе два
  // независимых механизма начнут тянуть страницу каждый в свою сторону
  if (smooth.on) smooth.to(top, !soft);
  else window.scrollTo({ top, behavior: soft ? 'smooth' : 'auto' });

  return true;
}

export function initAnchors() {
  /* --- клик по ссылке с якорем ------------------------------------------ */
  qsa('a[href*="#"]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const id = href.split('#')[1];
    if (!id) return;

    link.addEventListener('click', (e) => {
      // блок есть на этой странице — никуда не уходим
      if (!document.getElementById(id)) return;

      e.preventDefault();
      scrollToId(id, true);
      history.pushState(null, '', `#${id}`);
    });
  });

  /* --- «назад» в браузере ------------------------------------------------ */
  // pushState выше добавляет запись в историю, поэтому возврат
  // обрабатываем сами: без этого адрес менялся бы, а страница стояла
  window.addEventListener('popstate', () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id) scrollToId(id, true);
    else if (smooth.on) smooth.to(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* --- открыли страницу сразу с хэшем ----------------------------------- */
  if (location.hash.length <= 1) return;

  const id = decodeURIComponent(location.hash.slice(1));

  // как только человек тронул страницу сам — больше её не дёргаем
  let touched = false;
  const markTouched = () => { touched = true; };
  ['wheel', 'touchstart', 'keydown', 'pointerdown']
    .forEach((type) => window.addEventListener(type, markTouched, { once: true, passive: true }));

  const jump = () => { if (!touched) scrollToId(id, false); };

  // ждём кадр: партиалы уже в DOM, но раскладка ещё не пересчитана
  requestAnimationFrame(() => requestAnimationFrame(jump));

  // шрифт и раскладка пилюль меняют высоту блоков выше — повторяем прицел
  document.fonts?.ready?.then(() => setTimeout(jump, 60));
  window.addEventListener('load', () => setTimeout(jump, 60), { once: true });
}
