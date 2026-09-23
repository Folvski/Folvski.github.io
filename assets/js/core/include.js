/**
 * include.js — подключение HTML-партиалов.
 *
 * Разметка:  <div data-include="/views/layout/header.html"></div>
 * Партиал подставляется вместо содержимого контейнера, вложенные
 * data-include обрабатываются рекурсивно.
 *
 * ВАЖНО: работает только по http(s) — открытие файла двойным кликом
 * (file://) заблокирует fetch. Запускать через Live Server.
 */

const cache = new Map();

async function load(url) {
  if (!cache.has(url)) {
    cache.set(url, fetch(url).then((res) => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.text();
    }));
  }
  return cache.get(url);
}

export async function includePartials(root = document) {
  const nodes = [...root.querySelectorAll('[data-include]')];
  if (!nodes.length) return;

  await Promise.all(nodes.map(async (node) => {
    const url = node.dataset.include;
    try {
      node.innerHTML = await load(url);
      node.removeAttribute('data-include');
      await includePartials(node);
    } catch (err) {
      console.error(`[include] не удалось загрузить ${url}:`, err.message);
    }
  }));
}
