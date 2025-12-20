/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode via class (recommended)
  theme: {
    extend: {
      colors: {
        // Core Brand Colors
        primary: {
          DEFAULT: '#000000', // Deep Black - for backgrounds, primary text in light mode
          dark: '#1A1A1A', // Slightly lighter black for dark mode backgrounds if absolute black is too harsh
        },
        secondary: {
          DEFAULT: '#FF0000', // Bright Red - for strong call-to-actions, alerts
          light: '#FF3333', // A slightly lighter red for hover states or less intense alerts
          dark: '#CC0000', // A darker red for deeper accents or visited states
        },
        accent: {
          DEFAULT: '#FFFFFF', // Pure White - for primary text in dark mode, significant highlights
        },

        // Neutral Tones (Grayscale - Crucial for readability and structure)
        neutral: {
          // Re-evaluated these for better contrast and usability
          900: '#1A1A1A', // Very dark gray, almost black (good for dark mode text or subtle elements)
          800: '#2E2E2E', // Dark Gray - for secondary text in dark mode, borders
          700: '#4B5563', // Your existing gray-600, good mid-dark gray
          600: '#6B7280', // Your existing gray-500, good mid-gray
          500: '#9CA3AF', // Your existing gray-400, for subtle text or disabled states
          400: '#D1D5DB', // Your existing gray-300, for light borders or subtle backgrounds
          300: '#E5E7EB', // Your existing gray-200, for hover states on light backgrounds
          200: '#F3F4F6', // Your existing gray-100, for light backgrounds
          100: '#F9FAFB', // Your existing gray-50, for very light backgrounds
        },

        // Semantic Colors (for specific UI states)
        success: {
          DEFAULT: '#28A745', // A standard green for success messages
          light: '#4CAF50',
          dark: '#1E7E34',
        },
        warning: {
          DEFAULT: '#FFC107', // A warm yellow/orange for warnings
          light: '#FFD700',
          dark: '#FFA000',
        },
        info: {
          DEFAULT: '#17A2B8', // A clear blue for informational messages
          light: '#2196F3',
          dark: '#007BB6',
        },
        danger: {
          DEFAULT: '#DC3545', // A slightly muted red for errors (distinct from secondary brand red if needed)
          light: '#EF4444', // Your previous secondary default
          dark: '#C82333',
        },
        // If you want your secondary red to *also* be your primary "danger" color, you can simplify
        // by making `danger: { DEFAULT: '#FF0000' }` or referencing `secondary.DEFAULT`.
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      boxShadow: {
        // Adjusted glow color to complement the red/black theme better, or maintain neutral
        glow: '0 0 12px rgba(255, 0, 0, 0.4)', // A subtle red glow
        'glow-lg': '0 0 24px rgba(255, 0, 0, 0.6)', // More intense red glow
        // You could also keep a neutral gray glow if the red is too aggressive
        'neutral-glow': '0 0 12px #9CA3AF',
        'neutral-glow-lg': '0 0 24px #9CA3AF',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulse 3s ease-in-out infinite',
        glowPulse: 'glowPulse 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        slideInRight: 'slideInRight 0.8s ease-out',
        slideInDown: 'slideInDown 0.6s ease-out',
        scaleIn: 'scaleIn 0.6s ease-out',
        bounceIn: 'bounceIn 0.8s ease-out',
        shimmer: 'shimmer 2s infinite',
        glow: 'glow 2s ease-in-out infinite',
        rotate: 'rotate 20s linear infinite',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px #FF0000' },
          '50%': { boxShadow: '0 0 24px #FF3333' },
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
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(255, 0, 0, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.6)',
          },
        },
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
