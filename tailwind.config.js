module.exports = {
  mode :'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme =>({
        'mypurple' : '#5d3ebc',
        'mypurple2': '#7849f7',
        'myyellow': '#ffd300'     
      }),
      colors: theme =>({
        'mygray' : '#7070707D',
        'myyellow': '#ffd300',
        'mypurple' : '#5d3ebc'     
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
