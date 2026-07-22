import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

// Fully independent, publicly-licensed configuration
// All packages are open-source from public npm registry (no private/proprietary dependencies)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // TanStack Start server configuration
    // Redirects bundled server entry to src/server.ts (SSR error wrapper)
    middlewareMode: false,
  },
});
