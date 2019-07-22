/*
 * @Author: zoujun
 * @Date: 2019-06-18 11:53:48
 * @desc 全局静态信息的管理
 * @Last Modified by: zoujun
 * @Last Modified time: 2019-06-18 14:10:43
 */
import Vue from "vue";
import VueI18n from "vue-i18n";

// 语言包
import zh from "./langs/zh";
import en from "./langs/en";

Vue.use(VueI18n);

const gobalMsg = {
  en: Object.assign(en),
  zh: Object.assign(zh)
};

const i18n = new VueI18n({
  locale:
    (localStorage.getItem("language")
      ? localStorage.getItem("language").toLowerCase()
      : "zh") || "zh",
  messages: gobalMsg
});

export default i18n;
