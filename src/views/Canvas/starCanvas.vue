<template>
  <div class="starCanvas">
    <canvas id="canvas" />
  </div>
</template>

<script>
export default {
  name: "StarCanvas",
  mounted() {
    // 获取元素的属性
    const canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    const WIDTH = document.getElementsByClassName("dk_container")[0]
        .clientWidth,
      HEIGHT = document.getElementsByClassName("dk_container")[0].clientHeight,
      initRoundPopulation = 400; // n个⚪
    let count = 1,
      round = [];
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    function Round_Item(index, x, y) {
      this.index = index;
      this.x = x;
      this.y = y;
      this.r = Math.random() * 4 + 1;
      // 透明度
      var alpha = (Math.floor(Math.random() * 10) + 1) / 12;
      this.color = `rgba(${Math.random() * 255}, ${Math.random() *
        255}, ${Math.random() * 255}, ${alpha})`;
    }
    Round_Item.prototype = {
      draw: function() {
        context.fillStyle = this.color;
        context.shadowBlur = this.r * 2;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
      },
      move: function() {
        this.y -= 0.15;
        if (this.y <= -10) {
          this.y = HEIGHT + 10;
        }
        this.draw();
      }
    };
    // 让粒子动起来
    function animate() {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      // context.fillStyle = '#fff';
      // context.font = "50px 微软雅黑";
      // context.fillText("404: The page is not found!", WIDTH / 2 - 50 * 6, HEIGHT / 2 - 100);
      // context.fill();
      for (let i in round) {
        round[i].move();
      }
      requestAnimationFrame(animate);
    }
    // 初始化画布
    function init() {
      for (; count <= initRoundPopulation; count++) {
        // 画圆圈
        round[count] = new Round_Item(
          count,
          Math.random() * WIDTH,
          Math.random() * HEIGHT
        );
        round[count].draw();
      }
      animate();
    }
    init();
  }
};
</script>

<style lang="less" scoped>
.starCanvas {
  width: 100%;
  height: calc(100vh - 165px);
  overflow: hidden;
  background: black;
}
</style>
