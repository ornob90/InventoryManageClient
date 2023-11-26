import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDCHvwX8Pi7NwASzRc8rVpA-9blaF68Gkw",
  authDomain: "inventorymanage-48123.firebaseapp.com",
  projectId: "inventorymanage-48123",
  storageBucket: "inventorymanage-48123.appspot.com",
  messagingSenderId: "239337235385",
  appId: "1:239337235385:web:f46d0b213831c37e2b8c68",
};

// console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default auth;
