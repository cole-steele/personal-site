/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        // Custom color palette
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        link: 'var(--link)',
        'card-bg': 'var(--card-bg)',
        'nav-pill': 'var(--nav-pill)',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
};
