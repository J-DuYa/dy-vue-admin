import Vue from "vue";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import router from "@/router";
import store from "@/store";
import i18n from "@/i18n/vue-i18n";
import Cookies from "js-cookie";
import "@/permission";
import "@/registerServiceWorker";

// less引入
import "./assets/css/common.less";
import "./assets/css/reset.less";

// 请求全局引入
import request from "@/utils/request";

// 自定义组件引入
import Breadcrumb from "@/components/Breadcrumb";
import XCard from "@/components/XCard";

// 自定义插件
import vMessage from "@/components/Message";

require("./../mock/index.js");

// 组件引入
Vue.use(Antd);
Vue.use(vMessage);

/** 自定义组件引入 start */
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(XCard.name, XCard);
/** 自定义组件引入 end */

Vue.config.productionTip = false;

Vue.prototype.$request = request; // 配置$request变量内存地址指向request的堆地址
Vue.prototype.$Cookies = Cookies;

// 配置全局的错误报告
Vue.config.errorHandler = function(err, vm, info) {
  console.log(`页面发生错误: ${err.toString()}\n错误信息：${info}`);
};

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
