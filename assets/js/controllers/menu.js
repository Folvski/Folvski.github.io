/**
 * menu.js — шапка: бургер на <=1024 и подсветка активного пункта.
 */

import { qs, qsa, on, lockScroll } from '../core/dom.js';

export function initMenu() {
  const header  = qs('[data-header]');
  const burger  = qs('[data-burger]');
  const menu    = qs('[data-menu]');
  if (!header) return;

  /* --- активный пункт по текущему пути ---------------------------------- */
  const path = location.pathname.replace(/\/index\.html$/, '/');
  qsa('[data-nav-link]', header).forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href.includes('#')) return;          // якоря не считаем текущей страницей
    const target = new URL(href, location.origin).pathname.replace(/\/index\.html$/, '/');
    if (target === path) link.classList.add('is-active');
  });

  /* --- бургер ------------------------------------------------------------ */
  if (!burger || !menu) return;

  const setOpen = (open) => {
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    lockScroll(open);
  };

  on(burger, 'click', () => setOpen(!header.classList.contains('is-open')));
  on(document, 'keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  qsa('a', menu).forEach((link) => on(link, 'click', () => setOpen(false)));

  // тап мимо ссылок, по затемнённому фону, тоже закрывает панель
  on(menu, 'click', (e) => { if (e.target === menu) setOpen(false); });
}
