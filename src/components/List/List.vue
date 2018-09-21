<template>
    <div class="list">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索圈子和圈友</span>
      </div>
      <ul class="childnav">
        <li>全部</li>
        <li>圈子</li>
        <li>好友</li>
      </ul>
      <vue-list></vue-list>
    </div>
</template>

<script>
  import VueList from '../../components/VueList/IndexList.vue'
    export default {
        name: "List",
      components:{
        VueList
      }
    }
</script>

<style scoped lang="scss">
  .list{
    .search{
      width: 93%;
      margin: 0 auto;
      height: 6vh;
      background: rgba(255,255,255,.5);
      margin-top: 2vh;
      border-radius: 20px;
      color: rgba(255,255,255,0.5);
      line-height: 6vh;
      font-size: 4vw;
      i{
        margin-left: 2vw;
        font-size: 6vw;
        vertical-align: middle;
      }
      span{
        margin-left: 5vw;
      }
    }
    .childnav{
      height: 20px;
      width: 40vw;
      color: #fff;
      display: flex;
      background: rgba(255,255,255,.3);
      margin: 0 auto;
      border-radius: 10px;
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      li{
        width: 33.3%;
        text-align: center;
        font-size: 14px;
      }
    }
  }
</style>
