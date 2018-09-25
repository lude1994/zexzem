<template>
    <div class="fillgroup">
      <div class="header">
        <span><</span>
        <span>申请加入社团</span>
        <span>提交</span>
      </div>
      <div class="write">
        <!--<h2>请认真填写以下信息</h2>-->
        <div class="req">
          <div class="name">
            <span class="iconfont icon-xuexi"></span>
            <input type="text" placeholder="请填写姓名">
          </div>
          <div class="name">
            <span class="iconfont icon-xuexi"></span>
            <input type="text" placeholder="请填写学号">
          </div>
          <div class="name">
            <span class="iconfont icon-xuexi"></span>
            <input type="radio" value="男" name="sex">男
            <input type="radio" value="女" name="sex">女
          </div>
          <div class="name">
            <span class="iconfont icon-xuexi"></span>
            <input type="text" placeholder="请填写学院">
          </div>
          <div class="name">
            <span class="iconfont icon-xuexi"></span>
            <input type="text" placeholder="请填写专业">
          </div>
          <div class="name">
            <span class="iconfont icon-xuexi"></span>
            <input type="text" placeholder="加入理由">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FillGroup"
    }
</script>

<style scoped lang="scss">
.fillgroup{
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to right, #35BFFE, #1B70FF);
    color: #fff;
    height: 50px;
    font-size: 18px;
    span:nth-child(1){
      margin-left: 4vw;
    }
    span:nth-child(3){
      margin-right: 4vw;
      font-size: 15px;
    }
  }
  .write{
    background: #FAFAFA;
    overflow: hidden;
    height: 92vh;
    .req{
      width: 80%;
      background: #0086b3;
      margin: 0 auto;
      margin-top: 20px;
      .name{
        width: 80%;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        span{
          font-size: 20px;
        }
        input{
          outline: none;
          border: 0;
          margin-left: 5px;
          line-height: 2;
        }
      }


    }
  }
}
</style>
