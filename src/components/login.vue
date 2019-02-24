<template>
  <div class="login-wrap">
    <h2 class="login-title">Vue登录</h2>
    <form class="login-form" @submit.prevent="sendLogin">
      <input
        type="text"
        name="username"
        class="input username-input"
        ref="userName"
        placeholder="输入用户名"
      >
      <input
        type="password"
        name="userpassword"
        ref="userPassword"
        class="input password-input"
        placeholder="输入密码"
      >
      <input type="submit" value="登录" class="input sumbit-btn">
    </form>
    <div class="back-index">
        <router-link to="/">>>首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    sendLogin() {
      //获取用户输入的用户名和密码
      let userName = this.$refs.userName.value,
        pass = this.$refs.userPassword.value;
      let info = {
        userName: userName,
        pass: pass,
        isLogin: true
      };

      //获取到当前路由的重定向页面，默认重定向到 project页面
      let redirect = this.$route.query.redirect || "project";

      //将用户信息存储在localStorage
      this.$local.save("login", info);

      //路由跳转到后台目标页面
      this.$router.push({
        path: "/" + redirect
      });
    }
  }
};
</script>

<style>
h1 {
  margin: 0;
}
.login-wrap {
  width: 300px;
  margin: 50px auto 0;
}
.login-wrap .login-title {
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
}
.login-form .input {
  display: block;
  width: 100%;
  height: 30px;
  padding-left: 15px;
  box-sizing: border-box;
  margin-top: 10px;
  font-family: "宋体";
  font-size: 14px;
}
.login-form .sumbit-btn {
  background-color: deepskyblue;
  border: none;
  cursor: pointer;
}
.back-index {
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
}
</style>

