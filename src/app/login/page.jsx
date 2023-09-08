"use client"

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../firebase"; 
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard')
    } catch (error) {
      console.error("Mistake in the login process:", error);
      alert('asdsad')
    }
  };

  return (
   <>
    <div className="mx-auto justify-center items-center flex flex-col text-center mt-24 gap-y-8 shadow-2xl bg-blue-400 p-12 px-52 rounded w-fit">
      <h1 className="text-xl text-white">ADMIN</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        className=" placeholder:text-black outline-none px-4"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="placeholder:text-black outline-none px-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-white px-4 py-1">Log In</button>
    </div>
   </>
  );
};

export default Login;
