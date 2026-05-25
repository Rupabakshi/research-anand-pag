import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        return path.resolve(__dirname, "src/assets", filename);
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],

  // For Vercel deployment
  base: mode === "production" ? "/" : "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2020",
  },

  assetsInclude: ["**/*.svg", "**/*.csv"],
}));