// Utility to preload lazy components
export const preloadComponent = componentImport => {
  componentImport();
};

// Preload the Home page when app loads
export const prefetchPages = () => {
  // Preload Home and Services immediately
  preloadComponent(() => import('../pages/Home'));
  preloadComponent(() => import('../pages/Services'));

  // Preload other pages after a short delay
  setTimeout(() => {
    preloadComponent(() => import('../pages/Products'));
    preloadComponent(() => import('../pages/AboutUs'));
    preloadComponent(() => import('../pages/ContactUs'));
  }, 2000);
};

// Preload specific service pages when Services page is visited
export const prefetchServicePages = () => {
  preloadComponent(() => import('../pages/services/WebDevelopment'));
  preloadComponent(() => import('../pages/services/MobileAppDevelopment'));
  preloadComponent(() => import('../pages/services/DigitalMarketing'));
  preloadComponent(() => import('../pages/services/ITConsulting'));
  preloadComponent(() => import('../pages/services/Cybersecurity'));
  preloadComponent(() => import('../pages/services/AIMachineLearning'));
};
