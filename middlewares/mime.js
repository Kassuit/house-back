const mime = async (ctx, next) => {
  await next();
  if (ctx.path.endswith('.webp')) ctx.type = 'image/webp'
}

module.exports = mime;