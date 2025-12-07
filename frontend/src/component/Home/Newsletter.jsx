import React from 'react'
import "./home.style.css"
import { LuSend } from "react-icons/lu";
function Newsletter() {
    return (
        <div className='newsletter container mx-auto mt-15 flex flex-col gap-1 justify-center items-center p-5'>
            <h2 className='text-2xl text-white font-semibold'>Subscribe for join Us</h2>
            <span className='text-gray-400'>Get in touch and get update</span>
            <form action="" className='bg-white rounded md:w-98 p-1 flex gap-1'>
                <input type="text" className='p-1.5 md:w-77  ' />
                <button className=' flex justify-center items-center gap-2  bg-gray-800 text-white p-2 rounded text-sm'><LuSend />Send</button>
            </form>
        </div>
    )
}

export default Newsletter