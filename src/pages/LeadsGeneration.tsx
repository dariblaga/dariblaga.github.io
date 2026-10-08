/* ============================================
   DOMAINIK.RU — Лидогенерация
   Продажа лидов под ключ, настройка воронок
   ============================================ */
import { Link } from 'react-router-dom';

export default function LeadsGeneration() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center" style={{ background: 'var(--color-bg-primary)' }}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)'
          }}
        />
        <div className="container relative z-10 py-32">
          <div className="max-w-4xl">
            <div className="gold-line" />
            <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: 'var(--color-accent)' }}>
              Лидогенерация под ключ
            </p>
            <h1 className="mb-8 leading-[0.95]" style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            }}>
              Продажи
              <br />
              <span style={{ color: 'var(--color-accent)' }}>лидов</span>
            </h1>
            <p className="text-lg max-w-2xl mb-12 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Генерируем целевых лидов для вашего бизнеса. Настройка рекламных кампаний, 
              создание лендингов, оптимизация конверсии. Оплата за результат.
            </p>
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
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>

      {/* Что мы предлагаем */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}>
              Что входит в услугу
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Анализ ниши', desc: 'Изучаем конкурентов, целевую аудиторию, точки роста. Формируем стратегию.' },
              { title: 'Создание лендингов', desc: 'Разрабатываем конверсионные посадочные страницы под вашу нишу.' },
              { title: 'Настройка трафика', desc: 'Яндекс.Директ, VK Ads, таргет. A/B тестирование объявлений.' },
              { title: 'CRM-интеграция', desc: 'Подключаем CRM, настраиваем автоматизацию, отслеживание лидов.' },
              { title: 'Оптимизация', desc: 'Еженедельная аналитика, оптимизация стоимости лида, масштабирование.' },
              { title: 'Отчётность', desc: 'Прозрачные отчёты: стоимость лида, конверсия, ROI по каждому каналу.' },
            ].map((item, i) => (
              <div key={i} className="p-8 border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-md)' }}>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ниши */}
      <section className="section border-t" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}>
              Работаем с нишами
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Финансы', 'Недвижимость', 'Медицина', 'Юриспруденция', 'Образование', 'E-commerce', 'B2B услуги', 'Страхование'].map((niche, i) => (
              <div key={i} className="p-4 text-center border" style={{ borderColor: 'var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{niche}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container max-w-2xl">
          <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}>
            Готовы получать лидов?
          </h2>
          <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Оставьте заявку — проведём бесплатный аудит вашей ниши и рассчитаем стоимость лида.
          </p>
          <Link
            to="/contacts"
            className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-text-inverse)',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
            }}
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </div>
  );
}
