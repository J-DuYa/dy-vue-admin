<template>
  <div class="card">
    <!-- 头部 卡片名字 和 操作按钮 -->
    <header class="c-header">
      <h3>{{ title }}</h3>
      <div class="c-btn-area">
        <slot name="operation"></slot>
      </div>
    </header>
    <!-- 内容区域 -->
    <div class="c-container">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XCard",
  props: {
    title: {
      type: String,
      default: "这是一个卡片"
    },
    type: {
      type: String,
      default: "default"
    }
  }
};
</script>

<style lang="less" scoped>
.card {
  .c-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    overflow: hidden;
    h3 {
      font-size: 16px;
      color: #333;
    }
  }
}
</style>
