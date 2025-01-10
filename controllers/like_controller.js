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

module.exports = { index, get_by_id, edit, create, destroy };