import { mapGetters } from "vuex";
import Menulists from "@/assets/jsons/menuLists";
// 混合minxins
export default {
  computed: {
    ...mapGetters(["menuPath", "language"])
  },
  data() {
    return {
      menuLists: [],
      // 聚焦菜单
      activeMenu: ""
    };
  },
  methods: {
    changeMenu(path) {
      console.log(
        document
          .getElementsByClassName("ly-ctn-menu")[0]
          .getElementsByClassName("ant-menu-submenu")
      );
      this.$store.dispatch("app/updateMenu", path);

      try {
        let dom = document
          .getElementsByClassName("ly-ctn-menu")[0]
          .getElementsByClassName("ant-menu-submenu");
        for (let c = 0; c < dom.length; c++) {
          // console.log("当前的class：" + dom[c].getAttribute("class"));
          let className = dom[c].getAttribute("class");
          console.log(dom[c].getAttribute("class"));
          className = className.replace("ant-menu-submenu-open", "");
          console.log("修改之后：" + className);
        }
      } catch (e) {
        throw new Error("查询菜单错误");
      }
    }
  },
  watch: {
    menuPath(newVal) {
      this.activeMenu = newVal;
    },
    language(newVal) {
      this.menuLists = Menulists[newVal] ? Menulists[newVal]["menu"] : [];
    }
  },
  created() {
    this.menuLists = Menulists[this.language]
      ? Menulists[this.language].menu
      : [];
    this.activeMenu = this.menuPath.replace("/", "");
  }
};
