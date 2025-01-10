const { Like } = require("../models")
const helpers = require("./helpers_controller.js")

async function index(ctx) {
    ctx.body = await Like.findAll()
}

async function get_by_id(ctx) {
    const { id } = ctx.params;
    const like = await Like.findByPk(id);
    if (!like) return helpers.error404();
    ctx.body = like;
}

async function edit(ctx) {
    const { id } = ctx.params;
    const { like } = ctx.request.body;
    const like_record = await Like.findByPk(id);
    if (!like_record) return helpers.error404();
    await like_record.update(like)
    ctx.body = like_record;
}

async function create(ctx) {
    const { like } = ctx.request.body;
    const like_record = await Like.create(like);
    ctx.body = like_record;
}

async function destroy(ctx) {
    const { id } = ctx.params;
    const like_record = await Like.findByPk(id);
    if (!like_record) return helpers.error404();
    await like_record.destroy();
    ctx.status = 204;
}

// specific controllers
async function users_liked_posts(ctx) {
    const { user_id } = ctx.params;
    const liked_posts = await Like.findAll({
        where: { "user_id": user_id },
        include: ['post']
    });
    ctx.body = liked_posts;
}

async function posts_liker_users(ctx) {
    const { post_id } = ctx.params;
    const liker_users = await Like.findAll({
        where: { "post_id": post_id },
        include: ['user']
    });
    ctx.body = liker_users;
}

module.exports = { index, get_by_id, edit, create, destroy, users_liked_posts, posts_liker_users };