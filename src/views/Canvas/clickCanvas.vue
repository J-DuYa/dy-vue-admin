<template>
  <div class="canvas-bg">
    <canvas id="canvas" />
  </div>
</template>

<script>
export default {
  name: "ClickCanvas",
  mounted() {
    const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      WIDTH = document.documentElement.clientWidth,
      HEIGHT = document.documentElement.clientHeight;
    let _a = []; // 存放小点点
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    // 通用设置
    let R = {
      PageX: 0,
      PageY: 0,
      r: 1, // 圆的半径
      o: 0.09
    };
    window.onmousemove = function(e) {
      _a.push({
        PageX: e.clientX,
        PageY: e.clientY,
        r: R.r,
        o: 1
      });
    };
    function animate() {
      // 123
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      for (let i = 0; i < _a.length; i++) {
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() *
          255}, ${Math.random() * 255}) `;
        ctx.beginPath();
        ctx.arc(_a[i].PageX, _a[i].PageY, _a[i].r, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        _a[i].r += R.r;
        _a[i].o -= R.o;
        if (_a[i].o <= 0) {
          _a.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    }

    animate();
  }
};
</script>

<style lang="less" scoped>
.canvas-bg {
  width: 100%;
  height: calc(100vh - 165px);
  overflow: hidden;
  background: black;
}
</style>
