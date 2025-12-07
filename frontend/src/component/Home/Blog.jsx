import React from 'react'
import "./home.style.css"
import Slider from "react-slick";
import banner1 from "../../assets/img/banner1.jpg"
import banner3 from "../../assets/img/banner3.jpg"
import banner4 from "../../assets/img/banner4.jpg"


function Blog() {
    const blogData = [
        {
            name: "Business Idea to grow your Business",
            icon: banner1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias! "
        },
        {
            name: "Business Idea to grow your Business",
            icon: banner3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias! "
        },
        {
            name: "Business Idea to grow your Business",
            icon: banner1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias! "
        },
        {
            name: "Business Idea to grow your Business",
            icon: banner1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias! "
        },
        {
            name: "Business Idea to grow your Business",
            icon: banner3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias! "
        },

    ];
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
        <div className=' mx-5 mt-10  border-gray-200 rounded p-5'>
            <h2 className='text-xl font-semibold'> Latest <span className='text-green-600'>
                News</span> </h2><br />
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        blogData.map((item) => (
                            <div className='border border-gray-200 p-3 rounded-md '>
                                <div className="">
                                    <div className='w-full '>
                                        <img src={item.icon} className='' alt="" />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-black text-xl '>{item.name}</h3>
                                        <span className='text-gray-600'>{item.desc}</span>
                                        <button className='bg-black text-white p-1.5 text-sm my-2'>Show more</button>
                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </Slider>
            </div>
        </div>

    )
}

export default Blog