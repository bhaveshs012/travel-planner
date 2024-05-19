/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dashboard-bg": "#F5F8FA",
      },
    },
  },
  plugins: [],
};
