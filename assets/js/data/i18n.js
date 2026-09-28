/**
 * i18n.js — словарь для английской версии сайта.
 *
 * Ключ — русский текст ровно в том виде, в каком он стоит в разметке.
 * Значение — английский перевод. Разметку править не нужно: переключатель
 * (controllers/i18n.js) ищет текст на странице и подменяет его.
 *
 * Три раздела:
 *   text  — обычные строки. Пробелы по краям не важны, они схлопываются.
 *   html  — куски, внутри которых есть теги: <strong>, <br>, ссылка.
 *           Здесь ключ и перевод должны содержать те же теги, иначе
 *           акценты и переносы потеряются. Неразрывный пробел пишется
 *           как &nbsp; — именно так его отдаёт браузер.
 *   attrs — alt у картинок, aria-label у кнопок.
 *   pages — заголовок вкладки и описание для поисковиков.
 *
 * Добавил новый текст на сайт — допиши сюда строку. Забыл дописать —
 * ничего не сломается, этот кусок просто останется русским.
 */

export const dict = {

  /* ======================================================================
     ОБЫЧНЫЕ СТРОКИ
     ====================================================================== */
  text: {

    /* --- Навигация, кнопки, бейджи ------------------------------------ */
    'Главная':          'Home',
    'Обо мне':          'About',
    'Работы':           'Work',
    'Контакты':         'Contacts',
    'Стек':             'Stack',
    'Соцсети':          'Socials',
    'Автор':            'Author',
    'Проекты':          'Projects',
    'Компетенции':      'What I do',
    'Мой взгляд':       'My view',
    'В процессе':       'In progress',
    'Подробнее':        'Read more',
    'Редизайн':         'Redesign',
    'Читать статью':    'Read the article',
    'Смотреть работы':  'View work',
    'Смотреть все':     'View all',
    'Смотреть CV':      'View CV',
    'Скачать PDF':      'Download PDF',
    'На главную':       'Go home',
    'Другие работы':    'Other work',
    'Наверх':           'Back to top',

    /* --- Первый экран и блок «Автор» ---------------------------------- */
    'Создаю цифровые продукты, в которых дизайн и код работают вместе.':
      'I build digital products where design and code work as one.',
    'Привет! Меня зовут Иван': 'Hi! My name is Ivan',
    'Я дизайнер и разработчик из Гродно. Более 6 лет занимаюсь дизайном и 4 года развиваюсь в программировании. Создаю сайты, интерфейсы и цифровые продукты, соединяя дизайн и код.':
      'I am a designer and developer based in Grodno. I have been doing design for over six years and programming for four. I build websites, interfaces and digital products, bringing design and code together.',

    /* --- Страница «Обо мне» ------------------------------------------- */
    'Я дизайнер и разработчик — и обе эти стороны развиваю одинаково.':
      'I am a designer and a developer, and I give both sides equal weight.',
    'совмещаю оба направления': 'work in both at once',

    '14 лет - 2020': 'Age 14 — 2020',
    '15 лет - 2021': 'Age 15 — 2021',
    '16 лет - 2022': 'Age 16 — 2022',
    '17 лет - 2023': 'Age 17 — 2023',
    '18 лет - 2024': 'Age 18 — 2024',
    '19 лет - 2025': 'Age 19 — 2025',
    '20 лет - 2026': 'Age 20 — 2026',

    'Тут всё и началось. Наткнулся на видео Андрея Гаврилова про основы веб-дизайна, и впервые открыл Figma, как сейчас помню свои эмоции от первого макета)':
      'This is where it all started. I came across a video by Andrey Gavrilov about the basics of web design and opened Figma for the first time. I still remember how it felt to finish that first mockup)',
    'Реально сильно втягиваюсь в дизайн, смотрю курсы, пробую новое, первые лендинги, проекты, первые «вау, получилось»':
      'Design pulled me in for real. Courses, experiments, my first landing pages and projects, and the first few “wow, it actually worked” moments.',
    'Год, когда я по-настоящему влюбился в визуал. Графический дизайн, брендинг, UI/UX — хотелось попробовать всё сразу.':
      'The year I truly fell for the visual side. Graphic design, branding, UI/UX — I wanted to try everything at once.',
    'Понял, что дизайна мне мало. Поступил на программиста — и это открыло для меня совсем другую сторону работы. Уже тогда я выбрал для себя свое дело)':
      'I realised design alone was not enough. I enrolled to study programming, and it opened up a completely different side of the work. That was when I knew what I wanted to do)',
    'Веб-разработка, WordPress, C#. Учусь применять то, что изучаю, и собирать проекты не только красивыми, но и живыми, с буквально педантичным вниманием к деталям.':
      'Web development, WordPress, C#. I learned to apply what I studied and to build projects that are not only good-looking but alive, with an almost pedantic eye for detail.',
    'Коммерческие, социальные, дизайнерские проекты, конкурсы, серьёзные заказы. Год, когда я понял, что хочу заниматься этим всю жизнь)':
      'Commercial work, social campaigns, design projects, competitions, serious clients. The year I understood I want to do this for life)',
    'Вот я здесь. Свой личный сайт, любимое дело и куча идей впереди. Путь только начинается!':
      'And here I am. My own site, work I love and a pile of ideas ahead. The journey is only starting!',

    /* --- Страница «Работы» -------------------------------------------- */
    'своими руками': 'with my own hands',
    'Каждый проект — это история о том, как идея превращается в результат.':
      'Every project is a story of an idea turning into a result.',
    'Сайты':        'Websites',
    'Брендинг':     'Branding',
    'Графика':      'Graphics',
    'Лаборатория':  'Lab',
    'Код и эксперименты': 'Code and experiments',
    'Мои личные проекты в разработке. Игры, программы и эксперименты с технологиями — всё, что я создаю для практики и удовольствия.':
      'My personal development projects. Games, tools and experiments with technology — everything I build for practice and for fun.',

    /* --- Избранные работы (главная) ------------------------------------ */
    'Избранные работы': 'Selected work',
    'Проекты, в которых я соединяю дизайн, разработку и решение реальных задач.':
      'Projects where I combine design, development and real business problems.',

    /* --- Карточки проектов --------------------------------------------- */
    'Веб-дизайн · CMS · SEO · Разработка':        'Web design · CMS · SEO · Development',
    'Веб-дизайн · WordPress · UI/UX · CMS':       'Web design · WordPress · UI/UX · CMS',
    'Веб-дизайн · E-commerce · C# · UI/UX':       'Web design · E-commerce · C# · UI/UX',
    'Figma · Адаптив · UI/UX · Компоненты':       'Figma · Responsive · UI/UX · Components',
    'Коммерческий проект · Клининг':              'Commercial project · Cleaning services',
    'Конкурсный проект · 1 место · Figma':        'Competition entry · 1st place · Figma',
    'UI/UX · Figma · Редизайн':                   'UI/UX · Figma · Redesign',
    'Графический дизайн · Иллюстрация':           'Graphic design · Illustration',
    'Графический дизайн · Социальная кампания':   'Graphic design · Social campaign',
    'Иллюстрация · Полиграфия · Социальный проект': 'Illustration · Print · Social project',
    'Графический дизайн · Полиграфия · Брендинг': 'Graphic design · Print · Branding',
    'Брендинг · Логотип · Полиграфия · Реклама':  'Branding · Logo · Print · Advertising',
    'Графический дизайн · Полиграфия · 1 место':  'Graphic design · Print · 1st place',
    'Photoshop · Постер · Графический дизайн':    'Photoshop · Poster · Graphic design',
    'Постер · Photoshop · Реклама':               'Poster · Photoshop · Advertising',
    'Личный проект · Творчество':                 'Personal project · Craft',
    'GameDev · SFML library · С++ · 2D':          'GameDev · SFML library · C++ · 2D',

    'VibeX - Event-агентство': 'VibeX — Event agency',
    'Сайт на тему ВОВ':        'WWII memorial website',
    'SSPS - помощь':           'SSPS — support service',
    'УВД ГРОДНО':              'GRODNO POLICE',
    'ЛИДСКАЯ МУКА':            'LIDA FLOUR',
    'Jenniet - визитка':       'Jenniet — business card',
    'Vittur - перевозки':      'Vittur — transport',
    'КиберВзгляд':             'CyberView',
    'I origins баннеры':       'I Origins banners',
    'Мои фотошоп-арты':        'My Photoshop art',

    'Сайт итальянского агентства недвижимости, разработанный под ключ: от структуры и дизайна до CMS. Настроил удобное управление объектами для клиентов агентства, проработал навигацию и подачу недвижимости. Сейчас веду работу над редизайном главной страницы.':
      'A turnkey website for an Italian real estate agency: structure, design and CMS. I set up a listing manager the agency staff can actually use, and worked through the navigation and the way properties are presented. I am currently redesigning the home page.',
    'Сайт для компании, которая занимается организацией мероприятий. Разработал структуру, дизайн и собрал всё на WordPress — с удобным управлением контентом, галереей событий и формой заявки для клиентов.':
      'A website for an event agency. I designed the structure and visuals and built it all on WordPress, with easy content management, an event gallery and an enquiry form.',
    'Интернет-магазин азиатских сладостей для блогерши Jennie.t с аудиторией 500 000 подписчиков. Сделал сайт на WordPress: каталог, корзина, заказы. Проект работал, но был закрыт по личным причинам владелицы — опыт с большой аудиторией остался.':
      'An Asian sweets shop for Jennie.t, a blogger with 500,000 followers. Built on WordPress: catalogue, cart and orders. The shop ran for a while and was closed for personal reasons on the owner’s side — the experience of working at that audience size stayed with me.',
    'Полноценный e-commerce проект на C#: многостраничный сайт с регистрацией, личным кабинетом, корзиной и системой оплаты. Реализовал блог, статьи, скидочную систему и фильтрацию товаров. Внутри — 56 скриптов, отвечающих за логику и другие сценарии.':
      'A full e-commerce project in C#: a multi-page site with sign-up, user accounts, a cart and payments. I built the blog, articles, a discount system and product filtering. Fifty-six scripts under the hood handle the logic and the rest of the flows.',
    'Концептуальный дизайн портфолио студии: от брендинга до готового сайта. 9 страниц, светлая и тёмная версии, адаптивность от 1440 до 2560px. Собрал UI Kit, настроил компоненты и стили — всё для того, чтобы проект масштабировался и выглядел целостно.':
      'A concept portfolio for a studio, from branding through to the finished site. Nine pages, light and dark versions, responsive from 1440 to 2560px. I assembled a UI kit and set up components and styles so the project could scale and stay coherent.',
    'Макет клининговой компании в Гродно, где всё подчинено одной цели — быстро и понятно объяснить услугу а затем получить заявку. Проработал блоки услуг, тарифы, процесс работы и доверие клиентов.':
      'A design for a cleaning company in Grodno, with everything pointed at one goal: explain the service quickly and clearly, then get the enquiry. I worked through the service blocks, pricing, the process and the trust-building sections.',
    'Проект, посвящённый Великой Отечественной войне, созданный для конкурса. Продумал структуру, визуал и подачу исторического материала: хронология событий, карта боевой славы. Работа заняла первое место.':
      'A competition project dedicated to the Second World War. I worked out the structure, the visuals and the way the historical material is presented: a timeline of events and a map of battle sites. The entry took first place.',
    'Редизайн сайта итальянского агентства недвижимости в Figma. Обновляю структуру, улучшаю навигацию и продумываю подачу объектов — всё на компонентах и автолейаутах. Цель — сделать сайт понятнее и удобнее для клиентов агентства.':
      'A redesign of the Italian real estate agency site, done in Figma. I am reworking the structure, improving the navigation and rethinking how listings are presented — all on components and auto layout. The goal is a site that is clearer and easier for the agency’s clients.',
    'Участвовал в создании сайта психологической помощи: продумал стиль и дизайн главной страницы, отрисовал иконки, иллюстрации и другую графику. Дальше команда продолжила работу, опираясь на этот визуальный стиль.':
      'I contributed to a mental health support website: I shaped the visual style and designed the home page, and drew the icons, illustrations and other graphics. The team carried on from there, building on that style.',
    'Проект с УВД Гродно: разработал баннер против кибер преступности, который сейчас транслируется на кассах самообслуживания по городу. За работу получил грамоту от УВД, а о проекте даже писали статью в новостях.':
      'A project with the Grodno police: I designed an anti-cybercrime banner that now runs on self-checkout terminals across the city. The work earned a certificate of merit from the department, and the project was covered in the news.',
    'Сделал около 30 вариантов иллюстраций и прошёл большой цикл правок, чтобы получить дизайн наклейки против кибер преступности. Теперь она на продукции «Лидской муки» по всей Гродненской области.':
      'Around thirty illustration options and a long cycle of revisions went into this anti-cybercrime sticker design. It now ships on Lida Flour products across the Grodno region.',
    'Визитка для блогерши Jennie.t с аудиторией 500 000 подписчиков, созданная параллельно с её сайтом. Продумал дизайн в едином стиле с брендом азиатских сладостей — аккуратно, лаконично и со вкусом.':
      'A business card for Jennie.t, a blogger with 500,000 followers, made alongside her website. I kept it in line with the Asian sweets brand — clean, restrained and tasteful.',
    'Логотип, фирменный стиль, визитки, рекламные плашки и брендирование автобусов для компании пассажирских перевозок из Бреста. Собрал всё в единую визуальную систему, которая работает и в печати, и на транспорте.':
      'Logo, visual identity, business cards, ad blocks and bus livery for a passenger transport company in Brest. I pulled it all into one system that holds up both in print and on vehicles.',
    'Брошюра из 6 частей, созданная для международной онлайн-конференции «Интернет XXI века: технологии, которые меняют реальность». Проект посвящён профилактике кибер преступности и занял первое место.':
      'A six-part brochure for the international online conference “The Internet of the 21st Century: Technologies That Change Reality”. The project is about cybercrime prevention and took first place.',
    'Серия баннеров по мотивам одного из моих любимых фильмов — I Origins. На тот момент увлекался фотошоп-артом и сделал собственный постер. Проект для души, который прокачал работу с композицией и цветом.':
      'A series of banners inspired by one of my favourite films, I Origins. I was deep into Photoshop art at the time and made my own poster. A passion project that sharpened my composition and colour work.',
    'Рекламный постер для тренажёрного зала AllStarsGym, сделанный в период увлечения фотошоп-артом. Работа висела в зале и публиковалась в Instagram — помогла прокачать работу с композицией и типографикой.':
      'An advertising poster for the AllStarsGym fitness club, made during my Photoshop art period. It hung in the gym and ran on Instagram, and it pushed my composition and typography forward.',
    'Сборник моих работ в фотошоп-арте: постеры, баннеры и эксперименты. Всё делалось для души и практики — именно эти проекты прокачали мою работу с тенью, композицией, цветом, типографикой и другим.':
      'A collection of my Photoshop art: posters, banners and experiments. All of it made for the love of it and for practice — these are the projects that taught me shadow, composition, colour and type.',
    'JigSaw — 3D-головоломка, где игрок управляет блоком на арене. В игре 8 уровней, магазин скинов, система монет, плавные анимации и другие 20 механик. Проект разработан на Unity с использованием C# и URP.':
      'JigSaw is a 3D puzzle game where you control a block on an arena. Eight levels, a skin shop, a coin system, smooth animation and twenty more mechanics. Built in Unity with C# and URP.',
    'Neverland — это 2D-инди аркада с 5 уровнями, где игрок ищет свою вторую половинку в затерянном городе и преодолевает сложные испытания. Разработал на SFML с использованием C++ в рамках курсового проекта.':
      'Neverland is a 2D indie arcade game across five levels, where the player searches a lost city for their other half and works through hard challenges. Built with SFML and C++ as a coursework project.',

    /* --- Блок «Дизайн» -------------------------------------------------- */
    'Я помешан на дизайне': 'I am obsessed with design',
    'И смотрю на весь мир через призму дизайна.': 'And I see the whole world through it.',
    'обладаю огромным':        'have a wide',
    'точки зрения дизайна.':   'a designer’s eye.',
    'как можно сделать лучше.':'how it could be better.',
    'чтобы быть удобной.':     'to be easy to use.',

    'Понимание разработки': 'Development literacy',
    'Доступный дизайн':     'Accessible design',
    'Нейросети':            'AI tools',
    'Дизайн системы':       'Design systems',
    'Адаптивный дизайн':    'Responsive design',
    'Тестирование':         'Testing',
    'Исследования':         'Research',
    'Анимация':             'Animation',
    'Мобильный дизайн':     'Mobile design',
    'Типографика':          'Typography',
    'Работа с цветами':     'Colour work',
    'Иконки':               'Icons',

    /* --- Блок «Как я работаю» ------------------------------------------ */
    'Как я работаю': 'How I work',
    '01. Бриф и исследование — 5%':    '01. Brief and research — 5%',
    '02. Прототип и структура — 15%':  '02. Wireframe and structure — 15%',
    '03. Дизайн-концепция — 35%':      '03. Design concept — 35%',
    '04. Адаптив и UI Kit — 50%':      '04. Responsive and UI kit — 50%',
    '05. Разработка — 90%':            '05. Development — 90%',
    '06. Тестирование и запуск — 100%':'06. Testing and launch — 100%',
    'Изучаю задачу, аудиторию и конкурентов. Определяю цели проекта и формирую чёткое техническое задание.':
      'I study the problem, the audience and the competition, set the project goals and write a clear brief.',
    'Собираю логику будущего сайта: навигацию, блоки и пользовательские сценарии. Создаю wireframe.':
      'I lay out the logic of the site: navigation, blocks and user journeys, and build the wireframe.',
    'Разрабатываю визуальный стиль, подбираю типографику, цвета и графику. Собираю ключевые экраны.':
      'I develop the visual style, choose type, colour and graphics, and assemble the key screens.',
    'Прорабатываю все разрешения и состояния. Собираю компонентную библиотеку для масштабирования.':
      'I work through every breakpoint and state, and build a component library so the project can scale.',
    'Переношу дизайн в код: вёрстка, анимации, интерактив. Настраиваю CMS, если нужно.':
      'I move the design into code: markup, animation, interaction. CMS setup where the project needs it.',
    'Проверяю на всех устройствах, исправляю детали и запускаю проект. Передаю файлы и документацию.':
      'I test on every device, fix the details and launch. Files and documentation are handed over.',

    /* --- Блок «Что я умею» --------------------------------------------- */
    'Что я умею': 'What I can do',
    'Сайты, UI/UX, фронтенд-разработка, брендинг, CMS системы.':
      'Websites, UI/UX, front-end development, branding and CMS.',
    'Веб-сайты':  'Websites',
    'Креатив':    'Creative',
    'с заботой о пользователе.':   'built around the person using it.',
    'логику':                      'logic',
    'пользовательский опыт':       'user experience',
    'С вниманием к мелким деталям)':'With an eye on the small things)',
    'гибкой структурой':           'a flexible structure',
    'выделяют бренд':              'set a brand apart',
    'Технологий и языков много':   'There are a lot of tools and languages',

    /* --- Пилюли стека --------------------------------------------------- */
    'ООП':          'OOP',
    'Вёрстка':      'Markup',
    'SEO - основы': 'SEO basics',

    /* --- Контакты и подвал ---------------------------------------------- */
    'Беларусь - Гродно':  'Belarus — Grodno',
    'Беларусь, Гродно':   'Belarus, Grodno',
    'Контактный номер:':  'Phone:',
    'Режим работы сайта: круглосуточно': 'The site is up around the clock',

    /* --- Резюме ---------------------------------------------------------- */
    'Нестеренко Иван Андреевич':  'Ivan Nesterenko',
    'Дизайнер и веб-разработчик': 'Designer and web developer',
    'О себе':          'Profile',
    'Опыт работы':     'Experience',
    'Навыки':          'Skills',
    'Достижения':      'Achievements',
    'Образование':     'Education',
    'Дизайн':          'Design',
    'Разработка':      'Development',
    'CMS и продвижение': 'CMS and marketing',
    'Инструменты':     'Tools',
    'Языки':           'Languages',
    'Веб-дизайн':      'Web design',
    'Самообразование': 'Self-directed study',
    '2023 — сейчас':   '2023 — present',
    '2020 — сейчас':   '2020 — present',
    'Грамота УВД':     'Certificate of merit',
    '1 место':         '1st place',
    'Тираж':           'In production',

    'Работал с коммерческими заказчиками, социальными кампаниями и конкурсными проектами. Есть опыт работы с аудиторией в сотни тысяч человек и с государственными организациями.':
      'I have worked with commercial clients, social campaigns and competition projects, with audiences in the hundreds of thousands and with government bodies.',
    'Веб-дизайнер и разработчик, частная практика': 'Web designer and developer, freelance',
    'Графический дизайнер, частная практика':       'Graphic designer, freelance',
    'Разработка сайтов под ключ: исследование задачи, структура, дизайн, вёрстка, настройка CMS и передача клиенту. Среди проектов — сайт итальянского агентства недвижимости Merra Immobiliare, сайт event-агентства VibeX на WordPress, интернет-магазин Jenniet Home и e-commerce проект BentoSkin на C#.':
      'End-to-end website delivery: research, structure, design, markup, CMS setup and handover. Projects include Merra Immobiliare for an Italian real estate agency, the VibeX event agency site on WordPress, the Jenniet Home shop and the BentoSkin e-commerce project in C#.',
    'Брендинг, полиграфия, иллюстрация и рекламные материалы. Фирменный стиль и брендирование транспорта для перевозчика Vittur, визитка для блогера с аудиторией 500 000 подписчиков, социальная реклама для УВД Гродно и наклейка для продукции «Лидской муки».':
      'Branding, print, illustration and advertising. Visual identity and vehicle livery for the transport company Vittur, a business card for a blogger with 500,000 followers, a social campaign for the Grodno police and a sticker design for Lida Flour products.',
    'Figma, Photoshop, Illustrator, UI/UX, дизайн-системы и UI Kit, прототипирование, типографика, работа с цветом, брендинг':
      'Figma, Photoshop, Illustrator, UI/UX, design systems and UI kits, prototyping, typography, colour, branding',
    'HTML, CSS, Grid и Flexbox, адаптивность от 390 до 2560px, анимации и интерактив, доступность, кроссбраузерность':
      'HTML, CSS, Grid and Flexbox, responsive from 390 to 2560px, animation and interaction, accessibility, cross-browser support',
    'JavaScript, C#, C++, Python, SQL, ООП, Unity': 'JavaScript, C#, C++, Python, SQL, OOP, Unity',
    'WordPress, основы SEO, настройка управления контентом':
      'WordPress, SEO fundamentals, content management setup',
    'Git и GitHub, DevTools, нейросети в рабочем процессе':
      'Git and GitHub, DevTools, AI tools in the workflow',
    'Русский — родной, английский — B1': 'Russian — native, English — B1',
    'Баннер против киберпреступности для УВД Гродно транслируется на кассах самообслуживания по городу. За работу получил грамоту, о проекте вышла статья в новостях.':
      'An anti-cybercrime banner for the Grodno police, running on self-checkout terminals across the city. The work earned a certificate of merit and was covered in the news.',
    'Брошюра «КиберВзгляд» для международной онлайн-конференции «Интернет XXI века: технологии, которые меняют реальность».':
      'The “CyberView” brochure for the international online conference “The Internet of the 21st Century: Technologies That Change Reality”.',
    'Конкурсный проект сайта, посвящённого Великой Отечественной войне: структура, визуал и подача исторического материала.':
      'A competition website dedicated to the Second World War: structure, visuals and the presentation of historical material.',
    'Дизайн наклейки против киберпреступности выпускается на продукции «Лидской муки» по всей Гродненской области.':
      'An anti-cybercrime sticker design in production on Lida Flour products across the Grodno region.',
    'Учебное заведение, специальность': 'Institution and qualification',
    'Гродненский Государственный Политехнический колледж - техник программист':
      'Grodno State Polytechnic College — software technician',
    'Курсы и практика по веб-дизайну, UI/UX, вёрстке и разработке. Личные проекты как способ разобраться в теме на практике: 3D-головоломка JigSaw на Unity и C#, 2D-аркада Neverland на C++ и SFML.':
      'Courses and hands-on practice in web design, UI/UX, markup and development. Personal projects as a way to learn by building: the JigSaw 3D puzzle in Unity and C#, and the Neverland 2D arcade in C++ and SFML.',

    /* --- Страница кейса (пока заглушка) --------------------------------- */
    'Сайт недвижимости': 'Real estate website',
    'итальянского агентства недвижимости': 'an Italian real estate agency',
    'редизайном': 'a redesign',
    'Что я сделал': 'What I did',
    'Моя задача':   'The brief',
    'Процесс':      'Process',
    'Результат':    'Outcome',
    'Каждый проект проходит через чёткие этапы. Так я контролирую качество, соблюдаю сроки и держу клиента в курсе на каждом шаге.':
      'Every project moves through clear stages. That is how I keep quality up, hit deadlines and keep the client in the loop at every step.',
    'Каждый проект проходит через чёткие этапы. Так я контролирую качество, соблюдаю сроки и держу клиента.':
      'Every project moves through clear stages. That is how I keep quality up, hit deadlines and keep the client.',
    'Каждый проект проходит через чёткие этапы. Так я контролирую качество, соблюдаю сроки и держу клиента в курсе на каждом шаге. Каждый проект проходит через чёткие этапы.':
      'Every project moves through clear stages. That is how I keep quality up, hit deadlines and keep the client in the loop at every step. Every project moves through clear stages.',
    'Так я контролирую качество, соблюдаю сроки и держу клиента в курсе на каждом шаге. Каждый проект проходит через чёткие этапы. Так я контролирую качество, соблюдаю сроки и держу клиента в курсе на каждом шаге.':
      'That is how I keep quality up, hit deadlines and keep the client in the loop at every step. Every project moves through clear stages. That is how I keep quality up, hit deadlines and keep the client in the loop at every step.',
    'Каждый проект проходит через чёткие этапы. Так я контролирую качество, соблюдаю сроки и держу клиента в курсе на каждом шаге. Каждый проект проходит через чёткие этапы. Так я контролирую качество, соблюдаю сроки и держу клиента в курсе на каждом шаге. Каждый проект проходит через чёткие этапы. Так я контролирую качество, соблюдаю сроки и держу клиента в курсе на каждом шаге. Каждый проект проходит через чёткие этапы.':
      'Every project moves through clear stages. That is how I keep quality up, hit deadlines and keep the client in the loop at every step. Every project moves through clear stages. That is how I keep quality up, hit deadlines and keep the client in the loop at every step. Every project moves through clear stages.',

    /* --- Страницы ошибок ------------------------------------------------ */
    'Ошибка 404':        'Error 404',
    'Такой страницы нет':'This page does not exist',
    'Возможно, в адресе опечатка или страницу переименовали. Начните с главной — оттуда видно всё остальное.':
      'The address may have a typo, or the page may have been renamed. Start from the home page — everything else is reachable from there.',
    'Этот кейс ещё в разработке': 'This case study is still in progress',
    'Кейс ещё не собран — но это временно. Заглядывай позже, я как раз дописываю детали и собираю скриншоты.':
      'The case study is not written up yet, but that is temporary. Check back soon — I am filling in the details and gathering screenshots.',

    /* --- Кейсы ------------------------------------------------------- */
    'Кейс с редизайном': 'Redesign case study',
    'Клиент — агентство недвижимости из Италии — обратился с запросом на создание сайта для продажи и аренды жилья. Нужен был ресурс, который:':
      'The client — a real estate agency in Italy — needed a website for selling and renting property. What it had to do:',
    'понятно и красиво показывает объекты недвижимости':
      'present properties clearly and attractively',
    'позволяет сотрудникам агентства самостоятельно добавлять и редактировать объекты':
      'let agency staff add and edit listings themselves',
    'легко находится в поиске по запросам, связанным с недвижимостью в Италии':
      'rank for searches related to real estate in Italy',
    'работает на итальянскую аудиторию и вызывает доверие':
      'speak to an Italian audience and inspire trust',
    'Отдельный запрос — удобная админ-панель, чтобы контентом занимались сотрудники, а не разработчик.':
      'One more requirement: an admin panel simple enough for the staff to run the content without a developer.',
    'Сайт работает до сих пор и приносит клиентов агентству. Что получилось:':
      'The site is still running and still brings the agency clients. What came out of it:',
    'агентство получило рабочий сайт с каталогом недвижимости и удобной админкой':
      'the agency got a working site with a property catalogue and a usable admin panel',
    'сотрудники самостоятельно управляют объектами без разработчика':
      'staff manage listings on their own, without a developer',
    'сайт оптимизирован под поиск и находит итальянскую аудиторию':
      'the site is optimised for search and reaches an Italian audience',
    'структура и подача объектов вызывают доверие у клиентов':
      'the structure and presentation of properties inspire trust in clients',
    'Бриф и исследование': 'Brief and research',
    'Изучил конкурентов на итальянском рынке недвижимости: как устроены каталоги, какие фильтры используют, как подают фотографии и описания. Собрал структуру сайта: главная, каталог, карточка объекта, о компании, контакты.':
      'I studied competitors on the Italian real estate market: how their catalogues are built, which filters they use, how they present photos and descriptions. From that I assembled the site structure: home, catalogue, property page, about, contacts.',
    'Прототип и структура': 'Prototype and structure',
    'Собрал логику будущего сайта: навигацию, блоки и пользовательские сценарии. Создал wireframe с акцентом на каталог и карточки объектов — именно через них идёт весь путь клиента.':
      'I mapped out the logic of the future site: navigation, blocks and user journeys. Built a wireframe centred on the catalogue and the property cards — that is where the whole client path runs.',
    'Дизайн-концепция': 'Design concept',
    'Разработал визуальный стиль: чистый, спокойный, с акцентом на фотографии недвижимости. Подобрал типографику и цвета. Собрал ключевые экраны — главную, каталог и карточку объекта.':
      'I developed the visual style: clean, calm, built around the property photography. Chose the typography and colours, assembled the key screens — home, catalogue and property page.',
    'Адаптив и UI Kit': 'Responsive design and UI kit',
    'Проработал все разрешения и состояния. Собрал компонентную библиотеку для масштабирования: карточки, фильтры, формы, навигацию — чтобы новые страницы собирались из готовых деталей.':
      'I worked through every breakpoint and state. Built a component library the project can grow on: cards, filters, forms, navigation — so new pages come together from ready parts.',
    'Собрал сайт на WordPress с кастомной темой. Настроил управление объектами через админку: добавление, редактирование, загрузка фото, статусы «продано» и «в продаже». Подключил SEO-плагины и настроил мета-теги для каждой страницы.':
      'I built the site on WordPress with a custom theme. Set up listings management through the admin panel: adding, editing, photo upload, statuses ("sold" and "for sale"). Connected SEO plugins and configured meta tags for every page.',
    'Тестирование и запуск': 'Testing and launch',
    'Проверил сайт на всех устройствах, исправил детали и запустил проект. Передал клиенту файлы и документацию по управлению контентом.':
      'I tested the site across devices, fixed the details and launched the project. Handed the client the files and the documentation for managing content.',
    'Сайт event-агентства': 'Event agency website',
    'Event-агентству нужен был сайт, который продаёт не услугу, а атмосферу. Люди выбирают организатора глазами: смотрят, как выглядели прошлые мероприятия, и только потом читают. Значит, сайт должен был:':
      'An event agency sells atmosphere, not a service. People choose an organiser with their eyes: first they look at how previous events turned out, and only then do they read. So the site had to:',
    'показывать прошедшие мероприятия так, чтобы их хотелось рассматривать':
      'show past events in a way that makes you want to keep looking',
    'коротко и без канцелярита объяснять, что агентство умеет':
      'explain what the agency does, briefly and without officialese',
    'приводить к форме заявки с любой страницы': 'lead to the enquiry form from any page',
    'наполняться силами самого агентства, без разработчика':
      'be filled in by the agency itself, without a developer',
    'Отдельная сложность: контент у агентства появляется после каждого мероприятия, то есть галерея должна расти постоянно и не разваливаться от новых фотографий.':
      'One extra difficulty: the agency gets new content after every event, so the gallery has to keep growing without falling apart under new photos.',
    'Агентство получило сайт, который можно вести самостоятельно. Что получилось:':
      'The agency got a site it can run on its own. What came out of it:',
    'галерея мероприятий работает как главный аргумент и пополняется без разработчика':
      'the event gallery works as the main argument and grows without a developer',
    'форма заявки собирает обращения в одном месте':
      'the enquiry form collects requests in one place',
    'структура выдерживает рост: новые события не ломают сетку':
      'the structure holds up as content grows: new events do not break the grid',
    'дизайн и вёрстка сделаны одним человеком, поэтому макет и код не разошлись':
      'design and markup were done by one person, so the mockup and the code never drifted apart',
    'Для меня это был первый полный цикл — от брифа до запуска, — пройденный целиком в рамках учебной практики.':
      'For me this was the first full cycle — from brief to launch — completed end to end during a college placement.',
    'Разобрал, как выбирают организатора мероприятий: смотрят портфолио, ищут похожий формат, оценивают масштаб. Посмотрел сайты агентств и увидел общую беду — много текста и мало доказательств. Решил строить сайт вокруг галереи.':
      'I looked at how people choose an event organiser: they browse the portfolio, look for a similar format, judge the scale. I went through agency websites and saw the same problem everywhere — plenty of text and very little proof. So I built the site around the gallery.',
    'Собрал структуру: главная с сильным первым экраном, услуги, галерея мероприятий, о команде, контакты с формой. Продумал сценарий: человек попадает на сайт, листает события, узнаёт формат и оставляет заявку — без лишних переходов.':
      'I assembled the structure: a home page with a strong first screen, services, an event gallery, the team, contacts with a form. The journey is simple: a visitor lands, scrolls through events, understands the format and leaves an enquiry — with no detours.',
    'Сделал визуал ярким и живым, но так, чтобы он не спорил с фотографиями. Крупные обложки событий, воздух между блоками, акцентный цвет только на кнопках и активных элементах.':
      'I made the visuals bright and alive, but not loud enough to fight the photography. Large event covers, air between blocks, the accent colour only on buttons and active elements.',
    'Проработал разрешения от телефона до большого монитора. Собрал компоненты: карточку мероприятия, блок услуги, форму, шапку и подвал — чтобы новые страницы собирались быстро.':
      'I worked through the range from phone to large monitor. Built the components: the event card, the service block, the form, the header and footer — so new pages come together quickly.',
    'Собрал сайт на WordPress. Галерея мероприятий сделана отдельным типом записей: агентство добавляет событие, загружает фотографии, и карточка сама встаёт в сетку. Форма заявки отправляет письмо и сохраняет обращение в админке.':
      'I built the site on WordPress. The event gallery is a separate post type: the agency adds an event, uploads the photos, and the card drops into the grid by itself. The enquiry form sends an email and stores the request in the admin panel.',
    'Проверил вёрстку на устройствах, прогнал формы, исправил мелочи в отступах и состояниях. Показал, как добавлять события и менять тексты.':
      'I checked the markup across devices, ran the forms, fixed small things in spacing and states. Then showed the team how to add events and edit the copy.',
    'Интернет-магазин': 'Online store',
    'Визитка Jenniet': 'Jenniet business card',
    'Блогер с большой аудиторией хотела превратить интерес подписчиков в магазин. Задача была не только технической: трафик приходит из соцсетей, с телефона, и уходит за секунды. Сайт должен был:':
      'A blogger with a large audience wanted to turn her followers’ interest into a shop. The task was not only technical: the traffic comes from social media, on a phone, and leaves within seconds. The site had to:',
    'открываться с телефона и сразу показывать товар':
      'open on a phone and show the product immediately',
    'вести от карточки до оформленного заказа без лишних шагов':
      'lead from the product card to a placed order with no extra steps',
    'выглядеть так же, как её блог, — иначе переход по ссылке кажется ошибкой':
      'look like her blog — otherwise the link feels like a mistake',
    'работать на подростковую аудиторию, у которой нет терпения к сложным формам':
      'work for a teenage audience with no patience for complicated forms',
    'Ради проекта владелица ездила в Минск и оформляла документы, так что к запуску магазин готовился всерьёз, а не как эксперимент.':
      'The owner travelled to Minsk for this project and handled the paperwork, so the shop was being prepared for launch in earnest, not as an experiment.',
    'Магазин был собран полностью: каталог, корзина, заказы, админка. Что я вынес из проекта:':
      'The shop was built in full: catalogue, cart, orders, admin panel. What I took away from it:',
    'опыт работы с аудиторией в 500 000 человек и с реальными ожиданиями от неё':
      'experience of working with an audience of 500,000 people and their real expectations',
    'полный цикл e-commerce на WordPress — от карточки товара до оформленного заказа':
      'a full e-commerce cycle on WordPress — from product card to placed order',
    'проектирование от мобильного, а не от десктопа':
      'designing from mobile up rather than from desktop down',
    'умение подстроить визуальный язык сайта под уже существующий образ бренда':
      'the ability to fit a site’s visual language to a brand image that already exists',
    'Проект закрылся по личным причинам владелицы. Сам магазин не дожил до долгой жизни, а опыт остался — и это первый случай, когда я делал сайт под настоящую большую аудиторию.':
      'The project closed for personal reasons on the owner’s side. The shop itself did not get a long life, but the experience stayed — and it was the first time I built a site for a genuinely large audience.',
    'Разобрал аудиторию: подростки, приходят из соцсетей, покупают импульсивно и почти всегда с телефона. Посмотрел, как устроены похожие магазины сладостей, и понял, что решает не каталог, а фотография товара и скорость оформления.':
      'I worked out the audience: teenagers, arriving from social media, buying on impulse and almost always from a phone. I looked at similar sweet shops and realised that what decides the sale is not the catalogue but the product photo and the speed of checkout.',
    'Собрал структуру: главная с подборками, каталог с фильтрами по вкусам и категориям, карточка товара, корзина, оформление. Сценарий выстроил так, чтобы от ссылки в блоге до оплаченного заказа было минимум экранов.':
      'I built the structure: a home page with curated selections, a catalogue with filters by flavour and category, the product page, the cart, checkout. The journey is arranged so that the path from a link in the blog to a paid order takes as few screens as possible.',
    'Сделал светлую розово-синюю палитру — под возраст аудитории и под стиль самого блога. Крупные карточки, много фотографий, дружелюбная типографика. Магазин должен был выглядеть как продолжение ленты, а не как чужой сайт.':
      'I chose a light pink and blue palette — for the age of the audience and for the style of the blog itself. Large cards, plenty of photography, friendly typography. The shop had to feel like a continuation of the feed, not somebody else’s website.',
    'Мобильная версия здесь главная, поэтому проектировал от телефона. Собрал компоненты: карточку товара, фильтры, корзину, состояния кнопок — и растянул систему до десктопа.':
      'Mobile is the main version here, so I designed from the phone up. Built the components: the product card, filters, the cart, button states — and stretched the system to desktop.',
    'Собрал магазин на WordPress: каталог, корзина, оформление заказа, управление товарами и остатками через админку. Владелица могла добавлять позиции сама.':
      'I built the shop on WordPress: catalogue, cart, checkout, product and stock management through the admin panel. The owner could add items herself.',
    'Прогнал полный путь заказа на телефоне и на компьютере, проверил формы и уведомления, передал доступы и показал, как вести каталог.':
      'I ran the full order path on a phone and on a computer, checked the forms and notifications, handed over the access and showed how to keep the catalogue up to date.',
    'E-commerce на C#': 'E-commerce in C#',
    'Здесь задача была обратная обычной: не собрать магазин на готовой CMS, а написать его логику руками. Нужно было сделать проект, в котором:':
      'Here the task was the reverse of the usual one: not to assemble a shop on a ready-made CMS, but to write its logic by hand. I had to build a project where:',
    'пользователь регистрируется, входит и имеет свой личный кабинет':
      'a user registers, signs in and has a personal account',
    'товары фильтруются по параметрам, а не просто лежат списком':
      'products are filtered by parameters rather than simply listed',
    'корзина и оформление заказа работают на серверной логике':
      'the cart and checkout run on server-side logic',
    'работают скидки, статьи и админская часть': 'discounts, articles and an admin side all work',
    'То есть весь магазин — от модели данных до интерфейса — надо было спроектировать и написать самому.':
      'In other words, the whole shop — from the data model to the interface — had to be designed and written by me.',
    'Получился работающий многостраничный магазин, написанный с нуля. Что дал проект:':
      'The result is a working multi-page shop written from scratch. What the project gave me:',
    'понимание, как e-commerce устроен изнутри, а не на уровне плагинов':
      'an understanding of how e-commerce works from the inside, not at the level of plugins',
    'практика проектирования данных: пользователи, товары, заказы и связи между ними':
      'practice in data design: users, products, orders and the relations between them',
    'опыт серверной логики на C# и ASP.NET': 'experience of server-side logic in C# and ASP.NET',
    'привычка разводить сценарии по ролям, а не сваливать всё в одну страницу':
      'the habit of separating journeys by role instead of piling everything onto one page',
    'После этого проекта я стал иначе рисовать макеты интернет-магазинов: заранее видно, какой экран во что превратится в коде.':
      'After this project I started drawing online store mockups differently: I can see in advance what each screen will turn into in code.',
    'Разобрал, из чего вообще состоит интернет-магазин на уровне логики: пользователи, товары, категории, корзина, заказы, скидки. Расписал сущности и связи между ними до того, как открыл редактор.':
      'I worked out what an online store actually consists of at the level of logic: users, products, categories, cart, orders, discounts. I wrote out the entities and the relations between them before opening the editor.',
    'Спроектировал карту страниц и пользовательские сценарии: гость, авторизованный покупатель, администратор. Каждый сценарий развёл по своим экранам, чтобы интерфейс не превратился в одну универсальную страницу с кучей условий.':
      'I designed the page map and the user journeys: guest, signed-in customer, administrator. Each journey got its own screens so the interface would not turn into one universal page full of conditions.',
    'Сделал визуал сдержанным: акцент на товаре, много воздуха, спокойная сетка. Для учебного проекта было важно, чтобы интерфейс не мешал читать логику работы.':
      'I kept the visuals restrained: the product in focus, plenty of air, a calm grid. For a study project it mattered that the interface did not get in the way of reading the logic.',
    'Собрал повторяющиеся элементы — карточку товара, фильтры, формы, таблицы заказов — и проработал состояния: пустая корзина, товар не найден, ошибка входа.':
      'I collected the recurring elements — the product card, filters, forms, order tables — and worked through the states: empty cart, product not found, sign-in error.',
    'Написал проект на C# под ASP.NET. Регистрация и личный кабинет, корзина и оформление, система оплаты, скидки, фильтрация и блок статей. Логика разложена примерно по 56 скриптам, каждый отвечает за свою часть.':
      'I wrote the project in C# on ASP.NET. Registration and the user account, cart and checkout, the payment system, discounts, filtering and the articles section. The logic is spread across roughly 56 scripts, each responsible for its own part.',
    'Проверил сценарии по кругу: регистрация, вход, добавление в корзину, оформление, скидка, ошибочные данные. Поправил места, где логика вела себя не так, как ожидал пользователь.':
      'I ran the journeys in circles: registration, sign-in, add to cart, checkout, discount, invalid input. Then fixed the places where the logic behaved differently from what a user would expect.',
    'Концепт студии': 'Studio concept',
    'Я хотел сделать не одну красивую страницу, а систему, из которой можно собрать сайт студии целиком. Требования поставил себе сам, и они были жёсткими:':
      'I did not want one beautiful page — I wanted a system a whole studio site could be built from. I set the requirements myself, and they were strict:',
    'девять страниц, связанных единой логикой, а не набор отдельных макетов':
      'nine pages tied together by one logic, not a set of separate mockups',
    'две темы — светлая и тёмная — на одних и тех же компонентах':
      'two themes — light and dark — on the same components',
    'адаптив от телефона до 2560px, без «поплывших» блоков на широких мониторах':
      'responsive from phone to 2560px, with no blocks falling apart on wide monitors',
    'UI Kit, по которому проект сможет продолжить другой человек':
      'a UI kit someone else could pick the project up from',
    'По сути это была проверка: смогу ли я удержать дизайн-систему такого размера в одной голове и в одном файле.':
      'Essentially it was a test: could I hold a design system of that size in one head and one file.',
    'Восемнадцать макетов, собранных на одной системе. Что вышло:':
      'Eighteen mockups built on a single system. What came out of it:',
    'девять страниц в двух темах, переключаемых без ручной перекраски':
      'nine pages in two themes, switching without any manual repainting',
    'адаптив от телефона до 2560px — на широких мониторах макет не разваливается':
      'responsive from phone to 2560px — the layout does not fall apart on wide monitors',
    'UI Kit, по которому проект можно передать другому дизайнеру или разработчику':
      'a UI kit the project can be handed to another designer or a developer with',
    'три месяца работы, ставшие для меня школой дизайн-систем':
      'three months of work that became my school of design systems',
    'Считаю этот проект самым сложным из всего, что делал в Figma. После него сборка любого следующего макета стала заметно быстрее — потому что я уже знал, с чего начинать систему.':
      'I consider this the hardest thing I have made in Figma. After it, putting together any next mockup got noticeably faster — because I already knew where a system starts.',
    'Определил, что студия должна о себе говорить и в каком порядке. Разобрал сайты студий и агентств: где у них теряется внимание, где перегружен первый экран, как показывают услуги и кейсы. Из этого собрал карту из девяти страниц.':
      'I decided what the studio should say about itself and in what order. I went through studio and agency websites: where attention gets lost, where the first screen is overloaded, how they show services and case studies. Out of that came a map of nine pages.',
    'Собрал навигацию и сценарии для каждой страницы: главная, услуги, кейсы, страница кейса, о студии, контакты и остальные. Сделал wireframe всех девяти — до единого пикселя визуала, чтобы структура держалась сама по себе.':
      'I built the navigation and the journeys for every page: home, services, work, case page, about, contacts and the rest. I wireframed all nine before a single pixel of visual design, so that the structure would hold up on its own.',
    'Разработал визуальный язык: сетку, типографическую шкалу, ритм отступов, работу с крупными заголовками и воздухом. Ключевые экраны собрал первыми, чтобы проверить стиль на сложном контенте, а не на пустой главной.':
      'I developed the visual language: the grid, the type scale, the rhythm of spacing, the handling of large headings and air. I built the key screens first, to test the style on difficult content rather than on an empty home page.',
    'Светлая и тёмная темы': 'Light and dark themes',
    'Развёл цвет на токены и построил вторую тему на тех же компонентах: не перекрашивал макеты вручную, а менял значения. Это и есть главная проверка системы — если тема переключается без разъехавшихся блоков, значит, структура выстроена правильно.':
      'I split colour into tokens and built the second theme on the same components: instead of repainting mockups by hand I changed values. That is the real test of a system — if the theme switches without blocks drifting apart, the structure is right.',
    'Проработал все разрешения до 2560px и состояния элементов: наведение, нажатие, фокус, ошибка, пустой экран. Собрал компонентную библиотеку — кнопки, карточки, поля, навигацию, модальные окна — на компонентах и автолейаутах.':
      'I worked through every breakpoint up to 2560px and every element state: hover, press, focus, error, empty screen. Then assembled the component library — buttons, cards, fields, navigation, modals — on components and auto layouts.',
    'Адаптив': 'Responsive',
    'Компоненты': 'Components',
    'Коммерческий макет': 'Commercial design',
    'У клининга короткий путь принятия решения: человек хочет понять, что именно уберут, сколько это стоит и как быстро приедут. Всё остальное на сайте — помеха. Задача была:':
      'Cleaning has a short decision path: the customer wants to know exactly what will be cleaned, what it costs and how soon someone arrives. Everything else on the site is in the way. So the task was to:',
    'уложить услуги в структуру, которую видно с одного экрана':
      'fit the services into a structure you can take in from one screen',
    'сделать цену и объём работ понятными без звонка':
      'make the price and the scope of work clear without a phone call',
    'привести к форме заявки с любого места страницы':
      'lead to the enquiry form from anywhere on the page',
    'остаться в фирменных цветах компании, а не придумывать бренд заново':
      'stay in the company’s brand colours rather than invent a new brand',
    'Компания уже работала и имела свою стилистику — её надо было сохранить, но собрать в современную подачу.':
      'The company was already trading and had its own visual style — it had to be preserved, but pulled together into a modern presentation.',
    'Получился макет, который решает ровно одну задачу — довести до заявки. Итог:':
      'The result is a design that solves exactly one problem — getting to the enquiry. The outcome:',
    'услуги и их состав читаются без звонка менеджеру':
      'services and their contents read without calling a manager',
    'бенто-сетка расставила приоритеты: главное крупнее, дополнительное мельче':
      'the bento grid set the priorities: the important is larger, the secondary smaller',
    'фирменные цвета сохранены, подача стала современнее':
      'the brand colours are preserved, the presentation is more modern',
    'макет собран на компонентах и готов к передаче в вёрстку':
      'the mockup is built on components and is ready to hand to development',
    'Разобрал, как выбирают клининг: сравнивают цену, смотрят состав услуги и отзывы, звонят. Посмотрел сайты конкурентов по городу и увидел общую проблему — прайс спрятан, состав услуги описан общими словами. Решил строить страницу от ясности.':
      'I looked at how people choose a cleaning service: they compare prices, check what the service includes, read reviews, then call. I went through competitors in the city and saw the same problem — the price list is hidden and the service is described in vague terms. So I built the page around clarity.',
    'Собрал структуру: первый экран с сутью и заявкой, услуги плитками, состав каждой услуги, цены, отзывы, контакты. Вынес форму так, чтобы к ней приводил каждый блок.':
      'I assembled the structure: a first screen with the essence and the enquiry, services as tiles, what each service includes, prices, reviews, contacts. The form is placed so that every block leads to it.',
    'Выбрал Bento UI: услуги ложатся в плитки разного размера, и сразу видно, что главное, а что дополнительное. Сохранил фирменные цвета компании, добавил воздух и крупную типографику — сайт стал современнее, но узнаваемым.':
      'I chose Bento UI: services fall into tiles of different sizes, and it is immediately clear what is primary and what is secondary. I kept the company’s brand colours and added air and large typography — the site became more modern but stayed recognisable.',
    'Проработал разрешения: на телефоне бенто-сетка разворачивается в одну колонку без потери приоритетов. Собрал компоненты — плитку услуги, карточку цены, форму, отзыв — со всеми состояниями.':
      'I worked through the breakpoints: on a phone the bento grid unfolds into a single column without losing its priorities. Built the components — the service tile, the price card, the form, the review — with all their states.',
    'Конкурсный проект · 1 место': 'Competition project · 1st place',
    'Тема, в которой легко ошибиться в тоне. Пафос отталкивает, сухая справка не читается, а лишний декор выглядит неуместно. Задача была:':
      'A subject where the tone is easy to get wrong. Pathos pushes people away, a dry summary goes unread, and decoration looks out of place. The task was to:',
    'подать исторический материал так, чтобы его дочитывали до конца':
      'present historical material so that people read it to the end',
    'выстроить хронологию войны в понятную последовательность':
      'arrange the timeline of the war into a sequence that makes sense',
    'показать карту боевой славы как часть повествования, а не как отдельный виджет':
      'make the map of military glory part of the narrative, not a separate widget',
    'найти визуальный язык, уместный для темы: строгий, но не безжизненный':
      'find a visual language that fits the subject: austere but not lifeless',
    'Отдельное требование к себе: собрать всё на компонентах и автолейаутах, чтобы проект можно было расширять новыми разделами.':
      'One more requirement I set myself: build everything on components and auto layouts, so the project could grow new sections.',
    'Проект занял первое место в конкурсе. Что получилось:':
      'The project took first place in the competition. What came out of it:',
    'хронология войны собрана в понятную последовательность, а не в список дат':
      'the timeline of the war is a sequence that makes sense, not a list of dates',
    'карта боевой славы встроена в повествование и ведёт вглубь материала':
      'the map of military glory is built into the narrative and leads deeper into the material',
    'найден тон подачи: строгий, уважительный и при этом читаемый':
      'the tone was found: austere, respectful and still readable',
    'весь макет собран на компонентах и автолейаутах и готов к расширению':
      'the whole mockup is built on components and auto layouts and is ready to grow',
    'Из всех моих учебных и конкурсных работ этой я доволен больше всего — здесь совпали тема, структура и визуал.':
      'Of all my study and competition work this is the one I am happiest with — here the subject, the structure and the visuals came together.',
    'Изучил, как подают историю музейные и мемориальные сайты: что работает, а что превращается в стену текста. Отобрал материал и разложил его по смысловым линиям — события, места, люди, документы.':
      'I studied how museum and memorial sites present history: what works and what turns into a wall of text. I selected the material and split it along lines of meaning — events, places, people, documents.',
    'Выстроил хронологию как основную ось сайта и повесил на неё разделы. Спроектировал карту боевой славы: точки на карте раскрываются в короткие истории и ведут к подробным страницам.':
      'I made the timeline the main axis of the site and hung the sections on it. Designed the map of military glory: points on the map open into short stories and lead on to detailed pages.',
    'Выбрал строгую сетку, сдержанную палитру и крупную типографику. Фотографии и документы подаются большими и без украшательств: материал сильнее любого декора. Акцентный цвет использован точечно — только там, где нужно вести взгляд.':
      'I chose a strict grid, a restrained palette and large typography. Photographs and documents are presented large and undecorated: the material is stronger than any ornament. The accent colour is used sparingly — only where the eye needs leading.',
    'Проработал разрешения и собрал полную библиотеку компонентов на автолейаутах: карточки событий, блок хронологии, точку на карте, галерею документов. Новый раздел собирается из готовых деталей за вечер.':
      'I worked through the breakpoints and assembled a full component library on auto layouts: event cards, the timeline block, a point on the map, the document gallery. A new section can be built from ready parts in an evening.',
    'Конкурсный проект': 'Competition project',
    'Коммерческий редизайн': 'Commercial redesign',
    'Основной кейс': 'Main case study',
    'Сайт, который я собрал для агентства, работает и приносит клиентов, но визуально он остался в моменте запуска. Я взялся обновить главную страницу — так, чтобы:':
      'The site I built for the agency works and brings in clients, but visually it stayed in the moment of its launch. I took on refreshing the homepage so that:',
    'агентство осталось узнаваемым: те же цвета, та же интонация':
      'the agency stays recognisable: the same colours, the same tone of voice',
    'объекты подавались крупнее и понятнее, чем сейчас':
      'properties are presented larger and more clearly than they are now',
    'первый экран сразу отвечал на вопрос «что тут продают»':
      'the first screen answers the question "what is sold here" straight away',
    'обновление можно было внедрить постранично, не переделывая сайт целиком':
      'the update can be rolled out page by page, without rebuilding the whole site',
    'Ограничение здесь главное: это не новый бренд, а эволюция существующего. Клиент должен узнать свой сайт с первого взгляда.':
      'The main constraint here: this is not a new brand but the evolution of an existing one. The client has to recognise their own site at first glance.',
    'Главная страница собрана в новом виде. Что изменилось:':
      'The homepage is assembled in its new form. What changed:',
    'объекты подаются крупнее, и первый экран сразу объясняет суть':
      'properties are presented larger, and the first screen explains the point immediately',
    'порядок блоков выстроен от главного к дополнительному':
      'the order of blocks runs from the most important to the secondary',
    'бренд остался узнаваемым: те же цвета и та же интонация':
      'the brand stayed recognisable: the same colours and the same tone of voice',
    'новые блоки собраны компонентами и переносятся на другие страницы':
      'the new blocks are built as components and carry over to other pages',
    'Пересмотрел текущую главную свежим взглядом и выписал, что именно устарело: плотность блоков, мелкие фотографии, неочевидный порядок разделов. Посмотрел, как за это время изменилась подача у итальянских агентств.':
      'I looked at the current homepage with fresh eyes and wrote down exactly what had aged: the density of the blocks, the small photographs, the unclear order of sections. Then checked how presentation had moved on at Italian agencies in the meantime.',
    'Пересобрал порядок блоков главной: поиск и подборка объектов выше, текстовые блоки о компании ниже. Сохранил все существующие разделы — менялся порядок и вес, а не состав.':
      'I rebuilt the order of blocks on the homepage: search and the property selection higher up, text blocks about the company lower down. All the existing sections stayed — what changed was the order and the weight, not the contents.',
    'Собрал новую главную в стиле Bento UI: объекты и ключевые блоки легли в плитки разного размера, фотографии стали крупнее, появился воздух. Цветовую палитру и логотип оставил прежними — сайт узнаётся, но выглядит современно.':
      'I assembled the new homepage in Bento UI: properties and the key blocks fell into tiles of different sizes, the photographs got larger, air appeared. The palette and the logo stayed as they were — the site is recognisable but looks current.',
    'Проработал разрешения и состояния новых блоков, собрал их компонентами на автолейаутах — чтобы следующие страницы обновлялись по той же системе.':
      'I worked through the breakpoints and states of the new blocks and built them as components on auto layouts — so the next pages can be updated on the same system.',
    'Айдентика и главная': 'Identity and homepage',
    'SSPS — психологическая помощь': 'SSPS — Psychological Support',
    'Проект о психологической помощи, и визуальный язык здесь — половина дела. Человек, который заходит на такой сайт, должен почувствовать спокойствие раньше, чем прочитает первое предложение. Задача была:':
      'This is a project about psychological support, and the visual language is half the work. Someone arriving at a site like this should feel calm before they read the first sentence. The task was to:',
    'придумать айдентику: цвет, типографику, интонацию графики':
      'invent the identity: colour, typography, the tone of the graphics',
    'собрать главную страницу как образец для всех остальных':
      'build the homepage as the model for all the others',
    'отрисовать иконки, иллюстрации и инфографику в едином стиле':
      'draw the icons, illustrations and infographics in one consistent style',
    'оставить команде систему, по которой они соберут сайт без меня':
      'leave the team a system they could build the site from without me',
    'Главное ограничение: я делал не весь сайт, а фундамент. Значит, всё должно было быть однозначным — чтобы следующий человек не гадал, как выглядит новый блок.':
      'The main constraint: I was not making the whole site, I was making the foundation. So everything had to be unambiguous — the next person should not have to guess what a new block looks like.',
    'Проект получил визуальный язык, который живёт без меня. Что осталось команде:':
      'The project got a visual language that lives without me. What the team was left with:',
    'айдентика: палитра, типографика и правила подачи':
      'the identity: palette, typography and rules of presentation',
    'главная страница как образец плотности и тона':
      'the homepage as a reference for density and tone',
    'набор иконок, иллюстраций и инфографики в одном стиле':
      'a set of icons, illustrations and infographics in one style',
    'возможность собирать новые страницы, не придумывая дизайн заново':
      'the ability to build new pages without designing them from scratch',
    'Для меня это первый опыт, когда моя работа — это не готовый сайт, а система, по которой сайт делают другие. Проверка на однозначность решений вышла честная.':
      'For me this was the first time my work was not a finished site but a system other people build a site from. An honest test of how unambiguous my decisions were.',
    'Разобрал, как говорят о психологической помощи: где тон становится клиническим, где излишне мягким. Посмотрел сервисы и центры, отобрал приёмы, которые вызывают доверие и не давят.':
      'I looked at how psychological support is talked about: where the tone turns clinical, where it turns excessively soft. I went through services and centres and picked out the devices that inspire trust without pressure.',
    'Дизайн-концепция и айдентика': 'Design concept and identity',
    'Собрал визуальный язык: спокойная палитра, мягкая геометрия, читаемая типографика. Определил, как выглядят заголовки, акценты и иллюстрации — чтобы стиль держался на правилах, а не на вкусе.':
      'I assembled the visual language: a calm palette, soft geometry, readable typography. I defined how headings, accents and illustrations look — so the style rests on rules rather than on taste.',
    'Главная страница': 'Homepage',
    'Собрал главную как эталон: первый экран, объяснение помощи, форматы работы, специалисты, ответы на вопросы, контакты. По ней команда видела, какой плотности и какого тона должны быть остальные страницы.':
      'I built the homepage as the reference: the first screen, an explanation of the help offered, formats of work, the specialists, answers to questions, contacts. From it the team could see what density and what tone the remaining pages needed.',
    'Графика: иконки, иллюстрации, инфографика': 'Graphics: icons, illustrations, infographics',
    'Отрисовал набор иконок, иллюстрации для смысловых блоков и инфографику. Всё в одной манере и на одной сетке, чтобы новые элементы дорисовывались по образцу.':
      'I drew a set of icons, illustrations for the meaning blocks and infographics. All in one manner and on one grid, so new elements can be drawn to match.',
    'Передача команде': 'Handover to the team',
    'Отдал исходники и правила использования: палитру, шрифтовую шкалу, набор компонентов и графику. Дальше разработку вела команда, уже не придумывая стиль заново.':
      'I handed over the source files and the usage rules: the palette, the type scale, the component set and the graphics. From there the team carried the build on without inventing the style anew.',
    'Айдентика': 'Identity',
    'Иллюстрация': 'Illustration',
    'Социальная кампания': 'Social campaign',
    'УВД Гродно': 'Grodno Police',
    'Носитель здесь диктует всё: экран кассы самообслуживания. Человек смотрит на него несколько секунд, стоя с корзиной, и его внимание занято оплатой. Значит, макет должен был:':
      'The medium dictates everything here: the screen of a self-checkout terminal. A person looks at it for a few seconds, standing with a basket, their attention on paying. So the design had to:',
    'читаться за пару секунд и с расстояния вытянутой руки':
      'read in a couple of seconds and from arm’s length',
    'нести одну мысль, а не список правил безопасности':
      'carry one idea, not a list of safety rules',
    'предупреждать, но не пугать: это магазин, а не отделение милиции':
      'warn without frightening: this is a shop, not a police station',
    'соответствовать требованиям государственного заказчика':
      'meet the requirements of a government client',
    'Аудитория — все подряд: от школьника до пенсионера. Поэтому ни сленга, ни сложных формулировок.':
      'The audience is everyone: from schoolchildren to pensioners. So no slang and no complicated wording.',
    'Самый заметный из моих проектов — по числу людей, которые его увидели.':
      'The most visible of my projects — by the number of people who have seen it.',
    'баннер транслируется на кассах самообслуживания по всей Гродненской области':
      'the banner runs on self-checkout terminals across the whole Grodno region',
    'за работу я получил грамоту от УВД Гродно':
      'the work earned me a certificate of merit from the Grodno police',
    'о проекте вышла статья в новостях': 'the project was covered in the news',
    'сообщение уложилось в один экран и читается за пару секунд':
      'the message fits one screen and reads in a couple of seconds',
    'Здесь я впервые делал дизайн, который увидят десятки тысяч человек, не зная, кто его нарисовал. Это отдельное ощущение.':
      'This was the first time I made a design that tens of thousands of people would see without knowing who drew it. That is a feeling of its own.',
    'Разобрал, как работают телефонные и интернет-мошенники и на что люди попадаются чаще всего. Вместе с заказчиком определили одно сообщение, которое нужно донести, — и отбросили всё, что его размывает.':
      'I worked out how phone and internet fraudsters operate and what people fall for most often. Together with the client we settled on the one message that had to get through — and cut everything that diluted it.',
    'Идея и эскизы': 'Concept and sketches',
    'Набросал несколько подходов: от строгого информационного плаката до сюжетной сцены. Проверял каждый на главном условии — читается ли он за две секунды с экрана кассы.':
      'I sketched several approaches: from a strict information poster to a narrative scene. Each one was tested against the main condition — does it read in two seconds from a checkout screen.',
    'Отрисовка': 'Final artwork',
    'Собрал финальный макет: крупный заголовок, понятная иллюстрация, минимум текста, контрастная цветовая пара. Композицию строил так, чтобы взгляд шёл по одной линии.':
      'I assembled the final design: a large headline, a clear illustration, minimal text, a high contrast colour pair. The composition is built so the eye travels along a single line.',
    'Правки и согласование': 'Revisions and approval',
    'Прошёл цикл согласований с УВД: формулировки, знаки различия, требования к оформлению. Довёл макет до состояния, которое подходит и по содержанию, и по регламенту.':
      'I went through the approval cycle with the police: the wording, the insignia, the formatting requirements. Brought the design to a state that works both in content and by regulation.',
    'Выпуск': 'Rollout',
    'Подготовил файлы под формат касс самообслуживания и передал заказчику. Баннер ушёл в трансляцию по сети «Евроопт» в Гродненской области.':
      'I prepared the files for the self-checkout format and handed them to the client. The banner went into rotation across the Euroopt network in the Grodno region.',
    'Графический дизайн': 'Graphic design',
    'Полиграфия и тираж': 'Print and production',
    'Лидская мука': 'Lida Flour',
    'Кейс УВД Гродно': 'Grodno Police case study',
    'Наклейка на пачке муки — необычный носитель для социальной рекламы. Места мало, печать не прощает мелочей, а рядом уже есть фирменный стиль продукта. Задача была:':
      'A sticker on a bag of flour is an unusual medium for social advertising. There is little room, print forgives nothing, and the product already has a visual identity of its own. The task was to:',
    'уложить предупреждение в маленький формат так, чтобы его прочли':
      'fit a warning into a small format so that people actually read it',
    'не спорить с упаковкой производителя, а встроиться в неё':
      'not fight the manufacturer’s packaging but fit into it',
    'сделать иллюстрацию, которая читается в печати, а не только на экране':
      'make an illustration that reads in print, not only on a screen',
    'выдержать требования сразу двух сторон — производителя и заказчика кампании':
      'satisfy the requirements of two sides at once — the manufacturer and the campaign client',
    'Плюс тираж: ошибку после печати уже не исправить, поэтому макет проверялся дольше, чем рисовался.':
      'Plus the print run itself: a mistake cannot be fixed after printing, so the design was checked for longer than it was drawn.',
    'Работа дошла до тиража — и это главный результат.':
      'The work made it to a print run — and that is the main result.',
    'наклейка выпускается на продукции «Лидской муки» по Гродненской области':
      'the sticker is produced on Lida Flour products across the Grodno region',
    'около тридцати вариантов иллюстраций за проект':
      'around thirty illustration variants over the project',
    'макет прошёл согласование производителя и заказчика кампании':
      'the design passed approval by the manufacturer and the campaign client',
    'графика читается в реальном размере, а не только в макете':
      'the graphics read at actual size, not only in the mockup',
    'Здесь я научился тому, чему не научит экран: в печати всё решают контраст, размер формы и то, сколько деталей выдержит бумага.':
      'Here I learned something a screen will never teach: in print everything is decided by contrast, the size of the shape and how much detail the paper will hold.',
    'Разобрал формат и условия печати: размер наклейки, цветность, на какую поверхность ложится, с какого расстояния её увидят. Посмотрел упаковку производителя, чтобы понять допустимую палитру.':
      'I went through the format and the printing conditions: the size of the sticker, the number of colours, the surface it sits on, the distance it will be seen from. I studied the manufacturer’s packaging to understand the permissible palette.',
    'Нарисовал около тридцати вариантов иллюстрации — от буквальных сюжетов до знаковых, почти пиктограммных. Часть отпала сразу: слишком мелкая детализация для такого размера.':
      'I drew around thirty variants of the illustration — from literal scenes to sign-like, almost pictogram forms. Some fell away at once: too much fine detail for that size.',
    'Довёл отобранные варианты до чистовой графики: крупные формы, чёткий контур, минимум мелких деталей. Текст свёл к одной короткой фразе.':
      'I brought the selected variants to finished graphics: large shapes, a clear outline, a minimum of small detail. The text was reduced to one short phrase.',
    'Правки и подготовка к печати': 'Revisions and print preparation',
    'Прошёл длинный цикл согласований и правок с обеих сторон. Подготовил финальный файл под печать: цветовой профиль, вылеты, контроль читаемости в реальном размере.':
      'I went through a long cycle of approvals and revisions with both sides. Prepared the final file for print: colour profile, bleeds, a legibility check at actual size.',
    'Наклейка ушла в производство и выходит на продукции «Лидской муки» по всей Гродненской области.':
      'The sticker went into production and is going out on Lida Flour products across the whole Grodno region.',
    'Полиграфия': 'Print',
    'Социальный проект': 'Social project',
    'Jenniet — визитка': 'Jenniet — Business Card',
    'Магазин Jenniet Home': 'Jenniet Home store',
    'У бренда уже был сложившийся образ: светлая розово-синяя палитра, дружелюбная подача, подростковая аудитория. Всё это придумано для экрана. Нужно было:':
      'The brand already had an established image: a light pink and blue palette, a friendly tone, a teenage audience. All of it invented for a screen. What was needed:',
    'сохранить узнаваемость бренда на носителе размером с ладонь':
      'keep the brand recognisable on a medium the size of a palm',
    'уместить контакты и соцсети, не превратив визитку в справочник':
      'fit the contacts and social links in without turning the card into a directory',
    'подобрать цвета, которые не потеряются в печати':
      'choose colours that do not get lost in print',
    'сделать вещь, которую приятно отдать в руки, а не выбросить':
      'make an object that is pleasant to hand over, not to throw away',
    'Визитка стала продолжением магазина, а не отдельной вещью:':
      'The card became a continuation of the shop rather than a separate object:',
    'фирменная палитра и характер бренда узнаются в печати':
      'the brand palette and character are recognisable in print',
    'контакты и соцсети уместились без перегруза':
      'the contacts and social links fit without overcrowding',
    'макет подготовлен к типографии со всеми техническими требованиями':
      'the file is prepared for the printer with all the technical requirements met',
    'сайт и визитка читаются как один бренд': 'the site and the card read as one brand',
    'Отобрал из стиля магазина то, что переживёт печать: палитру, шрифтовую пару, характер графики. Экранные градиенты и тонкие детали сразу вынес за скобки.':
      'I picked out the parts of the shop’s style that would survive printing: the palette, the type pairing, the character of the graphics. On-screen gradients and fine detail were ruled out immediately.',
    'Набросал варианты компоновки: где логотип, где контакты, что выносить на оборот. Проверял каждый на главном вопросе — что человек увидит за первую секунду.':
      'I sketched layout options: where the logo goes, where the contacts go, what moves to the back. Each one was tested against the same question — what does a person see in the first second.',
    'Собрал финальный макет обеих сторон: лицевая держит бренд, оборотная — контакты и соцсети. Размеры шрифтов подобрал так, чтобы текст читался без прищура.':
      'I assembled the final design for both sides: the front carries the brand, the back the contacts and social links. The type sizes were chosen so the text reads without squinting.',
    'Подготовка к печати': 'Print preparation',
    'Перевёл макет в печатные параметры: цветовой профиль, вылеты, безопасные поля, контроль контраста на бумаге.':
      'I converted the design to print parameters: colour profile, bleeds, safe margins, a contrast check on paper.',
    'Фирменный стиль': 'Visual identity',
    'Vittur — перевозки': 'Vittur — Passenger Transport',
    'Перевозчика выбирают по надёжности, а судят о ней по мелочам: как выглядит объявление, визитка, машина. У компании не было единого образа — каждый носитель жил сам по себе. Нужно было:':
      'A carrier is chosen for reliability, and reliability is judged by small things: how the advert looks, the business card, the coach. The company had no single image — every medium lived on its own. What was needed:',
    'сделать логотип, который читается и в большом, и в очень маленьком размере':
      'a logo that reads both large and very small',
    'собрать фирменный стиль: цвета, шрифты, правила размещения':
      'a visual identity: colours, typefaces, placement rules',
    'подготовить полиграфию и рекламные плашки под реальные форматы':
      'print materials and advertising panels prepared for real formats',
    'добиться, чтобы все носители узнавались как один бренд':
      'all the media recognisable as one brand',
    'Главное ограничение — печать. Всё, что я рисовал, должно было одинаково работать на бумаге, на плёнке и в объявлении.':
      'The main constraint was print. Everything I drew had to work equally on paper, on vinyl and in an advert.',
    'Компания получила единый образ вместо набора разрозненных макетов:':
      'The company got a single image instead of a set of unrelated designs:',
    'логотип, который читается и на визитке, и на большом носителе':
      'a logo that reads on a business card and on a large medium alike',
    'фирменные цвета и шрифты с правилами использования':
      'brand colours and typefaces with rules of use',
    'комплект полиграфии и рекламных плашек в одной системе':
      'a set of print materials and advertising panels in one system',
    'все носители подготовлены под печать': 'every medium prepared for print',
    'Это мой первый полный фирменный стиль — от знака до готовых к печати файлов.':
      'This is my first complete visual identity — from the mark to print-ready files.',
    'Разобрал, как перевозчики этого направления показывают себя: объявления, группы, визитки. Увидел, что почти все выглядят одинаково безлико, — и это стало главным шансом выделиться.':
      'I looked at how carriers on this route present themselves: adverts, groups, business cards. Almost all of them looked equally faceless — and that turned out to be the main chance to stand out.',
    'Набросал варианты знака: от буквенных до образных. Проверял каждый на уменьшение — логотип должен оставаться читаемым на визитке и на плашке объявления.':
      'I sketched variants of the mark: from lettering to pictorial. Each one was tested by shrinking it — the logo has to stay readable on a business card and on an advert panel.',
    'Логотип и фирменный стиль': 'Logo and visual identity',
    'Довёл знак до чистовой формы, подобрал цветовую пару и шрифты, описал правила: отступы вокруг логотипа, допустимые фоны, поведение на тёмном и светлом.':
      'I brought the mark to its finished form, chose the colour pair and the typefaces, and wrote the rules: clear space around the logo, permissible backgrounds, behaviour on dark and light.',
    'Полиграфия и реклама': 'Print and advertising',
    'Собрал носители: визитки, рекламные плашки, печатные материалы. Каждый макет — из одного набора элементов, поэтому вместе они читаются как система.':
      'I assembled the media: business cards, advertising panels, print materials. Every design comes from one set of elements, so together they read as a system.',
    'Подготовил файлы под типографию: цветовые профили, вылеты, контроль читаемости в реальных размерах.':
      'I prepared the files for the printer: colour profiles, bleeds, legibility checks at actual size.',
    'Логотип': 'Logo',
    'Реклама': 'Advertising',
    'Брошюра о киберпреступности легко превращается в памятку, которую никто не дочитывает. Нужно было сделать так, чтобы шесть разворотов прошли насквозь. Задача:':
      'A brochure about cybercrime turns into an unread leaflet all too easily. The six spreads had to carry the reader all the way through. The task:',
    'разложить тему на шесть частей с понятной логикой перехода между ними':
      'split the subject into six parts with a clear logic of transition between them',
    'подать статистику и правила так, чтобы их читали, а не пролистывали':
      'present statistics and rules so that people read them instead of flipping past',
    'держать один визуальный ритм на всём объёме': 'hold one visual rhythm across the whole thing',
    'сделать материал, уместный для международной конференции':
      'produce material worthy of an international conference',
    'Проект занял первое место на международной онлайн-конференции. Итог:':
      'The project took first place at the international online conference. The outcome:',
    'шесть частей, объединённых одной сеткой и одним визуальным языком':
      'six parts united by one grid and one visual language',
    'статистика и правила переведены в инфографику и читаются без усилий':
      'statistics and rules turned into infographics that read effortlessly',
    'материал выдержал уровень международной конференции':
      'material that held up to the level of an international conference',
    'первое место в конкурсе': 'first place in the competition',
    'Здесь я впервые собирал многостраничник целиком и понял, что в таком формате решает не отдельный разворот, а ритм всей вещи.':
      'This was the first time I assembled a multi-page piece from end to end, and I understood that in this format what decides it is not a single spread but the rhythm of the whole thing.',
    'Идея и структура': 'Concept and structure',
    'Разбил тему на шесть частей и выстроил их по нарастанию: от того, как выглядит угроза, до того, что делать конкретно. Каждой части задал свою роль, чтобы они не повторяли друг друга.':
      'I split the subject into six parts and ordered them by escalation: from what the threat looks like to what to do about it. Each part was given its own role so they would not repeat each other.',
    'Композиция и сетка': 'Composition and grid',
    'Собрал модульную сетку на весь объём: одинаковый ритм полей, заголовков и иллюстраций. Это то, что держит многостраничник вместе и не даёт ему рассыпаться на отдельные листы.':
      'I built a modular grid across the whole volume: the same rhythm of margins, headings and illustrations. That is what holds a multi-page piece together and stops it falling apart into separate sheets.',
    'Графика и инфографика': 'Graphics and infographics',
    'Отрисовал иллюстрации и инфографику: статистику перевёл в схемы, правила — в наглядные блоки. Всё в одной манере, чтобы графика читалась как единый язык.':
      'I drew the illustrations and the infographics: statistics turned into diagrams, rules into visual blocks. All in one manner, so the graphics read as a single language.',
    'Вёрстка и финал': 'Layout and final',
    'Собрал все шесть частей, выровнял типографику, проверил читаемость и подготовил итоговый файл к показу.':
      'I assembled all six parts, evened out the typography, checked legibility and prepared the final file for presentation.',
    'Личный проект': 'Personal project',
    'I Origins — постеры': 'I Origins — Posters',
    'Здесь не было заказчика и брифа — была картина, которая не отпускала. Я поставил себе рамки сам:':
      'There was no client and no brief here — there was a film that would not let go. I set the limits myself:',
    'передать настроение фильма, а не пересказать сюжет':
      'convey the mood of the film rather than retell the plot',
    'собрать серию, а не один постер: у работ должен быть общий язык':
      'make a series, not a single poster: the works need a shared language',
    'работать с фотографией и коллажем, а не с готовыми шаблонами':
      'work with photography and collage, not with ready-made templates',
    'довести цвет и композицию до уровня, за который не стыдно':
      'take the colour and composition to a level I would not be embarrassed by',
    'Проект, который никто не заказывал и который многому научил:':
      'A project nobody commissioned, and one that taught me a great deal:',
    'серия постеров и баннеров с общим визуальным языком':
      'a series of posters and banners with a shared visual language',
    'практика композиции: как строить кадр и вести взгляд':
      'practice in composition: how to build a frame and lead the eye',
    'работа с цветом как с инструментом настроения, а не украшением':
      'work with colour as an instrument of mood rather than decoration',
    'уверенность в фотошоп-арте, которая потом пригодилась в коммерческих работах':
      'confidence in photo art that later came in useful in commercial work',
    'Идея и референсы': 'Concept and references',
    'Пересмотрел фильм и выписал образы, которые держат его атмосферу. Собрал референсы по цвету и композиции — не чтобы повторить, а чтобы понять, чем именно они работают.':
      'I rewatched the film and wrote out the images that hold its atmosphere. Collected references for colour and composition — not to copy them but to understand what exactly makes them work.',
    'Композиция и сборка': 'Composition and assembly',
    'Собирал каждый постер из фотографий и фактур: строил кадр, искал точку внимания, выстраивал планы. На этом этапе постеры чаще всего и разваливались — пока композиция не начинала держаться сама.':
      'I built each poster from photographs and textures: framing the shot, finding the focal point, laying out the planes. This is the stage where posters fell apart most often — until the composition began to hold on its own.',
    'Свет, цвет и детали': 'Light, colour and detail',
    'Свёл всё в единую цветовую схему, выстроил свет и тени, довёл фактуры. Именно здесь разрозненные работы стали серией.':
      'I pulled everything into a single colour scheme, built the light and shadow, finished the textures. This is where the separate works became a series.',
    'Финал и выдача': 'Final and delivery',
    'Довёл кадрирование, типографику и подготовил постеры и баннеры к показу.':
      'I finished the cropping and the typography and prepared the posters and banners for presentation.',
    'Постер': 'Poster',
    'Рекламный постер': 'Advertising poster',
    'Постер для зала должен продавать состояние, а не услугу. Человек смотрит на него две секунды — на стене или в ленте. Задача была:':
      'A gym poster sells a state, not a service. A person looks at it for two seconds — on a wall or in a feed. The task was to:',
    'собрать кадр, который считывается мгновенно и в печати, и в ленте':
      'build a frame that reads instantly, in print and in a feed alike',
    'передать энергию зала без агрессии и без штампов':
      'convey the energy of the gym without aggression and without clichés',
    'вписать название клуба так, чтобы оно не спорило с изображением':
      'place the club name so that it does not fight the image',
    'сделать макет, работающий в двух форматах сразу':
      'make one design that works in two formats at once',
    'Работа дошла до реального применения:': 'The work made it into real use:',
    'постер висел в зале AllStarsGym': 'the poster hung in the AllStarsGym gym',
    'версия для соцсетей публиковалась в инстаграме клуба':
      'the social media version was published on the club’s Instagram',
    'один макет отработал в двух разных форматах': 'one design worked in two different formats',
    'проект заметно поднял мой уровень работы со светом и тенями':
      'the project noticeably raised my level of work with light and shadow',
    'Разобрал спортивную рекламу: что работает, а что превращается в набор клише. Выбрал подход — драматичный свет и один сильный герой в кадре.':
      'I went through sports advertising: what works and what turns into a set of clichés. Chose the approach — dramatic light and one strong figure in the frame.',
    'Собрал кадр из съёмки и фактур: выстроил силуэт, задал точку внимания, убрал всё, что отвлекает от главного.':
      'I built the frame from the shoot and textures: shaping the silhouette, setting the focal point, removing everything that pulls attention from the main thing.',
    'Свет, тени и цвет': 'Light, shadow and colour',
    'Основная работа проекта. Лепил объём светом и тенью, добивался контраста, который держит фигуру и в печати, и на маленьком экране телефона.':
      'The core work of the project. I modelled volume with light and shadow, chasing a contrast that holds the figure both in print and on a small phone screen.',
    'Финал и адаптация': 'Final and adaptation',
    'Довёл типографику с названием клуба и собрал версии под печать для зала и под публикацию в инстаграме.':
      'I finished the typography with the club name and produced versions for print in the gym and for publication on Instagram.',
    'Личное творчество': 'Personal work',
    'Это раздел, где я учился. Коммерческий проект всегда ограничен сроком и вкусом заказчика — а здесь можно было переделывать до бесконечности. Я использовал это, чтобы:':
      'This is the section where I was learning. A commercial project is always limited by a deadline and the client’s taste — here I could redo things endlessly. I used that to:',
    'разобраться в композиции на практике, а не по статьям':
      'learn composition in practice rather than from articles',
    'научиться собирать кадр из разнородных источников':
      'learn to build a frame from disparate sources',
    'освоить свет и тень как инструмент, а не как фильтр':
      'master light and shadow as an instrument rather than a filter',
    'набрать насмотренность и собственную манеру':
      'build up a visual vocabulary and a manner of my own',
    'Раздел без заказчиков, зато с прямым влиянием на всё остальное:':
      'A section with no clients, and with a direct effect on everything else:',
    'насмотренность и собственная манера в графике':
      'a visual vocabulary and a manner of my own in graphics',
    'уверенная работа с композицией, светом и цветом':
      'confident work with composition, light and colour',
    'навыки, которые потом пригодились в постерах и социальной рекламе':
      'skills that later came in useful in posters and social advertising',
    'место, где можно пробовать без оглядки на сроки':
      'a place to experiment without an eye on deadlines',
    'Каждая работа начиналась с образа или настроения. Собирал референсы и разбирал, за счёт чего именно они работают.':
      'Every work started from an image or a mood. I collected references and worked out exactly what made them work.',
    'Строил кадр из фотографий и фактур: планы, силуэты, точка внимания. Самый долгий этап — пока композиция не начинает держаться без подпорок.':
      'I built the frame from photographs and textures: planes, silhouettes, the focal point. The longest stage — until the composition starts holding without props.',
    'Выстраивал свет, сводил цвет, дорабатывал фактуры. Здесь работа либо оживает, либо остаётся коллажем.':
      'I built the light, pulled the colour together, worked up the textures. This is where a piece either comes alive or stays a collage.',
    'Творчество': 'Creative work',
    'Игра на Unity': 'Unity game',
    'Курсовой проект я решил сделать не демо-сценой, а маленькой законченной игрой. Значит, нужно было не только написать код, но и выстроить всё, из чего игра состоит:':
      'I decided to make my coursework a small finished game rather than a demo scene. That meant writing not just the code but everything a game is made of:',
    'управляемого персонажа с понятной и приятной физикой':
      'a controllable character with physics that feel clear and pleasant',
    'восемь уровней с нарастающей сложностью': 'eight levels with a rising difficulty curve',
    'мета-слой: монеты, магазин, скины — то, ради чего возвращаются':
      'a meta layer: coins, a shop, skins — the reason to come back',
    'визуал и анимации, которые не выглядят учебной заготовкой':
      'visuals and animation that do not look like a study exercise',
    'Отдельная задача — удержать около двадцати механик так, чтобы они не мешали друг другу и не превращали код в кашу.':
      'A separate problem: holding around twenty mechanics together so they would not interfere with each other or turn the code into porridge.',
    'Получилась законченная маленькая игра, а не учебная сцена:':
      'The result is a small finished game, not a study scene:',
    'восемь уровней с выстроенной кривой сложности':
      'eight levels with a properly built difficulty curve',
    'около двадцати механик, работающих вместе': 'around twenty mechanics working together',
    'мета-слой: монеты, магазин и скины': 'a meta layer: coins, a shop and skins',
    'визуал и анимации на URP, а не заготовки из шаблона':
      'visuals and animation on URP rather than template assets',
    'Главное, что дал проект, — понимание, что игра держится не на количестве механик, а на том, насколько приятно управление в первые тридцать секунд.':
      'The main thing the project gave me was understanding that a game rests not on the number of mechanics but on how good the controls feel in the first thirty seconds.',
    'Идея и геймплей': 'Concept and gameplay',
    'Отталкивался от одной механики: блок, который перекатывается по арене. Проверил, что она сама по себе интересна, и только потом начал наращивать вокруг неё остальное.':
      'I started from one mechanic: a block that rolls across an arena. I checked that it was interesting on its own, and only then began building everything else around it.',
    'Прототип механик': 'Mechanics prototype',
    'Собрал играбельный прототип без графики: управление, физика, столкновения, победа и поражение. На этом этапе отсеял механики, которые звучали хорошо, а играли плохо.':
      'I built a playable prototype with no graphics: controls, physics, collisions, win and lose. At this stage I cut the mechanics that sounded good but played badly.',
    'Уровни и баланс': 'Levels and balance',
    'Спроектировал восемь уровней по нарастанию: каждый вводит одну новую идею и закрепляет предыдущую. Настроил сложность так, чтобы игрок не застревал и не скучал.':
      'I designed eight levels by escalation: each one introduces a single new idea and reinforces the previous one. I tuned the difficulty so the player neither gets stuck nor gets bored.',
    'Арт и визуал': 'Art and visuals',
    'Собрал визуальный стиль на URP: материалы, свет, плавные анимации переходов и реакций. Отрисовал интерфейс, магазин и скины в одной манере.':
      'I assembled the visual style on URP: materials, lighting, smooth transitions and reactions. Drew the interface, the shop and the skins in one manner.',
    'Написал логику на C#: управление, состояния уровня, монеты, магазин, сохранение прогресса. Разложил механики по отдельным скриптам, чтобы их можно было включать и выключать по одной.':
      'I wrote the logic in C#: controls, level states, coins, the shop, progress saving. The mechanics are split across separate scripts so they can be switched on and off one at a time.',
    'Тестирование и сборка': 'Testing and build',
    'Прошёл игру целиком много раз, ловил поломки на стыках механик, правил баланс и собрал финальную сборку.':
      'I played the game through many times, caught the breakages at the joints between mechanics, adjusted the balance and assembled the final build.',
    'Игра на C++': 'C++ game',
    'Это была моя первая игра, и писал я её на C++ почти без движка — SFML даёт только окно, графику и ввод, всё остальное надо делать руками. Задача была:':
      'This was my first game, and I wrote it in C++ with almost no engine — SFML gives you only a window, graphics and input, everything else you build by hand. The task was to:',
    'написать игровой цикл, физику и столкновения с нуля':
      'write the game loop, the physics and the collisions from scratch',
    'собрать пять уровней с историей, а не просто с препятствиями':
      'build five levels with a story, not just obstacles',
    'сделать графику и анимации уровня, за который не стыдно на конкурсе':
      'make art and animation good enough for a competition',
    'рассказать простую историю без единой строчки диалога':
      'tell a simple story without a single line of dialogue',
    'Акцент я сознательно сделал на визуал: в аркаде без сюжета именно графика заставляет доиграть до конца.':
      'I put the emphasis on the visuals deliberately: in an arcade game without a plot, it is the art that makes you finish it.',
    'Первая моя игра — и первая работа, где графика стала главным аргументом:':
      'My first game — and the first work where the art became the main argument:',
    'пять уровней с выстроенным путём героя': 'five levels with a properly built hero’s journey',
    'персонажи и анимации, отрисованные вручную': 'characters and animation drawn by hand',
    'игровой цикл, физика и столкновения, написанные на C++ без движка':
      'a game loop, physics and collisions written in C++ with no engine',
    'участие в конкурсе — игру отметили именно за визуал':
      'an entry in a competition — the game was noticed precisely for its visuals',
    'После Neverland я перешёл на Unity, но именно здесь понял, из чего игра состоит на самом низком уровне.':
      'After Neverland I moved to Unity, but it was here that I understood what a game is made of at the lowest level.',
    'Придумал историю: кот ищет свою половинку в затерянном городе. От неё оттолкнулся в механике — движение, прыжки, препятствия, которые читаются как испытания на пути.':
      'I came up with the story: a cat searching for its other half in a lost city. From there I built the mechanics — movement, jumps, obstacles that read as trials along the way.',
    'Собрал игровой цикл на SFML: обработка ввода, движение, столкновения, состояния уровня. Всё писалось руками, поэтому прототип занял больше времени, чем ожидал.':
      'I built the game loop on SFML: input handling, movement, collisions, level states. All of it written by hand, so the prototype took longer than I expected.',
    'Арт и анимация': 'Art and animation',
    'Главный этап проекта. Отрисовал персонажей и окружение, собрал покадровые анимации, выстроил параллакс и настроение каждого уровня. Именно за графику игру и заметили.':
      'The core stage of the project. I drew the characters and the environments, built frame-by-frame animation, set up the parallax and the mood of each level. The art is what got the game noticed.',
    'Уровни': 'Levels',
    'Спроектировал пять уровней так, чтобы они рассказывали путь героя: от города к финалу, с нарастанием сложности и сменой настроения.':
      'I designed five levels so that they tell the hero’s journey: from the city to the finale, with rising difficulty and a shifting mood.',
    'Разработка и сборка': 'Development and build',
    'Довёл логику на C++, связал уровни, меню и переходы, собрал финальную версию и подготовил её к показу на конкурсе.':
      'I finished the logic in C++, linked the levels, the menu and the transitions, assembled the final version and prepared it for the competition.',
    'Все работы': 'All work',
  },

  /* ======================================================================
     КУСКИ С ТЕГАМИ ВНУТРИ
     Теги и &nbsp; должны остаться на месте — иначе пропадут акценты
     и переносы строк.
     ====================================================================== */
  html: {
    'В <strong>2020</strong> году я начал заниматься дизайном. Создавал графику, логотипы, интерфейсы, сайты, рекламные материалы и работал с реальными клиентами.':
      'In <strong>2020</strong> I started doing design. Graphics, logos, interfaces, websites, advertising materials — and real clients from early on.',

    'В <strong>2023</strong> году параллельно начал изучать программирование. За это время разработка стала второй частью моего профессионального пути. Сейчас я <strong>совмещаю оба направления</strong> и стараюсь создавать продукты, которые хорошо выглядят не только в Figma, но и работают в реальном мире.':
      'In <strong>2023</strong> I began studying programming alongside it. Development has since become the second half of my professional path. Today I <strong>work in both at once</strong> and try to build products that look good not only in Figma but hold up in the real world.',

    'Здесь собраны работы, которые я делал <strong>своими руками</strong>: сайты, графика, брендинг, игры.':
      'Everything here I made <strong>with my own hands</strong>: websites, graphics, branding, games.',

    'Делаю сайты целиком: от структуры и макета до вёрстки и настройки CMS. Дизайном занимаюсь <strong>с 2020 года</strong>, разработкой&nbsp;— <strong>с 2023</strong>, и развиваю оба направления параллельно. Это избавляет проект от привычного разрыва между макетом и кодом: я сразу проектирую то, что смогу собрать сам.':
      'I build websites end to end: structure and layout through to markup and CMS setup. Design <strong>since 2020</strong>, development <strong>since 2023</strong>, both developed in parallel. That removes the usual gap between mockup and code: I design what I know I can build myself.',

    'Сайт <strong>итальянского агентства недвижимости</strong>, разработанный под ключ: от структуры и дизайна до CMS. Настроил удобное управление объектами для клиентов агентства, проработал навигацию и подачу недвижимости. Сейчас веду работу над <a class="text-link" href="/pages/404.html">редизайном</a> главной страницы.':
      'A turnkey website for <strong>an Italian real estate agency</strong>: structure, design and CMS. I set up a listing manager the agency staff can actually use, and worked through the navigation and the way properties are presented. I am currently working on <a class="text-link" href="/pages/404.html">a redesign</a> of the home page.',

    'UI/UX дизайнер и разработчик в одном лице. Я <strong>обладаю огромным</strong> количеством навыков и знаний, а также имею опыт во многих дизайнерских программах&nbsp;— всё это помогает мне создавать удобные, красивые и технически продуманные интерфейсы:':
      'A UI/UX designer and developer in one. I <strong>have a wide</strong> range of skills and hands-on experience across many design tools, and all of it goes into interfaces that are usable, good-looking and technically sound:',

    'Реклама на билбордах, верстка в меню, дизайн кассы самообслуживания&nbsp;— я оцениваю это все с <strong>точки зрения дизайна.</strong>':
      'Billboards, menu layouts, self-checkout screens — I look at all of it with <strong>a designer’s eye.</strong>',

    'Я не могу «просто пользоваться» интерфейсами&nbsp;— я всегда анализирую их, чтобы понять, <strong>как можно сделать лучше.</strong>':
      'I cannot just use an interface — I am always taking it apart to work out <strong>how it could be better.</strong>',

    'От шрифта на чеке до интерфейса сложнейших систем&nbsp;— каждая деталь заслуживает того, <strong>чтобы быть удобной.</strong>':
      'From the type on a receipt to the interface of the most complex system — every detail deserves <strong>to be easy to use.</strong>',

    'Думаю, что отношение к дизайну <br>идеально выразил Стив Джобс:':
      'I think Steve Jobs put the whole <br>attitude to design perfectly:',

    '«Дизайн&nbsp;— это не то, как предмет <br>выглядит, а то, как он работает»':
      '“Design is not just what it looks <br>like. Design is how it works”',

    'Проектирую сайты, где дизайн работает на результат: понятная навигация, акценты и чистая подача <strong>с заботой о пользователе.</strong>':
      'I design websites where the design does a job: clear navigation, deliberate emphasis and a clean presentation <strong>built around the person using it.</strong>',

    'Создаю удобные интерфейсы, дизайн-системы и интерактивные прототипы с фокусом на <strong>логику</strong> и <strong>пользовательский опыт</strong>.':
      'I create usable interfaces, design systems and interactive prototypes, focused on <strong>logic</strong> and <strong>user experience</strong>.',

    'Я переношу дизайн в код: чистая вёрстка, адаптивность, анимации и интерактив на HTML, CSS и JS. <strong>С вниманием к мелким деталям)</strong>':
      'I move designs into code: clean markup, responsiveness, animation and interaction in HTML, CSS and JS. <strong>With an eye on the small things)</strong>',

    'Настраиваю сайты на WordPress и других CMS системах с удобным управлением контентом и <strong>гибкой структурой</strong> страниц.':
      'I set up sites on WordPress and other CMS platforms, with content management that makes sense and <strong>a flexible structure</strong> behind the pages.',

    'Реклама на билбордах, верстка в меню, дизайн реклам на кассах самообслуживания&nbsp;— я оцениваю это все с <strong>точки зрения дизайна.</strong>':
      'Billboards, menu layouts, ads on self-checkout terminals — I look at all of it with <strong>a designer’s eye.</strong>',

    'Делаю необычные веб-проекты, микроанимации и эксперименты, которые <strong>выделяют бренд</strong> среди конкурентов.':
      'I make unusual web projects, micro-animations and experiments that <strong>set a brand apart</strong> from its competitors.',

    'Я пишу код, но смотрю на него глазами дизайнера. <strong>Технологий и языков много</strong>&nbsp;— это нужно, чтобы интерфейсы получались удобными, а не просто работали:':
      'I write code, but I look at it as a designer. <strong>There are a lot of tools and languages</strong> here — that is what it takes for an interface to be pleasant to use, not merely functional:',

    'Открыт к сотрудничеству <br>и новым проектам':
      'Open to work <br>and new projects',

    /* --- Кейсы ------------------------------------------------------- */
    'Сайт <strong>итальянского агентства недвижимости</strong>, разработанный под ключ: от структуры и дизайна до CMS. Настроил удобное управление объектами для клиентов агентства, проработал навигацию и подачу недвижимости. Сейчас веду работу над <a class="text-link" href="/pages/cases/merra-redesign.html">редизайном</a> главной страницы.':
      'A website for an <strong>Italian real estate agency</strong>, built end to end: from structure and design to the CMS. I set up convenient listings management for the agency, worked through the navigation and the way properties are presented. Right now I am working on a <a class="text-link" href="/pages/cases/merra-redesign.html">redesign</a> of the homepage.',
    '<strong>Сейчас:</strong> веду редизайн сайта в Figma на компонентах и автолейаутах — обновляю визуал, улучшаю навигацию и делаю подачу объектов ещё понятнее.':
      '<strong>Right now:</strong> I am redesigning the site in Figma on components and auto layouts — refreshing the visuals, improving the navigation and making the presentation of properties clearer still.',
    'Сайт для компании, которая занимается <strong>организацией мероприятий</strong>. Разработал структуру и дизайн, собрал всё на WordPress: удобное управление контентом, галерею проведённых событий и форму заявки. Проект я делал в ходе практики в колледже.':
      'A website for a company that runs <strong>events</strong>. I developed the structure and the design and built everything on WordPress: easy content management, a gallery of past events and an enquiry form. I made this project during my college placement.',
    'Интернет-магазин <strong>азиатских сладостей</strong> для блогера Jenniet с аудиторией 500 000 подписчиков. Собрал сайт на WordPress: каталог, корзина, заказы — полный цикл покупки. Отдельно прорабатывал целевую аудиторию: основной покупатель здесь — подростки.':
      'An online store of <strong>Asian sweets</strong> for the blogger Jenniet, who has an audience of 500,000 followers. I built the site on WordPress: catalogue, cart, orders — the full purchase cycle. I also worked separately on the target audience: the main customer here is a teenager.',
    'Полноценный <strong>e-commerce проект на C#</strong>: многостраничный сайт с регистрацией, личным кабинетом, корзиной и системой оплаты. Реализовал блок статей, скидочную систему и фильтрацию товаров — внутри около 56 скриптов, отвечающих за логику. Курсовой проект на платформе ASP.NET.':
      'A full <strong>e-commerce project in C#</strong>: a multi-page site with registration, a user account, a cart and a payment system. I implemented an articles section, a discount system and product filtering — around 56 scripts handle the logic inside. A coursework project on the ASP.NET platform.',
    'Концептуальный дизайн портфолио собственной студии. <strong>Девять страниц в светлой и тёмной версии</strong> — восемнадцать макетов, адаптив вплоть до 2560px и собранный UI Kit: компоненты, стили, состояния. Самый объёмный мой проект в Figma: около трёх месяцев работы.':
      'A concept portfolio design for my own studio. <strong>Nine pages in a light and a dark version</strong> — eighteen mockups, responsive design all the way to 2560px and a complete UI kit: components, styles, states. My largest Figma project: about three months of work.',
    'Макет сайта <strong>клининговой компании в Гродно</strong>, где всё подчинено одной цели: быстро и понятно объяснить услугу, а затем получить заявку. Сделан в стиле Bento UI и в фирменной стилистике самой компании.':
      'A website design for a <strong>cleaning company in Grodno</strong>, where everything serves one goal: explain the service quickly and clearly, then get the enquiry. Made in the Bento UI style and in the company’s own visual language.',
    'Конкурсный проект сайта, посвящённого <strong>Великой Отечественной войне</strong>: структура, визуал и подача исторического материала. Хронология событий, карта боевой славы, разделы с документами и судьбами. Проект занял <strong>первое место</strong>.':
      'A competition website dedicated to the <strong>Second World War</strong>: structure, visuals and the presentation of historical material. A timeline of the war, a map of military glory, sections with documents and personal stories. The project took <strong>first place</strong>.',
    'Редизайн главной страницы сайта <strong>итальянского агентства недвижимости</strong> в Figma. Обновил визуал, сохранив узнаваемую стилистику и цвета: подача объектов стала современнее, навигация — понятнее. Основной кейс с разработкой сайта — <a class="text-link" href="/pages/cases/merra-immobiliare.html">здесь</a>.':
      'A homepage redesign for an <strong>Italian real estate agency</strong> in Figma. I refreshed the visuals while keeping the recognisable style and colours: properties are presented more clearly, the navigation makes more sense. The main case study with the site build is <a class="text-link" href="/pages/cases/merra-immobiliare.html">here</a>.',
    '<strong>Сейчас:</strong> макет у клиента на рассмотрении. Если решение будет положительным, продолжу обновлять остальные страницы по этой же системе.':
      '<strong>Right now:</strong> the mockup is with the client for review. If the answer is yes, I will carry on updating the remaining pages on the same system.',
    'Создал <strong>всю айдентику</strong> проекта психологической помощи и задал визуальный стиль: главную страницу, иконки, иллюстрации и инфографику. Дальше команда продолжила разработку сайта самостоятельно — уже опираясь на готовую систему.':
      'I created the <strong>entire identity</strong> for a psychological support project and set its visual style: the homepage, icons, illustrations and infographics. The team then carried on building the site themselves — already working from a finished system.',
    'Баннер против <strong>киберпреступности</strong> для УВД Гродно. Сейчас он транслируется на кассах самообслуживания в магазинах «Евроопт» по всей Гродненской области. За работу получил грамоту от УВД, о проекте вышла статья в новостях.':
      'An anti-<strong>cybercrime</strong> banner for the Grodno police. It now runs on self-checkout terminals in Euroopt stores across the whole Grodno region. The work earned me a certificate of merit from the police, and the project was covered in the news.',
    'Дизайн наклейки против <strong>киберпреступности</strong> для продукции «Лидской муки». Сделал около тридцати вариантов иллюстраций и прошёл большой цикл правок. Сейчас наклейка выходит на продукции по всей Гродненской области.':
      'An anti-<strong>cybercrime</strong> sticker design for Lida Flour products. I made around thirty illustration variants and went through a long cycle of revisions. The sticker is now going out on products across the whole Grodno region.',
    'Визитка для <strong>блогера Jenniet</strong> с аудиторией 500 000 подписчиков — той же, для кого я собирал магазин азиатских сладостей. Задача была перенести экранный стиль бренда в печать так, чтобы визитка и сайт читались как одно целое.':
      'A business card for <strong>the blogger Jenniet</strong>, who has an audience of 500,000 followers — the same person I built the Asian sweets shop for. The task was to carry the brand’s on-screen style into print so that the card and the site read as one thing.',
    'Фирменный стиль перевозчика, который возит людей <strong>из Польши в Брест и обратно</strong>. Разработал логотип, полиграфию, визитки и рекламные плашки — и собрал всё в единую визуальную систему, которая работает в печати.':
      'Visual identity for a carrier that drives people <strong>from Poland to Brest and back</strong>. I developed the logo, the print materials, the business cards and the advertising panels — and pulled it all into one visual system that works in print.',
    'Брошюра <strong>«КиберВзгляд»</strong> из шести частей для международной онлайн-конференции «Интернет XXI века: технологии, которые меняют реальность». Проект посвящён профилактике киберпреступности и занял <strong>первое место</strong>.':
      'The six-part <strong>"CyberView"</strong> brochure for the international online conference "The Internet of the 21st Century: Technologies That Change Reality". The project is about cybercrime prevention and took <strong>first place</strong>.',
    'Серия постеров и баннеров по мотивам фильма <strong>I Origins</strong> — моего любимого. Проект для души, сделанный в период сильного увлечения фотошоп-артом. Главное, что он дал, — работа с композицией и цветом.':
      'A series of posters and banners inspired by the film <strong>I Origins</strong> — my favourite. A project made for its own sake, during a period when I was deep into photo art. What it mainly gave me was work with composition and colour.',
    'Рекламный постер для <strong>тренажёрного зала в Гродно</strong>. Работа висела в зале и публиковалась в инстаграме клуба. Сделана в период увлечения фотошоп-артом и сильно прокачала работу со светом и тенями.':
      'An advertising poster for a <strong>gym in Grodno</strong>. The work hung in the gym and was published on the club’s Instagram. Made during a period when I was deep into photo art, and it pushed my work with light and shadow a long way forward.',
    'Серия личных работ, сделанных <strong>без заказчика и без брифа</strong>. Здесь я пробовал приёмы, на которые не было времени в коммерческих проектах: коллаж, сложный свет, работу с фактурами и цветом.':
      'A series of personal works made <strong>with no client and no brief</strong>. Here I tried the techniques there was never time for in commercial projects: collage, complex light, work with textures and colour.',
    '<strong>3D-головоломка</strong>, где игрок управляет блоком на арене. Восемь уровней, магазин со скинами, система монет, плавные анимации — около двадцати механик. Проект собран на Unity с C# и URP, как курсовая работа в конце третьего курса.':
      'A <strong>3D puzzle game</strong> where the player controls a block on an arena. Eight levels, a skin shop, a coin system, smooth animation — around twenty mechanics. Built in Unity with C# and URP as coursework at the end of my third year.',
    '<strong>2D инди-аркада</strong> на C++ и библиотеке SFML. Пять уровней, главный герой — кот, который ищет свою вторую половинку в затерянном городе. В игре я сделал большой акцент на графику: персонажи и анимации проработаны отдельно. Курсовой проект конца второго курса, участвовал в конкурсе.':
      'A <strong>2D indie arcade game</strong> in C++ with the SFML library. Five levels; the main character is a cat searching for its other half in a lost city. I put a strong emphasis on the art: the characters and animation were worked through separately. Coursework from the end of my second year; it was entered in a competition.',
  },

  /* ======================================================================
     АТРИБУТЫ: подписи картинок и кнопок
     ====================================================================== */
  attrs: {
    'Иван Нестеренко':        'Ivan Nesterenko',
    'Основная навигация':     'Main navigation',
    'Мобильная навигация':    'Mobile navigation',
    'Навигация в подвале':    'Footer navigation',
    'Разделы работ':          'Work categories',
    'Открыть меню':           'Open menu',
    'Наверх':                 'Back to top',
    'Сайт Merra Immobiliare': 'Merra Immobiliare website',
    'Портфолио Nesterenko Studio': 'Nesterenko Studio portfolio',
    'Сайт event-агентства VibeX':  'VibeX event agency website',
    'Интернет-магазин Jenniet Home': 'Jenniet Home online shop',
    'Интернет-магазин BentoSkin':    'BentoSkin online shop',
    'Макет сайта BestClean Grodno':  'BestClean Grodno website design',
    'Макет сайта на тему Великой Отечественной войны': 'WWII memorial website design',
    'Редизайн сайта Merra':          'Merra website redesign',
    'Сайт психологической помощи SSPS': 'SSPS mental health support website',
    'Баннер против киберпреступности для УВД Гродно': 'Anti-cybercrime banner for the Grodno police',
    'Наклейка для продукции «Лидская мука»': 'Sticker design for Lida Flour products',
    'Визитка Jenniet':               'Jenniet business card',
    'Фирменный стиль компании перевозок Vittur': 'Visual identity for the transport company Vittur',
    'Брошюра «КиберВзгляд»':         'The CyberView brochure',
    'Баннеры по мотивам фильма I Origins': 'Banners inspired by the film I Origins',
    'Рекламный постер зала AllStarsGym':   'AllStarsGym advertising poster',
    'Сборник работ в фотошоп-арте':  'A collection of Photoshop art',
    '3D-головоломка JigSaw':         'JigSaw, a 3D puzzle game',
    '2D-аркада Neverland':           'Neverland, a 2D arcade game',

    /* --- Кейсы: подписи к картинкам ---------------------------------- */
    'Merra Immobiliare — бриф и исследование': 'Merra Immobiliare — brief and research',
    'Merra Immobiliare — прототип и структура': 'Merra Immobiliare — prototype and structure',
    'Merra Immobiliare — дизайн-концепция': 'Merra Immobiliare — design concept',
    'Merra Immobiliare — адаптив и ui kit': 'Merra Immobiliare — responsive design and ui kit',
    'Merra Immobiliare — разработка': 'Merra Immobiliare — development',
    'Merra Immobiliare — тестирование и запуск': 'Merra Immobiliare — testing and launch',
    'Merra Immobiliare — результат': 'Merra Immobiliare — result',
    'VibeX — бриф и исследование': 'VibeX — brief and research',
    'VibeX — прототип и структура': 'VibeX — prototype and structure',
    'VibeX — дизайн-концепция': 'VibeX — design concept',
    'VibeX — адаптив и ui kit': 'VibeX — responsive design and ui kit',
    'VibeX — разработка': 'VibeX — development',
    'VibeX — тестирование и запуск': 'VibeX — testing and launch',
    'VibeX — результат': 'VibeX — result',
    'Jenniet Home — бриф и исследование': 'Jenniet Home — brief and research',
    'Jenniet Home — прототип и структура': 'Jenniet Home — prototype and structure',
    'Jenniet Home — дизайн-концепция': 'Jenniet Home — design concept',
    'Jenniet Home — адаптив и ui kit': 'Jenniet Home — responsive design and ui kit',
    'Jenniet Home — разработка': 'Jenniet Home — development',
    'Jenniet Home — тестирование и запуск': 'Jenniet Home — testing and launch',
    'Jenniet Home — результат': 'Jenniet Home — result',
    'BentoSkin — бриф и исследование': 'BentoSkin — brief and research',
    'BentoSkin — прототип и структура': 'BentoSkin — prototype and structure',
    'BentoSkin — дизайн-концепция': 'BentoSkin — design concept',
    'BentoSkin — адаптив и ui kit': 'BentoSkin — responsive design and ui kit',
    'BentoSkin — разработка': 'BentoSkin — development',
    'BentoSkin — тестирование и запуск': 'BentoSkin — testing and launch',
    'BentoSkin — результат': 'BentoSkin — result',
    'Nesterenko Studio — бриф и исследование': 'Nesterenko Studio — brief and research',
    'Nesterenko Studio — прототип и структура': 'Nesterenko Studio — prototype and structure',
    'Nesterenko Studio — дизайн-концепция': 'Nesterenko Studio — design concept',
    'Nesterenko Studio — светлая и тёмная темы': 'Nesterenko Studio — light and dark themes',
    'Nesterenko Studio — адаптив и ui kit': 'Nesterenko Studio — responsive design and ui kit',
    'Nesterenko Studio — результат': 'Nesterenko Studio — result',
    'BestClean Grodno — бриф и исследование': 'BestClean Grodno — brief and research',
    'BestClean Grodno — прототип и структура': 'BestClean Grodno — prototype and structure',
    'BestClean Grodno — дизайн-концепция': 'BestClean Grodno — design concept',
    'BestClean Grodno — адаптив и ui kit': 'BestClean Grodno — responsive design and ui kit',
    'BestClean Grodno — результат': 'BestClean Grodno — result',
    'Сайт на тему ВОВ — бриф и исследование': 'WWII Memorial Website — brief and research',
    'Сайт на тему ВОВ — прототип и структура': 'WWII Memorial Website — prototype and structure',
    'Сайт на тему ВОВ — дизайн-концепция': 'WWII Memorial Website — design concept',
    'Сайт на тему ВОВ — адаптив и ui kit': 'WWII Memorial Website — responsive design and ui kit',
    'Сайт на тему ВОВ — результат': 'WWII Memorial Website — result',
    'Merra Redesign — бриф и исследование': 'Merra Redesign — brief and research',
    'Merra Redesign — прототип и структура': 'Merra Redesign — prototype and structure',
    'Merra Redesign — дизайн-концепция': 'Merra Redesign — design concept',
    'Merra Redesign — адаптив и ui kit': 'Merra Redesign — responsive design and ui kit',
    'Merra Redesign — результат': 'Merra Redesign — result',
    'SSPS — психологическая помощь — бриф и исследование':
      'SSPS — Psychological Support — brief and research',
    'SSPS — психологическая помощь — дизайн-концепция и айдентика':
      'SSPS — Psychological Support — design concept and identity',
    'SSPS — психологическая помощь — главная страница': 'SSPS — Psychological Support — homepage',
    'SSPS — психологическая помощь — графика: иконки, иллюстрации, инфографика':
      'SSPS — Psychological Support — graphics: icons, illustrations, infographics',
    'SSPS — психологическая помощь — передача команде':
      'SSPS — Psychological Support — handover to the team',
    'SSPS — психологическая помощь — результат': 'SSPS — Psychological Support — result',
    'УВД Гродно — бриф и исследование': 'Grodno Police — brief and research',
    'УВД Гродно — идея и эскизы': 'Grodno Police — concept and sketches',
    'УВД Гродно — отрисовка': 'Grodno Police — final artwork',
    'УВД Гродно — правки и согласование': 'Grodno Police — revisions and approval',
    'УВД Гродно — выпуск': 'Grodno Police — rollout',
    'УВД Гродно — результат': 'Grodno Police — result',
    'Лидская мука — бриф и исследование': 'Lida Flour — brief and research',
    'Лидская мука — идея и эскизы': 'Lida Flour — concept and sketches',
    'Лидская мука — отрисовка': 'Lida Flour — final artwork',
    'Лидская мука — правки и подготовка к печати': 'Lida Flour — revisions and print preparation',
    'Лидская мука — тираж': 'Lida Flour — production run',
    'Лидская мука — результат': 'Lida Flour — result',
    'Jenniet — визитка — бриф и исследование': 'Jenniet — Business Card — brief and research',
    'Jenniet — визитка — идея и эскизы': 'Jenniet — Business Card — concept and sketches',
    'Jenniet — визитка — отрисовка': 'Jenniet — Business Card — final artwork',
    'Jenniet — визитка — подготовка к печати': 'Jenniet — Business Card — print preparation',
    'Jenniet — визитка — результат': 'Jenniet — Business Card — result',
    'Vittur — перевозки — бриф и исследование': 'Vittur — Passenger Transport — brief and research',
    'Vittur — перевозки — идея и эскизы': 'Vittur — Passenger Transport — concept and sketches',
    'Vittur — перевозки — логотип и фирменный стиль':
      'Vittur — Passenger Transport — logo and visual identity',
    'Vittur — перевозки — полиграфия и реклама':
      'Vittur — Passenger Transport — print and advertising',
    'Vittur — перевозки — подготовка к печати': 'Vittur — Passenger Transport — print preparation',
    'Vittur — перевозки — результат': 'Vittur — Passenger Transport — result',
    'КиберВзгляд — идея и структура': 'CyberView — concept and structure',
    'КиберВзгляд — композиция и сетка': 'CyberView — composition and grid',
    'КиберВзгляд — графика и инфографика': 'CyberView — graphics and infographics',
    'КиберВзгляд — вёрстка и финал': 'CyberView — layout and final',
    'КиберВзгляд — результат': 'CyberView — result',
    'I Origins — постеры — идея и референсы': 'I Origins — Posters — concept and references',
    'I Origins — постеры — композиция и сборка': 'I Origins — Posters — composition and assembly',
    'I Origins — постеры — свет, цвет и детали': 'I Origins — Posters — light, colour and detail',
    'I Origins — постеры — финал и выдача': 'I Origins — Posters — final and delivery',
    'I Origins — постеры — результат': 'I Origins — Posters — result',
    'AllStarsGym — идея и референсы': 'AllStarsGym — concept and references',
    'AllStarsGym — композиция и сборка': 'AllStarsGym — composition and assembly',
    'AllStarsGym — свет, тени и цвет': 'AllStarsGym — light, shadow and colour',
    'AllStarsGym — финал и адаптация': 'AllStarsGym — final and adaptation',
    'AllStarsGym — результат': 'AllStarsGym — result',
    'Мои фотошоп-арты — идея и референсы': 'My Photoshop Art — concept and references',
    'Мои фотошоп-арты — композиция и сборка': 'My Photoshop Art — composition and assembly',
    'Мои фотошоп-арты — свет, цвет и детали': 'My Photoshop Art — light, colour and detail',
    'Мои фотошоп-арты — результат': 'My Photoshop Art — result',
    'JigSaw — идея и геймплей': 'JigSaw — concept and gameplay',
    'JigSaw — прототип механик': 'JigSaw — mechanics prototype',
    'JigSaw — уровни и баланс': 'JigSaw — levels and balance',
    'JigSaw — арт и визуал': 'JigSaw — art and visuals',
    'JigSaw — разработка': 'JigSaw — development',
    'JigSaw — тестирование и сборка': 'JigSaw — testing and build',
    'JigSaw — результат': 'JigSaw — result',
    'Neverland — идея и геймплей': 'Neverland — concept and gameplay',
    'Neverland — прототип механик': 'Neverland — mechanics prototype',
    'Neverland — арт и анимация': 'Neverland — art and animation',
    'Neverland — уровни': 'Neverland — levels',
    'Neverland — разработка и сборка': 'Neverland — development and build',
    'Neverland — результат': 'Neverland — result',
  },

  /* ======================================================================
     ЗАГОЛОВОК ВКЛАДКИ И ОПИСАНИЕ ДЛЯ ПОИСКОВИКОВ
     Ключ — адрес страницы. index.html считается за «/».
     ====================================================================== */
  pages: {
    '/': {
      ru: { title: 'Нестеренко Иван — дизайнер и разработчик',
            desc: 'Портфолио: сайты, UI/UX, фронтенд, брендинг и CMS.' },
      en: { title: 'Ivan Nesterenko — designer and developer',
            desc: 'Portfolio: websites, UI/UX, front-end, branding and CMS.' },
    },
    '/pages/about.html': {
      ru: { title: 'Обо мне — Нестеренко Иван',
            desc: 'Путь от первого макета в Figma до коммерческих проектов.' },
      en: { title: 'About — Ivan Nesterenko',
            desc: 'From a first mockup in Figma to commercial projects.' },
    },
    '/pages/projects.html': {
      ru: { title: 'Работы — Нестеренко Иван',
            desc: 'Сайты, UI/UX, брендинг, графика и личные проекты.' },
      en: { title: 'Work — Ivan Nesterenko',
            desc: 'Websites, UI/UX, branding, graphics and personal projects.' },
    },
    '/pages/cv.html': {
      ru: { title: 'Резюме — Нестеренко Иван',
            desc: 'Резюме: дизайнер и веб-разработчик из Гродно. Дизайн с 2020 года, разработка с 2023.' },
      en: { title: 'CV — Ivan Nesterenko',
            desc: 'CV: designer and web developer based in Grodno. Design since 2020, development since 2023.' },
    },
    '/pages/case.html': {
      ru: { title: 'Merra Immobiliare — кейс',
            desc: 'Сайт итальянского агентства недвижимости под ключ: структура, дизайн, CMS.' },
      en: { title: 'Merra Immobiliare — case study',
            desc: 'A turnkey website for an Italian real estate agency: structure, design, CMS.' },
    },
    '/pages/404.html': {
      ru: { title: 'Кейс в разработке — Нестеренко Иван',
            desc: 'Кейс ещё не собран. Загляните позже или посмотрите другие работы.' },
      en: { title: 'Case study in progress — Ivan Nesterenko',
            desc: 'This case study is not written up yet. Check back later or see other work.' },
    },
    '/404.html': {
      ru: { title: 'Страница не найдена — Нестеренко Иван',
            desc: 'Такой страницы на сайте нет.' },
      en: { title: 'Page not found — Ivan Nesterenko',
            desc: 'This page does not exist.' },
    },

    /* --- Кейсы ------------------------------------------------------- */
    '/pages/cases/merra-immobiliare.html': {
      ru: { title: 'Merra Immobiliare — кейс',
             desc:  'Сайт итальянского агентства недвижимости под ключ: структура, дизайн, WordPress и настройка управления объектами.' },
      en: { title: 'Merra Immobiliare — case study',
             desc:  'A turnkey website for an Italian real estate agency: structure, design, WordPress and a listings management panel.' },
    },
    '/pages/cases/vibex.html': {
      ru: { title: 'VibeX — кейс',
             desc:  'Сайт event-агентства на WordPress: структура, дизайн, галерея мероприятий и форма заявки.' },
      en: { title: 'VibeX — case study',
             desc:  'An event agency website on WordPress: structure, design, an event gallery and an enquiry form.' },
    },
    '/pages/cases/jenniet-home.html': {
      ru: { title: 'Jenniet Home — кейс',
             desc:  'Интернет-магазин азиатских сладостей на WordPress для блогера с аудиторией 500 000 подписчиков.' },
      en: { title: 'Jenniet Home — case study',
             desc:  'A WordPress online store of Asian sweets for a blogger with an audience of 500,000 followers.' },
    },
    '/pages/cases/bentoskin.html': {
      ru: { title: 'BentoSkin — кейс',
             desc:  'Многостраничный e-commerce на C# и ASP.NET: регистрация, личный кабинет, корзина, оплата, фильтрация и скидки.' },
      en: { title: 'BentoSkin — case study',
             desc:  'A multi-page e-commerce project in C# and ASP.NET: registration, user account, cart, payment, filtering and discounts.' },
    },
    '/pages/cases/nesterenko-studio.html': {
      ru: { title: 'Nesterenko Studio — кейс',
             desc:  'Концептуальный дизайн сайта студии: 9 страниц в светлой и тёмной теме, адаптив до 2560px, полный UI Kit.' },
      en: { title: 'Nesterenko Studio — case study',
             desc:  'A concept design for a studio website: 9 pages in light and dark themes, responsive up to 2560px, a full UI kit.' },
    },
    '/pages/cases/bestclean.html': {
      ru: { title: 'BestClean Grodno — кейс',
             desc:  'Макет сайта клининговой компании в Гродно: одна цель — объяснить услугу и получить заявку. Bento UI.' },
      en: { title: 'BestClean Grodno — case study',
             desc:  'A website design for a cleaning company in Grodno: one goal — explain the service and get the enquiry. Bento UI.' },
    },
    '/pages/cases/vov.html': {
      ru: { title: 'Сайт на тему ВОВ — кейс',
             desc:  'Конкурсный проект сайта о Великой Отечественной войне: хронология, карта боевой славы, подача исторического материала. Первое место.' },
      en: { title: 'WWII Memorial Website — case study',
             desc:  'A competition website about the Second World War: a timeline, a map of military glory, the presentation of historical material. First place.' },
    },
    '/pages/cases/merra-redesign.html': {
      ru: { title: 'Merra Redesign — кейс',
             desc:  'Редизайн главной страницы сайта итальянского агентства недвижимости Merra Immobiliare в Figma.' },
      en: { title: 'Merra Redesign — case study',
             desc:  'A homepage redesign for Merra Immobiliare, an Italian real estate agency, in Figma.' },
    },
    '/pages/cases/ssps.html': {
      ru: { title: 'SSPS — психологическая помощь — кейс',
             desc:  'Айдентика и главная страница сайта психологической помощи: иконки, иллюстрации, инфографика и визуальный стиль для команды.' },
      en: { title: 'SSPS — Psychological Support — case study',
             desc:  'Identity and homepage for a psychological support service: icons, illustrations, infographics and a visual style for the team.' },
    },
    '/pages/cases/uvd-grodno.html': {
      ru: { title: 'УВД Гродно — кейс',
             desc:  'Баннер против киберпреступности для УВД Гродно: транслируется на кассах самообслуживания «Евроопт» по области. Грамота и статья в новостях.' },
      en: { title: 'Grodno Police — case study',
             desc:  'An anti-cybercrime banner for the Grodno police: running on self-checkout terminals across the region. A certificate of merit and a news feature.' },
    },
    '/pages/cases/lidskaya-muka.html': {
      ru: { title: 'Лидская мука — кейс',
             desc:  'Дизайн наклейки против киберпреступности для продукции «Лидской муки»: около 30 вариантов иллюстраций, тираж по Гродненской области.' },
      en: { title: 'Lida Flour — case study',
             desc:  'An anti-cybercrime sticker design for Lida Flour products: around 30 illustration variants, in production across the Grodno region.' },
    },
    '/pages/cases/jenniet-card.html': {
      ru: { title: 'Jenniet — визитка — кейс',
             desc:  'Визитка для блогера Jenniet с аудиторией 500 000 подписчиков: продолжение фирменного стиля магазина в печати.' },
      en: { title: 'Jenniet — Business Card — case study',
             desc:  'A business card for the blogger Jenniet, with an audience of 500,000 followers: the shop’s identity carried into print.' },
    },
    '/pages/cases/vittur.html': {
      ru: { title: 'Vittur — перевозки — кейс',
             desc:  'Фирменный стиль перевозчика Vittur: логотип, полиграфия, визитки, рекламные плашки и брендирование в единой системе.' },
      en: { title: 'Vittur — Passenger Transport — case study',
             desc:  'Visual identity for the carrier Vittur: logo, print, business cards, advertising panels and branding in one system.' },
    },
    '/pages/cases/cyberview.html': {
      ru: { title: 'КиберВзгляд — кейс',
             desc:  'Брошюра «КиберВзгляд» из шести частей для международной конференции «Интернет XXI века». Первое место.' },
      en: { title: 'CyberView — case study',
             desc:  'The six-part "CyberView" brochure for the international conference "The Internet of the 21st Century". First place.' },
    },
    '/pages/cases/i-origins.html': {
      ru: { title: 'I Origins — постеры — кейс',
             desc:  'Серия постеров и баннеров по мотивам фильма I Origins: работа с композицией, цветом и фотошоп-артом.' },
      en: { title: 'I Origins — Posters — case study',
             desc:  'A series of posters and banners inspired by the film I Origins: work with composition, colour and photo art.' },
    },
    '/pages/cases/allstarsgym.html': {
      ru: { title: 'AllStarsGym — кейс',
             desc:  'Рекламный постер для тренажёрного зала AllStarsGym в Гродно: работа со светом, тенями и фотошоп-артом.' },
      en: { title: 'AllStarsGym — case study',
             desc:  'An advertising poster for the AllStarsGym gym in Grodno: work with light, shadow and photo art.' },
    },
    '/pages/cases/photoshop-art.html': {
      ru: { title: 'Мои фотошоп-арты — кейс',
             desc:  'Серия личных работ в фотошоп-арте: композиция, цвет, свет и коллаж без заказчика и дедлайнов.' },
      en: { title: 'My Photoshop Art — case study',
             desc:  'A series of personal works in photo art: composition, colour, light and collage with no client and no deadlines.' },
    },
    '/pages/cases/jigsaw.html': {
      ru: { title: 'JigSaw — кейс',
             desc:  '3D-головоломка на Unity и C#: 8 уровней, магазин скинов, система монет и около 20 игровых механик.' },
      en: { title: 'JigSaw — case study',
             desc:  'A 3D puzzle game in Unity and C#: 8 levels, a skin shop, a coin system and around 20 game mechanics.' },
    },
    '/pages/cases/neverland.html': {
      ru: { title: 'Neverland — кейс',
             desc:  '2D-аркада на C++ и SFML: пять уровней, кот в поисках своей половинки и сильный акцент на графику и анимацию.' },
      en: { title: 'Neverland — case study',
             desc:  'A 2D arcade game in C++ and SFML: five levels, a cat looking for its other half, and a strong emphasis on art and animation.' },
    },
  },
};
