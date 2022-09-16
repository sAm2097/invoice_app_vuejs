import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4B3YzZVIY07Bw5y_v8qCgeJglUVQPX_8",
    authDomain: "invoice-app-yt-cf037.firebaseapp.com",
    projectId: "invoice-app-yt-cf037",
    storageBucket: "invoice-app-yt-cf037.appspot.com",
    messagingSenderId: "816984758593",
    appId: "1:816984758593:web:f159f7bcc2f8cdb0cd69c0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();