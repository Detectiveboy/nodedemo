const fs = require('fs')
fs.appendFile('./log/log1.text', 'wellcome to my file', err => {
    if (err) throw new Error(err)
    else console.log('修改文件成功')
})
fs.rename('./log/log2.text', './log/log2.txt', err => {
    if (err) throw new Error(err)
    else console.log('修改文件名成功')
})