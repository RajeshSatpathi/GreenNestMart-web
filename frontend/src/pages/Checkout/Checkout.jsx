import React, { useEffect, useState } from 'react'
import paymentGateway from "../../assets/img/paymentGateway.png"
import { useDispatch, useSelector } from 'react-redux';
import { GetCartAPICALL } from '../../Features/CartFeatures/CartSlice';
import { PlaceOrderAPICALL, PlaceOrderByStripeAPICALL } from '../../Features/OrdersFeature/OrderSlice';
function Checkout() {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCartAPICALL());
  }, [dispatch]);

  const totalAmount = cart?.items?.reduce(
    (acc, item) => acc + item.product.originalprice * item.quantity,
    0
  );
  const totaldiscount = cart?.items?.reduce(
    (acc, item) => acc + item.product.currentprice * item.quantity,
    0
  );

  const [address, setaddress] = useState({
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobno: ""
  })
  const [paymentType, setPaymentType] = useState("COD");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddress((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))
  }
  const placedOrder = () => {
    const finalAddress = {
      ...address,
      mobno: Number(address.mobno),
      pincode: Number(address.pincode),
    };
    if (paymentType === "COD") {
      dispatch(PlaceOrderAPICALL({ address: finalAddress, paymentType })).
        then((data) => alert("order Placed Succesfully using COD"))
    } else {
      dispatch(PlaceOrderByStripeAPICALL({ address: finalAddress, paymentType })).
        then((data) => {
          if (data.payload?.success) {
            window.location.replace(data.payload.url)
          }
          console.log(data)
        })
    }
  }
  return (
    <div>
      <div className="w-full bg-gray-100 py-6">
        <div className="w-full px-4 flex justify-evenly flex-wrap gap-6">

          {/* Delivary address SECTION */}
          <div className="lg:w-[60%] w-full bg-white  p-4">
            <h2 className='text-lg font-semibold '>Billing Details</h2>
            <h3>Delivery Information </h3>
            <span className='text-gray-500'>I want to using this address </span> <br />
            <div>

              <div>
                <input type="text"
                  placeholder='city'
                  name='city'
                  className='common-input'
                  value={address.city}
                  onChange={handleChange}
                />
                <input type="text"
                  placeholder='state'
                  className='common-input'
                  name='state'
                  value={address.state}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input type="text"
                  placeholder='Country'
                  name='country'
                  className='common-input'
                  value={address.country}
                  onChange={handleChange}
                />
                <input type="number"
                  placeholder='Pin code'
                  name='pincode'
                  className='common-input'
                  value={address.pincode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input type="number"
                  placeholder='Phone Number'
                  name='mobno'
                  className='common-input '
                  value={address.mobno}
                  onChange={handleChange}
                />
              </div>


            </div>

          </div>

          {/* PAYMENT & billing SECTION */}
          <div className="lg:w-[30%] w-full bg-white rounded-lg p-6">
            <div className='border border-gray-200 p-5 rounded'>
              <h2 className='text-lg  mb-4'>Summary</h2>
              <div className='flex justify-between'>
                <h3 className='text-sm text-gray-500'>Sub-Total</h3>
                <p>₹ {totalAmount}</p>
              </div>
              <div className='flex justify-between'>
                <h3 className='text-sm text-gray-500'>Delivery Charges</h3>
                <p>₹ {50}</p>
              </div>
              <div className='flex justify-between'>
                <h3 className='text-sm text-gray-500'>Coupon Code Discount</h3>
                <p className='text-red-600'>₹ {totalAmount - totaldiscount}</p>
              </div>
              <hr className='text-gray-200 mt-4' />

              <div className='flex justify-between my-2'>
                <h3 className='text-md font-semibold '>Total Amount to Pay</h3>
                <p>₹ {totalAmount + 50}</p>
              </div>
            </div>
            <br /><br />
            <div className='border border-gray-200 p-5 rounded'>
              <h2 className='text-lg  mb-4'>Payment Method</h2>
              <p className='text-gray-500  mb-4'>please Select the payment method to use on this order</p>

              <div className='flex justify-between'>
                <button
                  className={`border text-sm p-1 ${paymentType === "COD" ? "bg-green-200" : ""}`}
                  onClick={() => setPaymentType("COD")}
                >Case on Delivery</button>
                <button
                  onClick={() => setPaymentType("ONLINE")}
                  className={`cursor-pointer w-40 ${paymentType === "ONLINE" ? "border border-green-400" : ""}`}>

                  <img src={paymentGateway} alt="" className='' /></button>
              </div>
              <div className='flex items-center my-2'>
                <input type="checkbox" placeholder='' />
                <span className='text-gray-600 mx-2 text-sm'>I accepted terms & conditions</span>
              </div>
              <div className='w-full'>
                <button onClick={placedOrder}
                  className='bg-black text-white p-1.5 w-full rounded mt-2  text-sm cursor-pointer'

                >Place Order</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout