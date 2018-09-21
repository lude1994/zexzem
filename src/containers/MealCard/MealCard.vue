<template>
    <div class="meadcard">
        <div class="box">
          <div class="header">
            <div>
              <span><---</span>
              <span>饭卡</span>
            </div>
            <i class="iconfont icon-huodong1"></i>
          </div>
          <div class="boxcard">
            <div class="cardcenter">
              <div class="first one">
                <div class="leftinfo">
                  <img src="../../assets/img/weather.jpg" alt="">
                  <div class="info">
                    <span class="school">淮北师范大学</span>
                    <span class="num">小米(学号尾号0705)</span>
                  </div>
                </div>
                <i class="iconfont icon-qianbao"></i>
              </div>
              <div class="first two">
                <div class="mark">余额</div>
                <span>97.00</span>
              </div>
              <div class="first three">
                充值
              </div>
            </div>
          </div>
        </div>
        <div class="history">
          历史
        </div>
        <div class="contain">
          <div class="more" v-for="item in historyData">
            <div class="cen">
              <div class="timeDay">
                {{item.time}}
              </div>
              <div class="domount" v-for="val in item.list">
                <div class="left">
                  <img :src="'../../assets/img/'+ val.head" alt="">
                  <div class="place">
                    <span>{{val.place}}</span>
                    <span>{{val.time}}</span>
                  </div>
                </div>
                <span class="amount">{{val.amount}}</span>

              </div>
            </div>

          </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MealCard",
      data(){
          return{
            historyData:[
              {"time":"4月28日","list":[
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                ]},
              {"time":"4月28日","list":[
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                ]},
              {"time":"4月28日","list":[
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                  {head:"weather.jpg",place:"食堂2号窗口",time:"12:10",amount:"+10"},
                ]},
            ]
          }
      },
      mounted(){
          console.log(this.historyData[0].list instanceof Array,'数据')
      }
    }
</script>

<style scoped lang="scss">
.meadcard{
  .box{
    .header{
      width: 92%;
      margin: 0 auto;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      i{
        font-size: 20px;
      }
    }
    .boxcard{
      width: 92%;
      margin: 0 auto;
      background: yellow;
      border-radius: 20px;
      margin-top: 30px;
      .cardcenter{
        padding: 2.5vh 2vw;
        width: 85%;
        margin: 0 auto;
        .first{
          padding: 1vh 0;
        }
        .one{
          display: flex;
          justify-content: space-between;
          .leftinfo{
            display: flex;
            img{
              width: 25px;
              height: 25px;
              border-radius: 50%;
            }
            .info{
              display: flex;
              flex-direction: column;
              text-align: left;
              margin-left: 3vw;
              .school{
                font-size: 18px;
                font-weight: bold;
              }
              .num{
                color: #999;
                font-size: 12px;
                display: inline-block;
                margin-top: 3px;
              }
            }
          }
        }
        .two{
          display: flex;
          align-items: center;
          .mark{
            width: 20px;
            padding: 3px 5px;
            border-radius: 8px;
            color: #fff;
            background: green;
            display: inline-block;
          }
          span{
            font-size: 5vh;
            font-weight: bold;
            margin-left: 2vw;
          }
        }
        .three{
          padding: 1.5vh 0;
          background: #55a532;
          text-align: center;
          border-radius: 20px;
          font-size: 16px;
          color: #fff;
        }

      }
    }
  }
  .history{
    width: 92%;
    margin: 1vh auto;
    font-size: 16px;

  }
  .contain{
    height: 56vh;
    overflow-y: auto;
    /*background: red;*/
    .more{


      .cen{
        /*width: 92%;*/
        margin: 1vh auto;
        .timeDay{
          margin: 1vh 0;
          padding: 0 4vw;
        }
        .domount{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2vh 4vw;
          background: yellow;
          margin-top: 1px;
          .place{
            display: flex;
            flex-direction: column;
            text-align: left;
            span:nth-child(1){
              font-size: 14px;
            }
            span:nth-child(2){
              color: #999;
            }
          }
          .left{
            display: flex;
            align-items: center;
          }
          .amount{
            font-size: 14px;
            color: #999;
          }
        }
      }

    }
  }

}
</style>
