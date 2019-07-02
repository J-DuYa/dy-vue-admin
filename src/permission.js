/*
 * @Author: zoujun
 * @Date: 2019-06-10 16:05:45
 * @desc 页面权限的管理
 * @Last Modified by: zoujun
 * @Last Modified time: 2019-06-28 14:53:43
 */
import Cookies from "js-cookie";
import router from "./router";
import NProgress from "nprogress"; // progress bar

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  // 进入页面的之前 先检测是否进入页面的时候有token(除了特殊页面，如登录，注册，密码等页面)
  if (to.meta.isNotValAuth) {
    Cookies.remove("token");
    next();
  } else {
    // 需要验证token是否存在，不存在返回登陆页面
    if (Cookies.get("token")) {
      next();
    } else {
      next("/");
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
