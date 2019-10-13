<template>
  <div class="echart" :style="{ width: width + 20 + 'px' }">
    <div
      :ref="id"
      class="lineEchart"
      :style="{ height: height + 'px', width: width + 'px' }"
    ></div>
  </div>
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";

let option = {
  color: ["#3398DB"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: "value"
    }
  ],
  series: [
    {
      name: "每日任务百分比",
      type: "bar",
      barWidth: "60%",
      data: [80, 70, 100, 60, 80, 100, 100]
    }
  ]
};

export default {
  name: "LineChart",
  props: {
    height: {
      type: Number,
      default: 200
    },
    width: {
      type: Number,
      default: 400
    },
    id: {
      type: String,
      default: "lineEchart"
    },
    title: {
      type: String,
      default: "每周任务统计"
    }
  },
  mixins: [resize],
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.drawEchart();
  },
  methods: {
    // 绘画Echart
    drawEchart() {
      this.chart = echarts.init(this.$refs[this.id]);
      option.title = {
        text: this.title
      };
      this.chart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
.echart {
  padding: 10px;
  max-width: 100%;
  background: #fff;
  border-radius: 3px;
  box-shadow: #e8e8e8 0px 0px 4px;
  .lineEchart {
    max-width: 100%;
  }
}
</style>
