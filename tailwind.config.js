module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [/data-theme$/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes: {
        flip: {
          'from': { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ', },
          'to': { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ', }
        }
      }
    },
    fontFamily: {
      'redhat': ['Red Hat Text', 'sans-serif'],
    },
    plugins: [],
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [require("./styles/daisyui-themes.json")],
  },
};
