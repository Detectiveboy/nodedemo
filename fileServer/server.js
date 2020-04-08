const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
let root = path.resolve('.')
http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        let pathName = url.parse(req.url).pathname
        let filePath = path.join(root, 'fileServer/file', pathName)
        fs.stat(filePath, (err, stat) => {
            if (!err && stat.isFile) {
                res.statusCode = 200
                fs.createReadStream(filePath).pipe(res)
            } else {
                res.statusCode = 404
                res.write('404 not found')
                res.end()
            }
        })
    }
}).listen(6666)
console.log('server is running at http://127.0.0.1:6666')