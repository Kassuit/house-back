const Router = require("koa-router");
const post_controller = require("../controllers/post_controller.js");

const router = new Router();

router.get("/post", post_controller.index);
router.get("/post/:id", post_controller.get_by_id);
router.post("/post", post_controller.create);
router.put("/post/:id", post_controller.edit);
router.delete("/post/:id", post_controller.destroy);

// Specific routes
router.get("/post/:id/likers", post_controller.likers);
router.get("/post/:id/user", post_controller.get_by_id_with_user);

module.exports = router;