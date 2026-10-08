/* ============================================
   DOMAINIK.RU — Восстановление сайтов (Site Recovery)
   Типы проблем, процесс, гарантии SLA, кейсы
   ============================================ */
import { Link } from 'react-router-dom';

export default function SiteRecovery() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section 
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              radial-gradient(ellipse at 60% 40%, rgba(212, 175, 55, 0.2) 0%, transparent 50%),
              linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)
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
              Site Recovery Service
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
              Восстановление
              <br />
              <span style={{ color: 'var(--color-accent)' }}>сайтов</span>
            </h1>
            <p 
              className="text-lg max-w-2xl mb-12 leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Ваш сайт взломан, сломан после обновления или потерял позиции 
              после миграции? Мы вернём его к жизни — с гарантией по SLA.
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
              Срочная помощь
            </Link>
          </div>
        </div>
      </section>

      {/* Типы проблем */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}
            >
              Типы проблем, которые мы решаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'После взлома',
                desc: 'Удаление вредоносного кода, закрытие уязвимостей, восстановление данных из бэкапов, усиление безопасности.',
                icon: '🛡',
                urgency: 'Срочно: 24-48ч'
              },
              {
                title: 'После сбоя',
                desc: 'Восстановление после неудачных обновлений, ошибок сервера, потери данных. Полная диагностика и фикс.',
                icon: '⚙',
                urgency: 'Стандарт: 3-5 дней'
              },
              {
                title: 'После миграции',
                desc: 'Восстановление позиций в поиске после переезда на новый хостинг, домен или CMS. SEO-реабилитация.',
                icon: '↗',
                urgency: 'Комплекс: 2-4 недели'
              },
            ].map((type, i) => (
              <div 
                key={i}
                className="p-8 border transition-all duration-300"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <span className="text-3xl mb-6 block">{type.icon}</span>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{type.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{type.desc}</p>
                <span 
                  className="text-xs tracking-wider px-3 py-1.5 inline-block"
                  style={{ 
                    color: 'var(--color-accent)',
                    border: '1px solid var(--color-accent-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.65rem'
                  }}
                >
                  {type.urgency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс восстановления (таймлайн) */}
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
              Процесс восстановления
            </h2>
          </div>

          {/* Вертикальный таймлайн */}
          <div className="max-w-2xl">
            {[
              { step: '01', title: 'Экстренная диагностика', desc: 'Определяем причину проблемы, оцениваем масштаб ущерба, формируем план.', time: '2-4 часа' },
              { step: '02', title: 'Стабилизация', desc: 'Останавливаем потери: отключаем заражённые компоненты, восстанавливаем из бэкапа.', time: '4-24 часа' },
              { step: '03', title: 'Полное восстановление', desc: 'Восстанавливаем функциональность, данные, настройки. Тестируем все системы.', time: '1-5 дней' },
              { step: '04', title: 'Усиление защиты', desc: 'Закрываем уязвимости, настраиваем мониторинг, обновляем пароли и доступы.', time: '1-2 дня' },
              { step: '05', title: 'Мониторинг', desc: '30 дней наблюдаем за стабильностью. Бесплатная поддержка при рецидиве.', time: '30 дней' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                {/* Линия таймлайна */}
                <div className="flex flex-col items-center">
                  <div 
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ 
                      border: '2px solid var(--color-accent)',
                      borderRadius: '50%',
                      color: 'var(--color-accent)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                    }}
                  >
                    {item.step}
                  </div>
                  {i < 4 && (
                    <div 
                      className="w-0.5 flex-1 mt-2"
                      style={{ background: 'var(--color-accent-border)', minHeight: '40px' }}
                    />
                  )}
                </div>
                {/* Контент */}
                <div className="pb-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-lg" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{item.title}</h3>
                    <span className="text-xs tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{item.time}</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Гарантии SLA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="gold-line" />
            <h2 
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}
            >
              Гарантии SLA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '< 4 часа', label: 'Время реакции на критический инцидент' },
              { metric: '99.5%', label: 'Успешность восстановления' },
              { metric: '30 дней', label: 'Бесплатная поддержка после' },
              { metric: '100%', label: 'Возврат при неудаче' },
            ].map((sla, i) => (
              <div 
                key={i}
                className="p-6 text-center border"
                style={{ 
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <p 
                  className="text-3xl mb-2"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent)',
                    fontWeight: 700
                  }}
                >
                  {sla.metric}
                </p>
                <p className="text-xs tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{sla.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Кейсы */}
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
              Кейсы восстановления
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                site: 'E-commerce, 50 000 товаров',
                problem: 'Взлом через уязвимый плагин. Внедрён майнер, заблокирован поисковиками.',
                result: 'Полная очистка за 18 часов. Восстановление позиций за 3 недели. Усиление безопасности.',
                time: '18 часов до стабилизации'
              },
              {
                site: 'Медиа-портал, 200 000 визитов/мес',
                problem: 'Неудачная миграция на новый хостинг. Потеря 70% трафика, сломанная вёрстка.',
                result: 'Восстановление DNS, исправление ссылок, 301-редиректы. Трафик восстановлен за 4 недели.',
                time: '4 недели до полного восстановления'
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
                <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: 'var(--color-accent)' }}>
                  {caseItem.site}
                </span>
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-error)' }}>Проблема:</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{caseItem.problem}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-success)' }}>Результат:</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{caseItem.result}</p>
                </div>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{caseItem.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
