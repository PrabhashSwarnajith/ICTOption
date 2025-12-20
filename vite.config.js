import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['framer-motion', 'aos'],
          'vendor-icons': ['lucide-react'],
          'vendor-vercel': ['@vercel/speed-insights'],

          // Page chunks for faster initial load
          'page-services': [
            './src/pages/services/WebDevelopment',
            './src/pages/services/MobileAppDevelopment',
            './src/pages/services/DigitalMarketing',
          ],
          'page-services-2': [
            './src/pages/services/ITConsulting',
            './src/pages/services/Cybersecurity',
            './src/pages/services/AIMachineLearning',
          ],
          'page-main': [
            './src/pages/Products',
            './src/pages/Blog',
            './src/pages/AboutUs',
            './src/pages/ContactUs',
          ],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'aos',
      'lucide-react',
      '@vercel/speed-insights',
    ],
  },
});
