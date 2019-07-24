<template>
  <aside
    class="mb-asider"
    :class="{
      'mb-asider-open': collapsed,
      hidden: !collapsed
    }"
  >
    <a-drawer
      wrapClassName="mb-asider-ctn"
      :visible="collapsed"
      :closable="false"
      placement="left"
      @close="closeCollapsed"
    >
      <a-menu
        class="ly-ctn-menu"
        :theme="themeConfig.color"
        mode="inline"
        :defaultSelectedKeys="[activeMenu]"
      >
        <template v-for="menu in menuLists">
          <a-menu-item
            :key="menu.key"
            v-if="!menu.isHasChild"
            @click="changeMenu(menu.path)"
          >
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
              <a-menu-item
                :key="childItem.key"
                @click="changeMenu(childItem.path)"
              >
                <router-link :to="childItem.path">{{
                  childItem.menuName
                }}</router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-drawer>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import menuLists from "./../minxins/menuList";
export default {
  name: "DkMobileSider",
  computed: {
    ...mapGetters(["collapsed"])
  },
  mixins: [menuLists],
  data() {
    return {
      themeConfig: {
        color: "dark"
      }
    };
  },
  methods: {
    closeCollapsed() {
      this.$store.dispatch("app/updateCollapsed", false);
    }
  }
};
</script>

<style lang="less" scoped>
.mb-asider {
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  &.mb-asider-open {
    display: block;
    width: 100%;
  }
  &.hidden {
    display: none;
    width: 0;
  }
}
</style>
