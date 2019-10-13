/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-24 22:35:33
 * @LastEditTime: 2019-10-13 15:13:40
 * @LastEditors: DuYa
 */
import Vue from "vue";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// viser引入
import viserVue from "viser-vue";

import router from "@/router";
import store from "@/store";
import i18n from "@/i18n/vue-i18n";
import Cookies from "js-cookie";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
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
import Tip from "@/components/Tip";
import HeadCard from "@/components/HeadCard";
import LineEchart from "@/components/LineEchart";

// 自定义插件
// import vMessage from "@/components/Message";

require("./../mock/index.js");

// 组件引入
Vue.use(Antd);
// Vue.use(vMessage);
Vue.use(mavonEditor);
Vue.use(viserVue);

/** 自定义组件引入 start */
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(XCard.name, XCard);
Vue.component(Tip.name, Tip);
Vue.component(HeadCard.name, HeadCard);
Vue.component(LineEchart.name, LineEchart);
/** 自定义组件引入 end */

Vue.config.productionTip = false;

Vue.prototype.$request = request; // 配置$request变量内存地址指向request的堆地址
Vue.prototype.$Cookies = Cookies;

// 配置全局的错误报告
Vue.config.errorHandler = function(err, vm, info) {
  if (err.toString().indexOf("$i18n") === -1) {
    // 排除$i18n的错误，这个错误没必要告诉前台页面
    console.log(`页面发生错误: ${err.toString()}\n错误信息：${info}`);
  }
};

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
