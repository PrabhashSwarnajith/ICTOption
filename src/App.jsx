import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Products = React.lazy(() => import('./pages/Products'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Blog = React.lazy(() => import('./pages/Blog'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));

const WebDevelopment = React.lazy(
  () => import('./pages/services/WebDevelopment')
);
const MobileAppDevelopment = React.lazy(
  () => import('./pages/services/MobileAppDevelopment')
);
const DigitalMarketing = React.lazy(
  () => import('./pages/services/DigitalMarketing')
);
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const Cybersecurity = React.lazy(
  () => import('./pages/services/Cybersecurity')
);
const AIMachineLearning = React.lazy(
  () => import('./pages/services/AIMachineLearning')
);

function App() {
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
          <React.Suspense
            fallback={<div className="text-center py-20">Loading...</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/web-development"
                element={<WebDevelopment />}
              />
              <Route
                path="/services/mobile-app-development"
                element={<MobileAppDevelopment />}
              />
              <Route
                path="/services/digital-marketing"
                element={<DigitalMarketing />}
              />
              <Route
                path="/services/it-consulting"
                element={<ITConsulting />}
              />
              <Route
                path="/services/cybersecurity"
                element={<Cybersecurity />}
              />
              <Route
                path="/services/ai-machine-learning"
                element={<AIMachineLearning />}
              />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </React.Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
