import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'PLUGIN_ERROR' && warning.plugin === '@vitejs/plugin-react-swc') {
          console.error('Failed to load @vitejs/plugin-react-swc:', warning.message);
        } else {
          warn(warning);
        }
      }
    }
  }
});