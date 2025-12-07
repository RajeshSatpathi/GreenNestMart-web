import React, { useEffect } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

import { GetCartAPICALL } from '../../Features/CartFeatures/CartSlice';
import CartSummery from '../../component/Cart/CartSummery';
function Cartpage() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetCartAPICALL())
  }, [dispatch])

const totalQuantity = cart?.items?.reduce((acc, item) => acc + item.quantity, 0);
const totalAmount = cart?.items?.reduce(
  (acc, item) => acc + item.product.originalprice * item.quantity,
  0
);
const totaldiscount = cart?.items?.reduce(
  (acc, item) => acc + item.product.currentprice * item.quantity,
  0
);
  return (
    <div className="w-full bg-gray-100 py-6">
      <div className="w-full px-4 flex justify-evenly flex-wrap gap-6">

        {/* CART ITEMS SECTION */}
        <div className="lg:w-[60%] w-full bg-white  p-4">

          {/* Header */}
          <div className="grid grid-cols-5 gap-2 font-semibold
          text-sm text-gray-600 border-b border-gray-300 pb-3">
            <h2 className='font-bold'>Product Details</h2>
            <h2 className="text-center font-bold">Price</h2>
            <h2 className="text-center  font-bold">Quantity</h2>
            <h2 className="text-center font-bold">Total</h2>
            <h2 className="text-center font-bold">Remove</h2>
          </div>

          {/* Single Cart Item */}

          {
            cart?.items?.map((item) => (
              <>
                <div className="grid grid-cols-5 gap-2 items-center py-2 border-b border-gray-200">
                  <div className=''>
                    <div className='flex'>
                      {
                        item?.product?.images?.map((img) => (
                          <img src={img} alt="" className='size-8 border rounded-full' />

                        ))
                      }
                    </div>

                    <h3 className=" text-black font-semibold text-sm">{item?.product?.title}</h3>
                    <span className='text-gray-500 text-sm'>NetWeight :- {item?.product?.netweight}</span>
                  </div>
                  <div className="text-center text-gray-600">
                    <span className='text-gray-500 '> {item?.product?.originalprice}</span>
                  </div>

                  <div className="text-center text-gray-600">
                    <span className='text-gray-700 '> {item?.product?.netweight} x {item?.quantity}</span>

                  </div>

                  <div className="text-center text-gray-600">
                    {item?.product?.originalprice * item?.quantity}
                  </div>

                  <div className="text-center  flex justify-center">
                    <IoIosCloseCircleOutline size={22} />
                  </div>
                </div >
              </>
            ))
          }




        </div>

        {/* PAYMENT SECTION */}
          <CartSummery totalAmount={totalAmount} totalQuantity={totalQuantity} totaldiscount={totaldiscount}/>

      </div>
    </div >
  )
}

export default Cartpage
