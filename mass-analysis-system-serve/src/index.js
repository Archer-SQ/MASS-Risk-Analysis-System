const Koa = require('koa')
const cors = require('koa-cors')
const koaBody = require('koa-body')
const { connect } = require('./db')
const registerRoutes = require('./routers')

const app = new Koa()

// 通过异步处理保证数据库连接成功后才进行请求
connect().then(() => {
    // 通过安装koa-cors中间件并使用cors来解决不同源之间请求的跨域问题
    app.use(cors())
    // 通过安装koa-body中间件并使用koaBody来处理从数据库传来的信息
    // multipart:是否支持多类型的文件上传
    // maxFileSize:允许传输的文件大小
    app.use(koaBody({ multipart: true, formidable: { maxFileSize: 200 * 1024 * 1024 } }))

    registerRoutes(app)

    // 开启一个http服务
    // 接收http请求并做处理，处理完成后进行响应

    app.listen(3000, () => {
        console.log('server is running...')
    })
})
