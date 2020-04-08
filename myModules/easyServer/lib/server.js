exports.createServer = () => {
    const server = require('http')
    const port = 3000
    const hostname = '127.0.0.1'
    server.createServer((req, res) => {
        res.end('wellcome to age')
    }).listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`)
    })
}