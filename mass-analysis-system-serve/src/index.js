const Koa = require('koa')

const app = new Koa()

// 通过app.use注册中间件
// 中间件本质上是一个函数
// 中间件会提供一个context参数，包含当前请求的所有信息
app.use(context => {
    const { request: req } = context
    const { url } = req

    if (url === '/') {
        context.response.body = '<h1>主页</h1>'
        return
    }
    if (url === '/user/list') {
        context.response.body = '<h1>用户列表</h1>'
        return
    }

    context.response.body = '404'
    context.response.status = 404
})

// 开启一个http服务
// 接收http请求并做处理，处理完成后进行响应
app.listen(3000, () => {
    console.log('server is running...')
})
