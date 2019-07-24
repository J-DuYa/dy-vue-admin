<template>
  <a-layout-content class="sys_container">
    <router-view class="mb10 content" />
    <DKFooter class="footer" />
  </a-layout-content>
</template>

<script>
import DKFooter from "./DKFooter";
export default {
  name: "DKContent",
  components: {
    DKFooter
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/color.less");
.sys_container {
  position: relative;
  padding: 20px 20px 0 20px;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 104px);
  .content {
    min-height: 100%;
  }
}

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px @default;
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px @default;
  background-color: #555;
}
</style>
