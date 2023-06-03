/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        modal_background: "#202024",
        input_background: "#121214",
        button_background: "#29292E",
        buttonregister_background: "#00875F",
        header_background: "#121214",
        main_background: "#29292E",
        card_background: "#323238",
        green_card: "#015F43",
      },
    },
  },
  darkMode: true,
  plugins: [],
};
