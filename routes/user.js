const Router = require("koa-router");
const user_controller = require("../controllers/user_controller.js");

const router = new Router();

router.get("/user", user_controller.index);
router.get("/user/:id", user_controller.get_by_id);
router.post("/user", user_controller.create);
router.put("/user/:id", user_controller.edit);
router.delete("/user/:id", user_controller.destroy);

// Specific routes
router.get("/user/:id/likes", user_controller.liked_posts);
router.get("/user/:id/follower", user_controller.follower);
router.get("/user/:id/followee", user_controller.followee);

module.exports = router;