import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Auto-open browser
    port: 3000, // Use port 3000 to match Spotify config
  },
});
