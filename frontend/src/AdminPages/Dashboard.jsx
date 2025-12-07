import React, { useEffect } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import image from "../assets/img/image.png"
import { useDispatch, useSelector } from "react-redux"
import { AiFillProduct } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { GetProductAPI } from '../Features/ProductFeature/productSlice';
import { GetAllOrdersAPICALL } from '../Features/OrdersFeature/OrderSlice';
function Dashboard() {
  const data = [
    { name: 'Jan', pv: 2400, uv: 1400 },
    { name: 'Feb', pv: 2210, uv: 1500 },
    { name: 'Mar', pv: 2290, uv: 1800 },
    { name: 'Apr', pv: 2000, uv: 1700 },
    { name: 'May', pv: 2180, uv: 1900 },
    { name: 'Jun', pv: 2500, uv: 2100 },
    { name: 'Jul', pv: 2600, uv: 2200 },
  ];

  const { user } = useSelector((state) => state.auth)
  const { product } = useSelector((state) => state.products)
  const { orders } = useSelector((state) => state.orders)
  const dispatch = useDispatch()
  console.log(product)
  useEffect(() => {
    dispatch(GetProductAPI())
    dispatch(GetAllOrdersAPICALL())
   

  }, [dispatch])
  const dashboardCard = [
    {
      title: "Total Product",
      icons: AiFillProduct,
      digit: product?.count,
    },
    {
      title: "Total Orders",
      icons: FaTruck,
      digit: orders?.length,
    },
    {
      title: "Total Users",
      icons: FaUserFriends,
      digit: user?.length || 10,
    },
  ]
  return (
    <div>
      <h2 className='text-lg my-2 uppercase text-shadow-2xs font-semibold'>Dasboard Analysis</h2>

      <div className='w-full flex flex-col justify-center items-center  p-2 bg-gray-100'>
        <img src={image} alt="" className='size-25 rounded-full' />
        <h2 className='text-2xl text-shadow-2xs font-semibold uppercase'>{user?.name}</h2>
        <span className='text-shadow-2xs'>{user?.email}</span>
        <span className='text-red-500 font-semibold'>admin</span>
        <div>
          <button className='border border-gray-700 p-2 text-sm cursor-pointer'>  Check profile</button>
          <button className='bg-black p-2 text-sm mx-2 text-white cursor-pointer'>Profile Settings</button>
        </div>
      </div><br />

      <div className='flex gap-10 my-5 flex-wrap'>
        {
          dashboardCard?.map((item) => (
            <div className='w-70 h-25 border border-green-300 bg-white rounded shadow-md flex justify-between p-3'>
              <item.icons size={40} color='' />
              <div>
                <h2 className='font-semibold text-shadow-2xs'>{item.title}</h2>
                <span className='text-2xl text-shadow-2xs'>{item?.digit}</span>
              </div>
            </div>
          ))
        }


      </div>
      <div className='w-full h-100'>
        <BarChart
          style={{ width: '100%', maxWidth: '90%', maxHeight: '40vh', aspectRatio: 1.618 }}
          responsive
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </div>

    </div>
  )
}

export default Dashboard