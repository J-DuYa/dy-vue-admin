<!--
 * @Author: DuYa
 * @LastEditors: DuYa
 -->
<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    theme="light"
    v-model="$store.getters.collapsed"
    class="dk_sider"
    :class="{ pcSider: !collapsed }"
  >
    <div class="dk_header_logo">Ya Du</div>
    <a-menu
      class="ly-ctn-menu"
      :theme="themeConfig.color"
      mode="inline"
      @select="selectMenu"
      :defaultSelectedKeys="[activeMenu]"
    >
      <template v-for="menu in menuLists">
        <a-menu-item :key="menu.key" v-if="!menu.isHasChild" @click="changeMenu(menu.path)">
          <router-link :to="menu.path">
            <a-icon :type="menu.icon" />
            <span>{{ menu.menuName }}</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu :key="menu.key" v-else>
          <span slot="title">
            <a-icon :type="menu.icon" />
            <span>{{ menu.menuName }}</span>
          </span>
          <template v-for="childItem in menu.child">
            <a-menu-item :key="childItem.key" @click="changeMenu(childItem.path)">
              <router-link :to="childItem.path">{{ childItem.menuName }}</router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import github from "@/assets/images/github.jpg";
import menuSelect from "./../minxins/menuSelect";
import { mapGetters } from "vuex";
import menuLists from "./../minxins/menuList";
export default {
  name: "DKSider",
  props: {},
  mixins: [menuSelect, menuLists],
  computed: {
    ...mapGetters(["collapsed", "menuVal"])
  },
  data() {
    return {
      github: github,
      themeConfig: {
        color: "dark"
      }
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.dk_sider {
  height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  background: #001529;
  &.pcSider {
    flex: 0 0 256px !important;
    width: 256px !important;
    max-width: 256px !important;
  }
  .dk_header_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 64px;
    color: #fff;
    font-size: 25px;
    font-weight: bolder;
    letter-spacing: 1px;
  }
  .ly-ctn-menu {
    height: calc(100vh - 64px);
  }
}
</style>
