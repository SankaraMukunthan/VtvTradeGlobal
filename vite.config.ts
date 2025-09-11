import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // In production, we don't want to expose environment variables to the client
  if (mode === 'production') {
    return {
      plugins: [react()],
      define: {
        'import.meta.env.PROD': 'true',
        'import.meta.env.DEV': 'false'
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
        sourcemap: false,
        minify: true,
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
  }

  // Development configuration
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY || ''),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(env.VITE_EMAILJS_SERVICE_ID || ''),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID || ''),
      'import.meta.env.PROD': 'false',
      'import.meta.env.DEV': 'true'
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
      sourcemap: true,
      minify: false,
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
