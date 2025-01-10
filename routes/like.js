const Router = require("koa-router");
const like_controller = require("../controllers/like_controller.js");

const router = new Router();

router.get("/like", like_controller.index);
router.get("/like/:id", like_controller.get_by_id);
router.post("/like/:id", like_controller.create);
router.put("/like/:id", like_controller.edit);
router.delete("/like/:id", like_controller.destroy);

module.exports = router;