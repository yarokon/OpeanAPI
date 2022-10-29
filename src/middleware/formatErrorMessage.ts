import { Middleware } from 'koa';

export const formatErrorMessage: Middleware = async (ctx, next) => {
  await next();

  if (!ctx.status.toString().startsWith('2') && !ctx.body) {
    ctx.body = { message: ctx.message };
  }
};
