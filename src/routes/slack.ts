import Router from 'koa-router';
import axios from 'axios';

const slackRouter = new Router({ prefix: '/slack' });

slackRouter.post('/', async (ctx) => {
  const SLACK_PROD_URL =
    'https://hooks.slack.com/services/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';

  const slackAdapter = (payload: unknown) => ({
    text: JSON.stringify(payload, null, 2),
  });

  const response = await axios.post(SLACK_PROD_URL, slackAdapter(ctx.request.body));

  ctx.body = response.data;
});

export { slackRouter };
