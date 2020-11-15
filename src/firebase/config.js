import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAvdoCmjDRTICNTQj07Ngjo8EPGslw2XTw',
  authDomain: 'hackathon2-10e31.firebaseapp.com',
  databaseURL: 'https://hackathon2-10e31.firebaseio.com',
  projectId: 'hackathon2-10e31',
  storageBucket: 'hackathon2-10e31.appspot.com',
  messagingSenderId: '1023561491940',
  appId: '1:1023561491940:web:ed3d51e7957711350f53f1'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Auth = firebase.auth();
const db = firebase.firestore();

export { Auth, db };
