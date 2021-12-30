// 通过在终端运行此命令来开启数据库：./mongod --dbpath C:\Users\Archer\OneDrive\文档\paper\大论文\MASS人为风险分析系统\db
// 再通过node index.js来链接数据库

// mongoose使用用来连接MongoDB的第三方包
const mongoose = require('mongoose')

// 第一步：
// 给哪个数据库的
// 哪个集合
// 添加什么格式的文档

// Schema:映射了MongoDB下的一个集合，内容就是集合下文档的构成
const UserSchema = new mongoose.Schema({
    nickname: String,
    password: String,
    age: Number,
})

// Modal:根据Schema生成的一套方法，这套方法用来操作MongDB下的集合和集合下的文档
const UserModal = mongoose.model('User', UserSchema)

const connect = () => {
    // 通过地址连接对应的数据库
    mongoose.connect('mongodb://127.0.0.1:27017/mass-analysis-system-db')
    // 监听数据库打开事件，在数据库打开时做一些事
    mongoose.connection.on('open', () => {
        console.log('connection success')
        // 数据库连接成功之后创建文档
        const user = new UserModal({
            nickname: '李霜大傻子',
            password: '123456',
            age: 12,
        })
        // 保存创建的文档，保存到MongoDB
        user.save()
    })
}

connect()
