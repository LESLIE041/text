const LocationApi = require('D:/qianduan/test/src/server/api/1')
const ageApi = require('D:/qianduan/test/src/server/api/2')
const PLocationApi = require('D:/qianduan/test/src/server/api/3')
const PageApi = require('D:/qianduan/test/src/server/api/4')
// eslint-disable-next-line no-unused-vars
const fs = require('fs')
// eslint-disable-next-line no-unused-vars
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// 后端api路由
app.use('D:/qianduan/test/src/server/api/1', LocationApi)
app.use('D:/qianduan/test/src/server/api/2', ageApi)
app.use('D:/qianduan/test/src/server/api/3', PLocationApi)
app.use('D:/qianduan/test/src/server/api/4', PageApi)

// 监听端口
app.listen(8080)
console.log('success listen at port:8080......')
