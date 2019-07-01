/**
 * Editor by duya
 * Date by 2019/4/30
 */
export default {
  menu: [
    {
      key: "home",
      menuName: "首页",
      icon: "home",
      isHasChild: false,
      path: "/home"
    },
    {
      key: "person",
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
      key: "staff",
      menuName: "员工管理",
      icon: "team",
      isHasChild: true,
      child: [
        {
          key: "staff-list",
          menuName: "员工列表",
          path: "/employee"
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
};
