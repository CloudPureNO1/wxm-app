import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";



// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    host: "127.0.0.1",
    port: 8888,
    // 跨域配置
    // 默认地址  axios.defaults.baseURL = config.BASE_URL
    proxy: {
      "/api": {
        target: "http://localhost:9701/wxmApi", //接口域名
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
