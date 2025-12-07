import React from 'react'
import { Link } from 'react-router-dom';
function CartSummery({totalAmount,totalQuantity,totaldiscount}) {
    return (
       
            <div className="lg:w-[30%] w-full bg-white rounded-lg h-86 p-6">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

                <div className="flex justify-between mb-3">
                    <span className="text-gray-600 text-sm">Total Quantity:</span>
                    <span className="font-semibold">{totalQuantity}</span>
                </div>

                <div className="flex justify-between mb-3">
                    <span className="text-gray-600 text-sm">Total Amount:</span>
                    <span className="font-semibold text-green-600">{totalAmount}.00</span>
                </div>
     <div className="flex justify-between mb-3">
                    <span className="text-gray-600 text-sm"> Discount Amount:</span>
                    <span className="font-semibold text-green-600">{totalAmount - totaldiscount}.00</span>
                </div>
                <hr className="my-3" />

                <div className="flex justify-between items-center mb-3">

                </div>

                <div className="flex justify-between mb-3">
                    <span className="text-gray-600 text-sm">Final Amount:</span>
                    <span className="font-semibold text-green-600">{totaldiscount}.00</span>
                </div>
                <button className="bg-gray-800 font-semibold uppercase mt-4 w-full
          cursor-pointer
          text-sm text-white py-3 rounded shadow-md hover:bg-green-900">
                    <Link to="/checkout" >
                        Checkout
                    </Link>
                </button>

            </div>
        
    )
}

export default CartSummery