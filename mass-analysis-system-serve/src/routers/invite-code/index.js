const Router = require('@koa/router')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const InviteCode = mongoose.model('InviteCode')

const router = new Router({
    prefix: '/invite',
})

router.post('/add', async ctx => {
    const { count = 1 } = ctx.request.body
    const arr = []

    for (let i = 0; i < count; i++) {
        arr.push({
            inviteCode: uuidv4(),
            user: '',
        })
    }

    const res = await InviteCode.insertMany(arr)

    ctx.body = {
        code: 200,
        data: res,
        msg: '创建成功',
    }
})

module.exports = router
