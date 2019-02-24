<template>
  <div id="doc-page">
    <div class="side-nav" @click="navToAnchor">
      <ul>
        <li>
          <router-link :to="{path: '#base'}">基础</router-link>
          <ul>
            <li>
              <router-link :to="{path: '#start'}">开始</router-link>
            </li>
            <li>
              <router-link :to="{path: '#dynamic'}">动态路由</router-link>
            </li>
            <li>
              <router-link :to="{path: '#nest'}">嵌套路由</router-link>
            </li>
          </ul>
        </li>
        <li>进阶
          <ul>
            <li>导航钩子</li>
            <li>路由元信息</li>
            <li>过渡特效</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content" @scroll="posToAnchor">
      <ul class="con-list">
        <li>
          <p id="base">基础</p>
          <span>备用信息</span>
        </li>
        <li>
          <p id="start">开始</p>
          <span>备用信息</span>
        </li>
        <li>
          <p id="dynamic">动态路由</p>
          <span>备用信息</span>
        </li>
        <li>
          <p id="nest">嵌套路由</p>
          <span>备用信息</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TWEEN from "tween.js";

export default {
  beforeRouteEnter(to, from, next) {
    next( (vm) => vm.animation(to) );
  },
  beforeRouteUpdate(to, from, next) {
    this.animation(to);
    next();
  },
  methods: {
    navToAnchor(event) {
      let ev = event || window.event;
      if(ev.target.tagName === 'A') {
        ev.target.classList.add('acitve-nav');
      }
    },
    posToAnchor() {
      
    },
    animation(to) {
      //判断点击的hash是否存在
      if (to.hash) {
        var anchorEl = document.getElementById(to.hash.slice(1)),
          conPage = document.getElementsByClassName("content")[0];

        //判断对应的锚点元素是否存在
        if (anchorEl) {
          animateFunc();
          new TWEEN.Tween({
            number: conPage.scrollTop
          })
            .to(
              {
                number: anchorEl.offsetTop
              },
              300
            )
            .onUpdate(function() {
              conPage.scrollTop = this.number.toFixed(0);
            })
            .start();
        }
      }

      function animateFunc(time) {
        requestAnimationFrame(animateFunc);
        TWEEN.update(time);
      }
    }
  }
};
</script>

<style>
#doc-page {
  position: absolute;
  top: 78px;
  left: 0;
  right: 0;
  bottom: 0;
}
.side-nav {
  float: left;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  background-color: #fff;
}
#doc-page .content {
  padding: 0;
  position: absolute;
  top: 0;
  left: 200px;
  right: 0;
  bottom: 0;
  padding-left: 20px;
  overflow-y: auto;
}
.side-nav ul {
  padding-left: 15px;
}
.side-nav ul li {
  font: 16px/28px "宋体";
  cursor: pointer;
}
.side-nav ul li a {
  text-decoration: none;
}
.side-nav ul li a.acitve-nav {
  font-weight: bold;
  color: #2673ff;
}
.side-nav > ul > li {
  font-weight: bold;
}
.con-list {
  padding: 0;
  margin: 0;
}
.con-list li {
  width: 100%;
  height: 500px;
}
.con-list li p {
  margin: 0;
}
.con-list li span {
  font: 12px/18px "宋体";
  color: #aaa;
}
</style>
