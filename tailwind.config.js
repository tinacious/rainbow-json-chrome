/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colours generated with: https://tinaciousdesign.com/portfolio/figma-plugin-colour-tools
        td_pink: '#ff3399',
        td_blue: '#33d5ff',
        td_grey: '#b3b3d4',
        td_green: '#00d364',
        td_purple: '#cc66ff',
        td_yellow: '#ffcc66',
        td_turquoise: '#00ced1',
        td_midnight_sky: '#1d1d26',
        td_overcast_sky: '#c8c8d5',
        td_tangerine: '#ffaa00',
        td_red: '#f10f69',

        // JSON
        td_perrywinkle: '#848fea',
        td_coral: '#ff7086',
        td_papaya: '#ffb070',

        td_grey_100: '#111116',
        td_grey_200: '#22222d',
        td_grey_300: '#333343',
        td_grey_400: '#444459',
        td_grey_500: '#55556f',
        td_grey_600: '#666686',
        td_grey_700: '#797999',
        td_grey_800: '#9090aa',
        td_grey_900: '#a6a6bb',
        td_grey_1000: '#bcbccc',
        td_grey_1100: '#d2d2dd',
        td_grey_1200: '#e9e9ee',
        td_grey_1250: '#f1f1f4',
      }
    },
  },
  plugins: [],
}

