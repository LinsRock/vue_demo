/* 
    自定义localStorage插件
    用于设置和获取 localStorage 
*/
let local = {
  //设置 localStorage
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  //获取 localStorage
  fetch(key) {
    return JSON.parse(localStorage.getItem(key)) || {};
  }
};

export default {
  install: function(Vue) {
    Vue.prototype.$local = local;
  }
};
