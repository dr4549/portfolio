import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfmGior6rnmqPtLrn0NvtTA7kvNYKOA20",
  authDomain: "portfolio-aa1.firebaseapp.com",
  projectId: "portfolio-aa1",
  storageBucket: "portfolio-aa1.appspot.com",
  messagingSenderId: "613457178679",
  appId: "1:613457178679:web:d08d43a5cd03a0c314cfb2",
  measurementId: "G-5DG13GDCDV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
