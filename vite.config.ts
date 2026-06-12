import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/yunnan-fossil-platform/',
  plugins: [react()],
});
