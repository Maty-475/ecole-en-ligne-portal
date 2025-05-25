
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Handle 404s properly
    historyApiFallback: {
      rewrites: [
        { from: /\/school\/.*/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les dépendances vendor principales
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-tabs', '@radix-ui/react-dialog', '@radix-ui/react-toast'],
          'query-vendor': ['@tanstack/react-query'],
          'supabase-vendor': ['@supabase/supabase-js'],
          // Séparer les composants UI
          'ui-components': [
            './src/components/ui/button',
            './src/components/ui/card',
            './src/components/ui/form',
            './src/components/ui/input',
            './src/components/ui/label',
            './src/components/ui/tabs',
            './src/components/ui/toast',
            './src/components/ui/toaster'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Augmenter temporairement la limite
  }
}));
