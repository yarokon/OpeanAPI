import { Middleware } from 'koa';

export const handleGlobalErrors: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;

    if (err instanceof Error) {
      ctx.message = err.message;
    }
  }
};
