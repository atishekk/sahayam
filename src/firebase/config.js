import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCj0UwlG8w_GYUFA3JjsCf-nmck9Ly7pNM',
  authDomain: 'hackathon-9f324.firebaseapp.com',
  databaseURL: 'https://hackathon-9f324.firebaseio.com',
  projectId: 'hackathon-9f324',
  storageBucket: 'hackathon-9f324.appspot.com',
  messagingSenderId: '777529751920',
  appId: '1:777529751920:web:24ba576cd5b8b25b7e37b5'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Auth = firebase.auth();

export { Auth };
