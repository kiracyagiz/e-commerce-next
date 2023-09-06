// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq1-xlMwphu_AZxrwy0VX9OcqGRasjTRc",
  authDomain: "e-commerce-a66e4.firebaseapp.com",
  projectId: "e-commerce-a66e4",
  storageBucket: "e-commerce-a66e4.appspot.com",
  messagingSenderId: "756068697316",
  appId: "1:756068697316:web:7e5b749296a84f1394d8f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)