/**
 * site.js — слой данных: всё, что повторяется на страницах и может
 * поменяться (контакты, соцсети, навигация). Карточки проектов свёрстаны
 * статикой в HTML — здесь их нет намеренно.
 */

export const site = {
  author: {
    name: 'Нестеренко Иван Андреевич',
    short: 'Иван',
    city: 'Беларусь — Гродно',
    phone: '+375 (29) 776-84-19',
    email: 'nesterenkoi741@gmail.com',
    schedule: 'круглосуточно',
  },

  nav: [
    { label: 'Главная',  href: '/index.html' },
    { label: 'Обо мне',  href: '/pages/about.html' },
    { label: 'Работы',   href: '/pages/projects.html' },
    { label: 'Контакты', href: '#contacts' },
    { label: 'Стек',     href: '#skills' },
  ],

  /**
   * Карточки секции «Открыт к сотрудничеству».
   * Отсюда их собирает controllers/contacts.js.
   *
   * key   — модификатор карточки и имя файла иконки (assets/img/contacts/)
   * ratio — доля круга внутри svg: на неё масштабируется картинка,
   *         чтобы обводка легла ровно по краю знака
   * href  — обычная ссылка, работает и без js
   * app   — схема приложения; подставляется только по клику
   */
  contacts: [
    {
      key:   'tg',
      ratio: 0.8325,
      label: 'Telegram: @folvski',
      href:  'https://t.me/folvski',
      blank: true,
    },
    {
      key:   'ig',
      ratio: 0.78,
      label: 'Instagram : @folvski',
      href:  'https://instagram.com/folvski',
      blank: true,
    },
    {
      key:   'vb',
      ratio: 0.75,
      label: 'Viber: +375 (29) 776-84-19',
      href:  'tel:+375297768419',
      app:   'viber://chat?number=375297768419',
    },
  ],
};
