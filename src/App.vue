<template>
  <div id="app">
    <!-- 全局页面加载之前loading -->
    <!-- <div class="globalConfig">
      <a-spin class="globalLoading" size="large" />
      <a-spin class="globalLoading" size="large" />
      <a-spin class="globalLoading" size="large" />
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#app {
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
}
</style>
