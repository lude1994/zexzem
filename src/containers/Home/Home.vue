<template>
    <div class="homepage">
      <home-header></home-header>
      <div class="mainnav">
        <div class="weather">
          <img src="../../assets/img/weather.jpg" alt="">
          <div class="desc">
            <span>32℃ 晴</span>
            <span>有雾霾，注意安全</span>
          </div>

        </div>
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
        <mt-swipe :auto="0">
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
      <!--<div class="border-line"></div>-->
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
      <div class="group">
        <div class="title">惠支付</div>
        <div class="line"></div>
        <div class="con">
          <div class="mincon">
            <div class="left1">
              <h2>全场包邮</h2>
              <span>1元抢好货</span>
            </div>
            <img src="../../assets/img/weather.jpg" alt="">
          </div>
          <div class="mincon">
            <div class="left1">
              <h2>全场包邮</h2>
              <span>1元抢好货</span>
            </div>
            <img src="../../assets/img/weather.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="group group2">
        <div class="title">惠支付</div>
        <div class="line"></div>
        <div class="con">
          <div class="mincon">
            <div class="left1">
              <h2>全场包邮</h2>
              <span>1元抢好货</span>
            </div>
            <img src="../../assets/img/weather.jpg" alt="">
          </div>
          <div class="mincon">
            <div class="left1">
              <h2>全场包邮</h2>
              <span>1元抢好货</span>
            </div>
            <img src="../../assets/img/weather.jpg" alt="">
          </div>
        </div>
      </div>
      <!--<v-footer></v-footer>-->

    </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import NewKnowlage from '../../components/NewKnowlage/NewKnowlage.vue'
  import VFooter from '../../components/Footer/Footer.vue'
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
      methods: {

      },
      components:{
        HomeHeader,
        NewKnowlage,
        VFooter
      }
    }
</script>

<style scoped lang="scss">


  .homepage{
    background: url("../../assets/img/bg3.jpg") no-repeat;
    background-size: 100% 100%;
    padding-bottom: 11vh;
    .mainnav{
      position: relative;
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
      .weather{
        position: absolute;
        top: -24px;
        margin-left: -16vw;
        left: 50%;
        display: flex;
        align-items: center;
        img{
          width: 50px;
          /*height: 50px;*/
        }
        .desc{
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          /*text-align: center;*/
        }
      }
      .nav{
        display: flex;

        flex-direction: column;
        font-size: 4vw;
      }
    }
    .coursesheet{
      margin-top: 5vh;
      /*background: linear-gradient(to right,#CEEFFD,#618CE4 );*/
      border-radius: 10px 10px 0 0;
      height: 23vh;
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
      /*background: linear-gradient(to right, #CEEFFD, #618CE4);*/
      border-radius: 10px 10px 0 0;
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
      overflow-x: auto;
      margin: 0 auto;
      padding: 4vh 0;
      .scrollbox{
        overflow-x: auto;
        white-space: nowrap;
        border-radius: 20px;
        .infolist{
          width: 39vw;
          height: 11vh;
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

    .group2{
      margin-top: 10px;
    }
    .group{
      /*background: green;*/
      overflow: hidden;
      .title{
        padding-left: 10px;
        border-left: 4px solid #2FA1FA;
        margin-left: 20px;
        font-size: 14px;
        /*color: #eee;*/
        margin-bottom: 10px;
        margin-top: 10px;
      }
      .line{
        height: 1px;
        width: 100%;
        background: #fff;
      }
      .con{
        display: flex;
        border-bottom: 1px solid #fff;
        .mincon{
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 50%;
          padding: 20px 0;
          &:nth-child(1){
            border-right: 1px solid #fff;
            box-sizing: border-box;
          }
          .left1{
            text-align: center;
            /*margin: 0 auto;*/
            span{
              color: #999;
            }

          }
          img{
            width: 100px;
            height: 50px;
          }
        }
      }
    }
  }
</style>
