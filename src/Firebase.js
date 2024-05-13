import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlaJdYup5qM3SPhUPMJWUbDT7UTSHOHvw",
  authDomain: "pasosdelsureste.firebaseapp.com",
  projectId: "pasosdelsureste",
  storageBucket: "pasosdelsureste.appspot.com",
  messagingSenderId: "807996997180",
  appId: "1:807996997180:web:ebcc7bb3f20b3c80658d39"
};

export const app = initializeApp(firebaseConfig);