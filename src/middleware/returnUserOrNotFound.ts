import { Middleware } from 'koa';
import { Types } from 'mongoose';

export const returnUserOrNotFound: Middleware = async (ctx, next) => {
  if (Types.ObjectId.isValid(ctx['params']['id'])) {
    await next();

    const user = ctx.state['user'];

    if (user) {
      ctx.body = user;
    } else {
      ctx.status = 404;
    }
  } else {
    ctx.status = 404;
  }
};
