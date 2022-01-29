import * as firebase from 'firebase';
import '@firebase/auth';
 
const firebaseConfig = {
    apiKey: "AIzaSyAw5PBqCs5_3-OeUserwS26JLqMTYh6XYA",
    authDomain: "book-9db25.firebaseapp.com",
    projectId: "book-9db25",
    storageBucket: "book-9db25.appspot.com",
    messagingSenderId: "811764341567",
    appId: "1:811764341567:web:7c64f6ec22bd5d27c8918a"
  };
   
  firebase.initializeApp(firebaseConfig);
  export default firebase;
 