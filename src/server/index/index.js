const LocationApi = require('../api/1')
const ageApi = require('../api/2')
const PLocationApi = require('../api/3')
const PageApi = require('../api/4')
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
app.use('/api/1', LocationApi)
app.use('/api/2', ageApi)
app.use('/api/3', PLocationApi)
app.use('/api/4', PageApi)

// 监听端口
app.listen(8080)
console.log('success listen at port:8080......')
