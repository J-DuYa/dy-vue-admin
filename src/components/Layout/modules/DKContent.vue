<template>
  <a-layout-content class="dk_container">
    <Breadcrumb />
    <router-view />
  </a-layout-content>
</template>

<script>
export default {
  name: "DKContent",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/color.less");
.dk_container {
  padding: 20px;
  overflow-y: auto;
  height: calc(100vh - 104px);
}

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 4px;
    height: 4px;
    background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow:inset 0 0 6px @default;
    border-radius:10px;
    background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 6px @default;
    background-color:#555;
}
</style>
