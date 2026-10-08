/* ============================================
   DOMAINIK.RU — Страница лота
   Детали конкретного лота доступны в Telegram-боте
   ============================================ */
import { Link } from 'react-router-dom';

export default function AssetCard() {
  return (
    <div className="min-h-screen">
      {/* Хлебные крошки */}
      <section className="pt-28 pb-4">
        <div className="container">
          <div className="flex gap-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-text-muted)' }}>Главная</Link>
            <span>/</span>
            <Link to="/catalog" style={{ color: 'var(--color-text-muted)' }}>Лоты</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-accent)' }}>Детали лота</span>
          </div>
        </div>
      </section>

      {/* Основная информация */}
      <section className="pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-16">
            <div className="gold-line mx-auto" />
            
            <h1 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}
            >
              Детали лота <span style={{ color: 'var(--color-accent)' }}>в Telegram</span>
            </h1>
            
            <p className="text-lg mb-12 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Полная информация о лоте, включая метрики трафика, дохода, 
              due diligence отчёт и юридическую проверку — доступна в нашем 
              Telegram-боте. Это обеспечивает конфиденциальность продавцов 
              и защиту от недобросовестных действий.
            </p>

            {/* Что вы получите в боте */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
              {[
                { title: 'Полные метрики', desc: 'Трафик, доход, ИКС, возраст домена, источники посетителей' },
                { title: 'Due Diligence отчёт', desc: 'Проверка трафика, верификация дохода, технический аудит' },
                { title: 'Юридическая чистота', desc: 'Проверка на ТЗ-нарушения, судебные споры, историю домена' },
                { title: 'Скриншоты аналитики', desc: 'Данные из Яндекс.Метрики, Google Analytics, Search Console' },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-6 border"
                  style={{ 
                    borderColor: 'var(--color-border)',
                    background: 'var(--color-bg-card)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <h3 className="text-sm font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent-hover)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Получить детали в Telegram
              </a>
              <Link
                to="/catalog"
                className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                style={{
                  border: '1px solid var(--color-accent-border)',
                  color: 'var(--color-accent)',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 600,
                }}
              >
                Все лоты
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Эскроу-гарантия',
                  'Due Diligence',
                  'Юридическая проверка',
                  'Поддержка 24/7',
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-2">
                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                    <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как работает эскроу */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}
      >
        <div className="container">
          <h2 
            className="text-2xl mb-8 text-center"
            style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}
          >
            Как пройдёт сделка
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Заявка', desc: 'Оставляете заявку в боте' },
              { step: '2', title: 'Доступ', desc: 'Получаете полные данные' },
              { step: '3', title: 'Договор', desc: 'Подписываем электронный договор' },
              { step: '4', title: 'Эскроу', desc: 'Средства блокируются на счёте' },
              { step: '5', title: 'Передача', desc: 'Актив передан — оплата продавцу' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <div 
                  className="w-10 h-10 mx-auto mb-3 flex items-center justify-center"
                  style={{ 
                    border: '1px solid var(--color-accent-border)',
                    borderRadius: '50%',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontWeight: 600,
                  }}
                >
                  {item.step}
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text-primary)' }}>{item.title}</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
