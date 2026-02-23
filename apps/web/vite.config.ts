import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-ci-triggers/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/ci-triggers/, /node_modules/],
        },
    },
});
