/**
 * @Author 毒牙
 * @Date 2019/5/30
 * @Desc 存放关于系统全局的状态
 */

const state = {
  init: false, // 刚进页面之前init为false,
  device: "pc", // 设备是手机还是pc
  collapsed: false
};

const mutations = {
  UPDATE_COLLAPSED: (state, action) => {
    state.collapsed = action ? action : !state.collapsed;
  },
  UPDATE_DEVICE: (state, device) => {
    state.device = device;
  }
};

const actions = {
  updateCollapsed({ commit }, action) {
    commit("UPDATE_COLLAPSED", action);
  },
  updateDevice({ commit }, device) {
    commit("UPDATE_DEVICE", device);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
