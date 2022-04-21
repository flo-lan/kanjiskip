module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", "./index.html"
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      minHeight: {
        '128': '32rem'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],

  daisyui: {
    themes: ["light", "dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}