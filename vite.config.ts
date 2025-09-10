import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
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
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              if (id.includes('@radix-ui')) {
                return 'radix';
              }
              return 'vendor';
            }
          }
        }
      },
      sourcemap: mode === 'development',
      minify: mode === 'production', // Using boolean instead of string for minify
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
