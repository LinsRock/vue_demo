<template>
  <div class="nav">
    <ul class="menu">
      <router-link tag="li" to="/" class="menu-item logo">
        <img src="../assets/logo.png" alt>
      </router-link>
      <router-link tag="li" to="/project" class="menu-item">
        <i class="fa fa-home"></i>
        <span>我的项目</span>
      </router-link>
      <router-link tag="li" to="/workbench" class="menu-item">
        <i class="fa fa-work"></i>
        <span>工作台</span>
      </router-link>
      <router-link tag="li" to="/doc" class="menu-item">
        <i class="fa fa-doc"></i>
        <span>文档</span>
      </router-link>
    </ul>
    <div class="user-info-box" v-if="isLogin">
        <div class="user-info">
            <img src="../assets/portrait.png" alt="" class="user-photo" />
            <span class="user-name">{{userName}}</span>
        </div>
        <div class="under-wrap">
            <ul class="under-menu">
                <li class="under-menu-item logout-btn" @click="logout">退出</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: false,
            userName: ''
        }
    },
    created() {
        //从 localStorage 中获取用户登录信息
        let userInfo = this.$local.fetch('login');
        //添加用户信息
        this.isLogin = userInfo.isLogin;
        this.userName= userInfo.userName;
    },
    methods: {
        logout() {
            //清除localStorage中的用户信息数据
            this.$local.save('login', null);
            //路由跳转到登录页面
            this.$router.push('/login');
        }
    }
}
</script>

<style>
ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.nav {
    width: 100%;
    height: 48px;
    background-color: #324157;
}
.nav .menu {
    float: left;
    overflow: hidden;
}
.menu .menu-item {
    float: left;
    display: block;
    height: 48px;
    box-sizing: border-box;
    padding: 0 20px;
    font: 0/48px "宋体";
    color: #bfcbd9;
    cursor: pointer;
}
.menu .menu-item:nth-child(n+2):hover {
    border-bottom: 5px solid #20a0ff;
}
.menu .menu-item span {
    font-size: 16px;
}
.menu .router-link-active i ,.menu .router-link-active span{
    color: #2673ff;
}
.menu .logo img {
    height: 48px;
}
.user-info-box {
    float: right;
    height: 40px;
    padding: 4px 10px 4px 5px;
    margin-right: 10px; 
    position: relative;
    cursor: pointer;
}
.user-info-box:hover {
    background-color: #aaa;
}
.user-info-box .user-info {
    height: 40px;
    overflow: hidden;
}
.user-info .user-photo {
    float: left;
    width: 38px;
    height: 38px;
    border: 1px solid #fff;
    border-radius: 50%;
}
.user-info .user-name {
    float: left;
    display: block;
    padding-left: 10px;
    font: 16px/40px "宋体";
    color: #fff;
}
.under-wrap {
    display: none;
    position: absolute;
    top: 48px;
    left: 0;
    width: 100%;
}
.under-wrap .under-menu {
    padding: 5px 0;
}
.under-wrap .under-menu-item {
    width: 100%;
    height: 30px;
    background-color:#fff;
    border: 1px solid #000;
    font: 16px/30px "宋体";
    text-align: center;
}
.under-wrap .logout-btn:hover {
    background-color: #324157;
    color: #fff;
}
.user-info-box:hover .under-wrap {
    display: block;
}

@font-face {
font-family: "FontAwesome";
font-weight: normal;
font-style : normal;
       src : url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot?v=4.3.0");
       src : url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0") format("embedded-opentype"),
             url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0") format("woff2"),
             url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0") format("woff"),
             url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf?v=4.3.0") format("truetype"),
             url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular") format("svg");
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 16px;
    text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
    margin-right: 6px;
}
.fa-home::before{
    content: "\F015";
}
.fa-work::before {
    content: "\F121";
}
.fa-doc::before {
    content: "\F02D";
}
</style>

