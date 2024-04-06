/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#58585a",
      },
      minWidth: {
        'screen': '1300px'
      },
      maxWidth: {
        'screen': '1512px'
      }
    },
    screens : {
      sm: '834px', // Mobile screens and smaller
      md: '1360px', // Desktop screens and smaller
      lg: '1700px', // larger screen 
    }
  },
  plugins: [],
}

