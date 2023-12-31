"use client"

import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'



const Navbar = () => {



    let Links =[
      {name:"HOME",link:"/"},
      {name:"ABOUT",link:"/about"},
      {name:"PRODUCT",link:"/products"},
      {name:"CONTACT",link:"/contact"},
      {name: 'LOGIN',link: '/login'}
    
    ];
    let [open,setOpen]=useState(false);




  return (
    <div className=' w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800'>
        <Link href={'/'}>LOGO</Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <AiOutlineMenu size={20} name={open ? 'close' : 'menu'}/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 md:my-0 my-7'>
              <Link href={link.link}><p className='text-gray-800 text-sm md:text-md hover:text-gray-400 duration-500'>{link.name}</p></Link>
            </li>
          ))
        }
       
      </ul>
      </div>
    </div>
  )
}

export default Navbar