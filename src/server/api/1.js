var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap/sqlMap')

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

router.get('/location', (req, res) => {
  var sql = $sql.Table1.search
  var params = req.query
  console.log(params)
  conn.query(sql, [params.year, params.month, params.location], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})

module.exports = router
