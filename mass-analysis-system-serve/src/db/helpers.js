// 注册元信息
const getMeta = () => {
    return {
        // 创建的时间戳
        createdAt: {
            type: Number,
            default: new Date().getTime(),
        },
        // 更新的时间戳
        updatedAt: {
            type: Number,
            default: new Date().getTime(),
        },
    }
}

// 保存之前修改meta的值
const preSave = function (next) {
    // 判断是否是新数据
    if (this.isNew) {
        const ts = Date.now()
        this['meta'].createdAt = ts
        this['meta'].updatedAt = ts
    } else {
        this['meta'].updatedAt = Date.now()
    }
    next()
}

module.exports = { getMeta, preSave }
