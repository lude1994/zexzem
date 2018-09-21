<template>
  <div class="payfor">
    <div class="header">
      <span><---</span>
    </div>
    <div class="info">
      <img src="../../assets/img/weather.jpg" alt="">
      <div class="right">
        <div class="up">
          <span>淮北师范大学</span>
          <div class="sanjiao"></div>
        </div>
        <div class="down">**明（学号尾号039）</div>
      </div>
    </div>
    <div style="background: #425073;height: 83vh;border-radius: 20px 20px 0 0 ">
      <div class="dodetail">
        <div class="cen">
          <span class="title">充值金额</span>
          <div class="wibox">
            <div class="wi" @click="money(1)" :class="{isclick:isClick1}">充值{{firMount}}元</div>
            <div class="wi" @click="money(2)" :class="{isclick:isClick2}">充值{{secMount}}元</div>
            <div class="wi" @click="money(3)" :class="{isclick:isClick3}">充值{{thirMount}}元</div>
            <div class="wi" @click="money(4)" :class="{isclick:isClick4}">充值{{forMount}}元</div>
          </div>
          <div class="input">
            <input type="text" v-model="amount">
            <span @click="del">X</span>
          </div>
          <div class="num">
            <span>短信通知号码</span>
            <input type="text" placeholder="可选输入号码">
            <i class="iconfont icon-qunzu"></i>
          </div>
        </div>
      </div>
      <span class="payway">选择充值方式</span>
      <div class="way">
        <div class="o">
          <div>
            <span class="iconfont icon-huati"></span>
            <span>账户余额</span>
          </div>
          <input type="radio" name="way" id="" checked  @change="changeRadio(1)"/>
        </div>
        <div class="o">
          <div>
            <span class="iconfont icon-huati"></span>
            <span>支付宝支付</span>
          </div>
          <input type="radio" name="way" id=""  @change="changeRadio(2)"/>
        </div>
        <div class="o">
          <div>
            <span class="iconfont icon-huati"></span>
            <span>微信支付</span>
          </div>
          <input type="radio" name="way" id="" @change="changeRadio(3)"/>
        </div>
        <div class="o">
          <div>
            <span class="iconfont icon-huati"></span>
            <span>银行卡支付</span>
          </div>
          <input type="radio" name="way" id="" @change="changeRadio(4)" ref="radio"/>
          <div class="card" :style="{'display':isSel}">
            <div class="bank" v-for="item in cardInfo">
              <img src="../../assets/img/weather.jpg" alt="">
              <span>{{item.bank}}{{item.type}}（{{item.num}}）</span>
            </div>
          </div>
        </div>
      </div>
      <div class="prompt">
        <div class="ok">立即充值</div>
        <div class="texttip">点击立即充值，即表示同意<span>《校园卡充值协议》</span></div>
      </div>
    </div>
    <!--<div class="sho" :style="{display:isOk}" >-->
      <!--<mt-spinner type="double-bounce" ></mt-spinner>-->
    <!--</div>-->

  </div>
</template>

<script>
    export default {
        name: "PayFor",
      data(){
          return{
            amount:"100",    //最后要充值的金额
            firMount:"20",
            secMount:"50",
            thirMount:"100",
            forMount:"200",
            isClick1:false,    //是否有选中的金额
            isClick2:false,    //是否有选中的金额
            isClick3:false,    //是否有选中的金额
            isClick4:false,    //是否有选中的金额
            // isOk:"none",    //页面是否加载完成，默认加载完成
            cardInfo:[
              {"bank":"中国建设银行",type:"储蓄卡",num:"2020"},
              {"bank":"中国建设银行",type:"储蓄卡",num:"2020"},
              {"bank":"中国建设银行",type:"储蓄卡",num:"2020"},
              {"bank":"中国银行",type:"储蓄卡",num:"2020"},
              {"bank":"中国建设银行",type:"储蓄卡",num:"2020"}
            ],        //银行卡数据
            isSel:"none",   //默认不选则银行
          }
      },
      methods:{
        //  清空输入框
        del(){
          this.amount = ""
          this.isClick1 = false;
          this.isClick2 = false;
          this.isClick3 = false;
          this.isClick4 = false;
        },
      //  点击选择充值金额
        money(i){
          if(i === 1){
            this.amount = this.firMount
            this.isClick1 = true;
            this.isClick2 = false;
            this.isClick3 = false;
            this.isClick4 = false;
          }else if(i === 2){
            this.amount = this.secMount
            this.isClick2 = true;
            this.isClick1 = false;
            this.isClick3 = false;
            this.isClick4 = false;
          }else if(i === 3){
            this.amount = this.thirMount
            this.isClick3 = true;
            this.isClick1 = false;
            this.isClick2 = false;
            this.isClick4 = false;
          }else if(i === 4){
            this.amount = this.forMount
            this.isClick4 = true;
            this.isClick1 = false;
            this.isClick2 = false;
            this.isClick3 = false;
          }
        },
      //  点击银行卡的单选
        changeRadio(i){
          //改变还不够，还要判断是否选中的是这个
          if(this.$refs.radio.checked === true){
            this.isSel = "block"
          }else{
            this.isSel = "none"
          }

        }
      },
      //页面加载完成前的动画
      // beforeMount(){
      //   this.isOk = "block"
      //   console.log(this.isOk,'西施了吗')
      // },
      // mounted(){
      //   this.isOk = "none"
      // }
    }
