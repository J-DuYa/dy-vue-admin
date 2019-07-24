<template>
  <a-card class="headCard">
    <div class="head-bg">
      <img :src="image" />
    </div>
    <img class="head-person-img" :src="headPerson" />
    <div class="head-content">
      <h2>duYa</h2>
      <div class="desc">这世界上还有很多值得思考的东西。</div>
    </div>
    <div class="headFooter">
      <div class="skill">
        <span>Css</span>
        <a-progress :percent="80" status="active" />
      </div>
      <div class="skill">
        <span>Javascript</span>
        <a-progress :percent="70" status="active" />
      </div>
      <div class="skill">
        <span>Html</span>
        <a-progress :percent="90" status="active" />
      </div>
      <div class="skill">
        <span>Vue</span>
        <a-progress :percent="90" status="active" />
      </div>
      <div class="skill">
        <span>React</span>
        <a-progress :percent="80" status="active" />
      </div>
    </div>
  </a-card>
</template>

<script>
const MARK = "headCard";
export default {
  name: "HeadCard",
  props: {
    title: {
      type: String,
      default: "个人信息卡片"
    },
    color: {
      type: String,
      default: "primary"
    },
    image: {
      type: String,
      default:
        "https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
    },
    headPerson: {
      type: String,
      default: "https://cdn.tipe.io/tipe/tipe-cat-no-text.svg"
    }
  },
  computed: {
    colorClass() {
      return `${MARK}+"-"+${this.color}`;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.headCard {
  position: relative;
  /deep/ .ant-card-body {
    padding: 0;
  }
  .head-bg {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .head-person-img {
    position: absolute;
    top: 100px;
    left: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    box-shadow: 0 0 10px #666;
  }
  .head-content {
    margin: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #999;
    .desc {
      color: #666;
    }
  }
  .headFooter {
    margin: 10px;
    .skill {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      line-height: 30px;
      span:first-child {
        display: inline-block;
        margin-right: 10px;
        width: 100px;
        text-align: right;
      }
    }
  }
}
</style>
