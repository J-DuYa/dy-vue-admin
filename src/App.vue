<template>
  <div id="app">
    <!-- 全局页面加载之前loading -->
    <!-- <div class="globalConfig">
      <a-spin class="globalLoading" size="large" />
      <a-spin class="globalLoading" size="large" />
      <a-spin class="globalLoading" size="large" />
    </div>-->
    <router-view />
    <div
      class="setting"
      :class="isTrue ? right_Dis_0 : right_Dis_30"
      v-if="setting"
    >
      <div class="setting-btn" @click="showModel">
        <a-icon type="setting" />
        &nbsp;{{ $t("setting") }}
      </div>
      <div class="setting-content">
        <p class="menuSet-title">设置默认主题</p>
        <div class="btn-a">
          <p class="btn">
            <a-button type="primary" @click="changeTheme('primary')" block
              >#40a9ff</a-button
            >
          </p>
          <p class="btn">
            <a-button class="D7FFFE" @click="changeTheme('lightBlue')" block
              >#D7FFFE</a-button
            >
          </p>
          <p class="btn">
            <a-button class="AFCFEA" @click="changeTheme('lightGrey')" block
              >#AFCFEA</a-button
            >
          </p>
          <p class="btn">
            <a-button class="C00848" @click="changeTheme('darkGreen')" block
              >#00848C</a-button
            >
          </p>
          <p class="btn">
            <a-button class="FF756B" @click="changeTheme('pink')" block
              >#FF756B</a-button
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DealWithNotification } from "@/utils/common";

export default {
  data() {
    return {
      right_Dis_0: "dis_0",
      right_Dis_30: "dis_30",
      isTrue: false
    };
  },
  computed: {
    ...mapGetters(["setting"])
  },
  methods: {
    showModel() {
      this.isTrue = !this.isTrue;
    },
    changeTheme() {
      DealWithNotification(
        "Sorry, my brother!",
        "非常抱歉，该功能暂未实现。暂时没有比较好的思路",
        {
          icon: <a-icon type="frown" style="color: #e6a23c" />,
          duration: 2
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/color.less");
#app {
  position: relative;
  font-family: Helvetica, "Microsoft YaHei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
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
      overflow-y: auto;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.045);
      .menuSet-title {
        padding: 10px;
        font-size: 14px;
        color: #666;
        letter-spacing: 0.5px;
      }
      .btn-a {
        padding: 1vh 10px;
        .btn {
          margin-bottom: 10px;
        }
        .D7FFFE {
          background: #d7fffe;
          border: #d7fffe;
          color: #fff;
        }
        .AFCFEA {
          background: #afcfea;
          border: #afcfea;
          color: #fff;
        }
        .C00848 {
          background: #00848c;
          border: #00848c;
          color: #fff;
        }
        .FF756B {
          background: #ff756b;
          border: #ff756b;
          color: #fff;
        }
      }
    }
  }
}
</style>
