<template>
  <a-layout-header class="dk_header">
    <a-icon
      class="trigger"
      :type="$store.getters.collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="change"
    />
    <div>
      <a-dropdown :overlayClassName="dklgdpd">
        <a-avatar
          shape="square"
          size="large"
          :style="{ backgroundColor: color, verticalAlign: 'middle' }"
          >{{ avatarValue }}</a-avatar
        >
        <a class="ant-dropdown-link" href="#">
          Click me <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <a href="http://www.alipay.com/">basicInfo</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a href="http://www.taobao.com/">setting</a>
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
export default {
  name: "DKHeader",
  props: {},
  computed: {
    ...mapGetters(["device"]),
    dklgdpd: function() {
      return this.device === "mobile" ? "dk-lg-dpd-open" : "";
    }
  },
  data() {
    return {
      avatarValue: "duYa",
      color: "#7265e6"
    };
  },
  methods: {
    change() {
      this.$store.dispatch("app/updateCollapsed");
    },
    exit_to_app() {
      try {
        this.$Cookies.remove("token");
        this.$router.push("/");
      } catch (e) {
        throw new Error(e);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.dk_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-left: 1px solid #efefef;
  background: #fff !important;
  z-index: 999;
  .anticon {
    padding: 20px 20px 20px 0;
  }
}
</style>
