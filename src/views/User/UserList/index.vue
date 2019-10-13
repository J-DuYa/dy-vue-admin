<!--
 * @Author: DuYa
 * @LastEditors: DuYa
 -->
<template>
  <div class="list">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input v-decorator="['name']" placeholder="name"></a-input>
      </a-form-item>
      <!-- <a-form-item>
        <a-input v-decorator="['name']" placeholder="name"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['name']" placeholder="name"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['name']" placeholder="name"></a-input>
      </a-form-item>-->
    </a-form>
    <div class="mt10">
      <XTable :columns="column" :dataSource="dataSource"></XTable>
    </div>
  </div>
</template>

<script>
import XTable from "@/components/XTable";
export default {
  name: "UserList",
  components: { XTable },
  data() {
    return {
      form: this.$form.createForm(this),
      column: [
        {
          title: "UUID",
          dataIndex: "uuid",
          width: 100,
          scopedSlots: { customRender: "uuid" }
        },
        {
          title: "Name",
          dataIndex: "name",
          width: 200,
          scopedSlots: { customRender: "name" }
        },
        {
          title: "Desc",
          dataIndex: "desc",
          width: 300,
          scopedSlots: { customRender: "desc" }
        },
        {
          title: "Blob",
          dataIndex: "blob",
          width: 100
        },
        {
          title: "Address",
          dataIndex: "address",
          width: 200
        },
        {
          title: "CreateTime",
          dataIndex: "createTime",
          width: 160
        }
      ],
      dataSource: [
        {
          uuid: 111,
          name: "毒牙",
          desc: "小小的牙齿也有剧毒",
          blob: "csdn",
          address: "中华大地"
        }
      ]
    };
  },
  mounted() {
    this.queryData();
  },
  methods: {
    handleSubmit() {},
    queryData() {
      this.$request.get("/test/test").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
