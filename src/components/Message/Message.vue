<template>
  <transition name="fade" mode="out-in" appear>
    <div class="xt-c-message" :class="type" v-show="show" :style="{ top: top }">
      <!-- <a-icon class="icon" /> -->
      <span class="text">{{ message }}</span>
      <a-icon type="close-circle" class="closeIcon" @click="closeMsg" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "Message",
  props: {
    type: {
      type: String,
      default: "info",
      validator: val => ["info", "success", "warning", "error"].includes(val)
    },
    message: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ""
    },
    top: {
      type: String,
      default: "30px"
    }
  },
  data() {
    return {};
  },
  methods: {
    closeMsg(e) {
      e.target.closest(".xt-c-message").style.display = "none";
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/color.less");
.xt-c-message {
  position: fixed;
  left: 50%;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  max-width: 80%;
  min-width: 200px;
  line-height: 20px;
  transform: translateX(-50%);
  border-radius: 5px;
  .closeIcon {
    position: fixed;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }
  &.info {
    color: @white;
    box-shadow: 0 0 4px @info;
    background: @info;
  }
  &.success {
    color: @white;
    box-shadow: 0 0 4px @info;
    background: @success;
  }
  &.error {
    color: @white;
    box-shadow: 0 0 4px @info;
    background: @error;
  }
  &.warning {
    color: @white;
    box-shadow: 0 0 4px @info;
    background: @warning;
  }
}
</style>
