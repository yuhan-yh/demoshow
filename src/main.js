/*
 * @Author: your name
 * @Date: 2022-10-01 15:27:53
 * @LastEditTime: 2022-10-01 21:13:10
 * @LastEditors: yuhan
 * @Description:
 * @FilePath: \demoshow\src\main.js
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementUI from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementUI);

app.mount("#app");
