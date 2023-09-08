"use client";

import { db } from "../firebase";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let itemArr = [];

      QuerySnapshot.forEach((doc) => {
        itemArr.push({ ...doc.data(), id: doc.id });
      });

      setItems(itemArr);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
    <Navbar/>
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
            <Link href={`/products/${dt.id}`}>
              <div className="bg-blue-400 text-white px-2 py-1 rounded mt-6">
                Buy Product
              </div>
            </Link>{" "}
          </div>
        ))
      )}
    </div></>
  );
};

export default Products;
