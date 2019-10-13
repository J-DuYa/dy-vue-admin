/*
 * @Author: DuYa
 * @LastEditors: DuYa
 */
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

// cdn预加载
const externals = {
  vue: "Vue",
  "vue-router": "VueRouter",
  vuex: "Vuex",
  axios: "axios",
  "element-ui": "ELEMENT",
  echarts: "echarts"
};

// cdn环境配置
const cdn = {
  // 开发环境
  dev: {
    css: ["https://unpkg.com/ant-design-vue@1.3.9/dist/antd.min.css"],
    js: []
  },
  // 生产环境
  build: {
    css: ["https://unpkg.com/ant-design-vue@1.3.9/dist/antd.min.css"],
    js: [
      "https://lib.baomitu.com/vue/2.5.17/vue.min.js",
      "https://lib.baomitu.com/vue-router/3.0.1/vue-router.min.js",
      "https://lib.baomitu.com/vuex/3.0.1/vuex.min.js",
      "https://lib.baomitu.com/axios/0.18.0/axios.min.js",
      "https://unpkg.com/ant-design-vue@1.3.9/dist/antd.min.js",
      "https://lib.baomitu.com/echarts/4.2.0-rc.2/echarts.min.js"
    ]
  }
};

module.exports = {
  css: {
    extract: isProduction,
    sourceMap: false,
    modules: false,
    loaderOptions: {}
  },
  // resolve: {
  //   extensions: [".js", ".ts", ".vue", ".json"]
  // },
  // 默认生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 121,
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://本地ip", // test
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  configureWebpack: config => {
    if (isProduction) {
      // externals 预加载
      Object.assign(config, {
        externals: externals
      });
      // 上线压缩去除console
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"] // 去除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
    } else {
      // 开发环境配置
      /**
       * 关闭host check，方便使用ngrok之类的内网转发工具
       */
      config.devServer = {
        disableHostCheck: true
      };
    }
  },
  chainWebpack: config => {
    /**
     * 删除懒加载模块的prefetch，降低带宽压力
     * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
     */
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();

    svgRule.use("vue-svg-loader").loader("vue-svg-loader");

    config.plugins.delete("prefetch");
    config.plugin("html").tap(args => {
      if (isProduction) {
        args[0].cdn = cdn.build;
      } else {
        args[0].cdn = cdn.dev;
      }

      return args;
    });
    // 忽略监听ketcher和node_modules
    config.watchOptions({
      ignored: ["node_modules"]
    });
    // 配置项目所使用到的别名
    config.resolve.alias.set("public", path.join(__dirname, "public"));
  }
};
