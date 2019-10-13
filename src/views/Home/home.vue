<!--
 * @Description: In User Settings Edit
 * @Author: duya
 * @Date: 2019-07-24 22:35:33
 * @LastEditTime: 2019-10-11 21:25:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sys-home">
    <Breadcrumb :breadList="breadList" />
    <!-- 消息区域 -->
    <Tip class="mt10">
      <div class="content">陪伴是最长久的告白</div>
    </Tip>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      breadList: [
        {
          title: "首页"
        }
      ],
      mk: null
    };
  },
  mounted: {},
  methods: {},
  created() {}
};
</script>

<style lang="less" scoped>
.sys-home {
  .personCard {
    display: inline-block;
    width: 500px;
    max-width: 100%;
  }
}

.mk {
  /deep/ .v-note-op {
    display: none;
  }
  /deep/ .v-note-edit {
    display: none;
  }
  /deep/ .v-note-show {
    flex: 0 0 100% !important;
    width: 100% !important;
  }
  /deep/ .v-note-panel.shadow {
    box-shadow: none;
  }
}
</style>
