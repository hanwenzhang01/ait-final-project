/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.hbs"],

  //theme came from tailwind.css site, may customize later
  // src: https://tailwindcss.com/docs/adding-custom-styles
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'slate-800': 'rgb(30 41 59)', 
      'gray-300': 'rgb(203 213 225)',
      'white': '#fff', 
      'off-white': '#f8f9fa',
      'cyan-500': 'rgb(6 182 212)'
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
      }
    }
  },
  plugins: [],
}

