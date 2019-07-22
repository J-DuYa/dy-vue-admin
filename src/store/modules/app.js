/**
 * @Author 毒牙
 * @Date 2019/5/30
 * @Desc 存放关于系统全局的状态
 */
// 取默认的菜单
import Menulists from "@/assets/jsons/menuLists";
import i18n from "@/i18n/vue-i18n";

const state = {
  init: false, // 刚进页面之前init为false,
  device: "pc", // 设备是手机还是pc
  collapsed: false,
  setting: false,
  // 一种方法记录点击菜单到localstorage中，还有另一种方法记菜单数据到store中
  // 最好的记录方法是将点击的数据记录到localstorage中或cookies里面这样的话比较很方便的取得数据的内容，如果存到store中的话
  menuPath: localStorage.getItem("menuPath")
    ? localStorage.getItem("menuPath")
    : Menulists.menu && Menulists.menu.length > 0
    ? Menulists.menu[0].path
    : "/home",
  language: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "ZH"
};

const mutations = {
  UPDATE_COLLAPSED: (state, action) => {
    state.collapsed = action ? action : !state.collapsed;
  },
  UPDATE_DEVICE: (state, device) => {
    state.device = device;
  },
  UPDATE_SETTING: (state, status) => {
    state.setting = status;
  },
  UPDATEMENU: (state, menuPath) => {
    state.menuPath = menuPath;
    localStorage.setItem("menuPath", menuPath);
  },
  CHANGELANGUAGE: (state, language) => {
    state.language = language;
    localStorage.setItem("language", language);
    i18n.locale = localStorage.getItem("language")
      ? localStorage.getItem("language").toLowerCase()
      : "zh";
  }
};

const actions = {
  updateCollapsed({ commit }, action) {
    commit("UPDATE_COLLAPSED", action);
  },
  updateDevice({ commit }, device) {
    commit("UPDATE_DEVICE", device);
  },
  updateSetting({ commit }, status) {
    commit("UPDATE_SETTING", status);
  },
  updateMenu({ commit }, menuPath) {
    commit("UPDATEMENU", menuPath);
  },
  changeLanguage({ commit }, language) {
    commit("CHANGELANGUAGE", language);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
