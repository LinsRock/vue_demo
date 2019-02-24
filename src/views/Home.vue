<template>
  <div id="home">
    <div class="header">
      <div class="logo">
          <img src="../assets/logo.png" alt="">
      </div>
       <div class="pictures" v-if="isLogin">
            <img src="../assets/portrait.png" alt="" class="user-photo" />
        </div>
      <router-link v-if="!isLogin" class="login-btn" tag="button" to="/login">登录</router-link>
    </div>
    <div class="content">
      <h1 class="title">学习Vue-Router</h1>
      <div class="link-wrap">
        <router-link class="link-btn" tag="div" to="/project">我的项目</router-link>
        <router-link class="link-btn" tag="div" to="/doc">我的文档</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            isLogin: false
        }
    },
    created() {
        //获取用户的登录信息
        this.isLogin = this.$local.fetch('login').isLogin;
    }
}
</script>

<style>
body{
    margin:0;
    background-color: #f9f9f9;
}
h1 { 
    margin: 0;
}
.header {
    width: 100%;
    height: 60px;
    overflow: hidden;
}
.header .logo {
    float: left;
    height: 50px;
    margin: 5px 0 0 50px;
}
.header .logo img {
   height: 50px;
}
.header .login-btn {
    float: right;
    width: 48px;
    height: 28px;
    margin: 16px 100px 0 0;
    border: none;
    outline: none;
    background-color: black;
    font-family: "宋体";
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
}
.header .login-btn:hover {
    color:powderblue;
}
.content {
    padding-top: 120px;
}
.content .title {
    width: 100%;
    text-align: center;
    margin-bottom: 100px;
}
.link-wrap {
    width: 370px;
    margin: 0 auto;
    overflow: hidden;
}
.link-wrap .link-btn {
    float: left;
    width: 160px;
    height: 40px;
    margin-right: 50px;
    background-color:limegreen;
    font: 16px/40px "宋体";
    color: #fff;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
}
.link-wrap .link-btn:last-child {
    margin-right: 0;
}
.link-wrap .link-btn:hover {
    background-color: #43a343;
}
#home .pictures {
    height: 40px;
    float: right;
    margin: 10px 100px 0 0;
    cursor: pointer;
}
#home .pictures img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
