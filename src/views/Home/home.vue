<template>
  <div class="sys-home">
    <Breadcrumb :breadList="breadList" />
    <!-- 消息区域 -->
    <Tip class="mt10">
      <div class="content">陪伴是最长久的告白</div>
    </Tip>
    <a-row>
      <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="5">
        <!-- 个人信息卡片 -->
        <HeadCard class="mt10 personCard"></HeadCard>
      </a-col>
      <a-col
        :xs="24"
        :sm="24"
        :md="{ span: 15, offset: 1 }"
        :lg="{ span: 15, offset: 1 }"
        :xl="{ span: 8, offset: 1 }"
      >
        <!-- 数据统计 -->
        <LineChart class="mt10" title="每周任务统计"></LineChart>
        <LineChart class="mt10" title="进出流量统计"></LineChart>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <mavon-editor class="mk mt10" v-model="mk" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import axios from "axios";
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
  methods: {
    getReadMd() {
      axios.get(`${process.env.BASE_URL}` + "HelloWorld.md").then(res => {
        console.log(res);
        this.mk = res;
      });
    }
  },
  created() {
    this.getReadMd();
  }
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
