import { mapGetters } from "vuex";
import Menulists from "@/assets/jsons/menuLists";
// 混合minxins
export default {
  computed: {
    ...mapGetters(["menuPath"])
  },
  data() {
    return {
      menuLists: Menulists.menu,
      // 聚焦菜单
      activeMenu: this.menuPath ? this.menuPath : Menulists.menu[0].key
    };
  },
  methods: {
    changeMenu(path) {
      this.$store.dispatch("app/updateMenu", path);
    }
  }
};
