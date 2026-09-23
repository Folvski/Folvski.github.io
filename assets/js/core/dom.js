/** dom.js — короткие помощники для работы с DOM */

export const qs  = (sel, root = document) => root.querySelector(sel);
export const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

export const on = (el, type, handler, opts) => {
  el?.addEventListener(type, handler, opts);
  return () => el?.removeEventListener(type, handler, opts);
};

export const lockScroll = (locked) => {
  document.body.classList.toggle('no-scroll', locked);
};
