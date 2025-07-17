/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode via class (recommended)
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#000000' }, // Black
        secondary: { DEFAULT: '#FF0000' }, // Red
        accent: { DEFAULT: '#FFFFFF' }, // White
        neutral: {
          dark: '#2E2E2E', // Dark Gray
          light: '#F5F5F5', // Light Gray
        },
        contrast: { DEFAULT: '#FFFFFF' }, // White (for contrast)
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 12px #9CA3AF', // Gray glow
        'glow-lg': '0 0 24px #9CA3AF',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulse 3s ease-in-out infinite',
        glowPulse: 'glowPulse 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px #00FFA3' },
          '50%': { boxShadow: '0 0 24px #00FFA3' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
