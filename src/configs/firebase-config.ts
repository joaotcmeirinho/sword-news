import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCexXcmJeld4ZAaoXMN3eBVCPXWPRHW7ig",
  authDomain: "sword-authentication.firebaseapp.com",
  projectId: "sword-authentication",
  storageBucket: "sword-authentication.appspot.com",
  messagingSenderId: "439971011733",
  appId: "1:439971011733:web:fdc177f203e2457c9bcf9c",
  measurementId: "G-TCET0KT384",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
