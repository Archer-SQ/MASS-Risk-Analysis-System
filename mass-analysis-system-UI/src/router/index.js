import {
  createRouter,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(
        /* webpackChunkName:"admin" */ "../views/Administrator/index.vue"
      ),
  },
  {
    path: "/",
    name: "BasicLayout",
    component: () =>
      import(
        /* webpackChunkName:"BasicLayout" */ "../layout/BasicLayout/index.vue"
      ),
    // 配置子路由来匹配basic layout中不同的面板
    children: [
      // 船舶事故录入界面
      {
        path: "incidents",
        name: "Incidents",
        component: () =>
          import(
            /* webpackChunkName:"Incidents" */ "../views/IncidentList/index.vue"
          ),
      },
      // 邀请码管理界面
      {
        path: "inviteCode",
        name: "InviteCode",
        component: () =>
          import(
            /* webpackChunkName:"InviteCode" */ "../views/InviteCodeList/index.vue"
          ),
      },
      // 人为因素权重界面
      {
        path: "humanFactor",
        name: "HumanFactor",
        component: () =>
          import(
            /* webpackChunkName:"HumanFactor" */ "../views/HumanFactorWeight/index.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
