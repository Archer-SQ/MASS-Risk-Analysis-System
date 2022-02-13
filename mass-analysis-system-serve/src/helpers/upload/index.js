const fs = require('fs')
const OSS = require('ali-oss')
const config = require('../../project.config')

const client = new OSS({
    region: 'oss-cn-shanghai',
    accessKeyId: 'LTAI5t8u8kYTkWonvDHF55o5',
    accessKeySecret: 'rxHlRtDbv1i7hizmsbdU1y8Z0qFfCh',
    bucket: 'mass-risk-analysis-system',
})
const saveFileToDisk = async ctx => {
    try {
        const file = ctx.request.files.file
        const stream = fs.createReadStream(file.path)
        const result = await client.putStream(`${config.UPLOAD_DIR}${file.name}`, stream)
        return result
    } catch (e) {
        return e
    }
}
module.exports = { saveFileToDisk }
