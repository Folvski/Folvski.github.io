/**
 * main.js — точка входа. Сначала подставляем партиалы, потом инициализируем
 * контроллеры: до загрузки хедера в DOM его просто нет.
 */

import { includePartials } from './core/include.js';
import { initMenu }   from './controllers/menu.js';
import { initReveal } from './controllers/reveal.js';
import { initWorksNav } from './controllers/works-nav.js';
import { initContacts } from './controllers/contacts.js';
import { initPacking }  from './controllers/pack.js';
import { initAnchors }  from './controllers/anchors.js';
import { initCursor }   from './controllers/cursor.js';
import { initSmoothScroll } from './controllers/smooth-scroll.js';
import { initPageFade }     from './controllers/page-fade.js';
import { initShine }        from './controllers/shine.js';
import { initI18n }         from './controllers/i18n.js';
import { initToTop }        from './controllers/to-top.js';

async function boot() {
  await includePartials();

  initMenu();
  initReveal();
  initWorksNav();
  initContacts();
  initPacking();
  initShine();      // после initPacking: очередь блика считается по укладке
  // строго до initAnchors: он отдаёт переходы по якорям её движку
  initSmoothScroll();
  initAnchors();
  // после initAnchors: переходы по якорям уже помечены обработанными,
  // и шторка на них не срабатывает
  initPageFade();
  initToTop();      // после initSmoothScroll: прокрутку отдаёт её движку
  // последним: текст меняется, а от него зависят укладка пилюль,
  // очередь блика и ширина стопки разделов
  initI18n();

  initCursor();

  document.documentElement.classList.add('is-ready');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
