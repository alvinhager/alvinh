import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "https://alvinhager.github.io/alvinh/",
  server: {
    host: "localhost",
    port: 3000,
  },
});
