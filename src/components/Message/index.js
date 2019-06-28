/*
 * @Author: zoujun
 * @Date: 2019-06-19 11:28:40
 * @Last Modified by: zoujun
 * @Last Modified time: 2019-06-20 15:13:02
 */
import Message from "./Message";

const MESSAGE = {
  duration: 3000,
  animateTime: 300,
  install(Vue) {
    if (typeof window !== "undefined" && window.Vue) {
      Vue = window.Vue;
    }
    Vue.component("Message", Message);

    function msg(type, msg, callBack) {
      let message;
      let duration = MESSAGE.duration;
      if (typeof msg === "string") {
        message = msg;
      } else if (msg instanceof Object) {
        msg = msg.message || "";
        if (msg.duration) {
          duration = msg.duration;
        }
      }
      let messageArr = document.getElementsByClassName("xt-c-message");
      let totalHeight = 30;
      if (messageArr.length > 0) {
        for (let count = 0; count < messageArr.length; count++) {
          totalHeight += messageArr[count].offsetHeight + 10;
        }
      }
      let VueMessage = Vue.extend({
        render(h) {
          let props = {
            type,
            message,
            show: this.show,
            top: totalHeight + "px"
          };
          return h("Message", { props });
        },
        data() {
          return {
            show: true
          };
        }
      });

      let newMessage = new VueMessage();
      let vm = newMessage.$mount();
      let el = vm.$el;
      document.body.appendChild(el);
      vm.show = true;
      let _t = setTimeout(() => {
        clearTimeout(_t);
        vm.show = false;
        let _t2 = setTimeout(() => {
          clearTimeout(_t2);
          document.body.removeChild(el);
          newMessage.$destroy();
          vm = null;
          callBack && typeof callBack === "function" && callBack();
        }, duration);
      }, MESSAGE.duration);
    }
    Vue.prototype.$message = {
      info(message, callBack) {
        if (!message) return;
        msg("info", message, callBack);
      },
      success(message, callBack) {
        if (!message) return;
        msg("success", message, callBack);
      },
      error(message, callBack) {
        if (!message) return;
        msg("error", message, callBack);
      },
      warning(message, callBack) {
        if (!message) return;
        msg("warning", message, callBack);
      }
    };
  }
};

export default MESSAGE;
