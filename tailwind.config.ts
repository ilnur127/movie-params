import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      helveticaNeue: 'var(--font-helveticaNeue-regular)',
      interTight: 'var(--font-interTight)',
      helvetica: 'var(--font-helvetica-regular)',
    },
    extend: {
      colors: {
        red: '#BE1F2A',
        gray: 'rgba(0, 0, 0, 0.19)',
        textGray: '#1d1d1db3',
      },
    },
  },
  plugins: [],
};
export default config;
