<template>
  <div id="app">
    <!-- 全局页面加载之前loading -->
    <!-- <div class="globalConfig">
      <a-spin class="globalLoading" size="large" />
      <a-spin class="globalLoading" size="large" />
      <a-spin class="globalLoading" size="large" />
    </div>-->
    <router-view />
    <div class="setting" :class="isTrue ? right_Dis_0 : right_Dis_30">
      <div class="setting-btn" @click="showModel">
        <a-icon type="setting" />&nbsp;设置
      </div>
      <div class="setting-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      right_Dis_0: "dis_0",
      right_Dis_30: "dis_30",
      isTrue: false
    };
  },
  methods: {
    showModel() {
      console.log("出发");
      this.isTrue = !this.isTrue;
    }
  }
};
</script>

<style lang="less">
@import url("~@/assets/css/color.less");
#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .globalConfig {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    .globalLoading {
      margin: 0 5px;
    }
  }
  .setting {
    position: fixed;
    bottom: 40vh;
    display: flex;
    align-items: center;
    transition: right 0.5s ease-in-out;
    &.dis_0 {
      right: 0;
    }
    &.dis_30 {
      right: -20vh;
    }
    .setting-btn {
      padding: 10px;
      color: @white;
      background: @default;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      cursor: pointer;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    }
    .setting-content {
      height: 40vh;
      width: 20vh;
      background: #fff;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.045);
    }
  }
}
</style>
