const koa = require('koa')
const app = new koa()
const path = require('path')
const koaStatic = require('koa-static')
const fs = require('fs')
const root = path.resolve('./')
app.use(koaStatic(path.join(root, 'koa/static')))
app.listen(5000)
app.use(async ctx => {
    // let reqUrl = ctx.request.url
    // console.log(reqUrl)
    let filePath = path.join(root, '/koa/static/', 'index.html')
    // ctx.response.type = 'text/html'
    fs.createReadStream(filePath).pipe(ctx.response.body)
})
console.log('koa server is running at localhost:5000')