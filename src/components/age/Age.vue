<template>
    <div>
         <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>数据预测</el-breadcrumb-item>
         <el-breadcrumb-item>年龄预测</el-breadcrumb-item>
         </el-breadcrumb>
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content_bg-purple">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Bar</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <div class="echarts">
    <div :style="{height:'400px',width:'100%'}" ref="myEchart"></div>
  </div>
</el-card>
    </div>
    </el-col>
  <el-col :span="8"><div class="grid-content bg-purple">
 <el-date-picker v-model="selectYea" type="year" placeholder="按需选择年"   @change="jobSearch" value-format="yyyy" class="year"></el-date-picker>
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
            <el-select v-model="value" placeholder="按需选择年龄">
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
      label: '0-'
    }, {
      value: '选项2',
      label: '1-'
    }, {
      value: '选项3',
      label: '2-'
    }, {
      value: '选项4',
      label: '3-'
    }, {
      value: '选项5',
      label: '4-'
    }, {
      value: '选项6',
      label: '5-'
    }, {
      value: '选项7',
      label: '6-'
    }, {
      value: '选项8',
      label: '7-'
    }, {
      value: '选项9',
      label: '8-'
    }, {
      value: '选项10',
      label: '9-'
    }, {
      value: '选项11',
      label: '10-'
    }, {
      value: '选项12',
      label: '15-'
    }, {
      value: '选项13',
      label: '20-'
    }, {
      value: '选项14',
      label: '25-'
    }, {
      value: '选项15',
      label: '30-'
    }, {
      value: '选项16',
      label: '35-'
    }, {
      value: '选项17',
      label: '40-'
    }, {
      value: '选项18',
      label: '45-'
    }, {
      value: '选项19',
      label: '50-'
    }, {
      value: '选项20',
      label: '55-'
    }, {
      value: '选项21',
      label: '60-'
    }, {
      value: '选项22',
      label: '65-'
    }, {
      value: '选项23',
      label: '70-'
    }, {
      value: '选项24',
      label: '75-'
    }, {
      value: '选项25',
      label: '80-'
    }, {
      value: '选项26',
      label: '85-及以上'
    }, {
      value: '选项27',
      label: '不详' }],
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
