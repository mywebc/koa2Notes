const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
// 引入 koa-static
const staticFiles = require('koa-static')

const app = new Koa()
const router = require('./router')

const middleware = require("./middleware")
middleware(app)

router(app)
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
