import Link from "next/link";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Navbar = () => {
  const items = [
    {
      text: "HOME",
      to: "/",
    },
    {
      text: "ABOUT",
      to: "/about",
    },
    {
      text: "PRODUCTS",
      to: "/products",
    },
    {
      text: "CONTACT",
      to: "/contact",
    },
  ];

  return (
    <div className="flex justify-between md:justify-around p-8 mx-auto">
      <div>LOGO</div>
      <div className="md:flex gap-x-8 mx-auto hidden  ">
        {items.map((dt, i) => (
          <Link href={dt.to}>
            <p key={i} className="hover:text-blue-500 cursor-pointer">
              {dt.text}
            </p>
          </Link>
        ))}
      </div>
      <div className="block md:hidden">
        <AiOutlineMenu />
      </div>
      <div className="hidden md:flex gap-x-8 ">
        <AiOutlineInstagram
          size={25}
          className="hover:text-blue-500 cursor-pointer"
        />
        <AiOutlineLinkedin
          size={25}
          className="hover:text-blue-500 cursor-pointer"
        />
        <AiFillTwitterSquare
          size={25}
          className="hover:text-blue-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
