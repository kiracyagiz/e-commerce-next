import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase"; 

const AddProductModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddItem = async () => {
    try {
      const itemData = {
        title,
        category,
        price,
        image,
        desc
      };

      await addDoc(collection(db, "items"), itemData);
      onClose()

      console.log("Item added successfully!");
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white w-96 rounded shadow-lg z-50 overflow-y-auto flex flex-col p-8 space-y-4 relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
         
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold">Add a New Product</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded placeholder-gray-400"
              type="text"
              placeholder="Title"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded placeholder-gray-400"
              type="number"
              placeholder="Price"
            />
                        <input
              onChange={(e) => setDesc(e.target.value)}
              className="w-full p-2 border rounded placeholder-gray-400"
              type="text"
              placeholder="Desc"
            />
            
            <input
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded placeholder-gray-400"
              type="text"
              placeholder="Category"
            />
            <input
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 border rounded placeholder-gray-400"
              type="text"
              placeholder="Image URL"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductModal;
