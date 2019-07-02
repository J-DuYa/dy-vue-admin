<template>
  <!-- <div class="dy-breadcrumb">
    <span class="notNow">
      <router-link to="/dk">
        主页
      </router-link>
    </span>
    <span class="notNow dy-dd">/</span>
    <span class="now-breadcrumb">
      辅页
    </span>
  </div> -->
  <a-breadcrumb>
    <template v-for="(page, pageIndex) in breadList">
      <a-breadcrumb-item :key="pageIndex">
        <router-link :to="page.router" v-if="page.router">
          {{ page.title }}
        </router-link>
        <span v-else>{{ page.title }}</span>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    breadList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.dy-breadcrumb {
  margin-top: -10px;
  padding: 10px 0;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0.5px;
  > span.notNow {
    display: inline-block;
    cursor: pointer;
    a {
      color: #999 !important;
      text-decoration: none;
    }
  }
  > span.dy-dd {
    color: #999;
  }
  > .now-breadcrumb {
    display: inline-block;
    cursor: default;
    color: #333 !important;
  }
}
</style>
