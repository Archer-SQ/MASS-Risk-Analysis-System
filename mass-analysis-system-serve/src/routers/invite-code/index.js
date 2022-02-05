const Router = require('@koa/router')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const InviteCode = mongoose.model('InviteCode')

const router = new Router({
    prefix: '/invite',
})

router.post('/add', async ctx => {
    const { count } = ctx.request.body
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

router.get('/list', async ctx => {
    const list = await InviteCode.find().exec()

    ctx.body = {
        data: list,
        msg: '获取列表成功',
        code: 200,
    }
})

router.delete('/:id', async ctx => {
    const { id } = ctx.params
    const res = await InviteCode.deleteOne({
        _id: id,
    })
    ctx.body = {
        data: res,
        msg: '删除成功',
        code: 200,
    }
})

module.exports = router
