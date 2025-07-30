import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    watch: {
      usePolling: true,  // 👈 important for WSL
      interval: 100,     // optional: reduce CPU usage
    },
    host: true,          // optional: allows access via IP if needed
  },
})
