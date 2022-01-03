const admin = require('./admin/index')
const inviteCode = require('./invite-code/index')

module.exports = app => {
    // 通过app.use注册中间件
    // 中间件本质上是一个函数
    // 中间件会提供一个context参数，包含当前请求的所有信息
    app.use(admin.routes())
    app.use(inviteCode.routes())
}
