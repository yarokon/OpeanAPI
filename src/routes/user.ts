import Router from 'koa-router';

import { User } from '../models/user.js';
import { isAuthorized, returnUserOrNotFound } from '../middleware/index.js';

const userRouter = new Router({ prefix: '/user' });

userRouter.use(isAuthorized);

userRouter.post('/', async (ctx) => {
  ctx.body = await new User(ctx.request.body).save();
  ctx.status = 201;
});

userRouter.get('/', async (ctx) => {
  ctx.body = await User.find(ctx.query);
});

userRouter.get('/:id', returnUserOrNotFound, async (ctx) => {
  ctx.state.user = await User.findById(ctx.params['id']);
});

userRouter.patch('/:id', returnUserOrNotFound, async (ctx) => {
  ctx.state.user = await User.findByIdAndUpdate(ctx.params['id'], ctx.request.body, { new: true });
});

userRouter.delete('/:id', returnUserOrNotFound, async (ctx) => {
  ctx.state.user = await User.findByIdAndDelete(ctx.params['id']);
});

export { userRouter };
