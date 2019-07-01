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
.dk_container {
  margin: 20px;
  height: calc(100% - 165px);
}
</style>
