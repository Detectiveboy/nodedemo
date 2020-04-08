const fs = require('fs')
fs.readdir('./log', (err, files) => {
    if (err) throw new Error(err)
    else console.log(files)
})
fs.readFile('./log/log1.text', 'utf-8', (err, data) => {
    if (err) throw new Error(err)
    else console.log(data)
})
fs.stat('./log/log2.txt', (err, stats) => {
    if (err) throw new Error(err)
    else console.log(stats)
})