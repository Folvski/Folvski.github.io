/**
 * deeplink.js — ссылки на приложения (viber://, tg:// и подобные).
 *
 * Зачем это нужно. Фильтры блокировщиков рекламы (AdGuard «Социальные сети»,
 * списки uBlock) прячут кнопки «поделиться» по селектору вида
 * a[href^="viber://"]. Обычная ссылка с таким href просто исчезает со
 * страницы — карточка есть в разметке, но не видна.
 *
 * Решение: в разметке остаётся безопасный href (tel:, https:), а схема
 * приложения лежит в data-app. По клику переходим по ней вручную —
 * атрибут href при этом не меняется, поэтому прятать нечего.
 */

import { qsa } from '../core/dom.js';

export function initDeeplinks() {
  qsa('[data-app]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const url = el.dataset.app;
      if (!url) return;

      e.preventDefault();
      window.location.href = url;
    });
  });
}
