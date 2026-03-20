/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#050505',
        surface: '#0f0f0f',
        accent: '#7B61FF',
        'accent-2': '#FF6B6B',
        muted: '#404040',
        subtle: '#1a1a1a',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
