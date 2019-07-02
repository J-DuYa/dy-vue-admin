/**
 * @Author zoujun
 * @Date 2019/6/18
 * @Desc 根据屏幕自适应大小
 */
import store from "@/store";
const { body } = document;

//以bootstrap的標準標記是否是手機: 992
const WIDTH = 992;

export default {
  beforeMount() {
    window.addEventListener("resize", this.dy_resize_listener);
  },
  mounted() {
    if (this.dy_is_mobile()) {
      store.dispatch("app/updateDevice", "mobile");
    } else {
      store.dispatch("app/updateDevice", "pc");
    }
  },
  methods: {
    dy_is_mobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    dy_resize_listener() {
      let is_mobile = this.dy_is_mobile();

      if (!document.hidden) {
        if (is_mobile) {
          store.dispatch("app/updateDevice", "mobile");
        } else {
          store.dispatch("app/updateDevice", "pc");
        }
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.dy_resize_listener);
  }
};
