import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@images": resolve(__dirname, "src/assets/images"),
      "@screens": resolve(__dirname, "src/screens"),
      "@components": resolve(__dirname, "src/components"),
      "@constants": resolve(__dirname, "src/constants"),
      "@helpers": resolve(__dirname, "src/helpers"),
      "@functions": resolve(__dirname, "src/helpers/functions"),
      "@hooks": resolve(__dirname, "src/hooks"),
    },
  },
});
