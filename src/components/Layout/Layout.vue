<template>
  <div class="dk_layout">
    <a-layout id="components-layout-demo-custom-trigger">
      <DKSider v-if="$store.getters.device === 'pc'" />
      <DkMobileSider v-else />
      <a-layout class="ly--c-r-ctn">
        <DKHeader />
        <DKContent />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import DKHeader from "./modules/DKHeader";
import DKSider from "./modules/DKSider";
import DKContent from "./modules/DKContent";
import DkMobileSider from "./modules/DkMobileSider";
import handlerSize from "./minxins/handlerSize";
export default {
  name: "Layout",
  components: {
    DKHeader,
    DKSider,
    DKContent,
    DkMobileSider
  },
  mixins: [handlerSize],
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.dk_layout {
  height: 100vh;
  .ly--c-r-ctn {
    min-height: 100vh;
  }
}
</style>
