/**
 * shine.js — светлое пятно, ползущее по обводке пилюль со скиллами.
 *
 * Пятно проходит одну пилюлю слева направо, затем продолжает путь с левого
 * края следующей — и так по всем подряд, после последней пауза и заново.
 *
 * Почему это не чистый css. Длительность круга зависит от количества пилюль
 * (шаг * количество + пауза), а доля круга, которая приходится на одну
 * пилюлю, — величина переменная. В @keyframes проценты задаются жёстко, и
 * под список из 15 и из 17 штук пришлось бы держать разные наборы кадров.
 * Поэтому кадры собираются здесь: значения те же самые, просто посчитанные.
 *
 * Порядок пилюль берётся с экрана, а не из разметки: pack.js укладывает их
 * плотнее обычного переноса и меняет местами через order.
 *
 * Все ручки живут в css, на .chip-list: --shine-step и --shine-pause.
 */

import { qsa } from '../core/dom.js';

/** '.78s' | '780ms' -> 780 */
function ms(value, fallback) {
  const raw = String(value).trim();
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return fallback;
  return raw.endsWith('ms') ? n : n * 1000;
}

function ordered(list) {
  return [...list.children]
    .map((el) => {
      const r = el.getBoundingClientRect();
      return { el, y: Math.round(r.top), x: Math.round(r.left) };
    })
    .sort((a, b) => a.y - b.y || a.x - b.x)
    .map((item) => item.el);
}

/** пятно — отдельный элемент, а не ::after: псевдоэлементы анимируются
    из js не везде одинаково хорошо */
function spot(chip) {
  let el = chip.querySelector('.chip__shine');
  if (!el) {
    el = document.createElement('i');
    el.className = 'chip__shine';
    el.setAttribute('aria-hidden', 'true');
    chip.append(el);
  }
  return el;
}

function run(list) {
  const chips = ordered(list);
  if (!chips.length) return;

  const css   = getComputedStyle(list);
  const step  = ms(css.getPropertyValue('--shine-step'), 780);
  const pause = parseFloat(css.getPropertyValue('--shine-pause')) || 0;

  const cycle = (chips.length + pause) * step;
  const sweep = step / cycle;          // доля круга на одну пилюлю

  /* Границы прохода.
     Картинка втрое шире пилюли, пятно сидит в её середине. При таком
     раскладе центр пятна стоит в точке (1.5 - 0.02p) от ширины пилюли,
     где p — background-position в процентах. Нам нужно провести его ровно
     от левого края до правого: не раньше и не позже, иначе пятно часть
     шага простаивает за краем и между пилюлями возникает заминка.

     s — полуширина пятна в долях пилюли (в css она задана в координатах
     картинки, отсюда множитель 3). */
  const s    = (parseFloat(css.getPropertyValue('--shine-spot')) || 6) * 3 / 100;
  const from = 75 + 50 * s;            // центр пятна у левого края
  const to   = 25 - 50 * s;            // центр пятна у правого края

  chips.forEach((chip, i) => {
    const el = spot(chip);

    el.shine?.cancel();
    el.shine = el.animate(
      [
        { backgroundPosition: `${from}% 0`, offset: 0 },      // пятно у левого края
        { backgroundPosition: `${to}% 0`,   offset: sweep },  // ушло за правый
        { backgroundPosition: `${to}% 0`,   offset: 1 },      // ждёт своей очереди
      ],
      {
        duration: cycle,
        delay: i * step,
        iterations: Infinity,
        easing: 'linear',
      },
    );
  });
}

export function initShine() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lists = qsa('.chip-list');
  if (!lists.length) return;

  const start = () => lists.forEach(run);

  start();

  // pack.js сообщает о каждой перекладке: порядок пилюль поменялся,
  // значит очередь надо пересобрать
  document.addEventListener('lists:packed', start);

  // на случай, если список не участвует в укладке
  document.fonts?.ready?.then(start);
}
