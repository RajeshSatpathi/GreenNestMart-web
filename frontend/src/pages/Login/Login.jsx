import React, { useState } from 'react'
import Google from "../../assets/img/Google.png"
import { Link, useNavigate } from "react-router-dom"
import Blog from '../../component/Home/Blog'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { UserLoginAPI } from '../../Features/AuthFeature/authSlice';
import toast, { Toaster } from 'react-hot-toast';
function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // 👉 State for show/hide password
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(UserLoginAPI(formData)).then((data) => {
      toast(data.payload.message, {
        duration: 2000,
        position: "top-center",
        style: {
          color: "green"   // 🔥 Text color green
        }
      });
    })

    setFormData({
      email: "",
      password: ""
    })
  };

  return (
    <>
      <div className='registration'>
        <div className='flex justify-center flex-col items-center'>
          <h2 className='text-xl text-white font-semibold '>Customer Login </h2>
          <span className='text-gray-400'>Best place to buy Organic Products</span><br />
        </div>

        <div className='glass-card border-gray-200 lg:w-120 w-full flex justify-center'>
          <form onSubmit={handleSubmit}
            className='w-full p-7 flex flex-col gap-4 text-gray-200'>

            {/* Email Field */}
            <div>
              <label>Email</label><br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='border-b border-gray-400 w-full p-1.5 outline-none'
                placeholder='Enter Your Email'
              />
            </div>

            {/* Password Field with Toggle */}
            <div className="relative">
              <label>Password</label><br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='border-b border-gray-400 w-full p-1.5 outline-none pr-10'
                placeholder='Enter Your Password'
              />

              {/* Toggle Button */}
              <span
                className='absolute right-2 top-9 cursor-pointer text-sm text-gray-300'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </span>
            </div>
            <Link to="/forgot-password" className='text-green-300 text-sm'>
              forgot Password ?
            </Link>
            <Link to="/registration" className='text-gray-300 text-sm'>
              Don't Have an Account? Register Now
            </Link>

            <div>
              <button className='bg-white p-1.5 text-black w-20 cursor-pointer'>
                Login
              </button>
            </div>

          </form>
        </div>
        <Toaster />
      </div>

      <Blog />
    </>
  )
}

export default Login;
