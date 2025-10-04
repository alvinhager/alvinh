import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://alvinhager.github.io/alvinh/",
  server: {
    host: "localhost",
    port: 3000,
  },
});
