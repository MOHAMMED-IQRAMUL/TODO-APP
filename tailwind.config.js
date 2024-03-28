/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'color1' : 'rgb(50, 255, 190)' ,
        'azure' : '#00470e',
        'color2' : 'rgb(210, 250, 235)' ,
        'color3' : 'rgb(41, 247, 140)'
 }   },
  },
  plugins: [],
}