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

module.exports = { getMeta }
