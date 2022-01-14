const mongoose = require('mongoose')
const { getMeta } = require('../helpers')

const IncidentSchema = new mongoose.Schema({
    // 事故名称
    name: String,
    // 事故发生时间
    time: String,
    // 事故发生地点
    place: String,
    // 事故人为因素
    factors: Array,
    // 元信息
    meta: getMeta(),
})

mongoose.model('Incident', IncidentSchema)