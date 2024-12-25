import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: '',
    privateKey: '',
    projectId: '',
  }),
});

const messaging = admin.messaging();
export default messaging;
