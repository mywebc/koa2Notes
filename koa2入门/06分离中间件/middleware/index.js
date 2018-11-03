const miSend = require("./mi-send")
module.exports = (app) => {
    app.use(miSend)
    // 指定 public目录为静态资源目录，用来存放 js css images 等
    app.use(staticFiles(path.resolve(__dirname, "./public")))

    app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
        trimBlocks: true
    }
    }));

    app.use(bodyParser())
}