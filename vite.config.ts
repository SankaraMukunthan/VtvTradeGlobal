import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), '')
  };

  // Only include the environment variables we need in the client
  const clientEnv = {
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY),
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
    'import.meta.env.PROD': mode === 'production',
    'import.meta.env.DEV': mode !== 'production'
  };

  return {
    plugins: [react()],
    define: clientEnv,
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
          manualChunks: (id: string) => {
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
  };
});
