<template>
    <div class="newknowlage">
      <div class="search">
        <span>搜索</span>
      </div>
      <div class="infobox">
        <div class="first" v-for="item in infoData">
          <div class="title">
            <div class="word">
              {{item.title}}
            </div>
            <div class="time">
              <span>04-29</span>
              <span>今日</span>
            </div>
          </div>
          <div class="showimg">
            <div class="imgfir"><img src="../../assets/img/weather.jpg" alt=""></div>
            <div class="flex">
              <img  src="../../assets/img/weather.jpg" alt="" >
            </div>
          </div>


        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewKnowlage",
      data(){
          return{
            infoData:[
              {"title":"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",src1:"/assets/img/weather.jpg",src:['../../assets/img/weather.jpg','../../assets/img/weather.jpg']},
              {"title":"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",src1:"../../assets/img/weather.jpg",src:['../../assets/img/weather.jpg']},
              {"title":"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"},
              {"title":"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",src1:"../../assets/img/weather.jpg",src:["../../assets/img/weather.jpg"]}
            ],    //
          }
      }
    }
</script>

<style scoped lang="scss">
  .newknowlage{
    width: 96%;
    margin: 0 auto;
    /*background: yellow;*/
    padding-bottom: 2vh;
    .search{
      width: 100%;
      line-height: 3;
      color: #fff;
      border-radius: 20px;
      background: rgba(255,255,255,0.2);
      /*background: red;*/
      span{
        margin-left: 6vw;
        font-size: 4vw;
      }
    }
    .infobox{
      .first{
        margin-top: 2vh;

        .title{
          display: flex;
          align-items: center;
          font-size: 4vw;
          color: #fff;
          margin-bottom: 1vh;
          justify-content: space-between;
          .word{
            width: 82%;
          }
          .time{
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-left: 3vw;
            text-align: center;
          }

        }
        .showimg{
          display: flex;
          height: 30vh;
          overflow: hidden;
          .imgfir{
            width: 70%;
            border-radius: 20px;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .flex{
            border-radius: 20px;
            overflow: hidden;
            margin-left: 5px;
            flex: 1;
            img{
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
