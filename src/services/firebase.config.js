// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLgnCW0KjniqNhYU_TSa0p_pG7fusLdWY",
  authDomain: "adventureaxis-36db7.firebaseapp.com",
  projectId: "adventureaxis-36db7",
  storageBucket: "adventureaxis-36db7.appspot.com",
  messagingSenderId: "477622080845",
  appId: "1:477622080845:web:34361129050d6e820e5304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;