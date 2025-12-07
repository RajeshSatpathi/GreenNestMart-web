import React, { useState } from 'react'
import { MdAddCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import logo from "../../src/assets/img/logo.png"
import { useDispatch, useSelector } from "react-redux"
import { UserLogoutAPI } from '../Features/AuthFeature/authSlice';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAccount, setisAccount] = useState(false);

  const { user } = useSelector((state) => state.auth)
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const totalQuantity = cart?.items?.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <div className="w-full">
      {/* ======= Top Nav (Hidden on Mobile) ======= */}
      <div className="hidden md:flex justify-between items-center w-full h-10 bg-[#F5F4F9] px-7">
        <div className="flex gap-2 items-center text-gray-600 text-sm">
          <h2 className="flex items-center gap-2">
            <MdAddCall size={18} /> 8967689621
          </h2>
          <h2 className="flex items-center gap-2">
            <FaWhatsapp size={18} /> 8967689621
          </h2>
        </div>
        <h3 className="text-gray-600 text-sm">
          Shop the Best Organic Products for a Healthier You.
        </h3>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>Best Offer</span>
          <span>Help?</span>
          <span>Track Orders</span>
        </div>
      </div>

      {/* ======= Main Nav ======= */}
      <div className="w-full  flex justify-around items-center  relative">
        {/* Logo */}
        <div className="">
          <img src={logo} alt="Logo" className="size-25 object-contain" />
        </div>

        {/* Search Bar (Hidden on very small screens) */}
        <div className="hidden md:flex gap-5 uppercase text-sm  ">
          <Link to="/" className="flex gap-2 items-center  font-semibold
           text-gray-800 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="flex gap-2 items-center font-semibold
           text-gray-800 hover:text-green-600">
            About
          </Link>
          <Link to="/product" className="flex gap-2 items-center font-semibold
           text-gray-800 hover:text-green-600">
            Products
          </Link>
          <Link to="/contact" className="flex gap-2 items-center font-semibold
           text-gray-800 hover:text-green-600">
            Contact
          </Link>

          <input
            type="text"
            placeholder="Search Products..."
            className="p-2 border border-gray-200  w-full focus:outline-none"
          />
          <CiSearch size={50} className='relative right-12' />

        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">

          <Link className="flex gap-2 items-center text-gray-500 hover:text-green-600"
            onClick={() => setisAccount(!isAccount)}
          >
            <CiUser size={22} /> Account
          </Link>
          {
            isAccount &&
            <div className='size-35 z-20  bg-white border border-gray-100  shadow-xl rounded absolute top-15 right-40 flex 
            flex-col gap-2 p-2'>
              {
                user ? (
                  <div>
                    <h2 className='text-sm'>{user?.name}</h2>
                    <span className='text-sm'>{user?.email}</span>
                    <button className='bg-black px-2 py-1 cursor-pointer
                      rounded text-xs text-green-500'
                      onClick={() => dispatch(UserLogoutAPI())}
                    >Logout</button>
                    <Link to="/myorder" onClick={() => setisAccount(!isAccount)}
                      className="flex gap-2 items-center text-sm font-semibold my-2 hover:text-green-600">
                      Myorder
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/registration" onClick={() => setisAccount(!isAccount)}
                      className="flex gap-2 items-center text-gray-500 hover:text-green-600">
                      Register
                    </Link>
                    <Link to="/login" onClick={() => setisAccount(!isAccount)}
                      className="flex gap-2 items-center text-gray-500 hover:text-green-600">
                      Login
                    </Link>

                  </div>
                )
              }

            </div>
          }

          <Link className="flex gap-2 items-center text-gray-500 hover:text-green-600">
            <CiHeart size={22} /> Wishlist
          </Link>
          <Link to="/cart" className="flex gap-2 items-center text-gray-500 hover:text-green-600">
            <IoCartOutline size={22} /> Cart <span className='relative bottom-2 right-1'>{totalQuantity}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* ======= Mobile Dropdown ======= */}
      {menuOpen && (
        <div
          className={`
      fixed top-0 right-0 h-full w-76 bg-gray-800 z-50
      transform transition-transform duration-300 ease-in-out
      ${menuOpen ? "translate-x-0" : "translate-x-full"}
    `}
        >
          <div className="flex flex-col  text-gray-700 px-5 py-4 space-y-3">

            <input
              type="text"
              placeholder="Search Product..."
              className="p-2 border border-gray-400 text-white rounded-md w-full focus:outline-none"
            />

            <Link to="/" className="flex gap-2 items-center text-gray-300 hover:text-green-600" onClick={() => setMenuOpen(false)}>
              <CiUser size={22} /> Home
            </Link>

            <Link to="/product" className="flex gap-2 items-center text-gray-300 hover:text-green-600" onClick={() => setMenuOpen(false)}>
              <CiUser size={22} /> Products
            </Link>

            <Link className="flex gap-2 items-center text-gray-300 hover:text-green-600" onClick={() => setMenuOpen(false)}>
              <CiUser size={22} /> Blog
            </Link>

            <Link className="flex gap-2 items-center text-gray-300 hover:text-green-600" onClick={() => setMenuOpen(false)}>
              <CiUser size={22} /> Account
            </Link>

            <Link className="flex gap-2 items-center text-gray-300 hover:text-green-600" onClick={() => setMenuOpen(false)}>
              <CiHeart size={22} /> My Orders
            </Link>

            <Link to="/cart" className="flex gap-2 items-center text-gray-300 hover:text-green-600" onClick={() => setMenuOpen(false)}>
              <IoCartOutline size={22} /> Cart
            </Link>

          </div>
        </div>
      )}

    </div>
  );
}

export default Navbar;
