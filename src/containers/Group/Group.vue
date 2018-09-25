<template>
    <div class="group">
      <div class="header">
        <span><</span>
        <span>社团（Group）</span>
        <span class="iconfont icon-sousuo"></span>
      </div>
      <div class="tab">
        <div class="infobox" v-for="(item,i) in groupData">
          <div class="groupname">
            <span><img src="../../assets/img/weather.jpg" alt=""><h1>{{item.name}}</h1>（{{item.num}}人）</span>
          </div>
          <div class="respon">负责人：{{item.respon}}</div>
          <div class="time"><span>成立时间：{{item.createTime}}</span><div class="require" @click="joinIn(i)">申请加入</div></div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Group",
      data(){
          return{
            groupData:[
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"},
              {name:"吉他社",num:20,respon:"朱熊猫",createTime:"2017年8月1日"}
            ]
          }
      },
      methods:{
        joinIn(i){
          console.log(i);

        }
      }
    }
</script>

<style scoped lang="scss">
.group{
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    height: 50px;
    background: linear-gradient(to right, #35BFFE, #1B70FF);
    color: #fff;
    span:nth-child(1){
      margin-left: 4vw;
    }
    span:nth-child(3){
      margin-right: 4vw;
    }
  }
  .tab{
    background: #FAFAFA;
    overflow-y: auto;
    height: 91vh;
    padding-bottom: 2vh;
    .infobox{
      width: 90%;
      margin: 0 auto;
      background: linear-gradient(to right, #35BFFE, #1B70FF);
      border-radius: 20px;
      padding: 10px 0;
      margin-top: 10px;
      .groupname{
        span:nth-child(1){
          display: flex;
          align-items: center;

          img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-left: 15px;
          }
          h1{
            margin-left: 10px;
          }
        }
      }
      .respon,.time{
        font-size: 14px;
        margin-left: 15px;
        margin-top: 10px;
        .require{
          display: inline-block;
          margin-left: 25px;
          font-size: 13px;
          color: #fff;
          padding: 4px 0;
          border-radius: 30px;
          border: 1px solid #0086b3;
          width: 20vw;
          text-align: center;
        }
      }
    }


  }
}
</style>
