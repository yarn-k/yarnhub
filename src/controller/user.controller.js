
const userService = require('../service/user.service')

class UserController {
  async create(ctx, next){
    // 1. 获取用户传递过来的信息
    const user = ctx.request.body
  //  2. 判断用户名或密码不存在


  //  2. 将user对象保存到数据库中
    const result = await userService.create(user)
  // 3. 查看存储的结果，告诉前端创建成功
    ctx.body = {
      message: '创建用户成功',
      data: result
    }


  }
}

module.exports = new UserController()
