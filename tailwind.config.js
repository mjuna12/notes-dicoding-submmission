/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|input|modal|ripple|spinner).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ],
};
