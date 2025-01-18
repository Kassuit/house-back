const mime = async (ctx, next) => {
  await next();
  if (ctx.path.endsWith('.webp')) ctx.type = 'image/webp'
}

module.exports = mime;