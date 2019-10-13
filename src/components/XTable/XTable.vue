<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-30 14:46:51
 * @LastEditTime: 2019-10-11 23:13:19
 * @LastEditors: DuYa
 -->
<template>
  <div>
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      :rowKey="record => record.uuid"
    ></a-table>
  </div>
</template>

<script>
export default {
  name: "XTable",
  props: {
    dataSource: {
      // 数据源
      type: Array,
      default: () => []
    },
    columns: {
      // 列表
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped></style>
