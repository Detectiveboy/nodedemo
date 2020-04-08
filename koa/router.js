const koa = require('koa')
const app = new koa()
const path = require('path')
const koaStatic = require('koa-static')
const fs = require('fs')
const root = path.resolve('./')
app.use(koaStatic(path.join(root, 'koa/static')))
const Router = require('koa-router')
const router = new Router()
const getIndex = async (ctx, next) => {
    let filePath = path.join(root, '/koa/static/', 'index.html')
    fs.createReadStream(filePath).pipe(ctx.response.body)
}
router.get('/', getIndex)
const getApi = async (ctx, next) => {
    ctx.response.body = 'method get'
}
router.get('/getApi', getApi)
const postApi = async (ctx, next) => {
    ctx.response.body = 'method post'
}
router.post('/postApi', postApi)
app.use(router.routes()).use(router.allowedMethods())
app.listen(5000)
console.log('koa server is running at localhost:5000')