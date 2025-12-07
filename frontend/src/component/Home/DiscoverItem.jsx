import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductAPI } from '../../Features/ProductFeature/productSlice';

function DiscoverItem() {
    const { product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetProductAPI());
    }, [dispatch])
    return (
        <>
            <h2 className='mx-6 text-xl font-semibold my-3'>Discover <span className='text-green-800'>Items</span> </h2>
            <div className='flex flex-wrap gap-3 container mx-auto p-4'>
                {
                    product?.products?.map((item) => (
                        <h2 className=' bg-gray-100 border
                        flex item-center justify-center gap-3
                         border-gray-200 p-1.5 text-sm lg:w-60  w-[45%] rounded-3xl'>
                            <img src={item.images[0]}  className='size-8' alt="" />
                            {item.title.slice(0, 25)}</h2>
                    ))
                }
            </div>
        </>

    )
}

export default DiscoverItem