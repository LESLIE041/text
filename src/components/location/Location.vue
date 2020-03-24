<template>
    <div>
         <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>数据预测</el-breadcrumb-item>
         <el-breadcrumb-item>地区查询</el-breadcrumb-item>
         </el-breadcrumb>
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content_bg-purple">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Bar</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <div class="echarts_0">
    <div :style="{height:'400px',width:'100%'}" ref="myEchart_0" id='0'></div>
  </div>
</el-card>
    </div>
    </el-col>
    <el-col :span="8">
    <el-form @submit.native.prevent="select" model="selection">
      <el-form-item>
<div class="grid-content bg-purple">
 <el-date-picker v-model="selection.selectYea" type="year" placeholder="按需选择年"   @change="jobSearch" value-format="yyyy" class="year"></el-date-picker>
    </div>

      </el-form-item>
    <el-form-item>
            <el-select v-model="selection.value_0" type="String" placeholder="按需选择月" class="month">
              <el-option
                v-for="item in options_0"
                :key="item.value_0"
                :label="item.label"
                :value="item.value_0"
                :disabled="item.disabled">
              </el-option>
            </el-select>
    </el-form-item>
    <el-form-item>
            <el-select v-model="selection.value" type="String" placeholder="按需选择地区">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </el-option>
          </el-select>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" native-type="submit">立即查询</el-button>
    </el-form-item>
    </el-form>
    </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content_bg-purple">
    <el-card class="box-card-1">
  <div slot="header" class="clearfix">
    <span>Large Scale Area Chart</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
</el-card>
    </div>
    </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="14"><div class="grid-content_bg-purple">
    <el-card class="box-card-2">
  <div slot="header" class="clearfix">
    <span>Doughnut Chart</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
</el-card>
    </div>
    </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="14"><div class="grid-content_bg-purple">
    <el-card class="box-card-3">
  <div slot="header" class="clearfix">
    <span>Scatter Aqi Color</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
</el-card>
    </div>
    </el-col>
</el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Select, Option } from 'element-ui'
import echarts from 'echarts'
Vue.use(Select)
Vue.use(Option)
export default {
  name: 'echarts_0',
   props: {
    className: {
      type: String,
      default: 'myEchart_0'
    },
    id: {
      type: String,
      default: '0'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data () {
    return {
      chart: null,
options_0: [{
  value_0: '0',
  label: '0' }, {
        value_0: '1',
        label: '1'
      }, {
        value_0: '2',
        label: '2'
      }, {
        value_0: '3',
        label: '3'
      }, {
        value_0: '4',
        label: '4'
      }, {
        value_0: '5',
        label: '5'
      }, {
        value_0: '6',
        label: '6'
      }, {
        value_0: '7',
        label: '7'
      }, {
        value_0: '8',
        label: '8'
      }, {
        value_0: '9',
        label: '9'
      }, {
        value_0: '10',
        label: '10'
      }, {
        value_0: '11',
        label: '11'
      }, {
        value_0: '12',
        label: '12'
      }],
     options: [{
        value: '全国',
        label: '全国'
      }, {
        value: '北京市',
        label: '北京市'
      }, {
        value: '天津市',
        label: '天津市'
      }, {
        value: '河北省',
        label: '河北省'
      }, {
        value: '山西省',
        label: '山西省'
      }, {
        value: '内蒙古',
        label: '内蒙古'
      }, {
        value: '辽宁省',
        label: '辽宁省'
      }, {
        value: '吉林省',
        label: '吉林省'
      }, {
        value: '黑龙江',
        label: '黑龙江'
      }, {
        value: '上海市',
        label: '上海市'
      }, {
        value: '江苏省',
        label: '江苏省'
      }, {
        value: '浙江省',
        label: '浙江省'
      }, {
        value: '安徽省',
        label: '安徽省'
      }, {
        value: '福建省',
        label: '福建省'
      }, {
        value: '江西省',
        label: '江西省'
      }, {
        value: '山东省',
        label: '山东省'
      }, {
        value: '河南省',
        label: '河南省'
      }, {
        value: '湖北省',
        label: '湖北省'
      }, {
        value: '湖南省',
        label: '湖南省'
      }, {
        value: '广东省',
        label: '广东省'
      }, {
        value: '广西',
        label: '广西'
      }, {
        value: '海南省',
        label: '海南省'
      }, {
        value: '重庆市',
        label: '重庆市'
      }, {
        value: '四川省',
        label: '四川省'
      }, {
        value: '贵州省',
        label: '贵州省'
      }, {
        value: '选项26',
        label: '云南省'
      }, {
        value: '西藏',
        label: '西藏'
      }, {
        value: '陕西省',
        label: '陕西省'
      }, {
        value: '甘肃省',
        label: '甘肃省'
      }, {
        value: '青海省',
        label: '青海省'
      }, {
        value: '宁夏',
        label: '宁夏'
      }, {
        value: '新疆',
        label: '新疆'
      }, {
        value: '建设兵团',
        label: '建设兵团'
      } ],
      selection: {
      selectYea: '',
        value: '',
        value_0: ''
        }
    }
},
  created () {
    this.initData({})
  },
  mounted () {
    this.initChart()
  },
    beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    jobSearch () {
      this.getJobListByMonth()
    },
    async initData (data) {
      // 获取当前时间
      var now = new Date()
      var monthn = now.getMonth() + 1
      var yearn = now.getFullYear()
      this.selectMonth = yearn
      this.selectMonth = monthn
      this.selectUser = parseInt(sessionStorage.getItem('userid'))
      // this.getWeekJobList({
      //   userid: sessionStorage.getItem("userid"),
      //   weekid: "1"
      // });
      this.getJobListByMonth()
    },
    async getJobListByMonth (data) {
    },
    select () {
      console.log(this.selection)
    },
    initChart () {
        this.chart = echarts.init(this.$refs.myEchart_0)
      var year = this.selection.selectYea
      var month = this.selection.value_0
      var location = this.selection.value
      this.$http.get('/location', { params: {
         year: year,
         month: month,
         location: location
          } }).then((response) => {
            response = response.data
                // console.log(response)
                // this.initChart(response)
                      this.chart.setOption = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        // 坐标轴指示器，坐标轴触发有效
        axisPointer: {
          // 默认为直线，可选为：'line' | 'shadow'
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [ '病发率', '病发人数', '致死率', '致死人数' ],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth: '60%',
            data: [
              { value: (function () {
                return response[0]
              }())
              },
              { value: (function () {
                return response[1]
              }())
              },
              { value: (function () {
                return response[2]
              }())
              },
              { value: (function () {
                return response[3]
              }())
              }
            ]
        }
    ]
}
            })
    }
  }
}
</script>

<style lang="less" scoped>
  .el-breadcrumb {
    margin-bottom: 18px;
    font-size: 16px;
}
  .clearfix {
    font-size: 14px;
  }
  .grid-content_bg-purple {
    margin-bottom: 20px;
    width: 640px;
  }
  .el-icon-arrow-right {
    margin-bottom: 40px;
  }
  .year {
    margin-bottom: 40px;
  }
  .month {
    margin-bottom: 40px;
  }
</style>
