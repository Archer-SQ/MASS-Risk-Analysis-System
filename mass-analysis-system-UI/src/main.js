import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import axios from "axios";

import "ant-design-vue/dist/antd.css";

// 配置请求的根路径
axios.defaults.baseURL="http://localhost:3000/"

createApp(App).use(store).use(router).use(Antd).mount("#app");