</script>

<style scoped lang="scss">
.payfor{
  background: url("../../assets/img/bg.jpg") no-repeat;
  background-size: 100%;
  .header{
    height: 10vh;
    line-height: 10vh;
    margin-left: 2vw;
    color: #fff;
    font-size: 20px;
  }
  .info{
    display: flex;
    background: linear-gradient(to right,#5A86EF,#6055E0);
    width: 45vw;
    padding: 2vh 4vw;
    border-radius: 0 25px 25px 0;
    img{
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .right{
      margin-left: 4vw;
      .up{
        display: flex;
        align-items: center;
        span{
          font-size: 16px;
          color: #fff;
        }
        .sanjiao{
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #ddd;
          border-bottom: 5px solid transparent;
        }
      }
      .down{
        color: #999;
      }
    }
  }
  .dodetail{
    border-radius: 10px 10px 0 0;
    margin-top: 3vh;
    .cen{
      width: 90%;
      margin: 0 auto;
      color: #fff;
      .title{
        font-size: 14px;
        display: inline-block;
        margin-top: 1vh;
      }
      .wibox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .isclick{
          background: #557DEE;
        }
        .wi{
          width: 47%;
          padding: 3vh 0;
          text-align: center;
          margin: 1vh 0;
          border: 1px solid #eee;
          border-radius: 10px;
          font-size: 14px;
        }
      }
      .input{
        height: 30px;
        /*background: yellow;*/
        margin-top: 1vh;
        border-bottom: 1px solid rgba(255,255,255,.3);
        line-height: 30px;
        input{
          border: none;
          outline: none;
          width: 90%;
          background: transparent;
          font-size: 22px;
          color: #fff;
        }
        span{
          font-size: 18px;
          color: #999;
        }
      }
      .num{
        height: 30px;
        /*background: yellow;*/
        margin-top: 1vh;
        border-bottom: 1px solid rgba(255,255,255,.3);
        line-height: 30px;
        input{
          border: none;
          outline: none;
          width: 62%;
          margin-left: 5vw;
          background: transparent;
          color: #fff;
        }
        span{
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .payway{
    font-size: 16px;
    display: inline-block;
    margin-top: 2vh;
    margin-left: 5vw;
    color: #fff;
  }
  .way{
    margin-top: 1vh;
    height: 31vh;
    overflow-y: auto;
    .o{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 5vw;
      height: 5vh;
      font-size: 14px;
      position: relative;
      span:nth-child(2){
        color: #fff;
        margin-left: 2vw;
      }
      .card{
        border-top: 1px solid #999;
        padding: 1vh 0;
        width: 100%;
        top: 33px;
        /*background: red;*/
        position: absolute;
        .bank{
          display: flex;
          align-items: center;
          padding: 5px 0;
          img{
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
  .prompt{
    width: 90%;
    margin-left: 5%;
    .ok{
      padding: 1vh 0;
      border-radius: 20px;
      background: #586EE6;
      color: #fff;
      font-size: 18px;
      text-align: center;
    }
    .texttip{
      text-align: center;
      margin-top: 1vh;
      color: rgba(255,255,255,.7);
      span{
        color: red;
      }
    }
  }
  /*.sho{*/
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*width: 50vw;*/
    /*height: 40vh;*/
    /*background: yellow;*/
    /*z-index:99;*/
  /*}*/
}
</style>
