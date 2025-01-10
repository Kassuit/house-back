const { Post } = require("../models")
const helpers = require("./helpers_controller.js")

async function index(ctx) {
    ctx.body = await Post.findAll()
}

async function get_by_id(ctx) {
    const { id } = ctx.params;
    const post = await Post.findByPk(id);
    if (!post) return helpers.error404();
    ctx.body = post;
}

async function edit(ctx) {
    const { id } = ctx.params;
    const { post } = ctx.request.body;
    const post_record = await Post.findByPk(id);
    if (!post_record) return helpers.error404();
    await post_record.update(post)
    ctx.body = post_record;
}

async function create(ctx) {
    const { post } = ctx.request.body;
    const post_record = await Post.create(post);
    ctx.body = post_record;
}

async function destroy(ctx) {
    const { id } = ctx.params;
    const post_record = await Post.findByPk(id);
    if (!post_record) return helpers.error404();
    await post_record.destroy();
    ctx.status = 204;
}

module.exports = { index, get_by_id, edit, create, destroy }