/**
 * cursor.js — свой курсор: стеклянный кружок вместо стрелки.
 *
 * Кружок догоняет мышь с небольшим отставанием — от этого движение
 * выглядит мягким. Само отставание задаётся EASE: 1 — кружок прилипает
 * к мыши намертво, 0.1 — тянется заметным хвостом.
 *
 * Включается только там, где есть настоящая мышь: на тачскрине курсора
 * нет в принципе, а системный указатель прячется лишь после того, как
 * кружок реально появился в разметке.
 */

import { on } from '../core/dom.js';

const EASE = .2;

/* над чем кружок раздувается */
const HOVERABLE = 'a, button, .btn, .chip, .project-card, [role="button"], label, summary';

export function initCursor() {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!fine.matches) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = reduced ? 1 : EASE;

  const dot = document.createElement('div');
  dot.className = 'cursor';
  dot.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dot);
  document.documentElement.classList.add('has-cursor');

  let x = 0, y = 0;          // где кружок сейчас
  let tx = 0, ty = 0;        // где мышь
  let raf = 0;
  let shown = false;

  const draw = () => { dot.style.translate = `${x}px ${y}px`; };

  const frame = () => {
    x += (tx - x) * ease;
    y += (ty - y) * ease;

    if (Math.abs(tx - x) < .1 && Math.abs(ty - y) < .1) {
      x = tx; y = ty; draw(); raf = 0; return;
    }

    draw();
    raf = requestAnimationFrame(frame);
  };

  const run = () => { if (!raf) raf = requestAnimationFrame(frame); };

  on(document, 'mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;

    if (!shown) {                       // первое движение: ставим сразу на место
      shown = true;
      x = tx; y = ty;
      draw();
      dot.classList.add('is-visible');
    }

    run();
  }, { passive: true });

  /* mouseover срабатывает на каждом новом элементе под мышью —
     этого хватает, чтобы держать состояние в актуальном виде */
  on(document, 'mouseover', (e) => {
    dot.classList.toggle('is-active', Boolean(e.target?.closest?.(HOVERABLE)));
  }, { passive: true });

  on(document, 'mousedown', () => dot.classList.add('is-down'));
  on(document, 'mouseup',   () => dot.classList.remove('is-down'));

  /* мышь ушла за пределы окна или окно потеряло фокус — прячем кружок,
     иначе он зависает у края экрана */
  on(document, 'mouseleave', () => dot.classList.remove('is-visible'));
  on(document, 'mouseenter', () => { if (shown) dot.classList.add('is-visible'); });
  on(window,   'blur',       () => dot.classList.remove('is-visible'));

  /* к ноутбуку с тачскрином могли прикоснуться пальцем — убираем всё
     и возвращаем системный курсор */
  on(window, 'touchstart', () => {
    document.documentElement.classList.remove('has-cursor');
    dot.remove();
    if (raf) cancelAnimationFrame(raf);
  }, { once: true, passive: true });
}
