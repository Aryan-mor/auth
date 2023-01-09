import react from '@vitejs/plugin-react';
// @ts-ignore
import path from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';


export default defineConfig({
    resolve: {
        alias: {
            "@appTypes": path.resolve(__dirname, "./src/appTypes"),
            "@requests": path.resolve(__dirname, "./src/requests"),
            "@providers": path.resolve(__dirname, "./src/providers"),
            "@commons": path.resolve(__dirname, "./src/commons"),
            "@authProviders": path.resolve(__dirname, "./src/authProviders"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@storage": path.resolve(__dirname, "./src/storage"),
        }
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'londonist-auth',
            formats: ['es', 'umd'],
            fileName: (format) => `londonist-auth.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
            },
        },
    },
});
