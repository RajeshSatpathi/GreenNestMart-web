import React from 'react'
import pay1 from "../assets/img/pay-1.jpg"
import pay2 from "../assets/img/pay-2.jpg"
import pay3 from "../assets/img/pay-3.jpg"
import pay4 from "../assets/img/pay-4.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div className='w-full   mt-10 px-5 bg-black'>
      <br /><br />
      <div className='container mx-auto  flex justify-evenly flex-wrap '>
        <div className='lg:w-100 w-full'>
          <h2 className="text-2xl font-semibold text-white">
            <span className="text-green-500">Green</span>Nest<span className='text-red-700'>Mart</span>
          </h2>
          <p className='text-gray-400 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel aperiam facilis atque ullam pariatur.Nemo eligendi
            officiis exercitationem officia reprehenderit.</p><br />
          <span className='font-semibold text-lg text-white'>Download Our App</span>
          <div>

          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-md text-white font-semibold'>Category</h3><hr className='text-cyan-600 p-1 my-1' />
          <p className='text-gray-400'>Fruits</p>
          <p className='text-gray-400'>Bakery</p>
          <p className='text-gray-400'>Vagitables</p>
          <p className='text-gray-400'>Dairy & Milk</p>
          <p className='text-gray-400'>Snacks & Spices</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-md text-white font-semibold'>Userfull Links</h3><hr className='text-cyan-600 p-1 my-1' />
          <p className='text-gray-400'>Fruits</p>
          <p className='text-gray-400'>Bakery</p>
          <p className='text-gray-400'>Vagitables</p>
          <p className='text-gray-400'>Dairy & Milk</p>
          <p className='text-gray-400'>Snacks & Spices</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-md text-white font-semibold'>Our Contact</h3><hr className='text-cyan-600 p-1 my-1' />
          <p className='text-gray-400 flex gap-2 justify-center items-center'><IoLocationOutline size={22}/> Khatra ,Bankura ,West Bengal 722140</p>
          <p className='text-gray-400 flex gap-2  items-center'><FaWhatsapp size={22}/> 8967689621</p>

        </div>

      </div>
      <br />
      <hr className='text-gray-300 ' />
      <div className='container mx-auto flex justify-evenly mt-5 flex-wrap'>
        <div className='flex gap-4 mt-4'>
          <img src={pay1} alt="" className='w-15 h-10 rounded' />
            <img src={pay2} alt="" className='w-15 h-10 rounded' />
            <img src={pay3} alt="" className='w-15 h-10 rounded' />
            <img src={pay4} alt="" className='w-15 h-10 rounded' />
        </div>
        <div className='p-2 '>
          <input type="text" className='p-3 bg-white border-none  md:w-80 w-50' />
          <button className='bg-blue-900 text-white p-3 rounded'>SUBMIT</button>
        </div>
        <div>
          <p className='text-md text-gray-200'>Copyright © 2025 Power by Dev-R</p>

        </div>
      </div>
    </div>
  )
}

export default Footer