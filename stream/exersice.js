const fs = require('fs')
const rs = fs.createReadStream('background02.jpg')
const ws = fs.createWriteStream('copy.jpg')
rs.pipe(ws)
console.log('复制成功')