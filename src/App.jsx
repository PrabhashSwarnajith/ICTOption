import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Services, Products, AboutUs, Blog, ContactUs } from './pages';
import {
  WebDevelopment,
  MobileAppDevelopment,
  CloudSolutions,
  DigitalMarketing,
  ITConsulting,
  Cybersecurity,
  AIMachineLearning,
} from './pages/services/index';

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
              path="/services/cloud-solutions"
              element={<CloudSolutions />}
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
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
