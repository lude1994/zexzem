<template>
  <div class="payfor">
    <div class="header">
      <span><---</span>
    </div>
    <div class="sel">
      2018年9月22日
    </div>
    <div style="background: #425073;height: 83vh;border-radius: 20px 20px 0 0 " class="box">

    </div>


  </div>
</template>

<script>
    export default {
        name: "DetailAcount",
      data(){
          return{

          }
      },
      methods: {}
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
  .box{
  
  }
  .sel{
    padding: 2vh 4vw;
    background: #fff;
    text-align: center;
    font-size: 20px;
  }

}
</style>
