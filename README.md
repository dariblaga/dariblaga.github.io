# Domainik.ru — Готовый сайт для загрузки на хостинг

## 📦 Что включено

Полностью готовый к работе сайт сервиса сопровождения сделок с цифровыми активами.

**Структура папки `dist/`:**
```
dist/
├── index.html              # Главная страница (SPA)
├── sitemap.xml             # Карта сайта для поисковиков
├── robots.txt              # Инструкции для поисковых ботов
├── .htaccess               # Конфигурация Apache
├── assets/
│   ├── index-*.js          # JavaScript bundle
│   └── index-*.css         # Стили
└── images/
    └── phone.svg           # Телефон как изображение
```

## 🚀 Как загрузить на хостинг

### Вариант 1: Обычный хостинг (shared hosting)

1. **Подключитесь к хостингу** через FTP/SFTP или файловый менеджер
2. **Загрузите содержимое папки `dist/`** в корневую директорию сайта (обычно `public_html/` или `www/`)
3. **Настройте `.htaccess`** для SPA (если требуется):

```apache
# .htaccess для SPA на Apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Вариант 2: VPS/VDS (Nginx)

1. **Загрузите файлы** в директорию сайта (например, `/var/www/domainik.ru/`)
2. **Настройте Nginx**:

```nginx
server {
    listen 80;
    server_name domainik.ru www.domainik.ru;
    root /var/www/domainik.ru;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Вариант 3: Netlify / Vercel / Cloudflare Pages

1. **Загрузите папку `dist/`** через интерфейс или CLI
2. **Настройте redirect** для SPA (обычно автоматически)

## 🔗 Временная ссылка для просмотра

После сборки проект автоматически обслуживается по временной ссылке, которую предоставляет система. 

**Для локального просмотра:**
```bash
# Если у вас установлен Node.js
npx serve dist

# Или используйте Python
cd dist && python -m http.server 8000
```

Затем откройте в браузере: `http://localhost:8000` (или другой порт)

## ⚙️ Что нужно настроить перед запуском

### 1. Telegram-бот
Замените `@domainik_bot` на реальный username вашего бота:
- Файл: `src/pages/Catalog.tsx` (строки с `href="https://t.me/domainik_bot"`)
- Файл: `src/pages/Home.tsx` (CTA-кнопки)
- Файл: `src/pages/AssetCard.tsx`

### 2. Контактная информация
- **Email:** `entrance@domaink.ru` (уже настроен)
- **Телефон:** `+7 (977) 495-01-77` (отображается как SVG-изображение для защиты от парсинга)

### 3. Домен
Настройте DNS-записи для вашего домена:
```
A    @    <IP-адрес хостинга>
CNAME www  domainik.ru
```

### 4. SSL-сертификат
Установите бесплатный SSL через Let's Encrypt:
```bash
# Для VPS с Certbot
sudo certbot --nginx -d domainik.ru -d www.domainik.ru
```

## 📊 Структура сайта

### Страницы:
- **/** — Главная (Hero, Услуги, Соц. доказательство, FAQ, Блог)
- **/catalog** — Лоты (лендинг с CTA в Telegram-бот)
- **/calculator** — AI-калькулятор оценки активов
- **/patent-protection** — Защита от патентных троллей
- **/site-recovery** — Восстановление сайтов
- **/leads** — Лидогенерация
- **/blog** — Блог со статьями
- **/contacts** — Контакты (форма обратной связи)
- **/legal/:doc** — Правовые документы (privacy, terms, offerta, consent)

### Ключевые особенности:
- ✅ Темная тема с золотыми акцентами (#D4AF37)
- ✅ Шрифты: Playfair Display (заголовки) + Raleway (текст)
- ✅ Editorial минимализм, левосторонняя верстка
- ✅ Адаптивный дизайн (mobile-first)
- ✅ SEO-оптимизация (Schema.org, Open Graph, meta-теги)
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Телефон как изображение (защита от парсинга)
- ✅ Без авторизации/регистрации
- ✅ Все лоты через Telegram-бот

## 🎨 Дизайн-система

**Цвета:**
- Фон: `#0f0f0f` (основной), `#1a1a1a` (вторичный)
- Текст: `#e8e8e8` (основной), `#a0a0a0` (вторичный)
- Акцент: `#D4AF37` (золотой)

**Типографика:**
- Заголовки: Playfair Display (italic, 600-700)
- Текст: Raleway (300-600)

**Отступы:**
- Широкие editorial-отступы (4rem-10rem)
- Золотые линии-акценты (gold-line)

## 📈 SEO-чеклист после запуска

- [ ] Проверить индексацию в Яндекс.Вебмастер и Google Search Console
- [ ] Загрузить sitemap.xml
- [ ] Настроить robots.txt
- [ ] Проверить микроразметку Schema.org
- [ ] Проверить Open Graph теги
- [ ] Настроить аналитику (Яндекс.Метрика, Google Analytics)
- [ ] Проверить скорость загрузки (PageSpeed Insights)
- [ ] Проверить мобильную версию

## 🔧 Технические детали

**Стек:**
- React 18 + TypeScript
- Vite (сборщик)
- Tailwind CSS (стилизация)
- React Router (маршрутизация)

**Производительность:**
- Bundle size: ~280 KB (JS) + ~22 KB (CSS)
- Gzip: ~74 KB (JS) + ~5 KB (CSS)
- Lighthouse score: 90+ (ожидаемый)

**Безопасность:**
- Телефон как SVG (защита от парсинга ботами)
- Нет форм с паролями
- HTTPS (обязательно настроить)
- CSP headers (рекомендуется добавить)

## 📞 Поддержка

**Email:** entrance@domaink.ru

**Документация:**
- Политика конфиденциальности: `/legal/privacy`
- Пользовательское соглашение: `/legal/terms`
- Публичная оферта: `/legal/offerta`
- Согласие на обработку ПД: `/legal/consent`

---

**Готово к запуску!** 🚀

Загрузите папку `dist/` на хостинг и настройте домен.
