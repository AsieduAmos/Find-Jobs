import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRoXPYbDbiABmJ4A9_ahlOgrMPRXowKEs",
  authDomain: "find-job-1cde7.firebaseapp.com",
  projectId: "find-job-1cde7",
  storageBucket: "find-job-1cde7.firebasestorage.app",
  messagingSenderId: "356062288043",
  appId: "1:356062288043:web:7b7331620acb4906853fee",
  measurementId: "G-20JFPTP130"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);