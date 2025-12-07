import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { GetOrderByUserIdAPICALL } from '../../Features/OrdersFeature/OrderSlice'

export default function Myorder() {
    const { orders } = useSelector((state) => state.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetOrderByUserIdAPICALL())
    }, [dispatch])
    return (
        <div className='my-2 container mx-auto'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold text-shadow-2xs my-2'> My Ordered Details</h2>


            </div>

            {
                orders?.map((orders) => (
                    <div className='container mx-auto shadow-md p-4 border border-gray-100   '>
                        <div className='flex justify-between my-2 flex-wrap'>
                            <span className='text-red-500 font-lighter'> order Id :-{orders._id}</span>
                            <div className='text-sm'>
                                <span className='font-semibold'>Delivery Address</span>:-
                                <span> {orders.addressId.city}</span>,
                                <span> {orders.addressId.state}</span>,
                                <span> {orders.addressId.country}</span>,<br />
                                <span> {orders.addressId.pincode}</span>,
                                <span> {orders.addressId.mobno}</span>

                            </div>
                            <div>
                                <span className=' text-sm font-semibold'>Order Status :-  
                                    <span className='text-green-600'>{orders.status}</span> </span>
                            </div>
                        </div>

                        <div className='flex justify-between my-2 flex-wrap'>
                            <span className=' text-sm font-semibold'>Payment Type :- 
                                <span className='text-green-600'>{orders.paymentType}</span> </span>
                            <span className=' text-sm font-semibold'>Total Amount:- 
                                <span className='text-green-600'>{orders.totalAmount}.00</span> </span>

                        </div>

                        <div className=' h-30 overflow-x-scroll overflow-y-scroll text-sm'>
                            {
                                orders?.items.map((item) => (
                                    <div
                                        key={item._id}
                                        className="w-full  shadow-2xs my-2 flex gap-5 items-center p-4"
                                    >
                                        <div className="flex">
                                            {item.product.images.map((img, idx) => (
                                                <img key={idx} src={img} alt="" className="size-7" />
                                            ))}
                                        </div>

                                        <div className="text-center w-full flex justify-evenly ">
                                            <span className="font-semibold">{item.product.title}</span><br />
                                            <span className="text-sm text-gray-500">
                                                Category - {item.product.category}
                                            </span><br />
                                            <span className="text-sm text-gray-500">
                                                Net Weight: {item.product.netweight}
                                            </span>
                                            <div>Quantity: {item.quantity}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                ))
            }
        </div>
    )
}
