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
  },
};
