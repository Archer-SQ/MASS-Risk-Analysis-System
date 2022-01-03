const Router = require('@koa/router')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const InviteCode = mongoose.model('InviteCode')

const router = new Router({
    prefix: '/invite',
})

router.get('/add', async ctx => {
    const inviteInfo = new InviteCode({
        inviteCode: uuidv4(),
        user: '',
    })

    const saved = await inviteInfo.save()

    ctx.body = {
        code: 200,
        data: saved,
        msg: '创建成功',
    }
})

module.exports = router
