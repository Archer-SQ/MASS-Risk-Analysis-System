const Router = require('@koa/router')
const mongoose = require('mongoose')
const { getBody } = require('../../helpers/utils')

const HumanFactor = mongoose.model('HumanFactor')

const router = new Router({
    prefix: '/humanFactor',
})

router.get('/list', async ctx => {
    const { keyNumber } = ctx.query
    const query = keyNumber ? {} : null
    if (keyNumber) {
        query.controllingBehavior = keyNumber
    }
    const list = await HumanFactor.find(query).exec()
    ctx.body = {
        data: list,
        code: 200,
        msg: '获取列表成功',
    }
})

router.post('/add', async ctx => {
    const {
        controllingBehavior,
        humanFactorName,
        weightOfBerthStage,
        weightRankingOfBerthStage,
        weightOfInboundAndOutbound,
        weightRankingOfInboundAndOutbound,
        weightOfCoastal,
        weightRankingOfCoastal,
        generalWeight,
        generalWeightRanking,
    } = getBody(ctx)
    const humanFactor = new HumanFactor({
        controllingBehavior,
        humanFactorName,
        weightOfBerthStage,
        weightRankingOfBerthStage,
        weightOfInboundAndOutbound,
        weightRankingOfInboundAndOutbound,
        weightOfCoastal,
        weightRankingOfCoastal,
        generalWeight,
        generalWeightRanking,
    })
    const res = await humanFactor.save()
    ctx.body = {
        data: res,
        code: 200,
        msg: '添加成功',
    }
})

module.exports = router
