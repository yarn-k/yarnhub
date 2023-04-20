

const mysql = require('mysql2');
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  database: 'yarnhub',
  user: 'root',
  password: '123456',
  connectionLimit: 5
})

// 获取连接是否成功
connectionPool.getConnection((err, connection) => {
  // 判断是否有错误信息
  if (err) {
    console.log('获取数据库失败')
    return
  }

//  获取connection，和数据库建立连接
  connection.connect(err => {
    if (err) {
      console.log('创建数据用户失败', err)
    }else {
      console.log('创建数据用户成功')
    }
  })
})


const connection = connectionPool.promise()

module.exports = connection
