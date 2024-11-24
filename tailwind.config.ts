import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B090A",
        red: "#BA181B",
        palered: "#E5383B",
        grey: "#D3D3D3",
        darkgrey: "#5B5B5B",
        background: "#F5F3F4"
      },
      fontFamily: {
        lora: ['Lora', 'serif']
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh'
      }
    },
  },
  plugins: [],
} satisfies Config;
