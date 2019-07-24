<template>
  <Exception title="500">
    <div slot="image">
      <!-- <i class="iconfont icon-icon-404-icon" /> -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-500"></use>
      </svg>
    </div>
    <div slot="content">
      <div class="content">
        <h3>500</h3>
        <p class="desc">
          根要扎在土壤里，和风一起生存,和竹子一起过冬，和鸟儿一起歌颂春天，不管你拥有了多么惊人的武器，也不管你操纵了多少可怜的机器人，只要离开土地，就没办法生存。
        </p>
        <router-link to="/home">返回首页</router-link>
      </div>
    </div>
  </Exception>
</template>

<script>
import Exception from "./modules/Exception";
export default {
  name: "Exception500",
  components: {
    Exception
  }
};
</script>

<style lang="less" scoped></style>
