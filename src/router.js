import VueRouter from "vue-router";

import home from "./components/tabbar/Home.vue";
import member from "./components/tabbar/Member.vue";
import shopping from "./components/tabbar/Shopping.vue";
import search from "./components/tabbar/Search.vue";
import journalism from './components/News/JournalismComponent.vue'
import newsDetail from './components/News/NewsDetail.vue'
import tupianxiangqing from './components/News/Tupianxiangqing.vue'
import zaixiangqing from './components/News/Zaixiangqing.vue'
import gumai from './components/News/Goumai.vue'
import goumaixiaingqing from './components/News/Goumaixiangqing.vue'
import tuwenjieshao from './components/News/Tuwenjieshao.vue'
import pinglun from './components/quanjuzujian/pingLun.vue'

var router = new VueRouter({
    routes: [
        { path: "/", redirect: '/home' },
        { path: "/home", component: home },
        { path: "/member", component: member },
        { path: "/shopping", component: shopping },
        { path: "/search", component: search },
        { path: '/home/Journalism', component: journalism },
        { path: '/home/NewsDetail/:id', component: newsDetail },
        { path: "/home/Tupianxiangqing", component: tupianxiangqing },
        { path: '/home/Tupianxiangqing/Zaixiangqing', component: zaixiangqing },
        { path: '/home/Goumai', component: gumai },
        { path: '/home/Goumai/Goumaixiangqing/:id', component: goumaixiaingqing, name:'gmxq' },
        { path: '/home/Goumai/Goumaixiangqing/tuwenjieshao/:id', component: tuwenjieshao },
        { path: '/home/Goumai/Goumaixiangqing/pinglun/:id', component: pinglun, name: 'pinglun'}
    ],
    linkActiveClass: "mui-active"
});

export default router;