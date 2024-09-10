import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Protest Guerrilla', 'sans-serif'],
        display: ['SUSE', 'sans-serif'],
      },
      fontSize: {
        h1: '3rem',
        h2: '2.25rem',
        h3: '1.875rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
      },
    },
    fontSize: {
      xs: ['13px', '16px'],
      sm: ['14px', '24px'],
      base: ['15px', '24px'],
      lg: ['16px', '24px'],
      xl: ['26px', '40px'],
    },
  },
  plugins: [],
};
export default config;
