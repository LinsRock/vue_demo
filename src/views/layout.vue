<template>
    <div id="management">
        <header-nav></header-nav>
        <div class="dir-wrap">
            <router-link to="/" tag="span" class="one-level">首页</router-link>/<span>{{dir}}</span>
        </div>
        <transition name="fade" mode="out-in"> 
            <router-view />
        </transition>
    </div>
</template>

<script>
import Header from "@/components/header.vue";

let flags = {
    'project': '我的项目',
    'workbench': '工作台',
    'doc': '文档'
};

export default {
    data() {
        return {
            dir: ''
        }
    },
    watch: {
        $route() {
            this.dir = flags[this.$route.path.slice(1)];
        }
    },
    beforeRouteEnter(to, from, next) {
        next( vm => {
            vm.dir = flags[to.path.slice(1)]
        });
    },
    components: {
        headerNav: Header
    }
}
</script>

<style>
.dir-wrap {
    width: 100%;
    height: 30px;
    padding-left: 15px;
    box-sizing: border-box;
    background-color:#cef3ef;
    font: 14px/30px "宋体";
    color:#aaa;
}
.dir-wrap span {
    cursor: pointer;
}
.dir-wrap .one-level {
    color: #000;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-ender, .fade-leave-to {
    opacity: 0;
}
</style>

