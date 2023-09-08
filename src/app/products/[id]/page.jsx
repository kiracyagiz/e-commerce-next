"use client"

import React, { useEffect, useState } from "react";
import { db } from '@component/app/firebase'
import { doc,getDoc } from 'firebase/firestore'
import { updateDoc } from "firebase/firestore";
import Navbar from "@component/app/components/Navbar";

const ProductId = ({params}) => {
    const [productData, setProductData] = useState(null);

     const id = params.id
     useEffect(() => {
        const fetchData = async () => {
          try {
            const itemRef = doc(db, "items", id);
            const itemDoc = await getDoc(itemRef);
    
            if (itemDoc.exists()) {
              setProductData(itemDoc.data());
            } else {
              console.log("Product is not found");
            }
          } catch (error) {
            console.error("Firebase request has a mistake:", error);
          }
        };
    
        fetchData(); 
      }, [id]);
     

  return (
    <>
    <Navbar/>
    <div className=" min-h-full">
    {productData ? (
      <div className="flex flex-col md:flex-row gap-x-12 justify-between gap-y-8 p-12 mt-12">
         <div className="flex flex-col gap-y-8">
            <img src={productData.image} className="md:w-1/2" alt="" />
            <p className="text-3xl "> {productData.title}</p>
         </div>
         <div className="md:w-1/2 flex flex-col gap-y-8">
            <p className="text-lg">{productData.desc}</p>
            <p className=" text-3xl">${productData.price}</p>
            <button className="py-2  bg-blue-400 text-white max-w-xs">BUY</button>
         </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div> </>
  )
}

export default ProductId