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
      },
    },
  },
  darkMode: true,
  plugins: [],
};
