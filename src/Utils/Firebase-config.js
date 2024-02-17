
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCnCN2cecp5VcKJdATNidHWykthZwGCqM4",
  authDomain: "netflix-clone-e68f8.firebaseapp.com",
  projectId: "netflix-clone-e68f8",
  storageBucket: "netflix-clone-e68f8.appspot.com",
  messagingSenderId: "669853971994",
  appId: "1:669853971994:web:459be604a8f7e7af0ac3a3",
  measurementId: "G-S4M84RYV77",
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

