import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import Utils from "./lib/utils.js";

//注册utils插件
Vue.use(Utils);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
