/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc', // Blue
        secondary: '#00bfff', // Light blue
        dark: '#0f172a', // Dark blue
        darker: '#020617', // Darker blue
        light: '#f8fafc', // Light gray
        'dark-card': '#1e293b', // Slate 800
        'dark-accent': '#334155', // Slate 700
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-out infinite alternate',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 102, 204, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 102, 204, 0.8), 0 0 30px rgba(0, 191, 255, 0.6)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}