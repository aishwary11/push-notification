import Queue from 'bull';
import messaging from './firebase';
const queue = new Queue('push-notifications', {
  redis: { host: 'localhost', port: 6379 },
});

queue.process(5, async job => {
  const { token, notification } = job.data;
  const message = {
    notification,
    token,
  };
  try {
    await messaging.send(message);
    console.log(`Notification sent successfully to user with token: ${token}`);
  } catch (error) {
    console.error(`Error sending notification: ${error}`);
  }
});

export default queue;
