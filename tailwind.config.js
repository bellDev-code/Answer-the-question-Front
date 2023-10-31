/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "349px", max: "819px" },
        md: { min: "820px", max: "1023px" },
        lg: { min: "1080px" },
      },
    },
  },
  plugins: [],
}

