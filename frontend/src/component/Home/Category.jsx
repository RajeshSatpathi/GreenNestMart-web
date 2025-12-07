import React from 'react'
import "./home.style.css"
import Slider from "react-slick";

function Category({category,setselectedCategory}) {

    var settings = {
      
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className=' mx-5 border border-gray-200 rounded p-5'>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        category.map((item) => (
                            <div className='bg-gray-100 rounded-md ' onClick={()=>setselectedCategory(item?.name)}>
                                <div className=" flex flex-col justify-center items-center
                                 h-full gap-2 p-4 cursor-pointer">
                                    <img src={item.icon} className='size-15' alt="" />
                                    <h3 className='font-semibold text-black uppercase'>{item.name}</h3>
                                </div>
                            </div>

                        ))
                    }

                </Slider>
            </div>
        </div>

    )
}

export default Category