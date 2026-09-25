/**
 * lightbox.js — просмотр картинки во весь экран.
 *
 * Зачем. В кейсах много мелких снимков: карточка объекта, экран телефона,
 * значок. В ряду по три их видно, но не рассмотреть. По клику снимок
 * открывается поверх страницы в полный размер.
 *
 * Что важно: снимок не кадрируется никогда. Обычный вписывается в экран
 * целиком, сверхвысокий (скриншот страницы от шапки до подвала) выводится
 * в ширину и прокручивается — иначе от него осталась бы полоска в палец.
 *
 * Стрелками и клавишами влево-вправо можно листать все снимки страницы
 * подряд, не закрывая просмотрщик. Esc или клик по фону закрывают.
 *
 * Разметка не нужна: контроллер собирает окно сам и цепляется к любой
 * <figure class="case-media"> с картинкой внутри.
 */

import { qs, qsa, on, lockScroll } from '../core/dom.js';

const TALL = 0.5;          // ниже этого отношения снимок показываем в ширину

const ICON = {
  close: '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  prev:  '<path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  next:  '<path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
};

const svg = (d) => `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">${ICON[d]}</svg>`;

export function initLightbox() {
  const figures = qsa('.case-media').filter((f) => qs('img', f));
  if (!figures.length) return;

  const box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Просмотр изображения');
  box.innerHTML = `
    <div class="lightbox__scroll"><img class="lightbox__img" alt=""></div>
    <button class="lightbox__btn lightbox__close" type="button" aria-label="Закрыть">${svg('close')}</button>
    <button class="lightbox__btn lightbox__prev"  type="button" aria-label="Предыдущее">${svg('prev')}</button>
    <button class="lightbox__btn lightbox__next"  type="button" aria-label="Следующее">${svg('next')}</button>
    <p class="lightbox__count"></p>`;
  document.body.appendChild(box);

  const img    = qs('.lightbox__img', box);
  const scroll = qs('.lightbox__scroll', box);
  const count  = qs('.lightbox__count', box);
  const prevBtn = qs('.lightbox__prev', box);
  const nextBtn = qs('.lightbox__next', box);

  let index = -1;
  let last  = null;          // куда вернуть фокус после закрытия

  function show(i) {
    index = (i + figures.length) % figures.length;
    const src = qs('img', figures[index]);

    /* Пропорции берём из атрибутов: они проставлены из самого файла,
       и решение о режиме принимается до того, как картинка загрузится. */
    const w = src.naturalWidth  || +src.getAttribute('width')  || 1;
    const h = src.naturalHeight || +src.getAttribute('height') || 1;

    box.classList.toggle('is-tall', w / h < TALL);
    img.src = src.currentSrc || src.src;
    img.alt = src.alt || '';
    scroll.scrollTop = 0;

    count.textContent = `${index + 1} / ${figures.length}`;
    const one = figures.length < 2;
    prevBtn.hidden = nextBtn.hidden = one;
    count.hidden = one;
  }

  function open(i, from) {
    last = from || null;
    show(i);
    box.classList.add('is-open');
    lockScroll(true);
    qs('.lightbox__close', box).focus({ preventScroll: true });
  }

  function close() {
    box.classList.remove('is-open');
    lockScroll(false);
    index = -1;
    // src снимаем с задержкой: иначе картинка исчезнет до конца затухания
    setTimeout(() => { if (index === -1) img.removeAttribute('src'); }, 400);
    last?.focus?.({ preventScroll: true });
  }

  figures.forEach((fig, i) => {
    const src = qs('img', fig);

    /* Окно с прокруткой внутри фигуры: колесо и палец прокручивают снимок,
       а click срабатывает только на настоящем нажатии — они не спорят. */
    on(fig, 'click', () => open(i, fig));

    // доступность с клавиатуры: фигура ведёт себя как кнопка
    fig.tabIndex = 0;
    fig.setAttribute('role', 'button');
    fig.setAttribute('aria-label', `Открыть изображение: ${src.alt || 'снимок проекта'}`);
    on(fig, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i, fig); }
    });
  });

  on(qs('.lightbox__close', box), 'click', close);
  on(prevBtn, 'click', (e) => { e.stopPropagation(); show(index - 1); });
  on(nextBtn, 'click', (e) => { e.stopPropagation(); show(index + 1); });

  // клик мимо картинки закрывает
  on(box, 'click', (e) => { if (e.target === box || e.target === scroll) close(); });

  on(document, 'keydown', (e) => {
    if (index === -1) return;
    if (e.key === 'Escape')     { close(); }
    if (e.key === 'ArrowLeft')  { show(index - 1); }
    if (e.key === 'ArrowRight') { show(index + 1); }
  });
}
