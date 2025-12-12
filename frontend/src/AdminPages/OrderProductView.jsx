import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { changeOrderStatusByAdmin, GetAllOrdersAPICALL } from '../Features/OrdersFeature/OrderSlice';

function OrderProductView() {
    const { orders } = useSelector((state) => state.orders);
    const dispatch = useDispatch()
    const [filerData, setFilterData] = useState(null);

    const { id } = useParams()

    useEffect(() => {
        dispatch(GetAllOrdersAPICALL())
    }, [dispatch])

    useEffect(() => {
        if (orders?.length > 0) {
            const data = orders.find((order) => order._id === id);
            setFilterData(data);
            // console.log(data)
        }
    }, [orders, id]);

    //change order status code 
    const [status, setstatus] = useState("PENDING");

    const changeOrderStatus = () => {
        dispatch(changeOrderStatusByAdmin({ status, id })).
        then((data) => console.log(data))
    }

    return (
        <div className='my-2 container mx-auto'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold text-shadow-2xs my-2'>Ordered Product Details</h2>
                <h2 className='text-md font-semibold text-shadow-2xs my-2'>Ordered Id :- {id}</h2><br />
                <div>
                    <select name="" id="" className='border p-1.5 border-gray-300 mx-2'
                        value={status}
                        onChange={(e) => setstatus(e.target.value)}
                    >
                        <option value="PENDING">PENDING</option>
                        <option value="PACKAGING">PACKAGING</option>
                        <option value="OUT FOR DELIVERY">OUT FOR DELIVERY</option>

                    </select>
                    <button
                        onClick={changeOrderStatus}
                        className='bg-black text-white p-1.5 cursor-pointer'>Change Order Status </button>
                </div>
            </div>

            {
                filerData?.items?.map((item) => (
                    <div className='w-full shadow-2xs my-2 
                    flex  gap-5 items-center p-4'>
                        <div className='flex'>
                            {
                                item.product.images.map((img) => (
                                    <img src={img} alt="" className='size-10' />
                                ))
                            }
                        </div>
                        <div className='text-center w-full flex justify-evenly'>
                            <span className='font-semibold'>{item.product.title}</span><br />
                            <span className='text-sm text-gray-500'>category -{item.product.category}</span><br />
                            <span className='text-sm text-gray-500'>Net Weight:- {item.product.netweight}</span>
                            <div>Quantity :-{item.quantity}</div>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default OrderProductView