import combineRouters from 'koa-combine-routers';

import { userRouter } from './user.js';
import { healthRouter } from './health.js';

export const router = combineRouters(userRouter, healthRouter);
