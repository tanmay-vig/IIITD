import { auth, googleProvider } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import pic2 from "../assets/avanti.png";

import "./css-files/Home.css";

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
    const navigate = useNavigate();
    return (
        <>
            <br /> <br /> <br />
            <div className="flex justify-center">
                <div className="flex flex-col mx-20 text-center ">
                    <br /> <br />
                    <form
                        onSubmit={() => {
                            navigate("/details");
                        }}
                    >
                        <div className="text-white font-bold text-3xl">
                            SIGN IN
                        </div>{" "}
                        <br />
                        <input
                            placeholder="Enter the Email"
                            className=" px-7"
                            onChange={(e) => setEmail(e.target.value)}
                        />{" "}
                        <br />
                        <input
                            placeholder="Enter the Password"
                            className=" px-7"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />{" "}
                        <br />
                        <button onClick={signIn} className=" bg-blue-700" type="submit">
                            {" "}
                            Sign In
                        </button>
                        <br />

                        <button onClick={signInWithGoogle} className=" bg-blue-700" type="submit">
                            {" "}
                            Sign In Google
                        </button>
                        <br />
                        <button onClick={logout} className=" bg-blue-700" type="submit">
                            {" "}
                            Logout{" "}
                        </button>
                    </form>
                </div>
                <img src={pic2} alt="avanti" height={100} width={700} />
            </div>
        </>
    );
}
