/**
 * smooth-scroll.js — плавная прокрутка колесом.
 *
 * Как это работает. Колесо перехватывается, к «цели» прибавляется его шаг,
 * а страница каждый кадр подтягивается к этой цели маленькими долями —
 * отсюда мягкий разгон и торможение.
 *
 * Прокручивается при этом само окно (window.scrollTo), а не обёртка через
 * transform. Это принципиально: сдвинь мы контейнер, сломались бы и
 * фиксированная шапка, и появление блоков по IntersectionObserver.
 *
 * Две ручки:
 *   LERP   вязкость. Больше — резче останавливается, меньше — дольше едет.
 *   SPEED  множитель колеса: на сколько уезжает страница за один щелчок.
 *
 * Выключается там, где родная прокрутка лучше: на тачскрине (там своя
 * инерция) и при включённом «уменьшить движение» в системе.
 */

const LERP  = .12;
const SPEED = 1;

/* Наружу отдаём объект, а не функции: им пользуется anchors.js, чтобы
   переходы по якорям ехали тем же движком, а не спорили с ним. */
export const smooth = {
  on: false,
  to() {},
};

function scrollableUnder(node) {
  for (let el = node; el && el !== document.body; el = el.parentElement) {
    if (el.scrollHeight <= el.clientHeight + 1) continue;
    const oy = getComputedStyle(el).overflowY;
    if (oy === 'auto' || oy === 'scroll') return true;
  }
  return false;
}

export function initSmoothScroll() {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || reduced) return;

  /* снимаем scroll-behavior: smooth — иначе каждый наш кадр браузер
     начинал бы анимировать ещё раз, и движение превращалось бы в кисель */
  document.documentElement.classList.add('has-smooth');

  let current = window.scrollY;
  let target  = current;
  let raf = 0;

  const limit = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const clamp = (v) => Math.min(Math.max(v, 0), limit());

  const frame = () => {
    current += (target - current) * LERP;
    if (Math.abs(target - current) < .4) current = target;

    window.scrollTo(0, current);

    raf = current === target ? 0 : requestAnimationFrame(frame);
  };

  const run = () => { if (!raf) raf = requestAnimationFrame(frame); };

  const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };

  /* Страницу прокрутили мимо нас — клавишами, полосой прокрутки, поиском
     по странице. Отличаем по расхождению с нашей позицией: свои кадры
     уходят ровно в current, чужие — нет. */
  window.addEventListener('scroll', () => {
    if (Math.abs(window.scrollY - current) < 2) return;
    stop();
    current = target = window.scrollY;
  }, { passive: true });

  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) return;                       // это зум
    if (document.body.classList.contains('no-scroll')) return; // открыто меню
    if (scrollableUnder(e.target)) return;                     // свой скролл внутри

    e.preventDefault();

    let d = e.deltaY;
    if (e.deltaMode === 1) d *= 16;                            // шаг в строках
    else if (e.deltaMode === 2) d *= window.innerHeight;       // шаг в экранах

    target = clamp(target + d * SPEED);
    run();
  }, { passive: false });

  window.addEventListener('resize', () => { target = clamp(target); });

  smooth.on = true;
  smooth.to = (y, instant) => {
    target = clamp(y);
    if (instant) {
      stop();
      current = target;
      window.scrollTo(0, current);
      return;
    }
    run();
  };
}
