// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_50gaPzU7Z1y6dvUiDSsG05hEhlmMRbE",
  authDomain: "zneakerz-986a7.firebaseapp.com",
  projectId: "zneakerz-986a7",
  storageBucket: "zneakerz-986a7.appspot.com",
  messagingSenderId: "540741069153",
  appId: "1:540741069153:web:48c345397e6178fa953d20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)