import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',  // Aquí se agrega la relación de aspecto personalizada
      },
      colors: {
        black: "#0B090A",
        red: "#BA181B",
        palered: "#E5383B",
        grey: "#D3D3D3",
        darkgrey: "#5B5B5B",
        background: "#F5F3F4",
        green: "#008000",
        lightgreen: "#5ce65c"
      },
      fontFamily: {
        lora: ['Lora', 'serif']
      },
      width: {
        'standard': '1156px'
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh'
      }
    },
  },
  plugins: [],
  safelist: [
    'text-green',
    'text-lightgreen',
  ],
} satisfies Config;
