import Router from 'koa-router';

const healthRouter = new Router({ prefix: '/health' });

healthRouter.get('/', async (ctx) => {
  ctx.status = 200;
});

export { healthRouter };
