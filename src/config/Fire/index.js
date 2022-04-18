// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
require('firebase/auth');
import {getAuth} from 'firebase/auth';

// import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCl3fWuzuQjf0cj9ACL7UF8Rc0PZrcdgj0',
  authDomain: 'holadoc0410.firebaseapp.com',
  projectId: 'holadoc0410',
  storageBucket: 'holadoc0410.appspot.com',
  messagingSenderId: '305529445728',
  appId: '1:305529445728:web:340666d3ca44c889d9d205',
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
const auth = getAuth(Fire);
// const Fire = firebase;
export default {Fire, auth};
