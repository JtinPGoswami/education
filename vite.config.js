import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '0b83-2401-4900-5695-96cb-109c-8333-6814-a5f3.ngrok-free.app'
    ]}
});
