import * as firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/firebase-firestore'


// Initialize Firebase
export const app = firebase.initializeApp( {
    apiKey: "AIzaSyC4H8f4gbd8DH-SxOxPiy670ccoRoy6LLI",
    authDomain: "layyourhead-93416.firebaseapp.com",
    databaseURL: "https://layyourhead-93416.firebaseio.com",
    projectId: "layyourhead-93416",
    storageBucket: "layyourhead-93416.appspot.com",
    messagingSenderId: "761839702945",
    appId: "1:761839702945:web:664dc0310a8292f70b31e0"
  });

export const auth = firebase.auth()
export const db = firebase.firestore()
