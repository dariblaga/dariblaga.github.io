/* ============================================
   DOMAINIK.RU — Главная страница
   Editorial стиль: текст слева, наложение на фон
   Секции: Hero, Услуги, Соц. доказательство, Блог, CTA
   ============================================ */
import { Link } from 'react-router-dom';
import { FadeIn } from '../hooks/useInView';

export default function Home() {
  return (
    <div>
      {/* ===== HERO СЕКЦИЯ ===== 
          Editorial подход: большой заголовок слева, 
          текст накладывается на фоновое изображение */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        {/* Фоновый визуальный эффект — editorial стиль */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 75% 40%, rgba(212, 175, 55, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 25% 70%, rgba(212, 175, 55, 0.06) 0%, transparent 40%),
              radial-gradient(ellipse at 90% 80%, rgba(212, 175, 55, 0.04) 0%, transparent 30%),
              linear-gradient(135deg, #0f0f0f 0%, #141414 50%, #0f0f0f 100%)
            `
          }}
        />
        {/* Декоративные линии — editorial grid */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, var(--color-accent) 1px, transparent 1px),
              linear-gradient(var(--color-accent) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Декоративный элемент — золотая точка */}
        <div 
          className="absolute left-[15%] top-[20%] w-2 h-2 rounded-full opacity-40"
          style={{ background: 'var(--color-accent)' }}
        />
        <div 
          className="absolute right-[25%] top-[35%] w-1.5 h-1.5 rounded-full opacity-30"
          style={{ background: 'var(--color-accent)' }}
        />
        <div 
          className="absolute left-[40%] bottom-[25%] w-1 h-1 rounded-full opacity-20"
          style={{ background: 'var(--color-accent)' }}
        />

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl">
            {/* Золотая линия-акцент */}
            <div className="gold-line" />
            
            {/* Подзаголовок над заголовком */}
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ 
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500
              }}
            >
              Сервис сопровождения сделок — с 2024 года
            </p>

            {/* Главный заголовок — Playfair Display Italic */}
            <h1 
              className="mb-8 leading-[0.9]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
              }}
            >
              Продавайте.
              <br />
              <span style={{ color: 'var(--color-accent)' }}>Покупайте.</span>
              <br />
              Защищайте.
            </h1>

            {/* Подзаголовок */}
            <p 
              className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
              style={{ 
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
                fontWeight: 300
              }}
            >
              Профессиональное сопровождение сделок с готовым бизнесом, сайтами с трафиком 
              и премиум-доменами. Эскроу, AI-оценка, юридическая экспертиза 
              и защита от патентных троллей. Актуальные лоты — в Telegram-боте.
            </p>

            {/* CTA кнопки */}
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
                Лоты в Telegram
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
                Оценить актив бесплатно
              </Link>
            </div>
          </div>
        </div>

        {/* Декоративный элемент справа */}
        <div 
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          }}
        />
      </section>

      {/* ===== СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО ===== */}
      <section 
        className="border-y py-16"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Эскроу-гарантии', desc: 'Полная защита средств на всех этапах сделки' },
              { title: 'Юридическая проверка', desc: 'Due Diligence каждого актива перед размещением' },
              { title: 'Конфиденциальность', desc: 'NDA и защита данных на всех этапах работы' },
            ].map((stat, i) => (
              <div key={i}>
                <p 
                  className="text-xl md:text-2xl mb-3"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent)',
                    fontWeight: 600
                  }}
                >
                  {stat.title}
                </p>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== УСЛУГИ (6 направлений) ===== */}
      <section className="section">
        <div className="container">
          {/* Заголовок секции */}
          <FadeIn>
          <div className="mb-16 max-w-3xl">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 600,
              }}
            >
              Шесть направлений —
              <br />
              <span style={{ color: 'var(--color-text-muted)' }}>одна экосистема</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
              От покупки готового бизнеса до защиты от патентных троллей. 
              Полный цикл услуг для владельцев цифровых активов.
            </p>
          </div>
          </FadeIn>

          {/* Сетка услуг — editorial карточки */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--color-border)' }}>
            {[
              {
                title: 'Продажа бизнеса',
                desc: 'Готовый бизнес с командой, процессами и клиентами. Полная due diligence и эскроу-сопровождение.',
                link: 'https://t.me/domainik_bot',
                icon: '◆',
                external: true
              },
              {
                title: 'Продажа сайтов',
                desc: 'Сайты с трафиком и доходом. Проверенная монетизация и аналитика.',
                link: 'https://t.me/domainik_bot',
                icon: '◇',
                external: true
              },
              {
                title: 'Премиум-домены',
                desc: 'Короткие, запоминающиеся домены для брендов. .ru, .com, .io.',
                link: 'https://t.me/domainik_bot',
                icon: '○',
                external: true
              },
              {
                title: 'Лидогенерация',
                desc: 'Продажа лидов под ключ. Настройка воронок и трафика для вашего бизнеса.',
                link: '/leads',
                icon: '△'
              },
              {
                title: 'Восстановление сайтов',
                desc: 'Site Recovery: возврат после взломов, сбоев, неудачных миграций.',
                link: '/site-recovery',
                icon: '□'
              },
              {
                title: 'Защита от троллей',
                desc: 'Юридическая защита от патентных троллей и жалоб на товарные знаки.',
                link: '/patent-protection',
                icon: '⬡'
              },
            ].map((service, i) => {
              const content = (
                <>
                  <span 
                    className="text-2xl mb-6 block transition-colors duration-300"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {service.icon}
                  </span>
                  <h3 
                    className="text-xl mb-4 transition-colors duration-300"
                    style={{ 
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 500,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {service.desc}
                  </p>
                  <span 
                    className="inline-block mt-6 text-xs tracking-widest uppercase transition-all duration-300 group-hover:translate-x-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {service.external ? 'Смотреть лоты →' : 'Подробнее →'}
                  </span>
                </>
              );
              
              if (service.external) {
                return (
                  <a
                    key={i}
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 md:p-12 transition-all duration-500 block"
                    style={{ background: 'var(--color-bg-primary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-bg-hover)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--color-bg-primary)';
                    }}
                  >
                    {content}
                  </a>
                );
              }
              
              return (
                <Link
                  key={i}
                  to={service.link}
                  className="group p-8 md:p-12 transition-all duration-500 block"
                  style={{ background: 'var(--color-bg-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-bg-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-bg-primary)';
                  }}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AI-КАЛЬКУЛЯТОР (промо-блок) ===== */}
      <section 
        className="section relative overflow-hidden"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line" />
              <p 
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: 'var(--color-accent)' }}
              >
                AI-технология
              </p>
              <h2 
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Узнайте стоимость
                <br />
                <span style={{ color: 'var(--color-accent)' }}>вашего актива</span>
                <br />
                за 2 минуты
              </h2>
              <p 
                className="mb-8 leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Наш AI-калькулятор анализирует трафик, доход, возраст домена, 
                конкуренцию в нише и рыночные тренды. Получите предварительную 
                оценку стоимости вашего актива за 2 минуты.
              </p>
              <Link
                to="/calculator"
                className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  background: 'var(--color-accent)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                Запустить оценку
              </Link>
            </div>

            {/* Визуализация калькулятора */}
            <div 
              className="p-8 border"
              style={{ 
                background: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
                    Тип актива
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>Сайт с трафиком</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
                    Трафик/мес
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>45 000 визитов</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
                    Доход/мес
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>₽180 000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
                    Возраст
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>3 года</span>
                </div>
                <div 
                  className="pt-6 border-t"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
                      Оценка
                    </span>
                    <span 
                      className="text-2xl"
                      style={{ 
                        fontFamily: 'var(--font-heading)',
                        fontStyle: 'italic',
                        color: 'var(--color-accent)',
                        fontWeight: 700
                      }}
                    >
                      ₽5 400 000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ЭСКРОУ ПРОЦЕСС ===== */}
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
              Как работает
              <br />
              <span style={{ color: 'var(--color-accent)' }}>эскроу-сделка</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Due Diligence', desc: 'Проверяем трафик, доход, юридическую чистоту актива' },
              { step: '02', title: 'Договор', desc: 'Электронный договор с условиями сделки и гарантиями' },
              { step: '03', title: 'Эскроу', desc: 'Деньги блокируются на защищённом счёте до передачи' },
              { step: '04', title: 'Передача', desc: 'Передаём активы, подтверждаем — средства переводятся продавцу' },
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

      {/* ===== БЛОГ (превью статей) ===== */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="gold-line" />
              <h2 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Экспертный блог
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs tracking-widest uppercase hidden md:inline-block"
              style={{ color: 'var(--color-accent)' }}
            >
              Все статьи →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Защита',
                title: 'Как распознать патентного тролля и что делать',
                date: '15 янв 2026',
                read: '7 мин'
              },
              {
                category: 'Оценка',
                title: 'AI-оценка сайта: методология и точность',
                date: '8 янв 2026',
                read: '5 мин'
              },
              {
                category: 'Сделки',
                title: 'Эскроу-сделки: полный гайд для покупателей',
                date: '2 янв 2026',
                read: '10 мин'
              },
            ].map((post, i) => (
              <Link
                key={i}
                to="/blog"
                className="group block p-8 border transition-all duration-300"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-border)';
                  e.currentTarget.style.background = 'var(--color-bg-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.background = 'var(--color-bg-card)';
                }}
              >
                <span 
                  className="text-xs tracking-widest uppercase mb-4 block"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {post.category}
                </span>
                <h3 
                  className="text-lg mb-4 transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
                >
                  {post.title}
                </h3>
                <div className="flex gap-4">
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{post.date}</span>
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{post.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ГАРАНТИИ ===== */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line" />
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Почему <span style={{ color: 'var(--color-accent)' }}>нам доверяют</span>
              </h2>
              <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                Мы не просто площадка для объявлений. Мы — полноценный сервис 
                с юридической поддержкой, эскроу-гарантиями и AI-технологиями.
              </p>
              <div className="space-y-4">
                {[
                  'Эскроу-сделки с 100% защитой средств',
                  'Due Diligence каждого актива экспертами',
                  'Юридическая проверка на чистоту ТЗ',
                  'Поддержка на всех этапах сделки',
                  'Возврат средств при форс-мажоре',
                  'NDA и конфиденциальность данных',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span style={{ color: 'var(--color-accent)' }}>◆</span>
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Эскроу-защита', desc: 'Средства блокируются до подтверждения передачи актива' },
                { title: 'Экспертная проверка', desc: 'Каждый актив проходит due diligence перед сделкой' },
                { title: 'Юридическая чистота', desc: 'Проверка на ТЗ-нарушения и судебные споры' },
                { title: 'Гарантия возврата', desc: 'Полный возврат средств при форс-мажоре' },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="p-6 border"
                  style={{ 
                    borderColor: 'var(--color-border)',
                    background: 'var(--color-bg-card)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <p 
                    className="text-lg mb-2"
                    style={{ 
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 500,
                      color: 'var(--color-accent)'
                    }}
                  >
                    {stat.title}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ДЛЯ КОГО СЕРВИС (сегментация) ===== */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)' }}
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
              Для кого <span style={{ color: 'var(--color-text-muted)' }}>мы работаем</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--color-border)' }}>
            {[
              {
                segment: 'Покупателям',
                desc: 'Инвесторам, арбитражникам, предпринимателям. Проверенные активы с полной due diligence. Все лоты — в Telegram-боте.',
                cta: 'Лоты в Telegram',
                link: 'https://t.me/domainik_bot',
                icon: '↓',
                external: true,
              },
              {
                segment: 'Продавцам',
                desc: 'Владельцам сайтов и бизнесов. AI-оценка, быстрый выход на аудиторию покупателей.',
                cta: 'Оценить актив',
                link: '/calculator',
                icon: '↑',
              },
              {
                segment: 'Защита',
                desc: 'Тем, кто столкнулся с претензиями по ТЗ. Юридическая экспертиза и сопровождение.',
                cta: 'Диагностика',
                link: '/patent-protection',
                icon: '⛊',
              },
            ].map((seg, i) => {
              const content = (
                <>
                  <span className="text-3xl mb-6 block" style={{ color: 'var(--color-accent)' }}>{seg.icon}</span>
                  <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                    {seg.segment}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                    {seg.desc}
                  </p>
                  <span 
                    className="text-xs tracking-widest uppercase transition-all duration-300 group-hover:translate-x-2 inline-block"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {seg.cta} →
                  </span>
                </>
              );
              
              if (seg.external) {
                return (
                  <a
                    key={i}
                    href={seg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-10 transition-all duration-500 block"
                    style={{ background: 'var(--color-bg-primary)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-bg-hover)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-bg-primary)'; }}
                  >
                    {content}
                  </a>
                );
              }
              
              return (
                <Link
                  key={i}
                  to={seg.link}
                  className="group p-10 transition-all duration-500 block"
                  style={{ background: 'var(--color-bg-primary)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-bg-hover)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-bg-primary)'; }}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ОТЗЫВЫ КЛИЕНТОВ ===== */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)' }}
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
              Что говорят <span style={{ color: 'var(--color-text-muted)' }}>клиенты</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: 'Продал сайт через эскроу Domainik. Весь процесс занял 3 недели — от листинга до выплаты. Due diligence провели за 2 дня.',
                author: 'Алексей К.',
                role: 'Вебмастер, 15 сайтов в портфеле',
              },
              {
                text: 'Обратился из-за жалобы на товарный знак. За 12 дней сняли блокировку хостинга. Профессиональный подход, всё объяснили.',
                author: 'Марина С.',
                role: 'Владелица интернет-магазина',
              },
              {
                text: 'Купил бизнес через платформу. Юридическая проверка была thorough — нашли даже то, о чём продавец умолчал. Рекомендую.',
                author: 'Дмитрий В.',
                role: 'Инвестор, digital-активы',
              },
            ].map((review, i) => (
              <div 
                key={i}
                className="p-8 border"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                {/* Звёзды */}
                <div className="mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  «{review.text}»
                </p>
                <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{review.author}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-line" />
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Частые <span style={{ color: 'var(--color-text-muted)' }}>вопросы</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Ответы на самые популярные вопросы о работе платформы, 
                эскроу-сделках и дополнительных услугах.
              </p>
            </div>
            <div className="space-y-0">
              {[
                { q: 'Как работает эскроу-сделка?', a: 'Деньги покупателя блокируются на защищённом счёте. После подтверждения передачи активов средства переводятся продавцу. Полная безопасность для обеих сторон.' },
                { q: 'Сколько стоит размещение актива?', a: 'Базовое размещение бесплатно. Комиссия взимается только при успешной сделке (3-5% в зависимости от типа актива).' },
                { q: 'Как быстро проходит due diligence?', a: 'Стандартная проверка занимает 2-5 рабочих дней. Для срочных сделок доступен экспресс-режим (24-48 часов).' },
                { q: 'Что делать, если пришла претензия по ТЗ?', a: 'Не паникуйте. Запишитесь на бесплатную диагностику — мы оценим легитимность претензии и разработаем стратегию защиты.' },
              ].map((faq, i) => (
                <div key={i} className="py-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <h4 className="text-sm font-medium mb-3" style={{ color: 'var(--color-text-primary)' }}>
                    {faq.q}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ФИНАЛЬНЫЙ CTA ===== */}
      <section 
        className="section text-center"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <div className="container max-w-3xl">
          <h2 
            className="mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 600,
            }}
          >
            Готовы начать?
          </h2>
          <p 
            className="text-lg mb-12"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Получите бесплатную консультацию эксперта или оцените свой актив с помощью AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-text-inverse)',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 600,
              }}
            >
              Связаться с нами
            </Link>
            <Link
              to="/calculator"
              className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                border: '1px solid var(--color-accent-border)',
                color: 'var(--color-accent)',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 600,
              }}
            >
              AI-оценка
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
