import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/styles/breakpoints.scss";',
            },
        },
    },
    base: '',
});
