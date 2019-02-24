import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const Layout = () => import("./views/layout.vue");
const Project = () => import("./views/backend/project.vue");
const Doc = () =>
  import(/* webpackChunkName: "group" */ "./views/backend/doc.vue");
const Workbench = () =>
  import(/* webpackChunkName: "group" */ "./views/backend/workbench");
const Login = () => import("./components/login.vue");

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/management",
      name: "management",
      component: Layout,
      children: [
        {
          path: "/project",
          name: "project",
          component: Project,
          meta: {
            needLogin: true
          }
        },
        {
          path: "/workbench",
          name: "Workbench",
          component: Workbench,
          meta: {
            needLogin: true
          }
        },
        {
          path: "/doc",
          name: "Doc",
          component: Doc,
          meta: {
            needLogin: false
          }
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});

//用户登录权限设置
router.beforeEach(function(to, form, next) {
  //确定访问的页面是否需要登录访问
  let needLogin = to.matched.some(item => item.meta.needLogin);
  //需要登录访问的页面
  if (needLogin) {
    //获取用户登录信息
    let loginInfo = router.app.$local.fetch("login");
    if (loginInfo.isLogin) {
      //用户已登录，跳转到目标页面
      next();
    } else {
      //用户未登录，跳转到登录页面
      router.app.$router.push({
        path: "login",
        query: {
          //添加查询字符串，重定向
          redirect: to.path.slice(1)
        }
      });
    }
  } else {
    //不需要登录访问的页面，直接进入
    next();
  }
});

export default router;
