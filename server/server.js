const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        let str = `
        method  ${req.method}
        url     ${req.url}
        headers ${JSON.stringify(req.headers)}    
    `
        const ws = fs.createWriteStream('./server/log.log', 'utf-8')
        ws.write('hello world')
        ws.end()
        res.end('hello world')
    } else {
        res.end('404 not found')
    }
})
server.listen(8888)
server.on('data', data => {
    console.log(data)
})
console.log('server is running at localhost:8888')