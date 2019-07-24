<template>
  <div class="about">
    <Breadcrumb :breadList="breadList" />
    <div class="a-ctn mt20">
      <XCard title="关于我们">
        <template slot="content">
          <div class="superMe">
            我们是一个团体，来自养育我们的星球，当我们变得孤寂，星球也会变成一个伤心之地，因为她能听懂我们的心声，看清事物的本质，通晓万物，却又不能改变现实。当我们觉得时间没有规则的时候，可能已不再年轻。
          </div>
        </template>
      </XCard>
      <div class="a-bsInfo mt20">
        <XCard title="日志信息">
          <template slot="content">
            <a-timeline>
              <template v-for="(data, index) in noteList">
                <a-timeline-item
                  :color="data.color"
                  :key="index"
                  draggable="true"
                  @dragstart="dragStart($event, index)"
                  @dragover="allowDrop"
                  @drop="drop($event, index)"
                >
                  {{ data.date }}：{{ data.msg }}
                </a-timeline-item>
              </template>
            </a-timeline>
          </template>
        </XCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mockLocalstorage } from "@/utils/common";
// import { setTimeout } from "timers";
// import { fileGenerator } from "@/utils/dyTest.ts";
export default {
  computed: {
    ...mapGetters(["device"])
  },
  data() {
    return {
      mockLocalstorage: new mockLocalstorage(),
      breadList: [
        {
          title: "关于"
        }
      ],
      noteList: [
        {
          id: 100,
          color: "green",
          date: "2019/05/27",
          msg: "这是我来新公司的第一天"
        },
        {
          id: 101,
          color: "blue",
          date: "2019/06/01 - ~",
          msg:
            "I love a girl who has a pair of beautiful eyes and an elegant temperament in my new company but she will leave."
        },
        {
          id: 102,
          color: "green",
          date: "2019/06/27",
          msg: "这是我来新公司整整一个月了"
        },
        {
          id: 103,
          color: "red",
          date: "未来的日子",
          msg: "i still love her"
        },
        {
          id: 104,
          color: "red",
          date: "2019年7月的第一周，我真的好烦躁",
          msg: "我说了很多很多的弱智的话语，我有点弱智了。"
        },
        {
          id: 105,
          color: "blue",
          date: "2019年7月的第二周，我想请求帮助",
          msg: "我想改过自新，能不能给我一个机会。"
        },
        {
          id: 106,
          color: "blue",
          date: "2019年7月的倒数第二周",
          msg: "我不放弃，即使嘴上说，我依旧不会放弃✊"
        }
      ]
    };
  },
  methods: {
    dragStart(e, index) {
      e.dataTransfer.setData("Text", index);
    },
    allowDrop(e) {
      e.preventDefault();
    },
    drop(e, index) {
      this.allowDrop(e);
      let arr = this.noteList.concat([]),
        dragIndex = e.dataTransfer.getData("Text"),
        temp = arr.splice(dragIndex, 1);

      arr.splice(index, 0, temp[0]);

      this.noteList = arr;
    }
  },
  created() {
    // let _this = this;
    // let time = null;
    // this.mockLocalstorage.setItem("name", "duya", 0.001);
    // console.log(this.mockLocalstorage.getItem("name")); // 测试mockLocalstorage duya
    // time = setTimeout(() => {
    //   time = null;
    //   console.log("name " + _this.mockLocalstorage.getItem("name")); // "name: null"
    // }, 0.001 * 60 * 60 * 1000);
    // test generator
  },
  destroyed() {}
};
</script>
<style lang="less" scoped>
.about {
  .a-ctn {
    .superMe {
      font-size: 13px;
      color: #666;
      letter-spacing: 0.5px;
    }
    .a-bsInfo {
      width: 30%;
      min-width: 300px;
    }
  }
}
</style>
