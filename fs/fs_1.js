const fs = require('fs')
fs.mkdir('log', (err) => {
    if (err) throw new Error(err)
    else console.log('创建目录成功')
})
fs.writeFile('./log/log1.text', 'hello node', (err) => {
    if (err) throw new Error(err)
    else console.log('创建文件成功')
})
fs.open('./log/log2.text', 'w+', (err) => {
    if (err) throw new Error(err)
    else console.log('running ok')
})