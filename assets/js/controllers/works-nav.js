/**
 * works-nav.js — строка разделов на странице «Работы».
 *
 * Делает две вещи.
 *
 * 1. Отмечает активный раздел — тот, что сейчас под шапкой. Сама прокрутка
 *    к разделу это обычные якорные ссылки, их ведёт anchors.js.
 *
 * 2. На планшете и телефоне сворачивает строку в стопку. Пять пилюль в ряд
 *    съедают на узком экране пол-экрана, поэтому как только строка прилипает,
 *    она собирается у левого края: впереди активный раздел, остальные уезжают
 *    под него и выглядывают краями. Наведение или касание раскрывает её
 *    обратно в строку.
 *
 * Почему раскладку считает js. Свёрнутая и раскрытая фазы должны переходить
 * друг в друга анимацией, а из flex-строки в стопку так не перейти: смена
 * раскладки скачком не анимируется. Поэтому в липком состоянии пилюли
 * позиционируются абсолютно, а координаты обеих фаз приходят отсюда:
 * раскрытые снимаются с настоящей строки в обычном потоке (вместе с
 * переносами, если она не влезла), свёрнутые считаются от ширины активной.
 *
 * Ручки — в css, на .works-nav: --nav-top, --nav-peek, --nav-dur.
 */

import { qs, qsa, on } from '../core/dom.js';

const NARROW    = '(max-width: 1024px)';
const CLOSE_GAP = 320;   // сколько ждём после ухода курсора, прежде чем свернуть

export function initWorksNav() {
  const nav = qs('.works-nav');
  const bar = qs('[data-works-nav]');
  if (!nav || !bar) return;

  const links = qsa('a[href^="#"]', bar);
  const pairs = [];

  links.forEach((link) => {
    const section = document.getElementById(link.getAttribute('href').slice(1));
    if (section) pairs.push({ link, section });
  });

  if (!pairs.length) return;

  const narrow = window.matchMedia(NARROW);

  let active = pairs[0].link;
  let stuck  = false;
  let open   = false;
  let flow   = null;       // размеры строки в обычном потоке
  let frame  = 0;
  let timer  = 0;

  /* --- Замеры ------------------------------------------------------------ */

  /** Снимает раскладку строки в обычном потоке: где стоит каждая пилюля,
      какой она ширины и какой высоты вся строка. */
  function measure() {
    nav.classList.add('is-measuring');

    const box = bar.getBoundingClientRect();
    flow = {
      height: box.height,
      items: links.map((link) => {
        const r = link.getBoundingClientRect();
        return { x: r.left - box.left, y: r.top - box.top, w: r.width, h: r.height };
      }),
    };

    nav.classList.remove('is-measuring');
  }

  /* --- Раскладка --------------------------------------------------------- */

  function clear() {
    bar.style.removeProperty('--nav-h');
    links.forEach((link) => {
      link.style.removeProperty('--x');
      link.style.removeProperty('--y');
      link.style.removeProperty('--w');
      link.style.removeProperty('--z');
    });
  }

  function layout() {
    if (!narrow.matches || !stuck) { clear(); return; }
    if (!flow) measure();

    if (open) {
      bar.style.setProperty('--nav-h', `${flow.height}px`);
      links.forEach((link, i) => {
        const it = flow.items[i];
        link.style.setProperty('--x', `${it.x}px`);
        link.style.setProperty('--y', `${it.y}px`);
        link.style.setProperty('--w', `${it.w}px`);
        link.style.setProperty('--z', String(links.length - i));
      });
      return;
    }

    // свёрнуто: активная впереди, остальные уходят под неё по очереди
    const peek = parseFloat(getComputedStyle(nav).getPropertyValue('--nav-peek')) || 14;
    const face = flow.items[links.indexOf(active)] || flow.items[0];
    const deck = [active, ...links.filter((link) => link !== active)];

    bar.style.setProperty('--nav-h', `${face.h}px`);

    deck.forEach((link, k) => {
      link.style.setProperty('--x', `${k * peek}px`);
      link.style.setProperty('--y', '0px');
      link.style.setProperty('--w', `${face.w}px`);
      link.style.setProperty('--z', String(deck.length - k));
    });
  }

  /* --- Состояния --------------------------------------------------------- */

  function setOpen(value) {
    if (open === value) return;
    open = value;
    nav.classList.toggle('is-open', open);
    layout();
  }

  function stickyTop() {
    const raw = getComputedStyle(nav).insetBlockStart;
    return parseFloat(raw) || 0;
  }

  function update() {
    frame = 0;

    /* активный раздел: последний, чей верх уже прошёл черту под шапкой */
    const header = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
    ) || 0;
    const edge = header + 120;

    let current = pairs[0].link;
    pairs.forEach(({ link, section }) => {
      if (section.getBoundingClientRect().top <= edge) current = link;
    });

    const changed = current !== active;
    active = current;
    links.forEach((link) => link.classList.toggle('is-active', link === active));

    const nowStuck = nav.getBoundingClientRect().top <= stickyTop() + 1;

    if (nowStuck !== stuck) {
      stuck = nowStuck;
      nav.classList.toggle('is-stuck', stuck);
      if (!stuck) setOpen(false);
      // в липком состоянии строке оставлено место под бургер, то есть она
      // уже другой ширины и переносится иначе — меряем заново
      measure();
      layout();
    } else if (changed) {
      layout();                       // сменилась активная — стопка пересобирается
    }
  }

  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

  /* --- Раскрытие --------------------------------------------------------- */

  const hold  = () => { clearTimeout(timer); };
  const relax = () => { clearTimeout(timer); timer = setTimeout(() => setOpen(false), CLOSE_GAP); };

  // мышь: наводим — раскрываем, увели — сворачиваем не сразу
  on(nav, 'pointerover', (e) => {
    if (e.pointerType !== 'mouse') return;
    if (!narrow.matches || !stuck) return;
    hold();
    setOpen(true);
  });

  on(nav, 'pointerleave', (e) => {
    if (e.pointerType !== 'mouse') return;
    relax();
  });

  // касание: первый тап по стопке раскрывает её, а не уводит на раздел
  on(bar, 'click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    if (narrow.matches && stuck && !open) {
      e.preventDefault();
      e.stopPropagation();            // до anchors.js и page-fade.js не доходит
      setOpen(true);
      return;
    }

    setOpen(false);
  }, true);                           // на перехвате: раньше остальных обработчиков

  on(document, 'pointerdown', (e) => {
    if (open && !nav.contains(e.target)) setOpen(false);
  }, { passive: true });

  /* --- Запуск ------------------------------------------------------------ */

  const remeasure = () => { measure(); layout(); };

  measure();
  update();

  on(window, 'scroll', schedule, { passive: true });
  on(window, 'resize', () => { remeasure(); schedule(); });
  on(narrow, 'change', () => { setOpen(false); remeasure(); schedule(); });

  // ширины пилюль зависят от шрифта, а он грузится асинхронно
  document.fonts?.ready?.then(remeasure);
  on(document, 'lang:changed', () => setTimeout(remeasure, 0));
}
