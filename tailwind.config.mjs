/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#141414",
        card: "#272727",
      },
      textColor: {
        primary: "#C1C1C1",
      },
      borderColor: {
        dark: "#141414",
        card: "#272727",
      },
    },
  },
  plugins: [],
};
