"use client"
import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../firebase"; 
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { useAuthState } from 'react-firebase-hooks/auth';
const auth = getAuth();

const Login = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard')
    } else {
      return;
    }
  }, [user])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Navbar />
      <div className="mx-auto justify-center items-center flex flex-col text-center mt-44 gap-y-8 shadow-2xl bg-blue-400 p-4 sm:p-12 px-4 sm:px-52  rounded w-full sm:w-fit">
        <h1 className="text-xl text-white">ADMIN</h1>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          className="placeholder:text-black outline-none px-4 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="placeholder:text-black outline-none px-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-white px-4 py-1">Log In</button>
      </div>
    </>
  );
};

export default Login;
