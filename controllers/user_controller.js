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

module.exports = { index, get_by_id, edit, create, destroy }