//入口文件
import "./index.html";

import Vue from "vue"

import VueRouter from "vue-router";

Vue.use(VueRouter);

import router from "./router.js";
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

import Vuex from 'vuex'
Vue.use(Vuex)


let splist = JSON.parse(localStorage.getItem('splist' || ''))



const store = new Vuex.Store({
  state: {
    splist
  },
  mutations: {
    getsl(state,spobj){
      let flage = false
      for (const item of state.splist) {
        if(item.id == spobj.id){
          item.shuliang += spobj.shuliang
          flage = true
          return
        }
      }

      if(!flage){
        state.splist.push(spobj)
      }

      localStorage.setItem('splist',JSON.stringify(state.splist))
    },
    zengshanshulinag(state, obj){
      for (const item of state.splist) {
          if(item.id == obj.id){
            // console.log(obj.shuliang)
            item.shuliang = parseInt(obj.shuliang)
            break;
          }
      }
      localStorage.setItem('splist',JSON.stringify(state.splist))
    },
    shanchusp(state, id){
      // console.log(state.splist)
      state.splist.some((item, i) => {
        if(item.id == id){
          state.splist.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('splist',JSON.stringify(state.splist))
    },
    zhuangtai(state, obj){
      for (const iterator of state.splist) {
        if(iterator.id == obj.id){
          iterator.zhuangtai = obj.zhuangtai
          break;
        }
      }
      localStorage.setItem('splist',JSON.stringify(state.splist))
    }
  },
  getters: {
    getsl(state){
      let sl = 0
      for (const item of state.splist) {
        sl += item.shuliang
      }
      return sl
    },
    getsplit(state){
      return state.splist
    },
    getzhuangtai(state){
      let zhuangtailist = {}
      for (const iterator of state.splist) {
        zhuangtailist[iterator.id] = iterator.zhuangtai
      }
      return zhuangtailist
    },
    getgoumaixq(state){
      let gm = {
       shuliang : 0,
       zongjiang : 0
      }
      
      for (const iterator of state.splist) {
        if(iterator.zhuangtai){
          gm.shuliang += iterator.shuliang
          gm.zongjiang += iterator.shuliang * iterator.danjia
        }
      }
      return gm
    }
  }
})

import app from "./App.vue";

// 导入mint-mi
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

//导入mui
import "./lib/mui/css/mui.min.css";
import './lib/mui/css/icons-extra.css'

// 引入 axios
import axios from 'axios';
axios.defaults.baseURL = './apiInterface';
// 将axios绑定给vue成为一个属性
Vue.prototype.$axios = axios;


//导入时间格式化插件
import moment from 'moment'

//缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })

import './css/index.scss'


Vue.filter('dateFormat', function(datastr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router,
  store
})