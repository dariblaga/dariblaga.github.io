/* ============================================
   DOMAINIK.RU — Главный компонент приложения
   Маршрутизация и общая структура
   Сервис сопровождения сделок с цифровыми активами
   Все лоты доступны через Telegram-бот
   ============================================ */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AssetCard from './pages/AssetCard';
import PatentProtection from './pages/PatentProtection';
import SiteRecovery from './pages/SiteRecovery';
import LeadsGeneration from './pages/LeadsGeneration';
import Calculator from './pages/Calculator';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />} />
          
          {/* Лоты (Telegram-бот) */}
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/lot" element={<AssetCard />} />
          
          {/* Дополнительные услуги */}
          <Route path="/patent-protection" element={<PatentProtection />} />
          <Route path="/site-recovery" element={<SiteRecovery />} />
          <Route path="/leads" element={<LeadsGeneration />} />
          
          {/* AI-калькулятор оценки */}
          <Route path="/calculator" element={<Calculator />} />
          
          {/* Блог */}
          <Route path="/blog" element={<Blog />} />
          
          {/* Контакты */}
          <Route path="/contacts" element={<Contacts />} />
          
          {/* Правовые документы */}
          <Route path="/legal/:doc" element={<Legal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
