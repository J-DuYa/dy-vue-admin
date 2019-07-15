<template>
  <section class="dk_login">
    <div class="dk_login_content">
      <h3 class="mt20vh">毒牙君vue后台管理系统</h3>
      <a-form
        id="components-form-demo-normal-login"
        :form="loginForm"
        class="login-form"
        @submit="loginSubmit"
      >
        <a-form-item>
          <a-input
            size="large"
            autocomplete="off"
            v-decorator="[
              'user',
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
            <a class="login-form-forgot" href>No account?</a>
            <a class="login-form-forgot" href>Forgot password?</a>
          </div>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            size="large"
            block
            :loading="submitLoading"
          >登 录</a-button>
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
  name: "Login",
  data() {
    return {
      loginForm: this.$form.createForm(this),
      submitLoading: false
    };
  },
  methods: {
    loginSubmit(e) {
      e.preventDefault();
      this.loginForm.validateFields((err, values) => {
        if (!err) {
          this.submitLoading = true;
          this.$request
            .post("/user/login", values)
            .then(res => {
              if (res.data.code === 200) {
                this.$Cookies.set("token", res.data.token);
                this.$router.push("/");
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
.dk_login {
  display: flex;
  align-content: center;
  align-items: center;
  height: 100vh;
  background: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  box-sizing: border-box;
  .dk_login_content {
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
