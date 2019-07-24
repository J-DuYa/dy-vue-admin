export default {
  mounted() {
    this.__resizeHandler = () => {
      if (this.chart) {
        this.chart.resize();
      }
    };

    window.addEventListener("resize", this.__resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.__resizeHandler);
  }
};
