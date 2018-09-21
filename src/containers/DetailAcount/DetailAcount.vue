<template>
  <div class="detailacount">
    <div class="header">
      <span><---</span>
    </div>
    <div class="sel">
      2018年9月22日
    </div>
    <div style="background: #425073;height: 83vh;border-radius: 20px 20px 0 0 " class="box">
        <div id="linezhe" :style="{width: '300px', height: '300px'}"></div>
    </div>


  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
    export default {
        name: "DetailAcount",
      data(){
          return{

          }
      },
      methods: {
          drawLine(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('linezhe'));

            // 绘制图表
            myChart.setOption({
              tooltip : {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              legend: {
                data:['消息','充值']
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                // containLabel: true,
              },
              xAxis : [
                {
                  type : 'category',
                  boundaryGap : false,
                  data : ['周一','周二','周三','周四','周五','周六','周五','周六','周日']
                }
              ],
              yAxis : [
                {
                  show:false,
                  type : 'value',

                }
              ],
              series : [
                {
                  name:'消息',
                  type:'line',
                  stack: '总量',
                  smooth:true,
                  itemStyle: {
                    normal: {
                      color: '#d68262'
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8ec6ad'
                      }, {
                        offset: 1,
                        color: '#ffe'
                      }])
                    }
                  },
                  data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name:'充值',
                  type:'line',
                  stack: '总量',
                  smooth:true,
                  itemStyle: {
                    normal: {
                      color: '#d68262'
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#d68262'
                      }, {
                        offset: 1,
                        color: '#ffe'
                      }])
                    }
                  },
                  data:[220, 182, 191, 234, 290, 330, 310]
                }


              ]
            })

          }
      },
      mounted() {
          this.drawLine()
      }
    }
</script>

<style scoped lang="scss">
.detailacount{
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
