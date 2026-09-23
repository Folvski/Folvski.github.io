/**
 * reveal.js — плавное появление блоков при скролле.
 *
 * data-reveal — блок выезжает снизу и проявляется (стили в utilities.css).
 * data-appear — блок ничего не прячет сам, ему просто нужен класс
 *               is-visible: так сделана анимация зелёных колец.
 */

import { qsa } from '../core/dom.js';

export function initReveal() {
  const items = qsa('[data-reveal], [data-appear]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });

  items.forEach((el) => io.observe(el));
}
