import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Absolute root base path ensures all assets (/assets/...) resolve from the domain root
    // on custom domain (https://golfcrater.com) and local environments, preventing 404 asset errors
    // when hard-reloading deep routes like /category/email-service or /product/:id.
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      warmup: {
        clientFiles: [
          './src/main.tsx',
          './src/App.tsx',
          './src/data/products.ts',
          './src/components/Navbar.tsx',
          './src/components/Hero.tsx',
          './src/pages/HomePage.tsx',
        ],
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'lucide-react',
        'canvas-confetti',
      ],
      esbuildOptions: {
        target: 'es2020',
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-icons': ['lucide-react'],
          },
        },
      },
    },
  };
});
