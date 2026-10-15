/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#060A0A',
        foreground: '#F4F6F6',
        canvas: '#060A0A',
        surface: {
          1: '#0C1413',
          2: '#121E1D',
          3: '#182725',
          4: '#1E3230',
        },
        hairline: {
          DEFAULT: '#1C2D2B',
          strong: '#2A4440',
        },
        emerald: {
          DEFAULT: '#10B981',
          hover: '#059669',
          glow: 'rgba(16, 185, 129, 0.12)',
          mint: '#6EE7B7',
        },
        terracotta: {
          DEFAULT: '#EA580C',
        },
        ink: {
          DEFAULT: '#F4F6F6',
          muted: '#94A3A8',
          subtle: '#627376',
        },
        muted: {
          DEFAULT: '#121E1D',
          foreground: '#94A3A8',
        },
        border: '#1C2D2B',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
