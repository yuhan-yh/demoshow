/*
 * @Author: your name
 * @Date: 2022-09-29 15:52:17
 * @LastEditTime: 2022-10-01 19:11:55
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
  //全局引入
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
         * '@import "@/assets/scss/globalVariable1.scss";
         * @import"@/assets/scss/globalVariable2.scss";'
         **/
        additionalData: '@import "@/assets/index.scss";',
      },
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
