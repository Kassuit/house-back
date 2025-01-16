const koa = require("koa");
const cors = require("@koa/cors");
const routes = require("./routes/routes.js");

const app = new koa();
app.use(cors());
app.use(routes.routes())
app.use(async ctx => {
    ctx.body = 'This vexes me';
});

app.listen(3000, () => {
    console.log("HOUSE IS IN THE HOUSE (3000)")
})