<template>
    <div class="personal">
      <div class="header">
        <div class="up">
          <div class="left">
            <div class="first">
              <span>朱晓明</span>
              <span class="iconfont icon-saoma"></span>
            </div>
            <div class="sec">
              <span>淮北师范大学</span>
              <span class="iconfont icon-huati"></span>
            </div>
            <div class="third">
              <span>学院：理学院</span>
              <span>专业：电子信息</span>
            </div>
          </div>
          <img src="../../assets/img/weather.jpg" alt="" class="right">
        </div>
        <div class="down">
          <div class="fir">
            <span>我的余额</span>
            <div class="mount">
              <span>1500</span>
              <span class="iconfont icon-fukuan"></span>
            </div>
          </div>
          <div class="sec">
            <div class="left">
              <span>饭卡余额</span>
              <span>233</span>
            </div>
            <div class="left">
              <span>当月充值金额</span>
              <span>680元</span>
            </div>
          </div>
          <div class="thir">
            <div class="do">提现</div>
            <div class="line"></div>
            <div class="do">充值</div>
          </div>
        </div>
      </div>
      <div class="current">
        <div class="up">
          <span>当前</span>
          <span>查看更多 ></span>
        </div>
        <div class="down">
          <div class="cur">
            <span class="iconfont icon-qianbao"></span>
            <span>待支付</span>
          </div>
          <div class="cur">
            <span class="iconfont icon-qianbao"></span>
            <span>待支付</span>
          </div>
          <div class="cur">
            <span class="iconfont icon-qianbao"></span>
            <span>待支付</span>
          </div>
          <div class="cur">
            <span class="iconfont icon-qianbao"></span>
            <span>待支付</span>
          </div>
          <div class="cur">
            <span class="iconfont icon-qianbao"></span>
            <span>待支付</span>
          </div>
        </div>
      </div>
      <div class="morelist">
        <div class="cur">
          <span class="iconfont icon-qianbao"></span>
          <span>日程</span>
        </div>
        <div class="cur">
          <span class="iconfont icon-qianbao"></span>
          <span>日程</span>
        </div>
        <div class="cur">
          <span class="iconfont icon-qianbao"></span>
          <span>日程</span>
        </div>
        <div class="cur">
          <span class="iconfont icon-qianbao"></span>
          <span>日程</span>
        </div>
        <div class="cur">
          <span class="iconfont icon-qianbao"></span>
          <span>日程</span>
        </div>
        <div class="cur">
          <span class="iconfont icon-qianbao"></span>
          <span>日程</span>
        </div>
        <div class="cur">
          <span class="iconfont icon-qianbao"></span>
          <span>日程</span>
        </div>
        <div class="cur">
        <span class="iconfont icon-qianbao"></span>
        <span>日程</span>
      </div>


      </div>
    </div>
</template>

<script>
    export default {
        name: "Personal"
    }
</script>

<style scoped lang="scss">
.personal{
  background: blue;
  padding-bottom: 2vh;
  .header{
    .up{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;
      .left{
        .first{
          display: flex;
          justify-content: space-between;
          margin: 15px 0;
          span:nth-child(1){
            font-size: 20px;
            color: #fff;
            font-weight: bold;
          }
          span:nth-child(2){
            font-size: 32px;
            color: #fff;
          }
        }
        .sec{
          span:nth-child(1){
            font-size: 16px;
            color: #fff;
            /*font-weight: bold;*/
          }
          span:nth-child(2){
            font-size: 16px;
            color: green;
            /*font-weight: bold;*/
          }
        }
        .third{
          background: linear-gradient(to right, #595EE3, #5B54DE);
          display: flex;
          flex-direction: column;
          padding: 5px 5vw;
          margin-top: 3px;
          border-radius: 20px;
          margin-left: -13px;
          color: #fff;
        }
      }
      .right{
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    .down{
      width: 90%;
      overflow: hidden;
      margin: 0 auto;
      background: yellow;
      margin-top: 3vh;
      border-radius: 10px;
      .fir{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2vh 4vw;
        span:nth-child(1){
          font-size: 16px;
        }
        .mount{
          span{
            font-size: 20px;
          }
        }
      }
      .sec{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2vh 4vw;
        font-size: 12px;
        .left{
          display: flex;
          flex-direction: column;
        }
      }
      .thir{
        display: flex;
        align-items: center;
        margin-top: 10px;
        .do{
          width: 50%;
          /*height: 20px;*/
          text-align: center;
          padding: 3vh 0;
          font-size: 20px;
          background: #63a35c;
        }
        .line{
          height: 35px;
          background: #eee;
          width: 1px;
        }
      }
    }
  }
  .current{
    width: 90%;
    margin: 3vh auto;
    background: rgba(255,255,255,0.4);
    border-radius: 10px;
    overflow: hidden;
    .up{
      margin: 0 5vw;
      padding: 1vh 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255,255,255,.2);
      span:nth-child(1){
        color: #fff;
        font-size: 18px;
      }
      span:nth-child(2){
        color: #999;
        font-size: 13px;
      }
    }
    .down{
      display: flex;
      align-items: center;
      justify-content: space-around;
      .cur{
        padding: 2vh 0;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 20%;
        span:nth-child(2){
          color: #fff;
          display: inline-block;
          margin-top: 1vh;
        }
      }
    }
  }
  .morelist{
    background: rgba(255,255,255,.4);
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1vh 0;
    border-radius: 10px;
    .cur{
      padding: 2vh 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 25%;
      span:nth-child(2){
        color: #fff;
        display: inline-block;
        margin-top: 1vh;
      }
    }
  }
}
</style>
