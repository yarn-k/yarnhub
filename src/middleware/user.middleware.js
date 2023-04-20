const userService = require('../service/user.service')

// 验证用户逻辑中间件
const verifyUser = async (ctx, next) => {
  // 判断用户或密码是否为空
  const { username, password } = ctx.request.body
  if (!username || !password){
    ctx.body = {
      message: '用户名或密码不能为空',
      code: -1001
    }
    return
  }
  //  判断用户名已经存在
  const users = await userService.findUserByName(username)
  if (users.length) {
    ctx.body = {
      message: '用户名已经被使用',
      code: -1002
    }
    return
  }
//  执行下一个中间件
  await next()
}

module.exports = {
  verifyUser
}
