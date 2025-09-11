import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.VITE_EMAILJS_PUBLIC_KEY),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID),
    },
    css: {
      postcss: './postcss.config.mjs'
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      },
      dedupe: ['react', 'react-dom', 'react-router-dom']
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'wouter', '@radix-ui/react-accordion']
    },
    publicDir: "public",
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: mode === 'development',
      minify: mode === 'production',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
      open: true,
    },
  };
});
