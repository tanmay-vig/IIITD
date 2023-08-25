import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

import './css-files/LoginPage.css'


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <> <br />
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      /> <br />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <button onClick={signIn}> Sign In</button>
      <br />
      <button onClick={signInWithGoogle}> Sign In With Google</button>
      <br />
      <button onClick={logout}> Logout </button>
    </>
  );
}
