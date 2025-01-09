const Router = require("koa-router");
const user_routes = require("./user.js");

const router = new Router();

router.use(user_routes.routes());

module.exports = router;