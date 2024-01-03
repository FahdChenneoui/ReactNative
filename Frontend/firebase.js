// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5fkFkw81NS0cfgnACwvz0MGmfE506MP0",
  authDomain: "reactnative-750c0.firebaseapp.com",
  projectId: "reactnative-750c0",
  storageBucket: "reactnative-750c0.appspot.com",
  messagingSenderId: "595512526430",
  appId: "1:595512526430:web:1ca23bc238acef960356cf",
  measurementId: "G-86XP3P68EC"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };