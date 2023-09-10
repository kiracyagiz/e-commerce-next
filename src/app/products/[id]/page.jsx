"use client";

import React, { useEffect, useState } from "react";
import { db } from "@component/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import Navbar from "@component/app/components/Navbar";
import { AiOutlineStar, AiOutlineLike } from "react-icons/ai";
import Star from "@component/app/components/Star";

const ProductId = ({ params }) => {
  const [productData, setProductData] = useState(null);
  const [comments, setComments] = useState([]);

  const id = params.id;
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

  useEffect(() => {
    if (productData) {
      setComments(productData.userComments);
    } else {
      console.log("yok");
    }
  }, [productData, comments]);

  return (
    <>
      <Navbar />
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
              <button className="py-2  bg-blue-400 text-white max-w-xs">
                BUY
              </button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="p-12  border-2 max-w-6xl mx-auto">
        <p className="text-center text-2xl font-bold">USER COMMENTS</p>
        {comments ? comments.map((dt, i) => (
          <div
            key={i}
            className="p-2 mt-8 md:p-4 flex gap-y-4  flex-col md:flex-row justify-between items-center"
          >
            <div>
              <img src={dt.image} className="rounded-full" alt="" />
              <p className="font-bold text-center">{dt.username}</p>
            </div>
            <p className={`text-xs md:text-sm md:text-left  text-center  md:max-w-2xl `}>{dt.comment}</p>

            <div className="flex gap-x-4">
              <div className="flex  items-center mt-4">
                <span className="hover:text-blue-500 cursor-pointer">
                  <AiOutlineLike size={20} />
                </span>
                {dt.like}
              </div>
              <div className="flex items-center gap-x-2  mt-4">
               <span className=" cursor-pointer items-center">
               <Star star={dt.star}/>
               </span>
                <p className="text-md">{dt.star}</p>
              </div>
            </div>
          </div>
        ))
       : 
       <div>There is no comment</div>
       }
      </div>
    </>
  );
};

export default ProductId;
