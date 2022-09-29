/*
 * @Author: your name
 * @Date: 2022-09-29 15:52:17
 * @LastEditTime: 2022-09-29 16:01:51
 * @LastEditors: yuhan
 * @Description:
 * @FilePath: \demoshow\vite.config.js
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 4400, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: "0.0.0.0",
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      "/api": {
        target: "", // 代理地址 http://xxx.xxx.xxx.xxx:8000
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace('/api/', '/')
      },
    },
  },
});
