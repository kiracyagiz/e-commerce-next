import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from "../firebase";

const Modal = ({ isOpen, onClose, selectedItem }) => {
  if (!isOpen) return null;
  const id = selectedItem?.id;

  const [productData, setProductData] = useState(null);
  const [title, setTitle] = useState(selectedItem.title || null);
  const [category, setCategory] = useState(selectedItem.category || null);
  const [price, setPrice] = useState(selectedItem.price || null);
  const [image, setImage] = useState(selectedItem.image || null);
  const [desc, setDesc] = useState(selectedItem.desc || null);


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

  const handleUpdate = async () => {
    try {
      const itemRef = doc(db, 'items', id);

      const updatedData = {
        title,
        category,
        price,
        image,
        desc
      };
      await updateDoc(itemRef, updatedData);
      onClose();

    } catch (error) {
      console.error("Data error:", error);
    }
  }

  const handleDestroy = async () => {
    try {
      const itemRef = doc(db, 'items', id);
      await deleteDoc(itemRef);
      onClose()

    } catch (error) {
      console.error('Deleted errors:', error);

    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-3/4 max-w-md">
        {productData ? (
          <div className="flex flex-col gap-4">
            <button onClick={onClose} className="self-end text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <input type="text" className="border border-gray-300 rounded-md p-2" value={title ? title : ''} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" className="border border-gray-300 rounded-md p-2" value={category ? category : ''} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" className="border border-gray-300 rounded-md p-2" value={price ? price : ''} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" className="border border-gray-300 rounded-md p-2" value={image ? image : ''} onChange={(e) => setImage(e.target.value)} />
            <input type="text" className="border border-gray-300 rounded-md p-2" value={desc ? desc : ''} onChange={(e) => setDesc(e.target.value)} />


            <div className="flex gap-4">
              <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                UPDATE
              </button>
              <button onClick={handleDestroy} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
                DESTROY
              </button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
