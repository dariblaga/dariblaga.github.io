/* ============================================
   DOMAINIK.RU — Страница "Актуальные лоты"
   Все лоты представлены в Telegram-боте
   из-за возможных санкций поисковых систем
   ============================================ */
import { Link } from 'react-router-dom';

export default function Catalog() {
  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section 
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        {/* Фоновый эффект */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              radial-gradient(ellipse at 70% 40%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 30% 70%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
              linear-gradient(135deg, #0f0f0f 0%, #141414 100%)
            `
          }}
        />

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl">
            <div className="gold-line" />
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: 'var(--color-accent)' }}
            >
              Telegram-бот
            </p>
            <h1 
              className="mb-8 leading-[0.95]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              }}
            >
              Актуальные лоты
              <br />
              <span style={{ color: 'var(--color-accent)' }}>в Telegram</span>
            </h1>
            <p 
              className="text-lg max-w-2xl mb-12 leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Все предложения по продаже бизнеса, сайтов и доменов доступны 
              через нашего Telegram-бота. Мгновенные уведомления о новых лотах, 
              фильтрация по параметрам и прямая связь с менеджером.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/domainik_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase text-center transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  background: 'var(--color-accent)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: 'var(--radius-sm)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent-hover)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Открыть Telegram-бот
              </a>
              <Link
                to="/calculator"
                className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase text-center transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  border: '1px solid var(--color-accent-border)',
                  color: 'var(--color-accent)',
                  borderRadius: 'var(--radius-sm)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.background = 'var(--color-accent-muted)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-border)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Оценить свой актив
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Почему Telegram */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}
      >
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 600,
              }}
            >
              Почему лоты <span style={{ color: 'var(--color-text-muted)' }}>в Telegram</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Конфиденциальность',
                desc: 'Информация о продаваемых активах не индексируется поисковыми системами. Полная приватность для продавцов.',
                icon: '🔒'
              },
              {
                title: 'Мгновенные уведомления',
                desc: 'Получайте push-уведомления о новых лотах, подходящих под ваши критерии. Не упустите выгодное предложение.',
                icon: '⚡'
              },
              {
                title: 'Прямая связь',
                desc: 'Общайтесь с менеджером напрямую в боте. Задавайте вопросы, запрашивайте дополнительные данные, договаривайтесь о сделке.',
                icon: '💬'
              },
            ].map((item, i) => (
              <div 
                key={i}
                className="p-8 border transition-all duration-300"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <span className="text-3xl mb-6 block">{item.icon}</span>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что доступно в боте */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 600,
              }}
            >
              Что доступно <span style={{ color: 'var(--color-accent)' }}>в боте</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Готовый бизнес',
                items: [
                  'Интернет-магазины с оборотом',
                  'SaaS-сервисы с подпиской',
                  'Агентства и студии',
                  'Контентные проекты',
                ]
              },
              {
                category: 'Сайты с трафиком',
                items: [
                  'Информационные порталы',
                  'SEO-проекты с монетизацией',
                  'Нишевые сайты',
                  'PBN и сетки сайтов',
                ]
              },
              {
                category: 'Премиум-домены',
                items: [
                  'Короткие домены .ru / .com',
                  'Брендовые имена',
                  'Ключевые слова в домене',
                  'Исторические домены',
                ]
              },
              {
                category: 'Функции бота',
                items: [
                  'Фильтрация по нише и бюджету',
                  'Уведомления о новых лотах',
                  'Запрос due diligence отчёта',
                  'Связь с менеджером',
                ]
              },
            ].map((block, i) => (
              <div 
                key={i}
                className="p-8 border"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <h3 
                  className="text-lg mb-4"
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 500,
                    color: 'var(--color-accent)'
                  }}
                >
                  {block.category}
                </h3>
                <ul className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span style={{ color: 'var(--color-accent)', fontSize: '0.7rem' }}>◆</span>
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как начать */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}
      >
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 600,
              }}
            >
              Как начать
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Запустите бота', desc: 'Нажмите кнопку ниже или найдите @domainik_bot в Telegram' },
              { step: '02', title: 'Настройте фильтры', desc: 'Укажите интересующие ниши, бюджет, тип актива' },
              { step: '03', title: 'Получайте лоты', desc: 'Бот будет присылать подходящие предложения' },
              { step: '04', title: 'Свяжитесь с нами', desc: 'Задайте вопросы менеджеру прямо в боте' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <span 
                  className="text-5xl mb-4 block"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent)',
                    opacity: 0.5,
                    fontWeight: 700
                  }}
                >
                  {item.step}
                </span>
                <h4 
                  className="text-lg mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
                >
                  {item.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Примеры категорий (без конкретных лотов) */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 600,
              }}
            >
              Примеры <span style={{ color: 'var(--color-text-muted)' }}>категорий</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Конкретные лоты с ценами и метриками доступны только в Telegram-боте. 
              Ниже — примеры категорий, которые вы найдёте.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: 'Бизнес',
                range: 'от ₽500 000 до ₽50 000 000',
                examples: 'E-commerce, SaaS, агентства',
                icon: '◆'
              },
              {
                type: 'Сайты',
                range: 'от ₽100 000 до ₽15 000 000',
                examples: 'С трафиком 10K-500K/мес',
                icon: '◇'
              },
              {
                type: 'Домены',
                range: 'от ₽50 000 до ₽10 000 000',
                examples: '.ru, .com, короткие имена',
                icon: '○'
              },
            ].map((cat, i) => (
              <div 
                key={i}
                className="p-8 border text-center"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <span className="text-3xl mb-4 block" style={{ color: 'var(--color-accent)' }}>{cat.icon}</span>
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                  {cat.type}
                </h3>
                <p className="text-sm mb-2" style={{ color: 'var(--color-accent)' }}>{cat.range}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{cat.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section 
        className="section text-center border-t"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}
      >
        <div className="container max-w-3xl">
          <h2 
            className="mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 600,
            }}
          >
            Готовы смотреть лоты?
          </h2>
          <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Перейдите в Telegram-бот, чтобы увидеть актуальные предложения, 
            настроить фильтры и связаться с менеджером.
          </p>
          <a
            href="https://t.me/domainik_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-text-inverse)',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
            }}
          >
            Открыть Telegram-бот
          </a>
        </div>
      </section>
    </div>
  );
}
