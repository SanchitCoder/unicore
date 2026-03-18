import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import VentilationPage from './pages/VentilationPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden" style={{ minWidth: 0 }}>
        <Routes>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/products" element={<PageTransition><ProductsPage /></PageTransition>} />
          <Route path="/ventilation" element={<PageTransition><VentilationPage /></PageTransition>} />
          <Route path="/industries" element={<PageTransition><IndustriesPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/product-details/:productId" element={<PageTransition><ProductDetailsPage /></PageTransition>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
