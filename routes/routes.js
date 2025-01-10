const Router = require("koa-router");
const user_routes = require("./user.js");
const post_routes = require('./post.js');

const router = new Router();

router.use(user_routes.routes());
router.use(post_routes.routes());

module.exports = router;