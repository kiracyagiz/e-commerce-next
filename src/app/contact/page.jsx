import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; 
import 'tailwindcss/tailwind.css'; 
import Navbar from '../components/Navbar';

const Contact = () => {

  return (
  <>
    <Navbar/>
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto mt-12 max-w-md ">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-4">
        If you have any questions or need assistance, please feel free to contact us using the information below:
      </p>

      <div className="flex items-center mb-4">
        <FiMail className="text-gray-600 text-xl mr-2" />
        <span className="text-lg font-semibold">Email:</span>
        <a href="mailto:example@example.com" className="text-blue-500 hover:underline ml-2">example@example.com</a>
      </div>

      <div className="flex items-center mb-4">
        <FiPhone className="text-gray-600 text-xl mr-2" />
        <span className="text-lg font-semibold">Phone:</span>
        <a href="tel:(123) 456-7890" className="text-blue-500 hover:underline ml-2">(123) 456-7890</a>
      </div>

      <div className="flex items-center">
        <FiMapPin className="text-gray-600 text-xl mr-2" />
        <span className="text-lg font-semibold">Address:</span>
        <p className="ml-2">123 Main Street, City, State 12345</p>
      </div>

    </div>
  </>
  );
}

export default Contact;
