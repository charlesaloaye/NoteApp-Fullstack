import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// run package config
dotenv.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // define process env
  define: {
    "process.env": process.env,
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:4000/",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, " "),
  //     },
  //   },
  // },
});
