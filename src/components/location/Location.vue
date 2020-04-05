<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
<<<<<<< HEAD
      <el-breadcrumb-item>数据查询</el-breadcrumb-item>
=======
      <el-breadcrumb-item>数据预测</el-breadcrumb-item>
>>>>>>> 5892b29a3c8ffeb4b6c28dac267dcf3f1f1bfc5b
      <el-breadcrumb-item>地区查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="16">
        <div class="grid-content_bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Bar</span>
            </div>
            <div>
<<<<<<< HEAD
              <v-chart :options="options_0"/>
=======
              <v-chart :options="options"/>
>>>>>>> 5892b29a3c8ffeb4b6c28dac267dcf3f1f1bfc5b
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
          <el-form-item label="日期" prop="time">
            <el-date-picker
              v-model="ruleForm.time"
              type="month"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="省份" prop="location">
            <el-select v-model="ruleForm.location" placeholder="请选择省份">
              <el-option
                v-for="item in province"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
<<<<<<< HEAD
    <el-row :gutter="20">
      <el-col :span="16"><div class="grid-content_bg-purple">
        <el-card class="box-card-1">
          <div slot="header" class="clearfix">
            <span>Large Scale Area Chart</span>
            <div>
              <v-chart :options="options_1"/>
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16"><div class="grid-content_bg-purple">
        <el-card class="box-card-1">
          <div slot="header" class="clearfix">
            <span>Large Scale Area Chart</span>
            <div>
              <v-chart :options="options_2"/>
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
    </el-row>
