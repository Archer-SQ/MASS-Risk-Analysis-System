const mongoose = require('mongoose')
const { getMate } = require('../helpers')

// 第一步：
// 给哪个数据库的
// 哪个集合
// 添加什么格式的文档

// Schema:映射了MongoDB下的一个集合，内容就是集合下文档的构成
const UserSchema = new mongoose.Schema({
    account: String,
    password: String,
    // 注册元信息
    meta: getMate(),
})

// 根据Schema生成的一套方法，这套方法用来操作MongDB下的集合和集合下的文档
mongoose.model('User', UserSchema)
