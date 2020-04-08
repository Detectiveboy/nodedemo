const fs = require('fs')
fs.unlink('./log/log1.text', err => {
    if (err) throw new Error(err)
    else console.log('刪除文件成功')
})
fs.unlink('./log/log2.text', err => {
    if (err) throw new Error(err)
    else console.log('刪除文件成功')
})
fs.rmdir('./log/', err => {
    if (err) throw new Error(err)
    else console.log('刪除目录成功')
})