import React, { useState } from 'react'
import "../Signup/signup.style.css"
import Google from "../../assets/img/Google.png"
import { Link, useNavigate } from "react-router-dom"
import Blog from '../../component/Home/Blog'
import { useDispatch, useSelector } from "react-redux";
import DiscoverItem from '../../component/Home/DiscoverItem'
import Services from '../../component/Home/Services'

function Contact() {

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

  };

  return (
    <>
      <div className='registration'>
        <div className='flex justify-center flex-col items-center'>
          <h2 className='text-xl text-white font-semibold '>Any Help Contact Us</h2>
          <span className='text-gray-400'>Best place to buy Organic Products</span><br />
        </div>

        <div className='glass-card border-gray-200 lg:w-120 w-full flex justify-center'>
          <form
            className='w-full p-7 flex flex-col gap-5 text-gray-200'
            onSubmit={handleSubmit}   // <-- added
          >


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
              <label>Message</label> <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='border-b border-gray-500 w-full p-1.5 outline-none'
                placeholder='Enter Your Message'
              />
            </div>

            {/* <Link to="/login" className='text-gray-300 text-sm'>Already Have an Account? Login Now</Link> */}

            <div>
              <button
                type="submit"
                className='bg-white p-1.5 text-black w-20 cursor-pointer'
              >
                Send
              </button>
              <br /><br />
            </div>
          </form>
        </div>

      </div>
      <Services />
      <DiscoverItem />
      <Blog />
    </>
  );
}

export default Contact;
