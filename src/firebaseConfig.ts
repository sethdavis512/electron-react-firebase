import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
});

export default app;
