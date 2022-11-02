import { Middleware } from 'koa';

export const isAuthorized: Middleware = async (ctx, next) => {
  const authorizationHeader = ctx.headers['authorization'];
  const { token } = authorizationHeader?.match(/^Bearer (?<token>.+)$/)?.groups || {};

  if (token === process.env['BEARER_TOKEN']) {
    await next();
  } else {
    ctx.status = 401;
  }
};
