const { User } = require("../models")
const helpers = require("./helpers_controller.js")

async function index(ctx) {
    ctx.body = await User.findAll()
}

async function get_by_id(ctx) {
    const { id } = ctx.params;
    const user = await User.findByPk(id);
    if (!user) return helpers.error404();
    ctx.body = user;
}

async function edit(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.request.body;
    const user_record = await User.findByPk(id);
    if (!user_record) return helpers.error404();
    await user_record.update(user)
    ctx.body = user_record;
}

async function create(ctx) {
    const { user } = ctx.request.body;
    const user_record = await User.create(user);
    ctx.body = user_record;
}

async function destroy(ctx) {
    const { id } = ctx.params;
    const user_record = await User.findByPk(id);
    if (!user_record) return helpers.error404();
    await user_record.destroy();
    ctx.status = 204;
}

// Specific Behavior
async function liked_posts(ctx) {
    const { id } = ctx.params;
    const { detail } = ctx.query;
    const detailedName = detail === 'true' ? 'post_detail' : 'post'
    const posts_record = await User.findByPk(id, { include: [detailedName] })
    if (!posts_record) return helpers.error404();
    ctx.body = posts_record;
}

async function follower(ctx) {
    const { id } = ctx.params;
    const { detail } = ctx.query;
    const detailedName = detail === 'true' ? 'follower' : 'follower_detail'
    const follower_record = await User.findByPk(id, { include: [detailedName] })
    if (!follower_record) return helpers.error404();
    ctx.body = follower_record;
}

async function followee(ctx) {
    const { id } = ctx.params;
    const { detail } = ctx.query;
    const detailedName = detail === 'true' ? 'followee' : 'followee_detail'
    const followee_record = await User.findByPk(id, { include: [detailedName] })
    if (!followee_record) return helpers.error404();
    ctx.body = followee_record;
}

module.exports = { index, get_by_id, edit, create, destroy, liked_posts, follower, followee }