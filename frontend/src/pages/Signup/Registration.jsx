import React, { useState } from 'react'
import "./signup.style.css"
import Google from "../../assets/img/Google.png"
import { Link, useNavigate } from "react-router-dom"
import Blog from '../../component/Home/Blog'
import { useDispatch, useSelector } from "react-redux";
import { UserRegistrationAPI } from '../../Features/AuthFeature/authSlice'
import toast, { Toaster } from 'react-hot-toast';
function Registration() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  // --------------------------
  // 1️⃣ Create State
  // --------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // --------------------------
  // 2️⃣ Handle Input Change
  // --------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // --------------------------
  // 3️⃣ Handle Submit
  // --------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Form Data:", formData);
    dispatch(UserRegistrationAPI(formData)).then((data) => {
      toast(data.payload.message, {
        duration: 2000,
        position: "top-center",
        style: {
          color: "green"   // 🔥 Text color green
        }
      });
      setFormData({
        name: "",
        email: "",
        password: ""
      });
      setTimeout(() => {
        navigate("/login")
      }, 1000);
      
    })
  };

  return (
    <>
      <div className='registration'>
        <div className='flex justify-center flex-col items-center'>
          <h2 className='text-xl text-white font-semibold '>Customer Registration</h2>
          <span className='text-gray-400'>Best place to buy Organic Products</span><br />
        </div>

        <div className='glass-card border-gray-200 lg:w-120 w-full flex justify-center'>
          <form
            className='w-full p-7 flex flex-col gap-5 text-gray-200'
            onSubmit={handleSubmit}   // <-- added
          >
            <button className='border hover:bg-white hover:text-black border-gray-700 
            p-2 flex justify-center gap-4 cursor-pointer' type="button">
              <img src={Google} className='size-7' alt="" />Sign in with Google
            </button>

            {/* Full Name */}
            <div>
              <label>Full Name</label> <br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='border-b border-gray-500 w-full p-1.5 outline-none'
                placeholder='Enter Your Name'
              />
            </div>

            {/* Email */}
            <div>
              <label>Email</label> <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='border-b border-gray-500 w-full p-1.5 outline-none'
                placeholder='Enter Your Email'
              />
            </div>

            {/* Password */}
            <div>
              <label>Password</label> <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='border-b border-gray-500 w-full p-1.5 outline-none'
                placeholder='Enter Your Password'
              />
            </div>

            <Link to="/login" className='text-gray-300 text-sm'>Already Have an Account? Login Now</Link>

            <div>
              <button
                type="submit"
                className='bg-white p-1.5 text-black w-20 cursor-pointer'
              >
                Register
              </button>
              <br /><br />
            </div>
          </form>
        </div>
        <Toaster />
      </div>

      <Blog />
    </>
  );
}

export default Registration;
