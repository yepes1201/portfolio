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
        primary: "#C1C1C1",
        card: "#272727",
      },
      backgroundImage: {
        "project-one":
          "url('https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
};
