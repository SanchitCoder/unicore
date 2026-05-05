import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import VentilationPage from './pages/VentilationPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import BulkOrdersPage from './pages/BulkOrdersPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full max-w-full overflow-x-hidden" style={{ minWidth: 0 }}>
        <Routes>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/products" element={<PageTransition><ProductsPage /></PageTransition>} />
          <Route path="/ventilation" element={<PageTransition><VentilationPage /></PageTransition>} />
          <Route path="/industries" element={<PageTransition><IndustriesPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/bulk-orders" element={<PageTransition><BulkOrdersPage /></PageTransition>} />
          <Route path="/product-details/:productId" element={<PageTransition><ProductDetailsPage /></PageTransition>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
