import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAANS7H5bobXJhP-ilSTGJ6Iv7xPOBGg1g",
  authDomain: "passionproje.firebaseapp.com",
  databaseURL:
    "https://passionproje-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "passionproje",
  storageBucket: "passionproje.appspot.com",
  messagingSenderId: "866575593986",
  appId: "1:866575593986:web:10f1a3f8e96eaee999ed1b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
