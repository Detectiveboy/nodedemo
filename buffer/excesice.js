const fs = require('fs')
fs.readFile('background02.jpg', (err, data) => {
    if (err) throw new Error(err)
    else {
        fs.writeFile('test.jpg', data, err => {
            if (err) throw new Error(err)
            else console.log('创建图片成功')
        })
    }
})
