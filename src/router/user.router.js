
const { verifyUser } = require('../middleware/user.middleware')
const userController = require('../controller/user.controller')
const KoaRouter = require('@koa/router')

// 1. 创建路由对象
const userRouter = new KoaRouter({ prefix: '/user' })
// const userRouter = new KoaRouter({prefix: '/user'})
// 2. 定义路由中映射
//    用户注册接口
userRouter.post('/', verifyUser, userController.create)
// 3. 导出路由对象
module.exports = userRouter
