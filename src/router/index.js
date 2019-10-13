/*
 * @Author: DuYa
 * @LastEditors: DuYa
 */
import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      // "预加载"router
      component: () => import("@/views/User/login"),
      meta: {
        isNotValAuth: true // 不需要验证
      }
    },
    {
      path: "/register",
      name: "register",
      // "预加载"router
      component: () => import("@/views/User/Register"),
      meta: {
        isNotValAuth: true // 不需要验证
      }
    },
    {
      path: "/",
      name: "layout",
      component: () => import("@/components/Layout"),
      redirect: store.getters["menuPath"],
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/Home")
        },
        {
          // 个人信息
          path: "/basicInfo",
          name: "basicInfo",
          component: () => import("@/views/User/basicInfo")
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/About/index")
        },
        {
          path: "/cCanvas",
          name: "cCanvas",
          component: () => import("@/views/Canvas/clickCanvas")
        },
        {
          path: "/sCanvas",
          name: "sCanvas",
          component: () => import("@/views/Canvas/starCanvas")
        },
        {
          path: "/employee",
          name: "employee",
          component: () => import("@/views/User/UserList")
        },
        {
          path: "/404",
          name: "404",
          component: () => import("@/views/Exceptions/404")
        },
        {
          path: "/500",
          name: "500",
          component: () => import("@/views/Exceptions/500")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404",
      hidden: true
    }
  ],
  scrollBehavior: () => ({ y: 0 }) // 当跳到新的页面的时候 自动跳到该页面的顶部
});
