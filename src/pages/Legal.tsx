/* ============================================
   DOMAINIK.RU — Правовые документы
   Политика конфиденциальности, Соглашение, Оферта, Согласие
   Кастомизация под специфику сайта
   ============================================ */
import { useParams, Link } from 'react-router-dom';

/* Контент правовых документов */
const legalDocs: Record<string, { title: string; content: JSX.Element }> = {
  privacy: {
    title: 'Политика конфиденциальности',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            1. Общие положения
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки 
            и защиты персональных данных пользователей сайта domainik.ru (далее — Сайт), 
            управляемого ИП Доменов И.И. (далее — Оператор).
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ 
            «О персональных данных» и другими применимыми нормативными актами Российской Федерации.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            2. Какие данные мы собираем
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <li>• Имя и фамилия (при обращении через форму обратной связи)</li>
            <li>• Email адрес (для связи и отправки документов)</li>
            <li>• Телефонный номер (по желанию, для оперативной связи)</li>
            <li>• Технические данные: IP-адрес, cookies, данные браузера</li>
            <li>• Информация об активах (при размещении листинга на продажу)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            3. Цели обработки данных
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <li>• Обработка обращений и консультирование пользователей</li>
            <li>• Организация эскроу-сделок и документооборота</li>
            <li>• Проведение due diligence активов</li>
            <li>• Улучшение качества услуг и персонализация</li>
            <li>• Исполнение требований законодательства РФ</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            4. Защита и хранение данных
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Оператор применяет организационные и технические меры для защиты персональных данных 
            от неправомерного или случайного доступа, уничтожения, изменения, блокирования, 
            копирования и распространения. Данные хранятся на серверах, расположенных на территории 
            Российской Федерации, в соответствии с требованиями ст. 18 Закона № 152-ФЗ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            5. Права пользователя
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Пользователь имеет право: получать информацию об обработке своих данных; требовать 
            уточнения, блокирования или уничтожения данных; отозвать согласие на обработку; 
            обжаловать действия Оператора в Роскомнадзор или в суд.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Для реализации своих прав пользователь может направить запрос на email: entrance@domaink.ru
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            6. Cookies
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Сайт использует cookies для обеспечения корректной работы, аналитики и улучшения 
            пользовательского опыта. Пользователь может отключить cookies в настройках браузера, 
            однако это может повлиять на функциональность сайта.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            7. Контактная информация
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            По всем вопросам, связанным с обработкой персональных данных, обращайтесь:
            <br />Email: entrance@domaink.ru
            <br />Дата последнего обновления: 01.01.2026
          </p>
        </section>
      </div>
    )
  },
  terms: {
    title: 'Пользовательское соглашение',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            1. Предмет соглашения
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения 
            между Сайтом domainik.ru и пользователями (далее — Пользователь) по поводу 
            использования услуг сервиса сопровождения сделок с цифровыми активами.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            2. Услуги сайта
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <li>• Размещение листингов активов (бизнес, сайты, домены) на продажу</li>
            <li>• Организация эскроу-сделок между покупателем и продавцом</li>
            <li>• Проведение due diligence (проверка активов)</li>
            <li>• AI-оценка стоимости цифровых активов</li>
            <li>• Юридическое сопровождение сделок</li>
            <li>• Услуги по защите от патентных троллей</li>
            <li>• Услуги по восстановлению сайтов</li>
            <li>• Лидогенерация</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            3. Ответственность сторон
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Сайт выступает посредником и организатором сделок. Продавец несёт ответственность 
            за достоверность информации об активе. Покупатель обязуется проводить собственную 
            проверку актива. Сайт гарантирует безопасность расчётов через эскроу-сервис.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            4. Запрещённые действия
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <li>• Размещение недостоверной информации об активах</li>
            <li>• Попытки обойти эскроу-систему</li>
            <li>• Использование сайта для мошеннических целей</li>
            <li>• Копирование и использование контента без разрешения</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            5. Разрешение споров
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Все споры разрешаются путём переговоров. При невозможности достижения согласия — 
            в соответствии с законодательством Российской Федерации. Дата обновления: 01.01.2026
          </p>
        </section>
      </div>
    )
  },
  offerta: {
    title: 'Публичная оферта',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            1. Термины и определения
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Публичная оферта (далее — Оферта) — предложение Оператора заключить договор 
            на оказание услуг сервиса domainik.ru на указанных условиях.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            2. Предмет оферты
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Оператор обязуется оказать Пользователю услуги по организации сделок с цифровыми 
            активами, включая: размещение листингов, проведение due diligence, эскроу-сопровождение, 
            юридическую поддержку. Пользователь обязуется оплатить услуги в соответствии с тарифами.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            3. Стоимость и порядок оплаты
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Стоимость услуг определяется тарифами, размещёнными на Сайте. Комиссия за эскроу-сделку 
            составляет от 3% до 7% от суммы сделки (в зависимости от суммы). Оплата производится 
            безналичным переводом или через платёжные системы.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            4. Акцепт оферты
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Размещение заказа на Сайте, оплата услуг или использование любых платных сервисов 
            является полным и безоговорочным акцептом данной Оферты. Дата публикации: 01.01.2026
          </p>
        </section>
      </div>
    )
  },
  consent: {
    title: 'Согласие на обработку персональных данных',
    content: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            Согласие на обработку персональных данных
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Я, пользователь сайта domainik.ru, действуя свободно, своей волей и в своём интересе, 
            а также подтверждая свою дееспособность, даю согласие ИП Доменов И.И. (ОГРНИП 324XXXXXXXXXX) 
            на обработку моих персональных данных в соответствии с ФЗ № 152 «О персональных данных».
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            Перечень данных:
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <li>• Фамилия, имя, отчество</li>
            <li>• Адрес электронной почты</li>
            <li>• Номер телефона</li>
            <li>• Данные об активах (при размещении на продажу)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            Цели обработки:
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <li>• Обращение обратной связи и консультирование</li>
            <li>• Организация и сопровождение сделок</li>
            <li>• Направление информационных сообщений</li>
            <li>• Исполнение требований законодательства РФ</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 500 }}>
            Срок действия согласия:
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Согласие действует до момента его отзыва путём направления письменного заявления 
            на адрес электронной почты Оператора: entrance@domaink.ru
          </p>
        </section>
      </div>
    )
  }
};

