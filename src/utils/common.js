/*
 * @Author: zoujun
 * @Date: 2019-06-18 15:44:18
 * @Last Modified by: zoujun
 * @desc 常用的工具类 ---> ...
 * @Last Modified time: 2019-07-12 16:01:51
 */

"use strict";

import { notification } from "ant-design-vue";

// 格式化時間
export async function formatDate() {}

// 处理文件名
export async function dealFileName() {}

// 统一通知提醒框, more things to think
// @param {config}: 内容包括：图标， 颜色， 延迟(单位为秒)等等
export async function DealWithNotification(
  title = "这是一个通知提醒框",
  desc = "这里显示所要述说的内容",
  config
) {
  notification.open({
    message: title,
    description: desc,
    ...config,
    duration: config.duration ? config.duration : 2
  });
}

// 匹配url后面的关于某字段的值
export async function getUrlParam(url = "", param = "") {
  let result = "";

  // 比如取得"name"这个字段的参数
  if (!url || !param) {
    return "";
  }

  // result = new URLSearchParams(url).get(param); // 内置api方法实现

  // 方法二
  let _a =
    url.split("?").length > 1
      ? url
          .replace("?", "?&")
          .split("?")
          .join()
          .replace(/\&/g, "&&&")
          .split("&&")
      : [url]; // 这里取数组第一个参数后的内容
  _a.length > 1 ? (_a = _a.slice(1)) : (_a = []);
  _a.forEach(item => {
    if (item.indexOf(param + "=") > -1) {
      result = item.split("=")[1];
    }
  });

  // 方法三 正则表达式匹配
  // 匹配 ? or & 之后的内容
  // result = url.match(/(?<=elective=)(\d+(,\d+)*)/);

  return result.split(",").length === 1
    ? result.split(",")[0] === ""
      ? []
      : result.split(",")
    : result.split(",");
}

// 手动写一个localstorge存储
export class mockLocalstorage {
  constructor() {
    this.store = new Map(); // 记录存储数据
  }

  getItem(key) {
    const stringKey = String(key);
    if (this.store.has(stringKey)) {
      return String(this.store.get(stringKey));
    } else {
      return null;
    }
  }

  // time单位是小时
  setItem(key, val, time = "undefined") {
    let stime = null;
    if (typeof time !== "number" && time !== "undefined") {
      throw new Error("设置过期时间的基础单位是小时，请不要破坏规则！");
    }

    if (time !== "undefined") {
      time = time * 60 * 60 * 1000; // h ---> ms
      try {
        let _this = this;
        // 设置定时器 定时清空垃圾数据
        stime = setTimeout(() => {
          _this.removeItem(key);
          stime = null;
        }, time);
        this.store.set(String(key), val);
      } catch (e) {
        stime = null;
        throw new Error(e);
      }
    }
  }

  keys() {
    return Object.keys(this.store);
  }

  removeItem(key) {
    this.store.delete(String(key));
  }

  clear() {
    this.store.clear();
  }

  get length() {
    return this.store.size;
  }
}
