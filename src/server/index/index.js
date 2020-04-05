var models = require('../db/db')
var express = require('express')
var mysql = require('mysql')
var $sql = require('../sqlMap/sqlMap')
const app = express()

app.use(require('cors')())

// 连接数据库
var conn


function connect () {
  conn = mysql.createConnection(models.mysql)
  conn.connect(handleError)
  conn.on('error', handleError)
}

function handleError (err) {
  if (err) {
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connect()
    } else {
      console.error(err.stack || err)
    }
  }
}

connect()
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
app.get('/api/1/search', async (req, res) => {
  const sql = $sql.Table1.search
  const params = req.query
  conn.query(sql, [params.year, params.month, params.location], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
})
app.get('/api/1/search_1', async (req, res) => {
  const sql = $sql.Table1.search_1
  const params = req.query
  conn.query(sql, [params.year, params.location], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
})
app.get('/api/1/search_2', async (req, res) => {
  const sql = $sql.Table1.search_2
  const params = req.query
  conn.query(sql, [params.month, params.location], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      res.send(result)
    }
  })
})

app.listen(3000, () => {
  console.log('http://localhost:3000/')
})
