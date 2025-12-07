import React from 'react'
import serviceIcon1 from "../../assets/img/serviceIcon1.png"
import serviceIcon2 from "../../assets/img/serviceIcon2.png"
import serviceIcon3 from "../../assets/img/serviceIcon3.png"
import serviceIcon4 from "../../assets/img/serviceIcon4.png"
export  const OurServices = [
        {
            name: "Free Shipping",
            desc: " Free Shipping on order upto 2000",
            icons: serviceIcon1
        },
        {
            name: "24 X 7 Support",
            desc: " Contact us 24 hours a day and 7 days a week",
            icons: serviceIcon2
        },
        {
            name: "2 Days Return",
            desc: " You can simply Return Product in 2 Days",
            icons: serviceIcon3
        },
        {
            name: "Patment Secure",
            desc: " Contact us 24 hours a day and 7 days a week",
            icons: serviceIcon4
        },

    ]
function Services() {

    return (
        <div>
            <div className='container mx-auto mt-15 flex justify-between flex-wrap gap-2  p-3'>
                {
                    OurServices.map((item) => (
                        <div className='md:w-70 w-full border border-gray-200 p-4 flex flex-col items-center gap-2'>
                            <img src={item.icons} className='size-10' alt="" />
                            <h3 className='text-black font-semibold'>{item.name}</h3>
                            <span className='text-gray-500 text-sm text-center'>{item.desc}</span>

                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Services