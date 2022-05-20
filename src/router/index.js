import Vue from "vue";
import VueRouter from "vue-router";
import MoneyRecord from "../views/index/MoneyRecord.vue";
import MainIndex from "../components/MainIndex.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: MainIndex,
    component: MainIndex,
    children: [
      {
        path: "/",
        name: MoneyRecord,
        component: MoneyRecord,
      },
      {
        path: "/moneyinfo",
        name: "moneyinfo",
        component: () => import("../views/moneyinfo/MoneyInfo.vue"),
      },
      {
        path: "/recordmoney",
        name: "recordmoney",
        component: () => import("../views/recordMoney/RecordMoney.vue"),
      },
    ],
  },

  {
    path: "/",
    name: "LoginPage",
    component: () => import("../views/login/LoginPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
