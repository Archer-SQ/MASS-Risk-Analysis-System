const mongoose = require('mongoose')

const { getMeta, preSave } = require('../helpers')

const InviteCodeSchema = new mongoose.Schema({
    // 邀请码
    inviteCode: String,
    // 哪个用户使用了邀请码
    user: String,
    // 元信息
    meta: getMeta(),
})

InviteCodeSchema.pre('save', preSave)

mongoose.model('InviteCode', InviteCodeSchema)
