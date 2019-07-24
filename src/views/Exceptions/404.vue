<template>
  <Exception title="404">
    <div slot="image">
      <!-- <i class="iconfont icon-icon-404-icon" /> -->
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-404"></use>
      </svg>
    </div>
    <div slot="content">
      <div class="content">
        <h3>404</h3>
        <p class="desc">
          “我是谁？我在干什么？我不知道我在干什么，我只知道我应该守护她，不能让她受到伤害。我为什么要守护她？我不知道。即使拼上我的生命，我也要守护她。——
          化作灰烬的机器人
        </p>
        <router-link to="/home">返回首页</router-link>
      </div>
    </div>
  </Exception>
</template>

<script>
import Exception from "./modules/Exception";
export default {
  name: "Exception404",
  components: {
    Exception
  }
};
</script>

<style lang="less" scoped></style>
