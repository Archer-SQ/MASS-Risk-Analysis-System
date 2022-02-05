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

// 挂载路由守卫，防止没有密码直接输入路径进入主页
router.beforeEach((to, from, next) => {
  const tokenStr =
    window.sessionStorage.getItem("token");
  const userRole =
    window.sessionStorage.getItem("role");
  if (to.path === "/admin") return next();
  if (!tokenStr) return next("/admin");
  if (to.path === "/inviteCode") {
    return userRole ? next() : next(from.path);
  }
  next();
});

export default router;
