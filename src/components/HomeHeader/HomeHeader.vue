<template>
    <div class="homeheader">
      <div class="weather">
        <img src="../../assets/img/weather.jpg" alt="">
        <span>32℃</span>
      </div>
      <span class="place">温州</span>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
      data(){
          return{

          }
      }
    }
</script>

<style scoped lang="scss">
  .homeheader{
    height: 12vh;
    /*background: yellow;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 5vw;
    color: #fff;
    img{
      width: 50px;
      height: 50px;
    }
    .weather{
      display: flex;
      align-items: center;
      margin-left: 2vw;
      span{
        margin-left: 1vw;
      }
    }
    .place{
      margin-right: 2vw;
    }
  }
</style>
