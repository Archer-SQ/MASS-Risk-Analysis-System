import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import axios from "axios";
import Nprogress from "nprogress";

import "ant-design-vue/dist/antd.css";
import "nprogress/nprogress.css";

// 配置请求的根路径
axios.defaults.baseURL = "http://localhost:3000/";

// 配置axios请求拦截器
axios.interceptors.request.use((config) => {
  Nprogress.start();
  config.headers.Authorization =
    window.sessionStorage.getItem("token");
  return config;
});

axios.interceptors.response.use((config) => {
  Nprogress.done();
  return config;
});

createApp(App)
  .use(router)
  .use(Antd)
  .mount("#app");
