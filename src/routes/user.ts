import Router from 'koa-router';

const userRouter = new Router({ prefix: '/user' });

userRouter.get('/', (ctx) => {
  ctx.body = [{ name: 'Yaroslav' }];
});

userRouter.post('/', (ctx) => {
  ctx.body = ctx.request.body;
});

export { userRouter };
