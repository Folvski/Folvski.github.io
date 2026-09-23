/**
 * to-top.js — кнопка «наверх».
 *
 * Показывается, когда пролистали больше полутора экранов: выше она только
 * закрывает контент. Прокрутку отдаём движку плавного скролла, иначе он и
 * браузер начнут тянуть страницу каждый в свою сторону.
 *
 * Порог — SHOW, в высотах экрана.
 */

import { qs, on } from '../core/dom.js';
import { smooth } from './smooth-scroll.js';

const SHOW = 1.5;

export function initToTop() {
  const btn = qs('[data-to-top]');
  if (!btn) return;

  let frame = 0;

  const update = () => {
    frame = 0;
    btn.classList.toggle('is-visible', window.scrollY > window.innerHeight * SHOW);
  };

  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

  on(btn, 'click', () => {
    if (smooth.on) { smooth.to(0); return; }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });

  update();
  on(window, 'scroll', schedule, { passive: true });
  on(window, 'resize', schedule);
}
