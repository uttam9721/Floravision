import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/Hero.png')",
      },
    },
  },
})