module.exports = {
  //mode:'jit',

  purge: [
    './index.html','./src/**/*.{svelte,js,html}'
  ],

  // or 'media' or 'class'
  darkMode: false,

  theme: {
    // debugScreens: {
    //   position: ["top", "left"],
    // },
    extend: {
      fontFamily: {
        Garamond: ["EB Garamond", "serif"],
      },
    },
  },

  variants: {
    extend: {},
  },

  // plugins: [require("tailwindcss-debug-screens"),require("daisyui")],
  plugins: [require("daisyui")],

  content: ["./src/**/*.{html,js,svelte,ts}"],
};
