/*
 * @Author: DuYa
 * @LastEditors: DuYa
 */
/**
 * Editor by duya
 * Date by 2019/4/30
 */
export default {
  ZH: {
    menu: [
      {
        key: "home",
        menuName: "首页",
        icon: "home",
        isHasChild: false,
        path: "/home"
      },
      {
        key: "basicInfo",
        menuName: "个人中心",
        icon: "user",
        isHasChild: false,
        path: "/basicInfo"
      },
      {
        key: "menu",
        menuName: "菜单管理",
        icon: "menu-unfold",
        isHasChild: true,
        child: [
          {
            key: "menu-list",
            menuName: "菜单列表",
            path: "/menuList"
          }
        ]
      },
      {
        key: "staff",
        menuName: "成员管理",
        icon: "team",
        isHasChild: true,
        child: [
          {
            key: "staff-list",
            menuName: "成员列表",
            path: "/employee"
          }
        ]
      },
      {
        key: "canvas",
        menuName: "Canvas",
        icon: "bg-colors",
        isHasChild: true,
        child: [
          {
            key: "cCanvas",
            menuName: "尾随事件",
            path: "/cCanvas"
          },
          {
            key: "sCanvas",
            menuName: "星空图",
            path: "/sCanvas"
          }
        ]
      },
      {
        key: "exception",
        menuName: "异常页面",
        icon: "warning",
        isHasChild: true,
        child: [
          {
            key: "404",
            menuName: "404",
            path: "/404"
          },
          {
            key: "500",
            menuName: "500",
            path: "/500"
          }
        ]
      },

      {
        key: "about",
        menuName: "关于我们",
        icon: "smile",
        isHasChild: false,
        path: "/about"
      }
    ]
  },
  EN: {
    menu: [
      {
        key: "home",
        menuName: "homepage",
        icon: "home",
        isHasChild: false,
        path: "/home"
      },
      {
        key: "basicInfo",
        menuName: "person center",
        icon: "user",
        isHasChild: false,
        path: "/basicInfo"
      },
      {
        key: "menu",
        menuName: "menu manage",
        icon: "menu-unfold",
        isHasChild: true,
        child: [
          {
            key: "menu-list",
            menuName: "menuList",
            path: "/menuList"
          }
        ]
      },
      {
        key: "staff",
        menuName: "Employee management",
        icon: "team",
        isHasChild: true,
        child: [
          {
            key: "staff-list",
            menuName: "Employee list",
            path: "/employee"
          }
        ]
      },
      {
        key: "canvas",
        menuName: "Canvas",
        icon: "bg-colors",
        isHasChild: true,
        child: [
          {
            key: "cCanvas",
            menuName: "trailing event",
            path: "/cCanvas"
          },
          {
            key: "sCanvas",
            menuName: "star image",
            path: "/sCanvas"
          }
        ]
      },
      {
        key: "exception",
        menuName: "exception page",
        icon: "warning",
        isHasChild: true,
        child: [
          {
            key: "404",
            menuName: "404",
            path: "/404"
          },
          {
            key: "500",
            menuName: "500",
            path: "/500"
          }
        ]
      },
      {
        key: "about",
        menuName: "about us",
        icon: "smile",
        isHasChild: false,
        path: "/about"
      }
    ]
  }
};
