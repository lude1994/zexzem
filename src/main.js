import App from './App.vue'
import Vue from 'vue'
import VueResource from 'vue-resource';  //引入官方vue请求方式
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'    //引入ui组件的css
import router from './router/router.js' //路由页面
import './assets/css/basic.scss'        //引入基础样式
import "./assets/font/iconfont.css";    //引入字体图标



Vue.use(VueResource);     //使用插件
Vue.use(Mint);     //使用ui组件

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
