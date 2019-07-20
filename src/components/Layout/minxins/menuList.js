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
      this.$store.dispatch("app/updateMenu", path);
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
