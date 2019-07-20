<template>
  <div class="sys-home">
    <!-- 消息区域 -->
    <Tip>
      <div class="content">陪伴是最长久的告白</div>
    </Tip>
    <!-- 个人信息卡片 -->
    <HeadCard class="mt10 personCard"></HeadCard>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.sys-home {
  .personCard {
    display: inline-block;
    width: 350px;
    max-width: 100%;
  }
}
</style>
