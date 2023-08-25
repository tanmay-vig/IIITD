import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";


import pic2 from '../assets/avanti.png'

import './css-files/Home.css'

export default function Home() {
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
    <>
      <br /> <br /> <br /> 
    <div className="flex justify-center">
      <div className="flex flex-col mx-20 text-center ">
        <br /> <br />
        <div className="text-white font-bold text-3xl">SIGN IN</div> <br />
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
        /> <br />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        /> <br />
      <button onClick={signIn} className="btn"> Sign In</button>
      <br />
      <button onClick={signInWithGoogle} className="btn"> Sign In Google
      </button>
      <br />
      <button onClick={logout} className="btn"> Logout </button>
        </div>
        <img src={pic2} alt="avanti" height={100} width={700} />
        </div>
    </>
  )
}
