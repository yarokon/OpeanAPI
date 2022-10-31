import Router from 'koa-router';

const healthRouter = new Router({ prefix: '/health' });

healthRouter.get('/', (ctx) => {
  ctx.status = 200;
});

export { healthRouter };
