import React from 'react'
import "./home.style.css"
function FreshProduct() {
  return (
    <div className='FreshProductContainer container mx-auto mt-10 flex justify-end items-center p-5'>
        <div className='p-5 flex flex-col items-start gap-3'>
            <h2 className='text-3xl text-green-700 font-semibold'>Dairy & Bakery Product</h2>
            <span className='text-xl'>50% Offers Hurry Up </span>
            <button className='bg-black text-white text-sm p-1.5 cursor-pointer w-25'>Shop Now</button>
        </div>
    </div>
  )
}

export default FreshProduct