const http = require('http')
const url = require('url')
const route = http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        let pathname = url.parse(req.url).pathname.replace(/\//, '')
        switch (pathname) {
            case 'login':
                res.end('login')
                break
            case 'register':
                res.end('register')
                break
            default:
                res.statusCode = 404
                res.end('404 not found')
        }
    } else {
        res.statusCode = 404
        res.end('404 not found')
    }
})
route.listen(8888)
console.log('router is running at http://127.0.0.1:8888')