
import { SiAnalogue } from "react-icons/si";
import { SiSimpleanalytics } from "react-icons/si";
import { FaOpencart } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdSettingsSuggest } from "react-icons/md";
function AdminSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate()
  const sideMenu = [
    {
      id: 1,
      label: "Dashboard",
      Path: "/admin-dashboard",
      icon: <SiSimpleanalytics size={22}/>
    },
    {
      id: 2,
      label: "Product List",
      Path: "/admin-Product",
      icon: <FaOpencart size={22}/>
    },
    {
      id: 3,
      label: "Order ",
      Path: "/admin-orders",
      icon: <CiDeliveryTruck size={22}/>
    },
        {
      id: 4,
      label: "Setting ",
      Path: "/admin-Order",
      icon: <MdSettingsSuggest size={22}/>
    },
  ]

  return (
    <div className={`
        p-3  
        lg:w-60 md:w-40 w-[80%] 
        border border-gray-500
        h-screen 
         bg-gray-900
        fixed top-0 left-0 z-50 
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        
        md:relative md:translate-x-0 md:flex md:flex-col
      `}>

      <header className=' p-3 my-3 flex justify-center flex-col items-center h-20'>
        <button className="absolute top-2 left-60 md:hidden block" 
        onClick={() => setIsOpen(!isOpen)}><IoMdClose size={30} color="white"/></button>
        <div> <SiAnalogue size={40} color="pink" /></div>

        <h2 className='text-xl text-shadow-2xs text-gray-200'>GreenNestMart</h2>
        <span className='text-gray-400 text-shadow-2xs uppercase'>Admin Pannel</span>

      </header>
      <hr className='text-gray-500' />
      <br />
      {/* /// sidebar menu item /// */}
      <div className="flex flex-col gap-5">
        {
          sideMenu.map((item) => (
            <div className=" flex p-2 hover:bg-white hover:text-black rounded
             text-white gap-4 items-center border border-gray-700 h-10
             cursor-pointer
             " onClick={()=>navigate(item.Path)}>
              <div>{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default AdminSidebar