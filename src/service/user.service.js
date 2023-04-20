

const connection = require('../app/database')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'yarnhub',
//   password: '123456'
// });
class UserService {
  async create(user) {
  //  1. 获取用户
    const { username,password } = user
  //  2. 拼接statement
    const statement = 'INSERT INTO `user` (username,password) VALUES (?,?);'
  //  3. 执行sql语句
    const result = await connection.execute(statement, [username,password])
    return result
  }
  // 通过用户名查找信息
  async findUserByName(username) {
    const statement = 'select * from `user` where username = ?'
    const [values] = await connection.execute(statement, [username])
    return values
  }
}

module.exports = new UserService()

