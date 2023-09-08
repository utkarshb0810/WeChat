import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUMJQkynRaqhXDXFaJy_sBWwUgwOQUqkI",
  authDomain: "chatapp-4a70d.firebaseapp.com",
  projectId: "chatapp-4a70d",
  storageBucket: "chatapp-4a70d.appspot.com",
  messagingSenderId: "104244119945",
  appId: "1:104244119945:web:c1060097605ebd02cdb958",
  measurementId: "G-HJRZVVVM4V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
