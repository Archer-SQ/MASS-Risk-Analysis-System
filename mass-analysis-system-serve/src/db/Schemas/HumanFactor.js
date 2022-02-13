const mongoose = require('mongoose')

const { getMeta, preSave } = require('../helpers')

const HumanFactorSchema = new mongoose.Schema({
    // 属于哪种控制行为
    controllingBehavior: String,
    // 人为因素名称
    humanFactorName: String,
    // 泊位作业阶段所占权重
    weightOfBerthStage: String,
    // 泊位作业阶段权重排序
    weightRankingOfBerthStage: String,
    // 进出港航行阶段所占权重
    weightOfInboundAndOutbound: String,
    // 进出港航行阶段权重排序
    weightRankingOfInboundAndOutbound: String,
    // 沿海水域航行阶段所占权重
    weightOfCoastal: String,
    // 沿海水域航行阶段权重排序
    weightRankingOfCoastal: String,
    // 综合权重
    generalWeight: String,
    // 综合权重排序
    generalWeightRanking: String,
    // 元信息
    meta: getMeta(),
})

HumanFactorSchema.pre('save', preSave)

mongoose.model('HumanFactor', HumanFactorSchema)
