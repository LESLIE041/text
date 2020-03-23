var sqlMap = {
    Table1: {
      search: 'select * from table1 where Year = ? and Month = ? and Location = ?'
    },
    Table2: {
      search: 'select * from table2 where Year = ? and Month = ? and Age = ?'
    },
      Table5: {
      search: 'select * from table5 where Month = ? and Location = ?'
    },
      Table4: {
      search: 'select * from table4 where Month = ? and Age = ?'
    }
  }
  module.exports = sqlMap
