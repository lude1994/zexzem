<template>
    <div class="circle">
      <div class="header">
        <span>圈子</span>
        <img src="../../assets/img/weather.jpg" alt="">
      </div>
      <div class="listnav">
        <span v-for="(item,index) in listnav" class="nav" @click="clickSkip(index)">{{item}}</span>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Circle",
      data(){
          return{
            listnav:["列表","消息","附近"]
          }
      },
      methods:{
        clickSkip(i){
          let path;
          if(i===0){
            path = "list"
          }else if(i===1){
            path = "message"
          }else if(i===2){
            path = "nearto"
          }
          this.$router.push({path:'/circle/'+path})
        }
      }
    }
</script>

<style scoped lang="scss">
  .circle{
    background: red;
    .header{
      height: 15vh;

      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 93%;
      margin: 0 auto;
      span{
        font-size: 4vh;
        color: #fff;
      }
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .listnav{
      overflow-x: auto;
      white-space: nowrap;
      font-size: 5vw;
      height: 5vh;
      line-height: 3vh;
      color: #fff;
      border-bottom: 1px solid rgba(255,255,255,0.4);
      .nav{
        padding: 1vh 4vw;
      }
    }

  }
</style>
