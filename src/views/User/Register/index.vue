<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 09:04:58
 * @LastEditTime: 2019-10-13 15:12:01
 * @LastEditors: DuYa
 -->
<template>
  <section class="dk_register">
    <div class="dk_register_content">
      <h3 class="mt20vh">人员管理系统注册</h3>
      <a-form
        id="components-form-demo-normal-register"
        :form="registerForm"
        class="register-form"
        @submit="registerSubmit"
      >
        <a-form-item>
          <a-input
            size="large"
            autocomplete="off"
            v-decorator="[
              'userName',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please enter your username/email!'
                  }
                ]
              }
            ]"
            placeholder="admin"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please enter your password!' }
                ]
              }
            ]"
            type="password"
            placeholder="123456"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <div class="btn_area">
            <a class="register-form-forgot" href @click="toLogin"
              >has account?</a
            >
          </div>
          <a-button
            type="primary"
            html-type="submit"
            class="register-form-button"
            size="large"
            block
            :loading="submitLoading"
            >注 册</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>

<script>
// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }
export default {
  name: "register",
  data() {
    return {
      registerForm: this.$form.createForm(this),
      submitLoading: false
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    registerSubmit(e) {
      e.preventDefault();
      this.registerForm.validateFields((err, values) => {
        if (!err) {
          this.submitLoading = true;
          this.$request
            .post("/users/signup", values)
            .then(res => {
              console.log(res);
              if (res.code === 200) {
                console.log("恭喜你注册成功");
                this.$message.success("恭喜你注册成功");
              }
            })
            .finally(() => {
              this.submitLoading = false;
            });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.dk_register {
  display: flex;
  align-content: center;
  align-items: center;
  height: 100vh;
  background: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  box-sizing: border-box;
  .dk_register_content {
    margin: -30vh auto 0 auto;
    padding: 20px;
    width: 428px;
    max-width: 80%;
    // background: #fff;
    h3 {
      height: 8vh;
      line-height: 8vh;
      text-align: center;
      color: rgba(0, 0, 0, 0.85);
      font-size: 3vh;
      letter-spacing: 1px;
      font-weight: 600;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
    .btn_area {
      display: flex;
      margin-bottom: 10px;
      justify-content: space-between;
    }
  }
}
</style>
