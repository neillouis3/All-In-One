/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

    },

    screens: {
      'sm': '640px',


      'md': '768px',


      'lg': '1024px',


      'xl': '1280px',


      '2xl': '1536px',

    },

    colors: {
      'purple': '#59387A',
      'pink': '#C1389Bb',
      'orange': '#E06C75',

      'gray-dark': '#282C34',
      'gray': '#5C6370',
      'gray-light': '#ABB2BF',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

