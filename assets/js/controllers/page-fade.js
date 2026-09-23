/**
 * page-fade.js — переход между страницами через чёрный.
 *
 * Клик по внутренней ссылке перехватывается: сначала страница уходит в
 * чёрный, и только потом браузер идёт по адресу. Обратная половина —
 * проявление — сделана анимацией в CSS и работает сама.
 *
 * Не трогаем: ссылки наружу, в новую вкладку, на скачивание, mailto/tel,
 * переходы по якорю внутри страницы (их ведёт anchors.js) и клики с
 * зажатым Ctrl/Cmd — человек хочет открыть в новой вкладке.
 */

import { qs, on } from '../core/dom.js';

const SAFETY = 700;   // если transitionend не придёт — уходим по таймеру

export function initPageFade() {
  const veil = qs('.page-fade');
  if (!veil) return;

  /* Возврат кнопкой «назад». Браузер может достать страницу из своего кеша
     ровно в том виде, в каком мы её покинули, — то есть с закрашенной
     шторкой. Снимаем её вручную. */
  on(window, 'pageshow', (e) => { if (e.persisted) veil.classList.remove('is-out'); });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  on(document, 'click', (e) => {
    if (e.defaultPrevented) return;          // якорь или deep-link уже обработан
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const link = e.target?.closest?.('a[href]');
    if (!link) return;
    if (link.target && link.target !== '_self') return;
    if (link.hasAttribute('download')) return;
    if (link.dataset.app) return;

    let url;
    try { url = new URL(link.getAttribute('href'), location.href); }
    catch { return; }

    if (url.origin !== location.origin) return;
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

    // та же страница, меняется только якорь — это не переход
    if (url.pathname === location.pathname && url.search === location.search) return;

    e.preventDefault();
    veil.classList.add('is-out');

    let left = false;
    const go = () => { if (left) return; left = true; location.href = url.href; };

    on(veil, 'transitionend', go, { once: true });
    setTimeout(go, SAFETY);
  });
}
