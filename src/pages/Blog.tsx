/* ============================================
   DOMAINIK.RU — Блог
   Тематические статьи, категории, поиск
   ============================================ */
import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Данные статей */
const blogPosts = [
  {
    id: 1,
    category: 'Защита',
    title: 'Как распознать патентного тролля и что делать при получении претензии',
    excerpt: 'Подробный гайд по определению недобросовестных претензий к товарным знакам. Разбираем реальные кейсы и стратегии защиты.',
    date: '15 января 2026',
    readTime: '7 мин',
    tags: ['ТЗ', 'патентные тролли', 'юридическая защита']
  },
  {
    id: 2,
    category: 'Оценка',
    title: 'AI-оценка сайта: методология и точность алгоритма Domainik',
    excerpt: 'Рассказываем, как работает наш AI-калькулятор, какие факторы учитывает и как получить предварительную оценку актива.',
    date: '8 января 2026',
    readTime: '5 мин',
    tags: ['AI', 'оценка', 'методология']
  },
  {
    id: 3,
    category: 'Сделки',
    title: 'Эскроу-сделки: полный гайд для покупателей цифровых активов',
    excerpt: 'Как безопасно купить сайт или бизнес через эскроу. Пошаговая инструкция от выбора до передачи.',
    date: '2 января 2026',
    readTime: '10 мин',
    tags: ['эскроу', 'безопасность', 'покупка']
  },
  {
    id: 4,
    category: 'Восстановление',
    title: 'Ваш сайт взломан: первые 24 часа и план действий',
    excerpt: 'Что делать в первые минуты после обнаружения взлома. Чек-лист для экстренного реагирования.',
    date: '25 декабря 2025',
    readTime: '6 мин',
    tags: ['взлом', 'безопасность', 'восстановление']
  },
  {
    id: 5,
    category: 'Домены',
    title: 'Как выбрать премиум-домен: 10 критериев оценки',
    excerpt: 'Разбираем, что делает домен «премиальным»: длина, TLD, история, брендовость и другие факторы.',
    date: '18 декабря 2025',
    readTime: '8 мин',
    tags: ['домены', 'оценка', 'брендинг']
  },
  {
    id: 6,
    category: 'Бизнес',
    title: 'Due Diligence при покупке интернет-бизнеса: на что смотреть',
    excerpt: 'Полный чек-лист проверки бизнеса перед покупкой. Финансы, трафик, команда, юридические риски.',
    date: '10 декабря 2025',
    readTime: '12 мин',
    tags: ['due diligence', 'покупка', 'проверка']
  },
];

/* Все категории */
const categories = ['Все', 'Защита', 'Оценка', 'Сделки', 'Восстановление', 'Домены', 'Бизнес'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  /* Фильтрация по категории и поиску */
  const filteredPosts = blogPosts.filter(post => {
    const matchCategory = activeCategory === 'Все' || post.category === activeCategory;
    const matchSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

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
            Экспертный блог
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            Статьи о продаже бизнеса, защите активов, оценке сайтов и доменов. 
            Практические гайды и разборы кейсов.
          </p>
        </div>
      </section>

      {/* Фильтры и поиск */}
      <section className="py-8 border-b sticky top-20 z-30 backdrop-blur-md" style={{ borderColor: 'var(--color-border)', background: 'rgba(15, 15, 15, 0.95)' }}>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Категории */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300"
                  style={{
                    background: activeCategory === cat ? 'var(--color-accent)' : 'transparent',
                    color: activeCategory === cat ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
                    border: `1px solid ${activeCategory === cat ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 500,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Поиск */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск статей..."
              className="px-4 py-2.5 text-sm border w-full md:w-64"
              style={{
                background: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* Список статей */}
      <section className="section">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Статьи не найдены
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Попробуйте изменить фильтры или поисковый запрос
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group border transition-all duration-300"
                  style={{ 
                    borderColor: 'var(--color-border)',
                    background: 'var(--color-bg-card)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Тематическое изображение (уникальный градиент для каждой категории) */}
                  <div 
                    className="h-48 w-full relative overflow-hidden"
                    style={{
                      background: post.category === 'Защита' 
                        ? 'linear-gradient(135deg, #1a0a0a 0%, #2a1515 50%, #0f0f0f 100%)'
                        : post.category === 'Оценка'
                        ? 'linear-gradient(135deg, #0a1a0a 0%, #152a15 50%, #0f0f0f 100%)'
                        : post.category === 'Сделки'
                        ? 'linear-gradient(135deg, #0a0a1a 0%, #15152a 50%, #0f0f0f 100%)'
                        : post.category === 'Восстановление'
                        ? 'linear-gradient(135deg, #1a1a0a 0%, #2a2a15 50%, #0f0f0f 100%)'
                        : 'linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary) 100%)',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    {/* Декоративная сетка */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }} />
                    <div className="h-full flex items-center justify-center relative z-10">
                      <span className="text-5xl opacity-30" style={{ color: 'var(--color-accent)' }}>
                        {post.category === 'Защита' ? '⚖' : post.category === 'Оценка' ? '◈' : post.category === 'Сделки' ? '◆' : post.category === 'Восстановление' ? '⚙' : '◇'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: 'var(--color-accent)' }}>
                      {post.category}
                    </span>
                    <h3 
                      className="text-lg mb-3 transition-colors"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                      <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{post.date}</span>
                      <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Пагинация */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-16 gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className="w-10 h-10 text-sm transition-all duration-300"
                  style={{
                    background: page === 1 ? 'var(--color-accent)' : 'transparent',
                    color: page === 1 ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
                    border: `1px solid ${page === 1 ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
