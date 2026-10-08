/* ============================================
   DOMAINIK.RU — Контакты
   Email, телефон (как изображение), форма обратной связи
   Без авторизации/регистрации
   ============================================ */
import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* Имитация отправки */
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Заголовок */}
      <section className="pt-24 pb-12 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container">
          <div className="gold-line" />
          <h1 className="mb-4" style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 700,
          }}>
            Свяжитесь с нами
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            Бесплатная консультация по любым вопросам: продажа, покупка, 
            защита от троллей, восстановление сайтов.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Левая колонка — контактная информация */}
            <div>
              <h2 
                className="text-2xl mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}
              >
                Контактная информация
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                    Email
                  </p>
                  <a 
                    href="mailto:entrance@domaink.ru"
                    className="text-xl transition-colors hover:text-[var(--color-accent-hover)]"
                    style={{ 
                      fontFamily: 'var(--font-heading)',
                      fontStyle: 'italic',
                      color: 'var(--color-accent)',
                      fontWeight: 500
                    }}
                  >
                    entrance@domaink.ru
                  </a>
                </div>

                {/* Телефон — ТОЛЬКО как изображение (согласно ТЗ) */}
                <div>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                    Телефон
                  </p>
                  {/* Телефон представлен как изображение (SVG) — защита от парсинга ботами */}
                  <img 
                    src="/images/phone.svg" 
                    alt="Телефон для связи" 
                    className="h-12"
                    loading="lazy"
                  />
                </div>

                {/* Режим работы */}
                <div>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                    Режим работы
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Пн-Пт: 10:00 — 19:00 (МСК)
                    <br />
                    Срочные вопросы: круглосуточно
                  </p>
                </div>

                {/* Ответ */}
                <div>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                    Скорость ответа
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Среднее время ответа: 2 часа в рабочее время
                  </p>
                </div>
              </div>

              {/* Trust signals */}
              <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Эскроу-гарантии',
                    'NDA по запросу',
                    'Бесплатная консультация',
                    'Опыт с 2024 года',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span style={{ color: 'var(--color-accent)' }}>✓</span>
                      <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Правая колонка — форма обратной связи */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 
                    className="text-2xl mb-8"
                    style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}
                  >
                    Напишите нам
                  </h2>

                  {/* Имя */}
                  <div>
                    <label className="text-xs tracking-widest uppercase mb-2 block" style={{ color: 'var(--color-text-muted)' }}>
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Как к вам обращаться?"
                      className="w-full px-6 py-4 border text-sm transition-all duration-300 focus:border-[var(--color-accent)]"
                      style={{
                        background: 'var(--color-bg-card)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)',
                        borderRadius: 'var(--radius-sm)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs tracking-widest uppercase mb-2 block" style={{ color: 'var(--color-text-muted)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 border text-sm transition-all duration-300 focus:border-[var(--color-accent)]"
                      style={{
                        background: 'var(--color-bg-card)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)',
                        borderRadius: 'var(--radius-sm)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Тема */}
                  <div>
                    <label className="text-xs tracking-widest uppercase mb-2 block" style={{ color: 'var(--color-text-muted)' }}>
                      Тема обращения
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                      className="w-full px-6 py-4 border text-sm appearance-none cursor-pointer"
                      style={{
                        background: 'var(--color-bg-card)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)',
                        borderRadius: 'var(--radius-sm)',
                        outline: 'none',
                      }}
                    >
                      <option value="">Выберите тему</option>
                      <option value="buy">Хочу купить актив</option>
                      <option value="sell">Хочу продать актив</option>
                      <option value="patent">Защита от патентных троллей</option>
                      <option value="recovery">Восстановление сайта</option>
                      <option value="leads">Лидогенерация</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  {/* Сообщение */}
                  <div>
                    <label className="text-xs tracking-widest uppercase mb-2 block" style={{ color: 'var(--color-text-muted)' }}>
                      Сообщение
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Опишите вашу ситуацию или вопрос..."
                      rows={5}
                      className="w-full px-6 py-4 border text-sm transition-all duration-300 focus:border-[var(--color-accent)] resize-none"
                      style={{
                        background: 'var(--color-bg-card)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)',
                        borderRadius: 'var(--radius-sm)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Согласие */}
                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1" />
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      Я согласен с <a href="/legal/privacy" style={{ color: 'var(--color-accent)' }}>политикой конфиденциальности</a> и даю 
                      согласие на обработку персональных данных в соответствии с 152-ФЗ.
                    </p>
                  </div>

                  {/* Кнопка отправки */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                    style={{
                      background: 'var(--color-accent)',
                      color: 'var(--color-text-inverse)',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 600,
                    }}
                  >
                    Отправить сообщение
                  </button>
                </form>
              ) : (
                /* Сообщение об успешной отправке */
                <div 
                  className="p-12 border text-center"
                  style={{ 
                    borderColor: 'var(--color-accent-border)',
                    background: 'var(--color-accent-muted)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <span className="text-4xl mb-6 block">✓</span>
                  <h3 
                    className="text-2xl mb-4"
                    style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}
                  >
                    Сообщение отправлено
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                    Мы свяжемся с вами в течение 2 часов в рабочее время. 
                    Спасибо за обращение!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Отправить ещё →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
