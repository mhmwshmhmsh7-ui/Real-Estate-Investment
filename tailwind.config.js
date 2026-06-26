/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#0F172A",
        success: "#16A34A",
        danger: "#DC2626",
        warning: "#F59E0B",
        background: "#F8FAFC",
        card: "#FFFFFF",
        text: "#1E293B"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)",
        soft: "0 4px 12px rgba(0,0,0,0.05)"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      transitionDuration: {
        400: "400ms"
      }
    }
  },

  plugins: []
};
