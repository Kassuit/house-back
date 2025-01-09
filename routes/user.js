const Router = require("koa-router");
const user_controller = require("../controllers/user_controller.js");

const router = new Router();

router.get("/user", user_controller.index);

module.exports = router;