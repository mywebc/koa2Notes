const Koa = require("koa")
const app = new Koa()

// 中间件 洋葱模型
app.use(async (ctx, next) => {
    await next()
    ctx.response.type= 'text/html'
    ctx.response.body = '<h1>hello</h1>'
})

app.use(async (ctx, next) => {
    console.log('中间件1 do something')
    await next()
    console.log('中间件1 end something')
})

app.use(async (ctx, next) => {
    console.log('中间件2 do something')
    await next()
    console.log('中间件2 end something')
})

app.use(async (ctx, next) => {
    console.log('中间件3 do something')
    await next()
    console.log('中间件3 end something')
})

app.listen(3000, () => {
    console.log('server start')
})
