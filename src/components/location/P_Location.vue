<template>
    <div>
         <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>数据预测</el-breadcrumb-item>
         <el-breadcrumb-item>地区预测</el-breadcrumb-item>
         </el-breadcrumb>
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content_bg-purple">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Bar</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <!-- <div class="echarts">
    <div :style="{height:'400px',width:'100%'}" ref="myEchart"></div>
  </div> -->
</el-card>
    </div>
    </el-col>
  <el-col :span="8">
            <el-select v-model="value_0" placeholder="按需选择月" class="month">
              <el-option
                v-for="item in options_0"
                :key="item.value_0"
                :label="item.label"
                :value="item.value_0"
                :disabled="item.disabled">
              </el-option>
            </el-select>
  </el-col>
   <el-col :span="8">
            <el-select v-model="value" placeholder="按需选择地区">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </el-option>
          </el-select>
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
Vue.use(Select)
Vue.use(Option)
export default {
  data () {
    return {
      selectYea: '',
      options_0: [{
        value_0: '选项一',
        label: '1'
      }, {
        value_0: '选项二',
        label: '2'
      }, {
        value_0: '选项三',
        label: '3'
      }, {
        value_0: '选项四',
        label: '4'
      }, {
        value_0: '选项五',
        label: '5'
      }, {
        value_0: '选项六',
        label: '6'
      }, {
        value_0: '选项七',
        label: '7'
      }, {
        value_0: '选项八',
        label: '8'
      }, {
        value_0: '选项九',
        label: '9'
      }, {
        value_0: '选项十',
        label: '10'
      }, {
        value_0: '选项十一',
        label: '11'
      }, {
        value_0: '选项十二',
        label: '12'
      }],
     options: [{
        value: '选项1',
        label: '全国'
      }, {
        value: '选项2',
        label: '北京市'
      }, {
        value: '选项3',
        label: '天津市'
      }, {
        value: '选项4',
        label: '河北省'
      }, {
        value: '选项5',
        label: '山西省'
      }, {
        value: '选项6',
        label: '内蒙古'
      }, {
        value: '选项7',
        label: '辽宁省'
      }, {
        value: '选项8',
        label: '吉林省'
      }, {
        value: '选项9',
        label: '黑龙江'
      }, {
        value: '选项10',
        label: '上海市'
      }, {
        value: '选项11',
        label: '江苏省'
      }, {
        value: '选项12',
        label: '浙江省'
      }, {
        value: '选项13',
        label: '安徽省'
      }, {
        value: '选项14',
        label: '福建省'
      }, {
        value: '选项15',
        label: '江西省'
      }, {
        value: '选项16',
        label: '山东省'
      }, {
        value: '选项17',
        label: '河南省'
      }, {
        value: '选项18',
        label: '湖北省'
      }, {
        value: '选项19',
        label: '湖南省'
      }, {
        value: '选项20',
        label: '广东省'
      }, {
        value: '选项21',
        label: '广西'
      }, {
        value: '选项22',
        label: '海南省'
      }, {
        value: '选项23',
        label: '重庆市'
      }, {
        value: '选项24',
        label: '四川省'
      }, {
        value: '选项25',
        label: '贵州省'
      }, {
        value: '选项26',
        label: '云南省'
      }, {
        value: '选项27',
        label: '西藏'
      }, {
        value: '选项28',
        label: '陕西省'
      }, {
        value: '选项29',
        label: '甘肃省'
      }, {
        value: '选项30',
        label: '青海省'
      }, {
        value: '选项31',
        label: '宁夏'
      }, {
        value: '选32',
        label: '新疆'
      }, {
        value: '选33',
        label: '建设兵团'
      } ],
        value_0: '',
        value: ''
        }
},
  created () {
    this.initData({})
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
