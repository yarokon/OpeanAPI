import combineRouters from 'koa-combine-routers';

import { userRouter } from './user.js';

export const router = combineRouters(userRouter);
