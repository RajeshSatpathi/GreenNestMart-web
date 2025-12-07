import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

function AdminHeader({isOpen,setIsOpen}) {
  return (
    <div>
      <div className='w-full p-3 px-5 flex justify-between border border-gray-200'>
        <button className='w-20 lg:hidden sm:flex ' onClick={()=>setIsOpen(!isOpen)}>
          <CiMenuFries size={20} />
        </button>
        <div className='flex flex-1 justify-end'>
          <button className='bg-gray-900 rounded w-15 flex justify-center p-1.5 cursor-pointer'>
            <IoIosLogOut size={25} color='white'/>
          </button>

        </div>
      </div>
    </div>
  )
}

export default AdminHeader