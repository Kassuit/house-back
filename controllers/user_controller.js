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
    return
}

async function create(ctx) {
    return
}

async function destroy(ctx) {
    return
}

module.exports = { index, get_by_id, edit, create, destroy }