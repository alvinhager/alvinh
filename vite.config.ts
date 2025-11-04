import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  base: isProduction ? "https://alvinhager.github.io/alvinh/" : "/",
  server: {
    host: "localhost",
    port: 3000,
  },
});
