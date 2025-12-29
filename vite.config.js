import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
    theme: {
    extend: {
      colors: {
        "primary": "#1f3b61",
        "primary-hover": "#162a45",
        "secondary": "#d97706",
        "background-light": "#f6f7f8",
        "surface": "#ffffff",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        display: ["Inter", "sans-serif"],
      },
    },
  },

})

