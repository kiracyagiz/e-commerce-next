"use client"
import firebaseConfig from "../firebase"; 
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth'
const Dashboard = () => {
    const auth = getAuth();
    const[user,loading] = useAuthState(auth)
    const router = useRouter();


    if (!user) {
        router.replace('/login'); 
        return null; 
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard