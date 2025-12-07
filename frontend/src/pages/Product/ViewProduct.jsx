import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GetProductAPI } from '../../Features/ProductFeature/productSlice';
import { IoMdStar } from "react-icons/io";

import Blog from '../../component/Home/Blog';
import Services, { OurServices } from '../../component/Home/Services';
import RelatedProduct from '../../component/Product/RelatedProduct';
import { AddtoCartAPICALL } from '../../Features/CartFeatures/CartSlice';

function ViewProduct() {
    const { id } = useParams();
    const { product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [filterdProduct, setFilteredProduct] = useState(null);
    const [mainImg, setMainImg] = useState("");

    useEffect(() => {
        dispatch(GetProductAPI());
    }, [dispatch]);

    useEffect(() => {
        if (product?.products?.length) {
            const data = product.products.find((item) => item._id === id);
            setFilteredProduct(data);
            setMainImg(data?.images?.[0])
        }
    }, [product, id]);

    return (
        <div>
            <div className='container mx-auto  flex flex-wrap '>
                {/* //for image section  */}
                <div className=' lg:w-[50%] flex justify-between flex-wrap p-4'>
                    <div className='max-sm:flex '>
                        {
                            filterdProduct?.images?.map((img) => (
                                <img src={img} alt=""
                                    className='lg:size-30 size-25 border 
                                  border-gray-300 my-3
                                  cursor-pointer transform transition-transform duration-300 hover:scale-110'

                                    onClick={() => setMainImg(img)}
                                />
                            ))
                        }

                    </div>

                    <img src={mainImg}
                        className="xl:size-100 size-70 border border-gray-300
                  
                     " alt="" />
                </div>
                {/* // for description section  */}
                <div className=' lg:w-[50%] p-5'>
                    <h2 className='text-3xl'>{filterdProduct?.title}</h2>
                    <p className='flex justify-between'>
                        <span className='flex my-3'>
                            <IoMdStar color='#F5C857' size={25} />
                            <IoMdStar color='#F5C857' size={25} />
                            <IoMdStar color='#F5C857' size={25} />
                            <IoMdStar color='#F5C857' size={25} />
                        </span>
                    </p>
                    <p className='flex gap-5 '>
                        <p className='text-gray-600 text-lg font-semibold flex items-center    '>
                            <span className='mr-2'> M.R.P -  </span>
                            <span className=' line-through'>₹ {filterdProduct?.originalprice}</span>
                        </p>
                        <span className='text-gray-500 text-xl flex items-cente'>
                            ₹ {filterdProduct?.currentprice}
                        </span>
                    </p>
                    <p className='text-lg text-gray-500 my-2'>{filterdProduct?.desc}</p>
                    <p className='text-md font-semibold my-2'>Net Weight :-<span className='bg-green-400 px-5 py-1 rounded'>
                        {filterdProduct?.netweight}</span> </p>
                    <p className='text-md font-semibold my-2'>Best Seller :-<span className='text-purple-600'>
                        {filterdProduct?.bestseller === false ? "not available" : "yes"}</span> </p>



                    <button className='bg-gray-800 text-white px-3 py-2 
                    cursor-pointer hover:bg-gray-500
                     rounded my-4 w-30'
                        onClick={() => dispatch(AddtoCartAPICALL({ productId: id, quantity: 1 })).then((data) => {
                            alert(data.payload.message)
                        })
                        }>Add to Cart </button>
                    <div className='grid md:grid-cols-4 grid-cols-2  text-center'>
                        {OurServices?.map((item) => (
                            <div className='size-25 border my-2 border-gray-200 bg-gray-100 p-4 flex flex-col items-center gap-2 rounded-full'>
                                <img src={item.icons} className='size-5' alt="" />
                                <h3 className='text-black text-xs'>{item.name}</h3>


                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h2 className='text-center text-2xl  my-4'>Related Product</h2>
            <RelatedProduct filterdProduct={filterdProduct} />
            {/* <Services /> */}
            <Blog />
        </div>
    )
}

export default ViewProduct