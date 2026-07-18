import React, { Suspense, useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import { Header, Footer, BackToTop } from './components';
import PageLoadingSkeletons from './components/PageLoadingSkeletons';
import PageTransition from './components/PageTransition';
import { prefetchPages } from './utils/preloadUtils';

// Lazy load pages with preloading capability
const lazyLoadPage = importFunc => {
  const Component = React.lazy(importFunc);
  return Component;
};

const Home = lazyLoadPage(() => import('./pages/Home'));
const Services = lazyLoadPage(() => import('./pages/Services'));
const Products = lazyLoadPage(() => import('./pages/Products'));
const AboutUs = lazyLoadPage(() => import('./pages/AboutUs'));
const Blog = lazyLoadPage(() => import('./pages/Blog'));
const ContactUs = lazyLoadPage(() => import('./pages/ContactUs'));

const WebDevelopment = lazyLoadPage(
  () => import('./pages/services/WebDevelopment')
);
const MobileAppDevelopment = lazyLoadPage(
  () => import('./pages/services/MobileAppDevelopment')
);
const DigitalMarketing = lazyLoadPage(
  () => import('./pages/services/DigitalMarketing')
);
const ITConsulting = lazyLoadPage(
  () => import('./pages/services/ITConsulting')
);
const Cybersecurity = lazyLoadPage(
  () => import('./pages/services/Cybersecurity')
);
const AIMachineLearning = lazyLoadPage(
  () => import('./pages/services/AIMachineLearning')
);

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setWidth((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => AOS.refresh(), 100);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/services/web-development" element={<PageTransition><WebDevelopment /></PageTransition>} />
        <Route path="/services/mobile-app-development" element={<PageTransition><MobileAppDevelopment /></PageTransition>} />
        <Route path="/services/digital-marketing" element={<PageTransition><DigitalMarketing /></PageTransition>} />
        <Route path="/services/it-consulting" element={<PageTransition><ITConsulting /></PageTransition>} />
        <Route path="/services/cybersecurity" element={<PageTransition><Cybersecurity /></PageTransition>} />
        <Route path="/services/ai-machine-learning" element={<PageTransition><AIMachineLearning /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    prefetchPages();
  }, []);

  return (
    <Router>
      <div className="font-body min-h-screen bg-primary relative overflow-hidden">
        {/* Background Branding Text */}
        <h1 className="absolute text-[22vw] font-extrabold text-gray-200 opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
          ICT
        </h1>

        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* Navigation Bar */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">
          <Suspense fallback={<PageLoadingSkeletons />}>
            <AppRoutes />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />
      </div>
      <SpeedInsights />
    </Router>
  );
}

export default App;
