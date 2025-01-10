const { Follower } = require("../models")
const helpers = require("./helpers_controller.js")

async function index(ctx) {
  ctx.body = await Follower.findAll()
}

async function get_by_id(ctx) {
  const { id } = ctx.params;
  const follower = await Follower.findByPk(id);
  if (!follower) return helpers.error404();
  ctx.body = follower;
}

async function edit(ctx) {
  const { id } = ctx.params;
  const { follower } = ctx.request.body;
  const follower_record = await Follower.findByPk(id);
  if (!follower_record) return helpers.error404();
  await follower_record.update(follower)
  ctx.body = follower_record;
}

async function create(ctx) {
  const { follower } = ctx.request.body;
  const follower_record = await Follower.create(follower);
  ctx.body = follower_record;
}

async function destroy(ctx) {
  const { id } = ctx.params;
  const follower_record = await Follower.findByPk(id);
  if (!follower_record) return helpers.error404();
  await follower_record.destroy();
  ctx.status = 204;
}

module.exports = { index, get_by_id, edit, create, destroy }