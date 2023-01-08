/**
 * @version: 1.0
 * @author: Aayush Prakash Budania <aayushbudania002@gmail.com>
 */

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVpNffWzHPPYVJ1EDcad095rGnj-IwW1k",
  authDomain: "springwoodassignment.firebaseapp.com",
  projectId: "springwoodassignment",
  storageBucket: "springwoodassignment.appspot.com",
  messagingSenderId: "294626259643",
  appId: "1:294626259643:web:ced3050b4dc9153bb5ef9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);