import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0', // Esto permite que la aplicación sea accesible desde cualquier dispositivo en tu red local.
    port: 5173, // Puedes cambiar el puerto si lo deseas.
    open: true, // Si deseas que se abra automáticamente en tu navegador.
  },
})
