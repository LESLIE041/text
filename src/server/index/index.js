var models = require('../db/db')
var express = require('express')
var mysql = require('mysql')
var $sql = require('../sqlMap/sqlMap')
const app = express()

app.use(require('cors')())

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()

// eslint-disable-next-line no-unused-vars
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

app.get('/', async (req, res) => {
  res.send('index')
})

// 地址查询
app.get('/api/location', async (req, res) => {
  var sql = $sql.Table1.search_5
  var params = req.query
  console.log(params)
  conn.query(sql, [params.year], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

app.listen(3000, () => {
  console.log('http://localhost:3000/')
})
