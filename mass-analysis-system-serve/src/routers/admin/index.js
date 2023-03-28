const Router = require('@koa/router')
const mongoose = require('mongoose')
const { getBody } = require('../../helpers/utils')
// 使用jwt生成token进行验证
const jwt = require('jsonwebtoken')

// 根据Schema生成的一套方法，这套方法用来操作MongDB下的集合和集合下的文档
const User = mongoose.model('User')
const InviteCode = mongoose.model('InviteCode')

const router = new Router({
    // prefix设置请求路径的前缀
    prefix: '/admin',
})

// 当请求路径为/admin/register,请求方法为get时会执行下面这个函数
router.post('/register', async ctx => {
    const { account, password, inviteCode, role = '' } = getBody(ctx)

    // 后端验证
    if (account === '' || password === '' || inviteCode === '') {
        ctx.body = {
            code: 0,
            msg: '字段不能为空',
            data: null,
        }
        return
    }
    // 通过InviteCode中的findOne方法来判断邀请码是否正确
    const findCode = await InviteCode.findOne({
        inviteCode,
    }).exec()
    if (!findCode || findCode.user) {
        ctx.body = {
            code: 0,
            msg: '邀请码不正确',
            data: null,
        }
        return
    }
    // 通过User中的findOne方法来判断账号是否已经注册
    const findUser = await User.findOne({
        account,
    }).exec()
    // 找到了就报错
    if (findUser) {
        ctx.body = {
            code: 0,
            msg: '已存在该用户',
            data: null,
        }
        return
    }

    const user = new User({
        account,
        password,
        role,
    })
    // 保存对数据的添加,并接收保存成功后的一些信息
    const res = await user.save()

    findCode.user = res._id
    findCode.meta.updatedAt = new Date().getTime()

    await findCode.save()

    ctx.body = {
        code: 200,
        msg: '注册成功',
        data: res,
    }
})

// 当请求路径为/admin/login,请求方法为get时会执行下面这个函数
router.post('/login', async ctx => {
    const { account, password } = getBody(ctx)
    if (account === '' || password === '') {
        ctx.body = {
            code: 0,
            msg: '字段不能为空',
            data: null,
        }
        return
    }
    // 判断用户是否存在于mongoDB中
    const one = await User.findOne({
        account,
    }).exec()
    // 找不到就报错
    if (!one) {
        ctx.body = {
            code: 0,
            msg: '用户未注册',
            data: null,
        }
        return
    }
    // 找到后将需要的用户信息返回给前端,并判断密码是否正确
    const userInfo = {
        account: one.account,
        role: one.role,
        _id: one._id,
    }

    if (one.password === password) {
        ctx.body = {
            code: 200,
            msg: '登录成功',
            data: {
                userInfo,
                // 生成token令牌
                token: jwt.sign(userInfo, 'MASS-System'),
            },
        }
        return
    }
    ctx.body = {
        code: 0,
        msg: '用户名或密码错误',
        data: null,
    }
})

module.exports = router
