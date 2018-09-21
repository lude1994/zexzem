<template>
    <div class="homepage">
      <home-header></home-header>
      <div class="mainnav">
        <div class="nav">
          <i></i>
          <span>扫一扫</span>
        </div>
        <div class="nav">
          <i>111</i>
          <span>扫一扫</span>
        </div>
        <div class="nav">
          <i>111</i>
          <span>扫一扫</span>
        </div>
        <div class="nav">
          <i>111</i>
          <span>扫一扫</span>
        </div>
      </div>
      <div class="coursesheet">
        <mt-swipe :auto="0" :show-indicators="false">
          <mt-swipe-item v-for="item in navList">
            <div class="line line1">
              <span class="status">{{item.status}}</span>
              <div class="time">
                <span>{{item.time}}</span>
                <span>{{item.weekday}}</span>
              </div>
            </div>
            <div class="line line2">
              <span>{{item.witch}} / {{item.total}}</span>
              <span>{{item.course}}</span>
            </div>
            <div class="line line3">
              <span>距离上课时间还有30分钟</span>
              <span>{{item.place}}</span>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="border-line"></div>
      <div class="dolist">
        <div class="listnav">
          <span class="iconfont icon-saoma"></span>
          <span>小工具</span>
        </div>
        <div class="listnav">
          <span>1212</span>
          <span>学习专区</span>
        </div>
        <div class="listnav">
          <span>1212</span>
          <span>爱情专区</span>
        </div>
        <div class="listnav">
          <span>1212</span>
          <span>社团</span>
        </div>
        <div class="listnav">
          <span>1212</span>
          <span>创业</span>
        </div>
        <div class="listnav">
          <span>1212</span>
          <span>兴趣</span>
        </div>
        <div class="listnav">
          <span>1212</span>
          <span>活动</span>
        </div>
        <div class="listnav">
          <span>1212</span>
          <span>学院动态</span>
        </div>

      </div>
      <div class="message">
        <div class="newmessage">
          <div class="mess" v-for="item in newMessage">
            <span>{{item.title}}</span>
            <span>30分钟前</span>
          </div>
        </div>
        <div class="goto">---></div>
      </div>
      <div class="scrollinfo">
        <div class="scrollbox">
          <div class="infolist" v-for="item in gonggao">

          </div>
        </div>

      </div>
      <h1 class="groupknow">
        长知识
      </h1>
      <div class="routernav">
        <router-link to="/home/intro">推荐</router-link>
        <router-link to="/home/gonggao">校公告</router-link>
        <router-link to="/home/today">今日</router-link>
        <router-link to="/home/near">附近</router-link>
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import NewKnowlage from '../../components/NewKnowlage/NewKnowlage.vue'

    export default {
        name: "Home",
      data(){
          return{
            navList:[
              {"status":"第一节课程","time":"2018 / 01-10","weekday":"周二","witch":"1","total":"4","place":"美术楼213","course":"高数"},
              {"status":"第二节课程","time":"2018 / 01-10","weekday":"周二","witch":"2","total":"4","place":"美术楼213","course":"美术学"},
              {"status":"第三节课程","time":"2018 / 01-10","weekday":"周二","witch":"3","total":"4","place":"美术楼213","course":"语文"},
              {"status":"第四节课程","time":"2018 / 01-10","weekday":"周二","witch":"4","total":"4","place":"美术楼213","course":"高数"},
            ],     //课程的展示
            newMessage:[
              {"title":"充值成功"},
              {"title":"充值成功"}
            ],    //新消息
            gonggao:[
              {title:"附近的圈子",content:"附近有2个圈子"},
              {title:"附近的圈子",content:"附近有2个圈子"},
              {title:"附近的圈子",content:"附近有2个圈子"},
              {title:"附近的圈子",content:"附近有2个圈子"},
              {title:"附近的圈子",content:"附近有2个圈子"}
            ],   //工告
          }
      },
      components:{
        HomeHeader,
        NewKnowlage
      }
    }
</script>

<style scoped lang="scss">


  .homepage{
    background: #34425e;
    .mainnav{

      width: 85%;
      padding: 7vh 0;
      display: flex;
      justify-content: space-around;
      background: rgba(255,255,255,0.5);
      /*background: blue;*/
      border-radius: 20px;
      margin: 0 auto;
      margin-top: 2vh;
      box-shadow: 0 0 47px #eee;
      .nav{
        display: flex;

        flex-direction: column;
        font-size: 4vw;
      }
    }
    .coursesheet{
      margin-top: 7vh;
      /*background: blue;*/
      height: 20vh;
      .line{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8vh 0;
        /*color: #fff;*/
        width: 85%;
        margin: 0 auto;

      }

      .line1{
        .status{
          font-size: 6vw;
          color: #fff;
        }
        .time{
           font-size: 3vw;
          color: #999;
         }
      }
      .line2{
        font-size: 8vw;
        color: #fff;
      }
      .line3{
        font-size: 3vw;
        color: #999;
      }
    }
    .dolist{
      display: flex;
      flex-wrap: wrap;
      .listnav{
        width: 25%;
        padding: 3vh 0;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 4vw;
        color: #fff;
      }
    }

      .message{
        display: flex;
        position: relative;
        align-items: center;
        margin: 0 auto;
        justify-content: center;
        padding: 2vh 0;
        background: rgba(255,255,255,.2);
        color: #fff;
        font-size: 4vw;
        .newmessage{
          width: 75%;

          /*justify-content: space-between;*/
        .mess{
          width: 96%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5vh 0;
        }

      }

        .goto{
          position: absolute;
          right: 0px;
          width: 45px;
          background: rgba(255,255,255,.3);
          height: 12vh;
          border-radius: 106px 0 0 106px;
          text-align: center;
          line-height: 12vh;
        }
    }
    .border-line{
      width: 50%;
      height: 0.5vh;
      margin: 0 auto;
      margin-top: 20px;
      border-radius: 20%;
      background: rgba(255,255,255,.2);
    }
    .scrollinfo{
      width: 90vw;
      overflow-x: auto;
      margin: 0 auto;
      padding: 4vh 0;
      .scrollbox{
        overflow-x: auto;
        white-space: nowrap;
        border-radius: 20px;
        .infolist{
          width: 45vw;
          height: 15vh;
          background: url("../../assets/img/weather.jpg") no-repeat;
          background-size: 100% 100%;
          box-shadow: 5px 5px 10px #fff;
          display: inline-block;
          margin: 0 3vw;
          white-space: nowrap;
          border-radius: 20px;
        }
      }

    }
    .groupknow{
      text-align: center;
      color: #fff;
      margin-top: 3vh;
      margin-bottom: 2vh;
    }
    .routernav{
      width: 96%;
      margin: 0 auto;
      font-size: 4vw;
      padding: 2vh 0;
      a{
        color: #fff;
      }
    }
    .view{
      width: 96%;
      margin: 0 auto;
      margin-top: 2vh;
      height: auto;
    }
  }
</style>
