const koa = require("koa");
const cors = require("@koa/cors");
const serve = require('koa-static');
const mount = require('koa-mount');
const routes = require("./routes/routes.js");
const path = require('path');
const mime = require("./middlewares/mime.js");
const bodyParser = require("koa-bodyparser");

const app = new koa();
app.use(bodyParser())
app.use(cors());
app.use(mime);
app.use(mount('/images', serve(path.join(__dirname, '/images'))))
app.use(routes.routes())
app.use(async ctx => ctx.body = 'This vexes me');

app.listen(3000, () => {
    console.log("HOUSE IS IN THE HOUSE (3000)")
})