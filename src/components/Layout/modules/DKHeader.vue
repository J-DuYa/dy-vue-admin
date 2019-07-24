<template>
  <a-layout-header class="dk-header">
    <a-icon
      class="trigger"
      :type="$store.getters.collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="change"
    />
    <div class="sys-hd-r mr5">
      <!-- 消息 -->
      <div class="sys-noti" @click="showMsg">
        <a-badge dot>
          <a-icon type="notification" />
        </a-badge>
      </div>
      <!-- 语言选择 -->
      <div class="language mr15">
        <span
          :class="language === 'ZH' ? 'active' : ''"
          @click="selectLanguage('ZH')"
          >中文</span
        >
        /
        <span
          :class="language === 'EN' ? 'active' : ''"
          @click="selectLanguage('EN')"
          >EN</span
        >
      </div>
      <a-dropdown :overlayClassName="dklgdpd">
        <a-avatar
          shape="square"
          size="large"
          :style="{ backgroundColor: color, verticalAlign: 'middle' }"
          >{{ avatarValue }}</a-avatar
        >
        <a class="ant-dropdown-link" href="#">
          Click me
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <router-link to="/home">home</router-link>
          </a-menu-item>
          <a-menu-item key="1">
            <router-link to="/basicInfo">basicInfo</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/about">about</router-link>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3" @click="exit_to_app">exit_to_app</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
import { mapGetters } from "vuex";
import { DealWithNotification } from "@/utils/common";
export default {
  name: "DKHeader",
  props: {},
  computed: {
    ...mapGetters(["device", "language"]),
    dklgdpd: function() {
      return this.device === "mobile" ? "sys-lg-dpd-open" : "";
    }
  },
  data() {
    return {
      avatarValue: "duYa",
      color: "#7265e6",
      active: ""
    };
  },
  methods: {
    change() {
      this.$store.dispatch("app/updateCollapsed");
    },
    showMsg() {
      DealWithNotification(
        "Sorry, my brother!",
        "I am so sorry, this feature is temporarily not developed!",
        {
          icon: <a-icon type="frown" style="color: #e6a23c" />,
          duration: 2
        }
      );
    },
    selectLanguage(lg) {
      this.$store.dispatch("app/changeLanguage", lg);
    },
    exit_to_app() {
      try {
        this.$Cookies.remove("token");
        this.$router.push("/");
      } catch (e) {
        throw new Error(e);
      }
    }
  },
  watch: {
    // language(newVal) {
    // }
  }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/color.less");
.dk-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-left: 1px solid #efefef;
  background: #fff !important;
  z-index: 999;
  .sys-hd-r {
    display: flex;
    align-items: center;
    .language {
      span {
        display: inline-block;
        cursor: pointer;
        &:hover,
        &:visited {
          color: @default;
        }
        &.active {
          color: @default;
        }
      }
    }
    .sys-noti {
      padding: 20px;
      cursor: pointer;
      .anticon-notification {
        width: 16px;
        height: 16px;
        line-height: 16px;
        font-size: 18px;
      }
    }
  }
  .anticon-menu-fold {
    padding: 20px 20px 20px 0;
  }
}
</style>
