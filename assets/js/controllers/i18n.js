/**
 * i18n.js — переключение языка сайта.
 *
 * Ключом в словаре служит сам русский текст. Это не изящно, зато у такого
 * решения есть важное свойство: разметку трогать не нужно вообще. Ни одного
 * data-атрибута, ни одного ключа вида hero.title в девятнадцати файлах.
 * Добавил новую карточку проекта — дописал одну строку в data/i18n.js,
 * и она переводится. Забыл дописать — она просто останется русской, а не
 * покажет пустое место или имя ключа.
 *
 * Что переводится:
 *   • текстовые узлы;
 *   • куски разметки целиком — там, где текст разорван <strong> или <br>
 *     и по кусочкам его не собрать (в словаре это раздел html);
 *   • атрибуты alt, aria-label, title и заголовок вкладки.
 *
 * Оригиналы не пересобираются из словаря в обратную сторону, а
 * запоминаются при первом проходе. Так возврат на русский всегда точный,
 * даже если одна и та же английская фраза стоит в двух разных местах.
 *
 * Выбор языка лежит в localStorage и держится при переходах между
 * страницами. Если человек ничего не выбирал, а язык браузера не русский,
 * сайт сам открывается на английском.
 */

import { qs, qsa, on } from '../core/dom.js';
import { dict } from '../data/i18n.js';

const KEY  = 'lang';
const SKIP = new Set(['SCRIPT', 'STYLE', 'SVG', 'NOSCRIPT']);
const ATTRS = ['alt', 'aria-label', 'title'];

const norm = (s) => s.replace(/\s+/g, ' ').trim();

/* оригиналы: узел -> русский текст, элемент -> русская разметка */
const textSrc = new Map();
const htmlSrc = new Map();
const attrSrc = new Map();

let lang = 'ru';

/* --- Сбор узлов ----------------------------------------------------------- */

function walk() {
  /* Элементы, у которых текст разорван тегами (<strong>, <br>): их
     разметка переводится целиком, а внутрь текстовый проход не заходит.

     Признак структурный, а не «есть ли такой ключ в словаре». Это важно:
     если ключ забыли дописать, блок просто останется русским. Проверяй мы
     словарь, недостающий ключ пустил бы внутрь текстовый проход, и абзац
     получился бы наполовину переведённым. */
  const CYR = /[А-Яа-яЁё]/;
  const whole = new Set();

  qsa('body *').forEach((el) => {
    if (SKIP.has(el.tagName)) return;
    const kids = [...el.childNodes].filter((n) =>
      (n.nodeType === 3 && CYR.test(n.nodeValue)) ||
      (n.nodeType === 1 && CYR.test(n.textContent)));
    if (kids.length < 2) return;
    if (!kids.some((n) => n.nodeType === 3)) return;   // текст лежит глубже

    whole.add(el);
    if (!htmlSrc.has(el)) htmlSrc.set(el, el.innerHTML);
  });

  const inWhole = (node) => {
    for (let el = node.parentElement; el; el = el.parentElement) {
      if (whole.has(el)) return true;
    }
    return false;
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (SKIP.has(n.parentElement?.tagName)) continue;
    if (!dict.text[norm(n.nodeValue)]) continue;
    if (inWhole(n)) continue;
    if (!textSrc.has(n)) textSrc.set(n, n.nodeValue);
  }

  qsa('[alt], [aria-label], [title]').forEach((el) => {
    ATTRS.forEach((a) => {
      const v = el.getAttribute(a);
      if (!v || !dict.attrs[v]) return;
      const id = `${a}`;
      if (!attrSrc.has(el)) attrSrc.set(el, {});
      const store = attrSrc.get(el);
      if (!(id in store)) store[id] = v;
    });
  });
}

/* --- Применение ----------------------------------------------------------- */

function apply(to) {
  const en = to === 'en';

  textSrc.forEach((ru, node) => {
    const hit = dict.text[norm(ru)];
    if (!hit) return;
    /* пробелы по краям сохраняем: узлы вроде «В » стоят вплотную
       к соседнему <strong>, и без пробела слова слипнутся */
    const lead  = /^\s/.test(ru) ? ' ' : '';
    const trail = /\s$/.test(ru) ? ' ' : '';
    node.nodeValue = en ? lead + hit + trail : ru;
  });

  htmlSrc.forEach((ru, el) => {
    const hit = dict.html[norm(ru)];
    if (hit) el.innerHTML = en ? hit : ru;
  });

  attrSrc.forEach((store, el) => {
    Object.entries(store).forEach(([a, ru]) => {
      const hit = dict.attrs[ru];
      if (hit) el.setAttribute(a, en ? hit : ru);
    });
  });

  /* заголовок вкладки и описание живут в <head>, обходом они не задеты */
  const page = dict.pages[location.pathname.replace(/index\.html$/, '')];
  if (page) {
    const m = en ? page.en : page.ru;
    document.title = m.title;
    const d = qs('meta[name="description"]');
    if (d) d.setAttribute('content', m.desc);
  }

  document.documentElement.lang = to;
  lang = to;

  /* Кнопок в разметке две — в шапке и в меню; видна всегда одна, но подписи
     держим одинаковыми: иначе при смене ширины окна вторая покажет старый
     язык. Эти узлы обходом не задеты — их текст ставит скрипт. */
  qsa('[data-lang-label]').forEach((el) => { el.textContent = en ? 'Russian' : 'English'; });
  qsa('[data-lang-toggle]').forEach((el) => {
    el.setAttribute('aria-label', en ? 'Switch to Russian' : 'Переключить на английский');
  });

  /* Ширины текста изменились: пилюли укладываются заново, а за ними
     пересчитываются очередь блика и стопка разделов на «Работах». */
  document.dispatchEvent(new CustomEvent('lang:changed', { detail: { lang: to } }));
}

/* --- Запуск --------------------------------------------------------------- */

function initial() {
  const saved = (() => { try { return localStorage.getItem(KEY); } catch { return null; } })();
  if (saved === 'ru' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export function initI18n() {
  walk();

  const start = initial();
  if (start === 'en') apply('en');
  else apply('ru');

  qsa('[data-lang-toggle]').forEach((btn) => {
    on(btn, 'click', () => {
      const next = lang === 'ru' ? 'en' : 'ru';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch { /* приватный режим */ }

      /* пока курсор на кнопке, держим её раскрытой: иначе она схлопывается
         прямо под указателем и подпись не успевает прочитаться */
      btn.classList.add('is-open');
      on(btn, 'pointerleave', () => btn.classList.remove('is-open'), { once: true });
    });
  });
}
