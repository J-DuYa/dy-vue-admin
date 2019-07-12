/**
 * @Author 毒牙
 * @Date 2019/5/29
 * @Desc
 */
const getters = {
  device: state => state.app.device,
  collapsed: state => state.app.collapsed,
  setting: state => state.app.setting
};

export default getters;
