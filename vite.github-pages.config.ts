import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: "github-pages",
  base: process.env.GITHUB_PAGES_BASE ?? "./",
  publicDir: resolve(__dirname, "public"),
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: resolve(__dirname, "dist-github-pages"),
    emptyOutDir: true,
  },
});
