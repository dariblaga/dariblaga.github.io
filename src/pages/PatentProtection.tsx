/* ============================================
   DOMAINIK.RU — Защита от патентных троллей
   Дифференциатор: визуализация проблемы, процесс, кейсы
   ============================================ */
import { Link } from 'react-router-dom';

export default function PatentProtection() {
  return (
    <div className="min-h-screen">
      {/* Hero — визуализация проблемы */}
      <section 
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        {/* Фоновый эффект — тревожный красный градиент */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(ellipse at 80% 30%, rgba(248, 113, 113, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)
            `
          }}
        />

        <div className="container relative z-10 py-32">
          <div className="max-w-4xl">
            <div className="gold-line" />
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: 'var(--color-error)' }}
            >
              Вам пришла претензия?
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
              Защита от
              <br />
              <span style={{ color: 'var(--color-accent)' }}>патентных троллей</span>
            </h1>
            <p 
              className="text-lg max-w-2xl mb-12 leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Получили жалобу на товарный знак? Ваш сайт заблокирован хостингом 
              или поисковой выдачей? Мы поможем оспорить необоснованные претензии 
              и защитить ваш бизнес.
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
              Бесплатная диагностика
            </Link>
          </div>
        </div>
      </section>

      {/* Типичные проблемы */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}
            >
              С чем мы работаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Жалоба на товарный знак',
                desc: 'Правообладатель утверждает, что ваш домен/контент нарушает его ТЗ. Hoster или поисковик заблокировал ресурс.',
                icon: '⚠'
              },
              {
                title: 'Обратный киберсквоттинг',
                desc: 'Компания пытается отсудить ваш домен через UDRP/суд, хотя вы используете его добросовестно.',
                icon: '⚖'
              },
              {
                title: 'Претензии от хостинга',
                desc: 'Хостинг-провайдер получил жалобу и угрожает отключением сайта без разбирательства.',
                icon: '⊘'
              },
              {
                title: 'Блокировка в поиске',
                desc: 'Ваш сайт удалён из выдачи Яндекс/Google по жалобе на интеллектуальную собственность.',
                icon: '✕'
              },
            ].map((problem, i) => (
              <div 
                key={i}
                className="p-8 border transition-all duration-300"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <span className="text-2xl mb-4 block" style={{ color: 'var(--color-accent)' }}>{problem.icon}</span>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{problem.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}
      >
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}
            >
              Как мы защищаем
            </h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Отлаженный процесс, который мы отработали на 200+ делах
            </p>
          </div>

          <div className="space-y-0">
            {[
              { step: '01', title: 'Диагностика', desc: 'Анализируем претензию, проверяем легитимность ТЗ, оцениваем риски. Бесплатно.', time: '1-2 дня' },
              { step: '02', title: 'Стратегия', desc: 'Разрабатываем план защиты: контр-уведомление, переговоры или судебная защита.', time: '2-3 дня' },
              { step: '03', title: 'Действия', desc: 'Подаём контр-претензии, ведём переговоры, представляем ваши интересы.', time: '2-4 недели' },
              { step: '04', title: 'Результат', desc: 'Снятие блокировки, восстановление сайта, компенсация убытков (если применимо).', time: 'Итого: 2-6 недель' },
            ].map((item, i) => (
              <div 
                key={i}
                className="flex gap-8 py-8 border-b last:border-b-0"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <span 
                  className="text-4xl flex-shrink-0"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent)',
                    opacity: 0.6,
                    fontWeight: 700
                  }}
                >
                  {item.step}
                </span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{item.title}</h3>
                    <span className="text-xs tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{item.time}</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Кейсы (до/после) */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}
            >
              Кейсы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                client: 'Интернет-магазин',
                problem: 'Жалоба от крупного бренда на использование схожего названия в домене. Сайт заблокирован хостингом.',
                result: 'Доказали добросовестное использование. Блокировка снята за 12 дней. Домен сохранён.',
                time: '12 дней'
              },
              {
                client: 'Медиа-портал',
                problem: 'Удаление из поисковой выдачи Яндекс по жалобе на контент (фотографии). Потеря 80% трафика.',
                result: 'Подана контр-претензия с доказательством лицензирования. Выдача восстановлена за 3 недели.',
                time: '21 день'
              },
            ].map((caseItem, i) => (
              <div 
                key={i}
                className="p-8 border"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <span 
                  className="text-xs tracking-widest uppercase mb-4 block"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {caseItem.client}
                </span>
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-error)' }}>Проблема:</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{caseItem.problem}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-success)' }}>Результат:</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{caseItem.result}</p>
                </div>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Срок: {caseItem.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section 
        className="section border-t"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-secondary)' }}
      >
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}
            >
              Тарифы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Диагностика',
                price: 'Бесплатно',
                features: ['Анализ претензии', 'Оценка рисков', 'Рекомендации', 'Без обязательств'],
                cta: 'Получить'
              },
              {
                name: 'Стандарт',
                price: 'от ₽50 000',
                features: ['Всё из «Диагностики»', 'Контр-претензия', 'Переговоры', 'Снятие блокировки'],
                cta: 'Выбрать',
                featured: true
              },
              {
                name: 'Полная защита',
                price: 'от ₽150 000',
                features: ['Всё из «Стандарт»', 'Судебное представительство', 'UDRP-защита', 'Гарантия результата'],
                cta: 'Выбрать'
              },
            ].map((plan, i) => (
              <div 
                key={i}
                className="p-8 border transition-all duration-300"
                style={{ 
                  borderColor: plan.featured ? 'var(--color-accent)' : 'var(--color-border)',
                  background: plan.featured ? 'var(--color-bg-primary)' : 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: plan.featured ? 'var(--shadow-gold)' : 'none'
                }}
              >
                <h3 
                  className="text-xl mb-4"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
                >
                  {plan.name}
                </h3>
                <p 
                  className="text-2xl mb-6"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent)',
                    fontWeight: 600
                  }}
                >
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-sm flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-accent)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacts"
                  className="block w-full text-center px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    background: plan.featured ? 'var(--color-accent)' : 'transparent',
                    color: plan.featured ? 'var(--color-text-inverse)' : 'var(--color-accent)',
                    border: `1px solid ${plan.featured ? 'var(--color-accent)' : 'var(--color-accent-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
