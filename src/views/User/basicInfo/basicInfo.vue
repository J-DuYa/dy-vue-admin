<template>
  <div class="basic-center">
    <p style="line-height: 30px;">HTTP / 1.0</p>
    <pre class="prettyprint" data-lang="HTML" ref="requestCode">
      <code class="preCode">请求格式
GET / HTTP/1.0
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*

返回格式
HTTP/1.0 200 OK 
Content-Type: text/plain
Content-Length: 137582
Expires: Thu, 05 Dec 1997 16:00:00 GMT
Last-Modified: Wed, 5 August 1996 15:55:28 GMT
Server: Apache 0.84
</code>
      <ul class="content">
        <li v-for="(num, idx) in ctnListNum" :key="idx">{{num}}</li>
      </ul>
    </pre>
  </div>
</template>

<script>
export default {
  name: "basicInfo",
  data() {
    return {
      ctnListNum: null
    };
  },
  mounted() {
    // 监听宽度
    // console.log();
    try {
      this.ctnListNum = this.$refs["requestCode"].clientHeight / 30;
    } catch (e) {
      throw new Error("计算code的高度报错");
    }
  }
};
</script>

<style lang="less" scoped>
.basic-center {
  .prettyprint {
    position: relative;
    padding: 0 0 0 62.58px; // 这里可能要改因为这里的内容需要偏离ul 不能跟ul重叠
    // width: 600px;
    max-width: 100%;
    background: #f2f8fd;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 0;
    overflow-y: hidden;
    font-family: Source Code Pro, DejaVu Sans Mono, Ubuntu Mono, Anonymous Pro,
      Droid Sans Mono, Menlo, Monaco, Consolas, Inconsolata, Courier, monospace,
      PingFang SC, Microsoft YaHei, sans-serif, monospace;
    .preCode {
      display: block;
      margin-left: 10px;
      word-wrap: break-word;
      white-space: pre;
      overflow-x: auto;
      font-size: 14px;
      line-height: 30px;
    }
    .content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      // padding-top: 10px;
      overflow-x: auto;
      overflow-y: hidden;
      border-right: 1px solid #efefef;
      line-height: 0;
      li {
        margin: 0;
        text-align: center;
        font-size: 14px;
        color: #999;
        height: 30px;
        line-height: 30px;
        list-style: none;
        word-wrap: break-word;
      }
    }
  }
}
</style>
