import React, { useState } from "react";

const Modal = ({ isOpen, onClose ,selectedItem }) => {

    const [title,setTitle] = useState(selectedItem)



  if (!isOpen) return null;


  function handler(e){
    setTitle(e.target.value)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      <div className=" bg-white rounded-lg p-8 shadow-lg w-3/4 h-[70vh]">
        <button className=" top-4 right-4" >
            <p onClick={onClose}>X</p>
            <div className="flex flex-col gap-y-8 mt-8">
            <input type="text"  placeholder={selectedItem.id} className="mx-4 placeholder:text-black" onChange={handler} />
            <input type="text"  placeholder={selectedItem.category} className="mx-4 placeholder:text-black" onChange={handler} />

            <input type="text"  placeholder={selectedItem.title} className="mx-4 placeholder:text-black" onChange={handler} />
            <input type="text"  placeholder={selectedItem.price} className="mx-4 placeholder:text-black" onChange={handler} />
            <input type="text"  placeholder={selectedItem.image} className="mx-4 placeholder:text-black" onChange={handler} />


            </div>
          
            <p></p>
        </button>

      </div>
    </div>
  );
};

export default Modal;
