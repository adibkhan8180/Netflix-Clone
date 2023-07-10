import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFrjFpH0hFZwMxArJYdeMp4GcjRlPpLgA",
  authDomain: "react-netflix-clone-cee6f.firebaseapp.com",
  projectId: "react-netflix-clone-cee6f",
  storageBucket: "react-netflix-clone-cee6f.appspot.com",
  messagingSenderId: "807183924379",
  appId: "1:807183924379:web:429e2142391a33def9da3e",
  measurementId: "G-EQB4P0020Y"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);