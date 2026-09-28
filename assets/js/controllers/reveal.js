/**
 * reveal.js — плавное появление блоков при скролле.
 *
 * data-reveal — блок выезжает снизу и проявляется (стили в utilities.css).
 * data-appear — блок ничего не прячет сам, ему просто нужен класс
 *               is-visible: так сделана анимация зелёных колец.
 *
 * Задержку внутри группы задаёт --d прямо в разметке: соседние элементы
 * проявляются по очереди, а не одной пачкой.
 */

import { qsa, on } from '../core/dom.js';

export function initReveal() {
  const items = qsa('[data-reveal], [data-appear]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const left = new Set(items);

  const show = (el) => {
    el.classList.add('is-visible');
    left.delete(el);
    io.unobserve(el);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) show(e.target); });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });

  items.forEach((el) => io.observe(el));

  /* Догоняющий проход.

     Наблюдатель присылает запись только тогда, когда состояние пересечения
     поменялось. При мгновенном прыжке — переход по якорю, кнопка «наверх»,
     резкое смахивание пальцем — блок за один кадр проскакивает снизу экрана
     наверх, ни разу в кадр не попав: состояние как было false, так и
     осталось, записи нет, и блок навсегда остаётся прозрачным.

     Поэтому после прокрутки добираем всё, что уже оказалось выше экрана:
     анимировать там нечего, надо просто показать. Проход стоит копейки —
     в наборе остаются только ещё не показанные блоки, и когда их не
     остаётся, обработчик выходит сразу. */
  let frame = 0;

  const catchUp = () => {
    frame = 0;
    left.forEach((el) => {
      if (el.getBoundingClientRect().bottom <= 0) show(el);
    });
  };

  on(window, 'scroll', () => {
    if (!frame && left.size) frame = requestAnimationFrame(catchUp);
  }, { passive: true });
}
