/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0 0 6px 0 rgba(148, 77, 230, 0.75)",
        listItem:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      "blue-gray/500": "#64748b",
      purple: "#7b34dd",
      gray: "#334155",
      orange: "#f5b014",
      green: "#10b981",
    },
    borderRadius: {
      curve: "0 0 20% 20%",
    },
  },
  plugins: [],
};
