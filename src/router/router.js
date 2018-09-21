//这个页面是专门放路由的
import VueRouter from 'vue-router'      //这个属于路由范围，所以写在这个页面
import Vue from "vue";
//1.创建组件
import Home from '../containers/Home/Home.vue'      //首页
import CourseSheet from '../containers/CourseSheet/CourseSheet.vue'   //课程表
import MealCard from '../containers/MealCard/MealCard.vue'   //课程表
import Personal from '../containers/Personal/Personal.vue'   //个人中心
import DetailAcount from '../containers/DetailAcount/DetailAcount.vue'   //每日详情
import Circle from '../containers/Circle/Circle.vue'   //课程表
import PayFor from '../containers/PayFor/PayFor.vue'   //充值
import NewKnowlage from  '../components/NewKnowlage/NewKnowlage.vue'  //新视野
import Daily from  '../components/Daily/Daily.vue'    //  日常
import Library from  '../components/Library/Library.vue'    //图书馆
import Bill from  '../components/Bill/Bill.vue'             //账单
import Group from  '../components/Group/Group.vue'          //社团
import Activity from  '../components/Activity/Activity.vue'   //活动
import Task from  '../components/Task/Task.vue'               //任务
import List from  '../components/List/List.vue'               //好友列表
import Message from  '../components/Message/Message.vue'      //附近
import NearTo from  '../components/NearTo/NearTo.vue'      //附近

Vue.use(VueRouter);     //使用路由
// 2.配置路由
const routes = [
  {
    path:"/circle",component: Circle,
    children:[
      {path:'list',component:List},
      {path:'message',component:Message},
      {path:'nearto',component:NearTo},
    ]

  },
  {
    path:'/course',component: CourseSheet,name:"CourseSheet",
    children:[
      {path:'daily',component:Daily},
      {path:'library',component:Library},
      {path:'bill',component:Bill},
      {path:'group',component:Group},
      {path:'activity',component:Activity},
      {path:'task',component:Task},
    ]

  },     //课程表
  {
    path:'/home',component: Home,name:"home",     //首页

    children:[
      {path:'intro',component:NewKnowlage},
      {path:'gonggao',component:NewKnowlage},
      {path:'today',component:NewKnowlage},
      {path:'near',component:NewKnowlage},
    ]

  },
  {path:"/mealcard",component:MealCard},
  {path:"/detailacount",component:DetailAcount},
  {path:"/payfor",component:PayFor},
  {path:"/personal",component:Personal},
  // {path:'/news',component: News,name:"news"},
  {path:'/*',component: DetailAcount},    //如果找不到路由就默认首页
]

//3.实例化vueRouter
const router = new VueRouter({
  mode:'history',   /*hash改为history*/
  routes
})


//5.把<Router-view></router-view>放在App.vue根组件中

export default router     //暴露路由给
