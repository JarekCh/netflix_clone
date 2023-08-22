import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { config } from './utils/shared/types';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  projectId: 'netflix-clone-45335',

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

export default app;
