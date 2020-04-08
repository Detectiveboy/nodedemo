const fs = require('fs')
{
    const ws = fs.createWriteStream('output.txt', 'utf-8')
    ws.write('运用stream流写东西...')
    ws.end()
    console.log('执行完成')
}
{
    const rs = fs.createReadStream('output.txt', 'utf-8')
    rs.on('data', chunk => {
        console.log(chunk)
    })
    rs.on('end', () => {
        console.log('读完了')
    })
    rs.on('err', err => {
        throw new Error(err)
    })
}
{
    const rs = fs.createReadStream('output.txt', 'utf-8')
    const ws = fs.createWriteStream('output1.txt', 'utf-8')
    rs.pipe(ws)
    console.log('数据传输成功')
}
{
    const zlib = require('zlib')
    const rs = fs.createReadStream('output.txt')
    const ws = fs.createWriteStream('output.txt.gz')
    rs.pipe(zlib.createGzip()).pipe(ws)
}
{
    fs.writeFile('exersice.js', null, err => {
        if (err) throw new Error(err)
        else console.log('创建成功')
    })
}