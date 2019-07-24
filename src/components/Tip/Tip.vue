<template>
  <div class="tip" :class="colorClass">
    <a-icon :type="icon" theme="twoTone" style />
    <div class="tip-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const MARK = "tip";

export default {
  name: "Tip",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: "smile"
    }
  },
  computed: {
    colorClass() {
      return MARK + "-" + this.color;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/color.less");

.tip {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 5px;
  border-radius: 5px;
  .anticon {
    font-size: 24px;
  }
  .tip-content {
    margin-left: 10px;
    color: #fff;
    font-size: 15px;
    letter-spacing: 0.5px;
    line-height: 25px;
  }
  &.tip-primary {
    background: @primary;
  }
  &.tip-warning {
    background: @warning;
  }
  &.tip-success {
    background: @success;
  }
  &.tip-info {
    background: @info;
  }
}
</style>