export default function Legal() {
  const { doc } = useParams<{ doc: string }>();
  const currentDoc = legalDocs[doc || 'privacy'] || legalDocs.privacy;

  return (
    <div className="min-h-screen">
      {/* Заголовок */}
      <section className="pt-24 pb-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container">
          <div className="flex gap-2 text-xs mb-8" style={{ color: 'var(--color-text-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-text-muted)' }}>Главная</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-accent)' }}>{currentDoc.title}</span>
          </div>
          <div className="gold-line" />
          <h1 
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            {currentDoc.title}
          </h1>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Дата последнего обновления: 01 января 2026
          </p>
        </div>
      </section>

      {/* Навигация по документам */}
      <section className="py-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'privacy', label: 'Конфиденциальность' },
              { key: 'terms', label: 'Соглашение' },
              { key: 'offerta', label: 'Оферта' },
              { key: 'consent', label: 'Согласие на ПД' },
            ].map((item) => (
              <Link
                key={item.key}
                to={`/legal/${item.key}`}
                className="px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300"
                style={{
                  background: doc === item.key ? 'var(--color-accent)' : 'transparent',
                  color: doc === item.key ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
                  border: `1px solid ${doc === item.key ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Контент документа */}
      <section className="section">
        <div className="container max-w-3xl">
          {currentDoc.content}
        </div>
      </section>
    </div>
  );
}
