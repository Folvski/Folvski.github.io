/**
 * pack.js — плотная раскладка пилюль по строкам.
 *
 * Зачем. Обычный flex-wrap переносит элементы строго по порядку: если
 * следующая пилюля не влезает в остаток строки, она уходит вниз, даже когда
 * дальше в списке есть короткая, которая встала бы сюда идеально. Из-за
 * этого пятнадцать скиллов занимали четыре строки вместо трёх, хотя места
 * хватало.
 *
 * Что делает. Меряет реальную ширину каждой пилюли и раскладывает их
 * жадно: идёт по списку, забирает в текущую строку всё, что в неё влезает,
 * остальное оставляет на следующий заход. Порядок меняется только там, где
 * это нужно, — если всё и так влезает, список остаётся как в разметке.
 *
 * Как применяется. Через CSS-свойство order у flex-элементов: разметка и
 * порядок чтения с экрана не меняются, двигается только картинка.
 *
 * Разметка: <ul class="chip-list" data-pack> ... </ul>
 */

import { qsa } from '../core/dom.js';

function packList(list) {
  const items = [...list.children];
  if (items.length < 2) return;

  // сбрасываем прошлую раскладку, иначе замеры поедут
  items.forEach((el) => { el.style.order = ''; });

  const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
  const line = list.clientWidth;
  if (!line) return;

  const pool = items.map((el) => ({ el, w: el.getBoundingClientRect().width }));

  let order = 0;

  while (pool.length) {
    let left = line;
    let first = true;
    let placed = false;

    for (let i = 0; i < pool.length; ) {
      const need = pool[i].w + (first ? 0 : gap);

      if (need <= left + 0.5) {            // полпикселя на округление браузера
        const item = pool.splice(i, 1)[0];
        item.el.style.order = order++;
        left -= need;
        first = false;
        placed = true;
      } else {
        i++;                               // не влезла — идём дальше по списку
      }
    }

    // пилюля шире всей строки: ставим как есть, иначе зациклимся
    if (!placed) {
      const item = pool.shift();
      item.el.style.order = order++;
    }
  }
}

export function initPacking() {
  const lists = qsa('[data-pack]');
  if (!lists.length) return;

  // после каждой перекладки сообщаем наружу: от порядка пилюль на экране
  // зависит очередь бегущего блика (controllers/shine.js)
  const run = () => {
    lists.forEach(packList);
    document.dispatchEvent(new CustomEvent('lists:packed'));
  };

  run();

  // шрифт грузится асинхронно: до него ширины считаются по запасному
  // начертанию и раскладка получается неверной
  document.fonts?.ready?.then(run);

  // сменили язык — слова другой длины, строки надо уложить заново
  document.addEventListener('lang:changed', () => setTimeout(run, 0));

  let timer;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(run, 150);
  });
}
