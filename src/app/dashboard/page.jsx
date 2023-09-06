"use client";
import firebaseConfig from "../firebase";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import RootLayout from "../layout";
import { db } from "../firebase";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Dashboard = () => {
  /*  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();*/

  /* if (!user) {
    router.replace("/login");
    return null;
  }*/
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem,setSelectedItem] = useState(null);

  const openModal = (dt) => {
    setIsModalOpen(true);
    setSelectedItem(dt)
  };

  const closeModal = (i) => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let namesArr = [];

      QuerySnapshot.forEach((doc) => {
        namesArr.push({ ...doc.data(), id: doc.id });
      });

      setItems(namesArr);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="p-8 flex flex-wrap gap-20 justify-center ">
        {loading ? (
          <div className="text-3xl">Loading...</div>
        ) : (
          items.map((dt, i) => (
            <div key={i} className="text-center shadow-xl p-4 rounded-xl">
              <p>{dt.title}</p>
              <img
                src={dt.image}
                className="w-[200px] h-[200px] object-contain"
                alt=""
              />
              <button onClick={() => openModal(dt)}>Open Modal</button>
              <Modal isOpen={isModalOpen} onClose={closeModal} selectedItem={selectedItem} /> 
            </div>
            
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;
