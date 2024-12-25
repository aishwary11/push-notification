import bodyParser from 'body-parser';
import type { Express, Request, Response } from 'express';
import express from 'express';
import queue from './utils/queue';

const app: Express = express();
app.use(bodyParser.json());

app.post('/send-notification', (req: Request, res: Response) => {
  const { token, notification } = req.body;
  if (!token || !notification) {
    return res.status(400).send('Token and notification are required.');
  }
  queue.add({ token, notification });
  res.status(200).send('Notification job added to the queue.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
