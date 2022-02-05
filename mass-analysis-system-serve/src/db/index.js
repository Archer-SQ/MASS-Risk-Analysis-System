// 通过在终端运行此命令来开启数据库：./mongod --dbpath C:\Users\Archer\OneDrive\文档\paper\大论文\MASS人为风险分析系统\db
// 再通过node index.js来链接数据库

// mongoose使用用来连接MongoDB的第三方包
const mongoose = require('mongoose')
// 导入用户的Schema进行注册
require('./Schemas/User')
// 导入邀请码的Schema进行注册
require('./Schemas/InviteCode')
// 导入船舶事故的Schemal进行注册
require('./Schemas/Incident')
// 导入人为因素的Schemal进行注册
require('./Schemas/HumanFactor')

const connect = () => {
    // 连接数据库时进行异步处理
    return new Promise(resolve => {
        // 通过地址连接对应的数据库
        mongoose.connect('mongodb://127.0.0.1:27017/mass-analysis-system-db')
        // 监听数据库打开事件，在数据库打开时做一些事
        mongoose.connection.on('open', () => {
            console.log('mongoDB connection success')
            // 连接成功后的信号
            resolve()
        })
    })
}

module.exports = {
    connect,
}
