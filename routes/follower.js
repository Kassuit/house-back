const Router = require("koa-router");
const follower_controller = require("../controllers/follower_controller.js");

const router = new Router();

router.get("/follower", follower_controller.index);
router.get("/follower/:id", follower_controller.get_by_id);
router.post("/follower", follower_controller.create);
router.put("/follower/:id", follower_controller.edit);
router.delete("/follower/:id", follower_controller.destroy);

module.exports = router;