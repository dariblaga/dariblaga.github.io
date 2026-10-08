/* ============================================
   DOMAINIK.RU — Layout (общий каркас)
   Навигация + Footer + контент
   Editorial стиль: минимализм, золото, тёмная тема
   ============================================ */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* Навигационные ссылки — ключевые разделы сайта */
  const navLinks = [
    { path: '/catalog', label: 'Лоты' },
    { path: '/calculator', label: 'Оценка' },
    { path: '/patent-protection', label: 'Защита от троллей' },
    { path: '/site-recovery', label: 'Восстановление' },
    { path: '/leads', label: 'Лиды' },
    { path: '/blog', label: 'Блог' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg-primary)' }}>
      {/* ===== НАВИГАЦИЯ ===== */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{ 
          background: 'rgba(15, 15, 15, 0.9)',
          borderColor: 'var(--color-border)'
        }}
      >
        <nav className="container flex items-center justify-between h-20">
          {/* Логотип — минималистичный текст */}
          <Link 
            to="/" 
            className="text-2xl tracking-wider"
            style={{ 
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              color: 'var(--color-accent)',
              fontWeight: 600
            }}
          >
            domainik
          </Link>

          {/* Десктопное меню */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm tracking-wide transition-colors duration-300 hover:text-[var(--color-accent)]"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: location.pathname === link.path 
                      ? 'var(--color-accent)' 
                      : 'var(--color-text-secondary)',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA кнопка + мобильное меню */}
          <div className="flex items-center gap-4">
            <Link
              to="/calculator"
              className="hidden md:inline-block px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
                borderRadius: 'var(--radius-sm)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-text-inverse)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
            >
              Оценить актив
            </Link>

            {/* Мобильный бургер */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Открыть меню"
            >
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  background: 'var(--color-accent)',
                  transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'
                }}
              />
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  background: 'var(--color-accent)',
                  opacity: menuOpen ? 0 : 1
                }}
              />
              <span 
                className="w-6 h-0.5 transition-all duration-300"
                style={{ 
                  background: 'var(--color-accent)',
                  transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'
                }}
              />
            </button>
          </div>
        </nav>

        {/* Мобильное меню */}
        {menuOpen && (
          <div 
            className="lg:hidden border-t px-6 py-8"
            style={{ 
              background: 'var(--color-bg-secondary)',
              borderColor: 'var(--color-border)'
            }}
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-widest uppercase"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text-primary)',
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* ===== FOOTER ===== */}
      <footer 
        className="border-t mt-auto"
        style={{ 
          background: 'var(--color-bg-secondary)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Колонка 1: О компании */}
            <div>
              <Link 
                to="/" 
                className="text-2xl tracking-wider inline-block mb-6"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  color: 'var(--color-accent)',
                  fontWeight: 600
                }}
              >
                domainik
              </Link>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Сервис сопровождения сделок с бизнесом, сайтами и доменами. Безопасные эскроу-сделки и юридическая защита.
              </p>
            </div>

            {/* Колонка 2: Услуги */}
            <div>
              <h4 
                className="text-xs tracking-widest uppercase mb-6"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Услуги
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { path: '/catalog', label: 'Лоты в Telegram' },
                  { path: '/calculator', label: 'AI-оценка' },
                  { path: '/patent-protection', label: 'Защита от троллей' },
                  { path: '/site-recovery', label: 'Восстановление сайтов' },
                  { path: '/leads', label: 'Лидогенерация' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="text-sm transition-colors hover:text-[var(--color-accent)]"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 3: Документы */}
            <div>
              <h4 
                className="text-xs tracking-widest uppercase mb-6"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Документы
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { path: '/legal/privacy', label: 'Политика конфиденциальности' },
                  { path: '/legal/terms', label: 'Пользовательское соглашение' },
                  { path: '/legal/offerta', label: 'Публичная оферта' },
                  { path: '/legal/consent', label: 'Согласие на обработку ПД' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="text-sm transition-colors hover:text-[var(--color-accent)]"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 4: Контакты */}
            <div>
              <h4 
                className="text-xs tracking-widest uppercase mb-6"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Контакты
              </h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:entrance@domaink.ru"
                  className="text-sm transition-colors hover:text-[var(--color-accent)]"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  entrance@domaink.ru
                </a>
                {/* Телефон как изображение (согласно ТЗ — защита от парсинга) */}
                <img 
                  src="/images/phone.svg" 
                  alt="Телефон для связи" 
                  className="h-8"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Нижняя линия футера */}
          <div 
            className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              © 2026 Domainik. Все права защищены.
            </p>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              Безопасные сделки через эскроу
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
