import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpZfaCizins5-zrLfXNbJiVb2QNc3Rzaw',
  authDomain: 'chatgpt-messenger-yt-ss.firebaseapp.com',
  projectId: 'chatgpt-messenger-yt-ss',
  storageBucket: 'chatgpt-messenger-yt-ss.appspot.com',
  messagingSenderId: '482180283379',
  appId: '1:482180283379:web:36b2be33660bf8b00e3086',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
