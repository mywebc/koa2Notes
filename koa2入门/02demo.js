const Koa = require("koa")
const router = require("koa-router")({
    // 为路由同意添加前缀
    prefix: '/users'
})
const app = new Koa()

// 原生处理路由
// app.use(async (ctx, next) => {
//     console.log(ctx)
//     if(ctx.request.path === '/') {
//         ctx.response.body ='这里是首页'
//     } else {
//         await next()
//     }
// })

// app.use(async (ctx, next) => {
//     if(ctx.request.path === '/detail') {
//         ctx.response.body ='这里是详情页页'
//     } else {
//         await next()
//     }
// })

// 使用路由中间件
router.get('/', async (ctx, next) => {
    ctx.response.body ='这里是首页'
})

router.get('/detail', async (ctx, next) => {
    ctx.response.body ='这里是详情页'
})
// 可以链式调用 
// router
//   .get('/', async (ctx, next) => {
//     ctx.body = 'Hello World!';
//   })
//   .post('/users', async (ctx, next) => {
//     // ... 
//   })
//   .put('/users/:id', async (ctx, next) => {
//     // ... 
//   })
//   .del('/users/:id', async (ctx, next) => {
//     // ... 
//   })
//   .all('/users/:id', async (ctx, next) => {
//     // ... 
//   });

// 对于所有请求做处理
router.all('/*', async (ctx, next) => {
    // *代表允许来自所有域名请求
    ctx.set("Access-Control-Allow-Origin", "*");
    // 其他一些设置...
    await next();
});

// 如果路由都相同,都会匹配

//使用ctx.params 获取路由参数

// 使用路由中间件
app.use(router.routes())

app.listen(3000, () => {
    console.log('server startting')
})