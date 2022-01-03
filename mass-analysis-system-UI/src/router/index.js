import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/admin",
    name: "Admin",
    component: () => import(/* webpackChunkName:"admin" */ "../views/Administrator/index.vue"),
  },
  {
    path: "/",
    name: "BasicLayout",
    component: () => import(/* webpackChunkName:"BasicLayout" */ "../layout/BasicLayout/index.vue"),
    // 配置子路由来匹配basic layout中不同的面板
    children: [
      {
        path: "accidents",
        name: "Accidents",
        component: () =>
          import(/* webpackChunkName:"Accident" */ "../views/AccidentReport/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
