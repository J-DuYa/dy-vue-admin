<template>
  <section class="exception" :class="{ column: isMobile }">
    <div class="svg">
      <slot name="image"></slot>
    </div>
    <div class="ctn">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
// let sign = "Exception";
const { body } = document;
const WIDTH = 992;

export default {
  name: "Exception",
  props: {
    position: {
      type: String,
      default: "right"
    }
  },
  data() {
    return {
      isMobile: this.dy_is_mobile()
    };
  },
  beforeMount() {
    let _that = this;
    window.addEventListener("resize", function() {
      _that.isMobile = _that.dy_is_mobile();
    });
  },
  methods: {
    dy_is_mobile: function() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    }
  }
};
</script>

<style lang="less" scoped>
.exception {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  &.column {
    flex-direction: column;
  }

  .ctn {
    padding-left: 20px;
    .content {
      max-width: 500px;
      h3 {
        font-size: 3vh;
        font-weight: bold;
        color: #666;
        letter-spacing: 1px;
      }
      .desc {
        margin-bottom: 40px;
        font-size: 14px;
        color: #666;
      }
    }
  }

  .iconfont {
    font-size: 20vh;
  }
  .icon {
    width: 60vh;
    height: 60vh;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
