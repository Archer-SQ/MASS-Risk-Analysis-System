const Router = require('@koa/router')
const mongoose = require('mongoose')
const { getBody } = require('../../helpers/utils')

const Incident = mongoose.model('Incident')

const router = new Router({
    prefix: '/incident',
})

router.post('/add', async ctx => {
    const { name, time, place, factors } = getBody(ctx)
    const incident = new Incident({
        name,
        time,
        place,
        factors,
    })
    const res = await incident.save()
    ctx.body = {
        data: res,
        code: 200,
        msg: '添加成功',
    }
})

router.get('/list', async ctx => {
    // 带关键词的搜索接口
    const { keyword = '' } = ctx.query
    const query = {}
    if (keyword) {
        // 模糊查询
        query.name = new RegExp(`${keyword}`)
        console.log(query)
    }
    const list = await Incident.find(query).exec()
    const total = await Incident.countDocuments()
    ctx.body = {
        data: { list, total },
        code: 200,
        msg: '获取列表成功',
    }
})

module.exports = router
