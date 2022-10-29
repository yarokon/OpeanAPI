import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import morgan from 'koa-morgan';
import dotenv from 'dotenv';
import cors from '@koa/cors';

import { formatErrorMessage, handleGlobalErrors } from './middleware/index.js';
import { router } from './routes/index.js';

dotenv.config();
const { PORT } = process.env;

const app = new Koa();

app.use(formatErrorMessage);
app.use(handleGlobalErrors);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());
app.use(router());

app.listen(PORT, () => {
  console.log(`🟢 Server is running on port: ${PORT}`);
});