=======
>>>>>>> 5892b29a3c8ffeb4b6c28dac267dcf3f1f1bfc5b
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Option, Select } from 'element-ui'
  import ECharts from 'vue-echarts'
  import 'echarts'

  Vue.use(Select)
  Vue.use(Option)
  export default {
    components: {
      'v-chart': ECharts
<<<<<<< HEAD
    },
    data () {
      return {
        province: [
          {
            value: '全国',
            label: '全国'
          },
          {
            value: '北京市',
            label: '北京市'
          },
          {
            value: '天津市',
            label: '天津市'
          },
          {
            value: '河北省',
            label: '河北省'
          },
          {
            value: '山西省',
            label: '山西省'
          },
          {
            value: '内蒙古',
            label: '内蒙古'
          },
          {
            value: '辽宁省',
            label: '辽宁省'
          },
          {
            value: '吉林省',
            label: '吉林省'
          },
          {
            value: '黑龙江',
            label: '黑龙江'
          },
          {
            value: '上海市',
            label: '上海市'
          },
          {
            value: '江苏省',
            label: '江苏省'
          },
          {
            value: '浙江省',
            label: '浙江省'
          },
          {
            value: '安徽省',
            label: '安徽省'
          },
          {
            value: '福建省',
            label: '福建省'
          },
          {
            value: '江西省',
            label: '江西省'
          },
          {
            value: '山东省',
            label: '山东省'
          },
          {
            value: '河南省',
            label: '河南省'
          },
          {
            value: '湖北省',
            label: '湖北省'
          },
          {
            value: '湖南省',
            label: '湖南省'
          },
          {
            value: '广东省',
            label: '广东省'
          },
          {
            value: '广西',
            label: '广西'
          },
          {
            value: '海南省',
            label: '海南省'
          },
          {
            value: '重庆市',
            label: '重庆市'
          },
          {
            value: '四川省',
            label: '四川省'
          },
          {
            value: '贵州省',
            label: '贵州省'
          },
          {
            value: '选项26',
            label: '云南省'
          },
          {
            value: '西藏',
            label: '西藏'
          },
          {
            value: '陕西省',
            label: '陕西省'
          },
          {
            value: '甘肃省',
            label: '甘肃省'
          },
          {
            value: '青海省',
            label: '青海省'
          },
          {
            value: '宁夏',
            label: '宁夏'
          },
          {
            value: '新疆',
            label: '新疆'
          },
          {
            value: '建设兵团',
            label: '建设兵团'
          }],
        ruleForm: {
          time: '',
          location: ''
        },
        rules: {
          time: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          location: [
            { required: true, message: '请选择省份', trigger: 'change' }
          ]
        },
        options_0: {
          title: {
            text: '有关疾病的具体相关数据'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            type: 'category',
            data: ['病发率', '发病人数', '死亡人数']
          },
          yAxis: {},
          series: [
            {
              id: 'data',
              data: [],
              type: 'bar'
            }
          ]
        },
        options_1: {
          title: {
            text: '该年该地区发病率变化趋势'
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          yAxis: {},
          series: [{
            id: 'data',
            data: [],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
              color: 'green',
              width: 4,
              type: 'dashed'
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: 'yellow',
              color: 'blue'
            }
          }]
    },
        options_2: {
          title: {
            text: '该月该地区发病率变化趋势'
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
          },
          yAxis: {},
          series: [{
            id: 'data',
            data: [],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
              color: 'green',
              width: 4,
              type: 'dashed'
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: 'red',
              color: 'blue'
            }
          }]
=======
    },
    data () {
      return {
        province: [
          {
            value: '全国',
            label: '全国'
          },
          {
            value: '北京市',
            label: '北京市'
          },
          {
            value: '天津市',
            label: '天津市'
          },
          {
            value: '河北省',
            label: '河北省'
          },
          {
            value: '山西省',
            label: '山西省'
          },
          {
            value: '内蒙古',
            label: '内蒙古'
          },
          {
            value: '辽宁省',
            label: '辽宁省'
          },
          {
            value: '吉林省',
            label: '吉林省'
          },
          {
            value: '黑龙江',
            label: '黑龙江'
          },
          {
            value: '上海市',
            label: '上海市'
          },
          {
            value: '江苏省',
            label: '江苏省'
          },
          {
            value: '浙江省',
            label: '浙江省'
          },
          {
            value: '安徽省',
            label: '安徽省'
          },
          {
            value: '福建省',
            label: '福建省'
          },
          {
            value: '江西省',
            label: '江西省'
          },
          {
            value: '山东省',
            label: '山东省'
          },
          {
            value: '河南省',
            label: '河南省'
          },
          {
            value: '湖北省',
            label: '湖北省'
          },
          {
            value: '湖南省',
            label: '湖南省'
          },
          {
            value: '广东省',
            label: '广东省'
          },
          {
            value: '广西',
            label: '广西'
          },
          {
            value: '海南省',
            label: '海南省'
          },
          {
            value: '重庆市',
            label: '重庆市'
          },
          {
            value: '四川省',
            label: '四川省'
          },
          {
            value: '贵州省',
            label: '贵州省'
          },
          {
            value: '选项26',
            label: '云南省'
          },
          {
            value: '西藏',
            label: '西藏'
          },
          {
            value: '陕西省',
            label: '陕西省'
          },
          {
            value: '甘肃省',
            label: '甘肃省'
          },
          {
            value: '青海省',
            label: '青海省'
          },
          {
            value: '宁夏',
            label: '宁夏'
          },
          {
            value: '新疆',
            label: '新疆'
          },
          {
            value: '建设兵团',
            label: '建设兵团'
          }],
        ruleForm: {
          time: '',
          location: ''
        },
        rules: {
          time: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          location: [
            { required: true, message: '请选择省份', trigger: 'change' }
          ]
        },
        options: {
          title: {
            text: '示例'
          },
          xAxis: {
            type: 'category',
            data: ['病发率', '致死率', '死亡人数']
          },
          yAxis: {},
          series: [
            {
              id: 'data',
              data: [],
              type: 'bar'
            }
          ]
>>>>>>> 5892b29a3c8ffeb4b6c28dac267dcf3f1f1bfc5b
        }
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      getData () {
<<<<<<< HEAD
        const url = '/1/search'
        const url1 = '/1/search_1'
        const url2 = '/1/search_2'
        const param = `year=${this.ruleForm.time.getFullYear()}&month=${this.ruleForm.time.getMonth()}&location=${this.ruleForm.location}`
        const param1 = `year=${this.ruleForm.time.getFullYear()}&location=${this.ruleForm.location}`
        const param2 = `month=${this.ruleForm.time.getMonth()}&location=${this.ruleForm.location}`
        console.log(param, 'param')
        console.log(param1, 'param1')
        console.log(param2, 'param2')
        this.axios.get(`${url}?${param}`).then(
          res => {
            this.options_0.series[0].data = [res.data[0]['Incidence _of_disease'], res.data[0]['Number_of_cases'], res.data[0]['Number_of_fatalities']]
          }
        )
        this.axios.get(`${url1}?${param1}`).then(
          res => {
            this.options_1.series[0].data = [res.data[1]['Incidence _of_disease'], res.data[2]['Incidence _of_disease'], res.data[3]['Incidence _of_disease'], res.data[4]['Incidence _of_disease'], res.data[5]['Incidence _of_disease'], res.data[6]['Incidence _of_disease'], res.data[7]['Incidence _of_disease'], res.data[8]['Incidence _of_disease'], res.data[9]['Incidence _of_disease'], res.data[10]['Incidence _of_disease'], res.data[11]['Incidence _of_disease'], res.data[12]['Incidence _of_disease']]
          }
        )
          this.axios.get(`${url2}?${param2}`).then(
            res => {
              this.options_2.series[0].data = [res.data[0]['Incidence _of_disease'], res.data[1]['Incidence _of_disease'], res.data[2]['Incidence _of_disease'], res.data[3]['Incidence _of_disease'], res.data[4]['Incidence _of_disease'], res.data[5]['Incidence _of_disease'], res.data[6]['Incidence _of_disease'], res.data[7]['Incidence _of_disease'], res.data[8]['Incidence _of_disease'], res.data[9]['Incidence _of_disease'], res.data[10]['Incidence _of_disease'], res.data[11]['Incidence _of_disease'], res.data[12]['Incidence _of_disease']]
            }
          )
=======
        const url = '/search'
        const param = `year=${this.ruleForm.time.getFullYear()}&month=${this.ruleForm.time.getMonth()}&location=${this.ruleForm.location}`
        console.log(param, 'param')
        this.axios.get(`${url}?${param}`).then(
          res => {
            this.options.series[0].data = [res.data[0]['Incidence _of_disease'], res.data[0]['Number_of_cases'], res.data[0]['Number_of_fatalities']]
          }
        )
>>>>>>> 5892b29a3c8ffeb4b6c28dac267dcf3f1f1bfc5b
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)
            this.getData()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
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
