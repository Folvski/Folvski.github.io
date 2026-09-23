/**
 * contacts.js — секция «Открыт к сотрудничеству».
 *
 * Почему карточки собираются здесь, а не лежат в html.
 *
 * Блокировщики рекламы (AdGuard, uBlock и встроенный блокировщик Opera)
 * держат списки правил для кнопок «поделиться». Часть этих правил работает
 * не по классам, а по содержимому: узел, внутри которого встречается
 * «Instagram», «Viber» или ссылка на соцсеть, вырезается из ответа сервера
 * ещё до того, как страница попадёт в браузер. На живом сайте это выглядело
 * так: у второй карточки пропадала подпись, третья исчезала целиком.
 *
 * Поэтому в html лежит только пустой <ul data-contacts>, а названия и
 * ссылки живут в data/site.js. js-файл под такие правила не подпадает,
 * вырезать из разметки нечего — карточки собираются уже в браузере.
 *
 * Схемы приложений (viber://) в href не пишем по той же причине: селектор
 * a[href^="viber://"] — один из самых популярных в этих списках. Ссылка
 * остаётся обычной (tel:), а схема подставляется по клику из data-app.
 */

import { site } from '../data/site.js';
import { qs, qsa } from '../core/dom.js';

const ARROW =
  '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
  '<path d="M6 14 14 6M7 6h7v7" stroke="currentColor" stroke-width="2" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function card(item) {
  const li = document.createElement('li');
  const a  = document.createElement('a');

  a.className = `contact-card contact-card--${item.key}`;
  a.href = item.href;
  if (item.blank) { a.target = '_blank'; a.rel = 'noopener'; }
  if (item.app)   { a.dataset.app = item.app; }

  const glyph = document.createElement('span');
  glyph.className = 'contact-card__glyph';
  glyph.setAttribute('aria-hidden', 'true');
  glyph.style.setProperty('--d', item.ratio);

  const img = document.createElement('img');
  img.src = `/assets/img/contacts/${item.key}.svg`;
  img.alt = '';
  glyph.append(img);

  const go = document.createElement('span');
  go.className = 'contact-card__go';
  go.setAttribute('aria-hidden', 'true');
  go.innerHTML = ARROW;

  const label = document.createElement('span');
  label.className = 'contact-card__label';
  label.textContent = item.label;

  a.append(glyph, go, label);
  li.append(a);
  return li;
}

export function initContacts() {
  const list = qs('[data-contacts]');
  if (list) {
    list.replaceChildren(...site.contacts.map(card));
  }

  // переход по схеме приложения: href не трогаем, прятать нечего
  qsa('[data-app]').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (!el.dataset.app) return;
      e.preventDefault();
      window.location.href = el.dataset.app;
    });
  });
}
