// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDwDAk9KJMo2BbbqTujOH7ayS_5khl_Tg",
  authDomain: "jafm-4d4a5.firebaseapp.com",
  projectId: "jafm-4d4a5",
  storageBucket: "jafm-4d4a5.appspot.com",
  messagingSenderId: "721670691731",
  appId: "1:721670691731:web:8147fd76e67829fe2f6666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});
const db = getFirestore(app);

export {auth, db};