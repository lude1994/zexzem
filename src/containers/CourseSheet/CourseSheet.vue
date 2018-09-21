<template>
    <div class="coursesheet">
      <div class="timeaset">
        <span class="time">2018年4月</span>
        <span>设置</span>
      </div>
      <div class="navlist">
          <span class="nav" v-for="(item,index) in courseList" @click="clickSkip(index)">{{item}}</span>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
      name: "CourseSheet",
      data(){
          return{
            courseList:["日程",'图书馆','账单','社团',"活动","任务"],    //导航
          }
      },
      methods:{
        clickSkip(index){
          let path;
          //判断点击的是哪个
          if(index===0){
            path = "daily"
          }else if(index===1){
            path = "library"
          }else if(index===2){
            path = "bill"
          }else if(index===3){
            path = "group"
          }else if(index===4){
            path = "activity"
          }else if(index===5){
            path = "task"
          }
          this.$router.push({path:'/course/'+path})
        }
      }
    }
</script>

<style scoped lang="scss">
  .coursesheet{
    background: #34425e;
    .timeaset{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 5vw;
      width: 90%;
      margin: 0 auto;
      height: 9vh;
      color: #fff;
      .time{
        font-size: 6vw;
      }
    }
    .navlist{
      overflow-x: auto;
      white-space: nowrap;
      color: #fff;
      font-size: 4vw;
      height: 7vh;
      line-height: 5vh;

      .nav{
        padding: 1vh 4vw ;

      }
    }
  }
</style>
