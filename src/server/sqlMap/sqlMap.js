var sqlMap = {
    Table1: {
      search_0: 'select * from table1 where Year = ? and Month = ? and Location = ?',
      search_1: 'select * from table1 where Year = ? and Location = ?',
      search_2: 'select * from table1 where Month = ? and Location = ?',
      search_3: 'search * from table1 where Year >= ? and Location = ?'
    },
    Table2: {
      search_0: 'select * from table2 where Year = ? and Month = ? and Location = ?',
      search_1: 'select * from table2 where Year = ? and Location = ?',
      search_2: 'select * from table2 where Month = ? and Location = ?',
      search_3: 'search * from table2 where Year >= ? and Location = ?'
    },
      Table5: {
      search_0: 'select * from table5 where Year = ? and Month = ? and Location = ?',
      search_1: 'select * from table5 where Year = ? and Location = ?',
      search_2: 'select * from table5 where Month = ? and Location = ?',
      search_3: 'search * from table5 where Year >= ? and Location = ?'
    },
      Table4: {
        search_0: 'select * from table4 where Year = ? and Month = ? and Location = ?',
        search_1: 'select * from table4 where Year = ? and Location = ?',
        search_2: 'select * from table4 where Month = ? and Location = ?',
        search_3: 'search * from table4 where Year >= ? and Location = ?'
    }
  }
  module.exports = sqlMap
