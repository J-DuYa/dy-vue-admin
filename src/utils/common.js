/*
 * @Author: zoujun
 * @Date: 2019-06-18 15:44:18
 * @Last Modified by: zoujun
 * @desc 常用的工具类 ---> ...
 * @Last Modified time: 2019-07-12 11:50:26
 */

"use strict";

// 格式化時間
export async function formatDate() {}

// 处理文件名
export async function dealFileName() {}

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

  setItem(key, val) {
    try {
      this.store.set(String(key), val);
    } catch (e) {
      throw new Error(e);
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
