/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-bg": `radial-gradient(49% 81% at 45% 47%, #00000045 0%, #073AFF00 100%), 
                      radial-gradient(113% 91% at 17% -2%, #00000014 1%, #FF000000 99%), 
                      radial-gradient(142% 91% at 83% 7%, #5201467D 1%, #FF000000 99%), 
                      radial-gradient(142% 91% at -6% 74%, #00000036 1%, #6F575700 99%), 
                      radial-gradient(142% 91% at 111% 84%, #000000FF 0%, #000000FF 100%)`
      },
      backgroundSize: {
        "custom-bg": "100% 100%"
      },
      backgroundPosition: {
        "custom-bg": "0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px"
      },
    },
  },
  plugins: [],
};
