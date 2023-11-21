import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Add this line

const firebaseConfig = {
  apiKey: "AIzaSyDpAMPD4xT63A1k_LspQLo-fjvrzCUqMtQ",
  authDomain: "abiding-weaver-405306.firebaseapp.com",
  projectId: "abiding-weaver-405306",
  storageBucket: "abiding-weaver-405306.appspot.com",
  messagingSenderId: "749341770439",
  appId: "1:749341770439:web:439d5251dc32b867b774e2",
//   measurementId: "G-XXV13BJJK2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Add this line
const googleProvider = new GoogleAuthProvider();

export {db, auth, googleProvider };