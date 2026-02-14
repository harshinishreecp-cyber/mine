/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blush': '#FFB6C1',
        'lavender': '#E6E6FA',
        'cream': '#FFF8E7',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 182, 193, 0.8), 0 0 30px rgba(255, 182, 193, 0.6)' },
          '50%': { textShadow: '0 0 30px rgba(255, 182, 193, 1), 0 0 40px rgba(255, 182, 193, 0.8)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
