import React from 'react'
import { IoMdStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddtoCartAPICALL } from '../../Features/CartFeatures/CartSlice';
function ProductCard({ item }) {
    const dispatch = useDispatch();

    return (
        <div>
            <div key={item.id} className=' lg:w-60  w-70   rounded shadow '>
                <div className='w-full flex justify-center'>
                    <img src={item.images[0]} alt="productimg"
                        className='product-img size-30' />
                </div>
                <div className='my-2 p-2'>
                    <h2 className='text-green-700 uppercase text-sm flex justify-between'>
                        {item.category}  <span className='text-gray-700  font-semibold text-md'>{item.netweight}</span>
                    </h2>
                    <div className='h-10'>
                        <span className='text-gray-500 text-sm'>{item.title}</span>
                    </div>

                    <p className='flex justify-between'>
                        <span className='flex my-1'>
                            <IoMdStar color='#F5C857' />
                            <IoMdStar color='#F5C857' />
                            <IoMdStar color='#F5C857' />
                            <IoMdStar color='#F5C857' />
                        </span>
                    </p>
                    <p className='flex gap-3'>
                        <span className='text-gray-600 text-sm font-semibold flex items-center '>
                            <MdCurrencyRupee />{item.originalprice}
                        </span>
                        <span className='text-gray-500 text-sm flex items-center'>
                            <MdCurrencyRupee />{item.currentprice}
                        </span>
                    </p>
                    <div className='flex justify-between mt-2'>
                        <div className='flex gap-2 items-center'>
                            <Link to={`/product/details/${item._id}`} className='cursor-pointer'>
                                <IoEyeOutline size={22} color='gray' className='product-img' /></Link>
                            <button className='cursor-pointer'><CiHeart size={22} color='gray' /></button>
                        </div>
                        <button className='btn-cart' 
                        onClick={() => dispatch(AddtoCartAPICALL({ productId: item?._id, quantity: 1 })).then((data)=>{
                            alert(data.payload.message)
                        })
                        }>
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard