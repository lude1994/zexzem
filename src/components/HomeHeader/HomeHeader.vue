<template>
    <div class="homeheader">
      <div class="header">
        <i class="iconfont icon-saoma" @click="showSet"></i>
        <span class="place">温州</span>
      </div>
      <transition name="showok">
        <div class="shadow" v-show="showShadow" @click="none" transiton="showok"></div>
      </transition>
      <transition name="fade">
        <div class="show" v-show="isShow" transiton="fade">
        <div class="up">
          <div class="code">
            <i class="iconfont icon-qianbao"></i>
          </div>

          <div class="info">
            <div class="nameinfo">
              <img src="../../assets/img/weather.jpg" alt="">
              <span>朱晓明</span>
            </div>
            <div class="schoolname">临沂大学(理学院)</div>
            <div class="xuehao">学号：1234567890</div>
          </div>
          <div class="message">
            <i class="iconfont icon-huodong"></i>
            <marquee direction="left" behavior="scroll" scrollamount="1" scrolldelay="0" loop="-1" width="130" height="20" bgcolor="transparent" hspace="10" vspace="10">
              {{newInfo}}
            </marquee>
            <!--<div class="messageinfo"></div>-->
          </div>
        </div>
        <div class="down">
          <div class="upnav">
            <div class="li" v-for="item in showData">
              <span :class="item.icon"></span>
              <span>{{item.title}}</span>
            </div>
          </div>
          <div class="exit" @click="exit">关闭</div>
        </div>
      </div>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
      data(){
          return{
            showData:[
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"},
              {icon:"iconfont icon-fukuan",title:"了解"}

            ],
            isShow:false,
            showShadow:false,
            newInfo:"好消息啊，好消息"
          }
      },
      methods:{
        showSet(){      //点击显示左边框
          if(this.isShow === false){
            this.isShow = true;
            this.showShadow = true;

          }
        },
        none(){   //点击黑色背景隐藏左边栏
          this.isShow= false
          this.showShadow = false;
        },
        exit(){     //关闭左边栏
          this.isShow= false
          this.showShadow = false;
        },

      }
    }
</script>

<style scoped lang="scss">
  .homeheader{
    font-size: 5vw;
    color: #fff;
    .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 12vh;
      i{
        font-size: 20px;
        margin-left: 4vw;
      }
      .place{
        margin-right: 4vw;
      }
    }
    .shadow{
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.6);
      z-index: 7;
    }
    .show{
      top: 0;
      height: 100vh;
      width: 85%;
      background: #0096DB;
      position: fixed;
      z-index: 99;
      .up{
        height: 25vh;
        background: url("../../assets/img/bg.jpg") no-repeat;
        background-size: 100%;
        position: relative;
        .code{
          text-align: right;
          line-height: 37px;
          i{
            margin-right: 3vw;
          }
        }

        .info{
          .nameinfo{
            display: flex;
            align-items: center;
            img{
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-left: 15px;
            }
            span{
              margin-left: 10px;
            }
          }
          .schoolname{
            font-size: 14px;
            color: #fff;
            margin-left: 15px;
            margin-top: 10px;
          }
          .xuehao{
            font-size: 14px;
            color: #fff;
            margin-left: 15px;
            margin-top: 5px;
          }
        }
        .message{
          display: flex;
          font-size: 12px;
          color: red;
          position: absolute;
          bottom: 0;
          align-items: center;
          margin-left: 10px;
        }
      }
      .down{
        height: 75vh;
        .upnav{
          overflow-y: auto;
          height: 66vh;
          /*background: yellow;*/
          .li{
            margin-left: 15px;
            margin-top: 15px;
            span:nth-child(1){
              font-size: 27px;
              vertical-align: middle;
            }
          }
        }
        .exit{
          font-size: 15px;
          text-align: center;
          margin-top: 20px;
        }
      }
    }
    /*显示与隐藏左边栏*/

    /*定义元素最终移动到的位置，以及移动到此位置需要的时间*/
    .fade-enter-active{
      transition: all .5s ease-in-out;
      transform:translate3d(0,0,0)
    }

      /*定义元素从什么位置离开，以及离开岛指定位置所需的时间*/
    .fade-leave-active{
      transition: all .5s ease-in-out;
      transform:translate3d(0,0,0)
    }

      /*定义元素从100%的位置移入到0，过渡结束后再从0回到100%的位置*/
    .fade-enter,.fade-leave-to{
      transition: all .5s ease-in-out;
      transform:translate3d(-100%,0,0)
    }

    /*显示与隐藏黑色背景*/
    .showok-enter-active, .showok-leave-active {
      transition: opacity .5s
    }
    .showok-enter, .showok-leave-to{
      opacity: 0;
    }

  }
</style>
