/* ============================================
   DOMAINIK.RU — AI-калькулятор оценки активов
   Интерактивная форма оценки с "общением" AI
   ============================================ */
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Calculator() {
  /* Состояние формы — пошаговый AI-диалог */
  const [step, setStep] = useState(1);
  const [assetType, setAssetType] = useState('');
  const [traffic, setTraffic] = useState('');
  const [income, setIncome] = useState('');
  const [age, setAge] = useState('');
  const [niche, setNiche] = useState('');
  const [result, setResult] = useState<number | null>(null);

  /* AI-сообщения для каждого шага */
  const aiMessages: Record<number, string> = {
    1: 'Здравствуйте! Я AI-оценщик Domainik. Помогу определить рыночную стоимость вашего актива. Начнём?',
    2: 'Отлично! Теперь расскажите о трафике. Сколько уникальных посетителей в месяц?',
    3: 'Хорошо. Какой ежемесячный доход приносит актив?',
    4: 'Понял. Сколько лет существует актив (домен/сайт/бизнес)?',
    5: 'Последний вопрос — в какой нише работает актив?',
    6: 'Анализирую данные... Готово!',
  };

  /* Расчёт оценки (упрощённая модель) */
  const calculateEstimate = () => {
    const trafficNum = parseInt(traffic.replace(/\s/g, '')) || 0;
    const incomeNum = parseInt(income.replace(/\s/g, '')) || 0;
    const ageNum = parseInt(age) || 1;
    
    /* Множитель по возрасту */
    const ageMultiplier = Math.min(1 + (ageNum * 0.15), 2.5);
    /* Базовая оценка от дохода (24-36 месяцев окупаемости) */
    const incomeBase = incomeNum * 30;
    /* Надбавка за трафик */
    const trafficBonus = trafficNum * 15;
    
    const estimate = Math.round((incomeBase + trafficBonus) * ageMultiplier / 100000) * 100000;
    setResult(Math.max(estimate, 100000));
  };

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
      if (step === 5) {
        calculateEstimate();
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Заголовок */}
      <section className="pt-24 pb-8">
        <div className="container">
          <div className="gold-line" />
          <h1 className="mb-4" style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 700,
          }}>
            AI-оценка актива
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            Получите рыночную оценку за 2 минуты. Наш AI анализирует трафик, доход, 
            возраст и конкуренцию в нише.
          </p>
        </div>
      </section>

      {/* AI-калькулятор (интерфейс чата) */}
      <section className="section">
        <div className="container max-w-3xl">
          <div 
            className="p-8 md:p-12 border"
            style={{ 
              borderColor: 'var(--color-border)',
              background: 'var(--color-bg-card)',
              borderRadius: 'var(--radius-lg)'
            }}
          >
            {/* AI аватар + статус */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div 
                className="w-12 h-12 flex items-center justify-center"
                style={{ 
                  background: 'var(--color-accent-muted)',
                  borderRadius: '50%',
                  border: '1px solid var(--color-accent-border)'
                }}
              >
                <span style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}>◈</span>
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>AI-оценщик Domainik</p>
                <p className="text-xs" style={{ color: 'var(--color-success)' }}>● Онлайн</p>
              </div>
            </div>

            {/* Сообщения AI */}
            <div className="space-y-6 mb-8">
              {Object.entries(aiMessages)
                .filter(([key]) => parseInt(key) <= step)
                .map(([key, message]) => (
                  <div key={key} className="flex gap-3">
                    <div 
                      className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1"
                      style={{ 
                        background: 'var(--color-accent-muted)',
                        borderRadius: '50%',
                        fontSize: '0.7rem',
                        color: 'var(--color-accent)'
                      }}
                    >
                      ◈
                    </div>
                    <div 
                      className="p-4 max-w-md"
                      style={{ 
                        background: 'var(--color-bg-tertiary)',
                        borderRadius: 'var(--radius-md)',
                        borderTopLeftRadius: '2px'
                      }}
                    >
                      <p className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{message}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Поля ввода по шагам */}
            {step === 1 && (
              <div className="space-y-3">
                <p className="text-xs tracking-wider uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  Выберите тип актива:
                </p>
                {['Сайт с трафиком', 'Готовый бизнес', 'Премиум-домен'].map((type) => (
                  <button
                    key={type}
                    onClick={() => { setAssetType(type); setStep(2); }}
                    className="block w-full text-left px-6 py-4 border transition-all duration-300"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-secondary)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent-border)';
                      e.currentTarget.style.background = 'var(--color-accent-muted)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-xs tracking-wider uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Уникальных посетителей в месяц:
                </p>
                <input
                  type="text"
                  value={traffic}
                  onChange={(e) => setTraffic(e.target.value)}
                  placeholder="Например: 50000"
                  className="w-full px-6 py-4 border text-sm transition-all duration-300 focus:border-[var(--color-accent)]"
                  style={{
                    background: 'var(--color-bg-tertiary)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                    borderRadius: 'var(--radius-sm)',
                    outline: 'none',
                  }}
                />
                <button
                  onClick={handleNext}
                  className="mt-4 px-8 py-3 text-xs tracking-[0.2em] uppercase"
                  style={{
                    background: 'var(--color-accent)',
                    color: 'var(--color-text-inverse)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                  }}
                >
                  Далее →
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-xs tracking-wider uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Ежемесячный доход (₽):
                </p>
                <input
                  type="text"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  placeholder="Например: 200000"
                  className="w-full px-6 py-4 border text-sm"
                  style={{
                    background: 'var(--color-bg-tertiary)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                    borderRadius: 'var(--radius-sm)',
                    outline: 'none',
                  }}
                />
                <button
                  onClick={handleNext}
                  className="mt-4 px-8 py-3 text-xs tracking-[0.2em] uppercase"
                  style={{
                    background: 'var(--color-accent)',
                    color: 'var(--color-text-inverse)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                  }}
                >
                  Далее →
                </button>
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="text-xs tracking-wider uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Возраст актива (лет):
                </p>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Например: 3"
                  className="w-full px-6 py-4 border text-sm"
                  style={{
                    background: 'var(--color-bg-tertiary)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                    borderRadius: 'var(--radius-sm)',
                    outline: 'none',
                  }}
                />
                <button
                  onClick={handleNext}
                  className="mt-4 px-8 py-3 text-xs tracking-[0.2em] uppercase"
                  style={{
                    background: 'var(--color-accent)',
                    color: 'var(--color-text-inverse)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                  }}
                >
                  Далее →
                </button>
              </div>
            )}

            {step === 5 && (
              <div>
                <p className="text-xs tracking-wider uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  Выберите нишу:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Финансы', 'E-commerce', 'Медицина', 'Услуги', 'Образование', 'Развлечения'].map((n) => (
                    <button
                      key={n}
                      onClick={() => { setNiche(n); handleNext(); }}
                      className="px-4 py-3 border text-sm text-left transition-all duration-300"
                      style={{
                        borderColor: niche === n ? 'var(--color-accent)' : 'var(--color-border)',
                        color: niche === n ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                        borderRadius: 'var(--radius-sm)',
                        background: niche === n ? 'var(--color-accent-muted)' : 'transparent',
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Результат оценки */}
            {step === 6 && result && (
              <div 
                className="p-8 border text-center"
                style={{ 
                  borderColor: 'var(--color-accent-border)',
                  background: 'var(--color-accent-muted)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  Ориентировочная стоимость
                </p>
                <p 
                  className="text-5xl mb-4"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-accent)',
                    fontWeight: 700
                  }}
                >
                  ₽{result.toLocaleString('ru-RU')}
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  Это предварительная оценка. Для точного расчёта закажите экспертную проверку.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/contacts"
                    className="inline-block px-6 py-3 text-xs tracking-[0.2em] uppercase"
                    style={{
                      background: 'var(--color-accent)',
                      color: 'var(--color-text-inverse)',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 600,
                    }}
                  >
                    Разместить на продаже
                  </Link>
                  <button
                    onClick={() => { setStep(1); setResult(null); setAssetType(''); setTraffic(''); setIncome(''); setAge(''); setNiche(''); }}
                    className="px-6 py-3 text-xs tracking-[0.2em] uppercase"
                    style={{
                      border: '1px solid var(--color-accent-border)',
                      color: 'var(--color-accent)',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 600,
                    }}
                  >
                    Оценить другой
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
