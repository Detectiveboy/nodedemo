const http = require('http')
const server = http.createServer((req, res) => {
    // res.statusCode=200
    // res.setHeader('Content-Type', 'text/plain')
    // res.writeHead(200, {
    //     'Content-Type': 'text/plain',   //有个问题就是设置请求头的两个方法同时出现会出错，不能在设置
    //     'cache-control': false           //完请求头时在删除某个属性，因为是异步方法
    // })
    // res.setHeader('Date',0)
    // console.log(res.getHeader('Content-Type'))
    res.removeHeader('Content-Type')
    res.write('hello')
    res.end()
})
server.listen(8888)
console.log('server is running at http://127.0.0.1:8888')