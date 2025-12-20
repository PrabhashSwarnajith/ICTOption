import React, { Suspense, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import AOS from 'aos';
import { Header, Footer, BackToTop } from './components';
import PageLoadingSkeletons from './components/PageLoadingSkeletons';
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

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Refresh AOS on route change
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route
        path="/services/mobile-app-development"
        element={<MobileAppDevelopment />}
      />
      <Route
        path="/services/digital-marketing"
        element={<DigitalMarketing />}
      />
      <Route path="/services/it-consulting" element={<ITConsulting />} />
      <Route path="/services/cybersecurity" element={<Cybersecurity />} />
      <Route
        path="/services/ai-machine-learning"
        element={<AIMachineLearning />}
      />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    // Preload critical pages when app mounts
    prefetchPages();
  }, []);

  return (
    <Router>
      <div className="font-body min-h-screen bg-primary relative overflow-hidden">
        {/* Background Branding Text */}
        <h1 className="absolute text-[22vw] font-extrabold text-gray-200 opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
          ICT
        </h1>

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
