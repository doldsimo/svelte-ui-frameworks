/** @type {import('tailwindcss').Config} */

// Config for tailwindcss classes. Content describes which files can use the tailwindcss classes
export default {
  content: [
    './src/components/Frameworks/HeadlessUI/**/*.svelte', // For using tailwindcss with HeadlessUI
    './src/components/Frameworks/DaisyUI/**/*.svelte', // For using tailwindcss with DaisyUI
],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // For using tailwindcss with DaisyUI
}

