<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据预测</el-breadcrumb-item>
      <el-breadcrumb-item>地区查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content_bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Bar</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <div class="echarts_0">
              <v-chart :options="options"/>
            </div>
          </el-card>
        </div>
      </el-col>
      <!--      <el-col :span="8">-->
      <!--        <el-form @submit.native.prevent="select" :model="selection">-->
      <!--          <el-form-item>-->
      <!--            <div class="grid-content bg-purple">-->
      <!--              <el-date-picker v-model="selection.selectYea" type="year" placeholder="按需选择年" @change="jobSearch"-->
      <!--                              value-format="yyyy" class="year"></el-date-picker>-->
      <!--            </div>-->

      <!--          </el-form-item>-->
      <!--          <el-form-item>-->
      <!--            <el-select v-model="selection.value_0" type="String" placeholder="按需选择月" class="month">-->
      <!--              <el-option-->
      <!--                v-for="item in options_0"-->
      <!--                :key="item.value_0"-->
      <!--                :label="item.label"-->
      <!--                :value="item.value_0"-->
      <!--                :disabled="item.disabled">-->
      <!--              </el-option>-->
      <!--            </el-select>-->
      <!--          </el-form-item>-->
      <!--          <el-form-item>-->
      <!--            <el-select v-model="selection.value" type="String" placeholder="按需选择地区">-->
      <!--              <el-option-->
      <!--                v-for="item in options"-->
      <!--                :key="item.value"-->
      <!--                :label="item.label"-->
      <!--                :value="item.value"-->
      <!--                :disabled="item.disabled">-->
      <!--              </el-option>-->
      <!--            </el-select>-->
      <!--          </el-form-item>-->
      <!--          <el-form-item>-->
      <!--            <el-button type="primary" native-type="submit">立即查询</el-button>-->
      <!--          </el-form-item>-->
      <!--        </el-form>-->
      <!--      </el-col>-->
    </el-row>
    <!--    <el-row :gutter="20">-->
    <!--      <el-col :span="16">-->
    <!--        <div class="grid-content_bg-purple">-->
    <!--          <el-card class="box-card-1">-->
    <!--            <div slot="header" class="clearfix">-->
    <!--              <span>Large Scale Area Chart</span>-->
    <!--              &lt;!&ndash; <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> &ndash;&gt;-->
    <!--            </div>-->
    <!--          </el-card>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <!--    <el-row :gutter="20">-->
    <!--      <el-col :span="14">-->
    <!--        <div class="grid-content_bg-purple">-->
    <!--          <el-card class="box-card-2">-->
    <!--            <div slot="header" class="clearfix">-->
    <!--              <span>Doughnut Chart</span>-->
    <!--              &lt;!&ndash; <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> &ndash;&gt;-->
    <!--            </div>-->
    <!--          </el-card>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <!--    <el-row :gutter="20">-->
    <!--      <el-col :span="14">-->
    <!--        <div class="grid-content_bg-purple">-->
    <!--          <el-card class="box-card-3">-->
    <!--            <div slot="header" class="clearfix">-->
    <!--              <span>Scatter Aqi Color</span>-->
    <!--              &lt;!&ndash; <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> &ndash;&gt;-->
    <!--            </div>-->
    <!--          </el-card>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Select, Option } from 'element-ui'
  import ECharts from 'vue-echarts'
  import 'echarts'

  Vue.use(Select)
  Vue.use(Option)
  export default {
    components: {
      'v-chart': ECharts
    },
    data () {
      return {
        options: {
          title: {
            text: '示例'
          },
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {},
          series: [
            {
              data: [],
              type: 'line'
            }
          ]
        }
      }
    },
    created () {
    },
    mounted () {
      this.getData()
    },
    methods: {
      getData () {
        this.axios.get('/location?year=2004').then(
          res => {
            console.log(res)
            const option = {
              title: {
                text: '示例'
              },
              xAxis: {
                type: 'category',
                data: [],
                axisLabel: {
                  fontSize: 5,
                  color: '#657c97',
                  fontFamily: '#Arial',
                  formatter: (value) => {
                    return value.split('').join('\n')
                  }
                }
              },
              yAxis: {},
              series: [
                {
                  data: [],
                  type: 'bar'
                }
              ]
            }
            res.data.forEach(
              value => {
                option.xAxis.data.push(value['Location'])
                option.series[0].data.push(value['incidenceOfADisease'])
              }
            )
            this.options = option
          }
        )
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
