import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./home.style.css"

function HeroSection() {
    var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className='flex justify-around flex-wrap p-2 gap-5'>
            <div className='lg:w-[62%] w-[90%]  '>
                <Slider {...settings}>
                    <div className='hero1' >
                        <div className='relative top-30 left-10'>
                            <h2 className='text-gray-700 text-xl font-bold'>From Nature to Your Home</h2>
                            <span className='text-gray-300 text-2xl'>100% Certified Organic Products, <br />
                                Ethically Sourced.</span><br />
                            <button className='bg-black text-white text-sm p-1.5 mt-2'>Shop Now</button>
                        </div>
                    </div>
                    <div className='hero2' >
                        <div className='relative top-30 left-10'>
                            <h2 className='text-gray-100 text-xl font-bold'>Live Clean, Live Green</h2>
                            <span className='text-green-300 lg:text-2xl text-shadow-2xs '>Discover the Joy of Organic <br /> Living Today. <br />
                            </span>
                            <button className='bg-black text-white text-sm p-1.5 mt-2'>Shop Now</button>
                        </div>
                    </div>
                    <div className='hero3' >
                        <div className='relative top-30 left-10'>
                            <h2 className='text-gray-700 text-xl font-bold'>From Nature to Your Home</h2>
                            <span className='text-pink-400 text-2xl'>100% Certified Organic Products, <br />
                                Ethically Sourced.</span><br />
                            <button className='bg-black text-white text-sm p-1.5 mt-2'>Shop Now</button>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className='lg:w-[35%]  w-full p-2'>
                <div className='banner2 flex  p-2 items-center'>
                    <div>
                        <h2 className='text-white text-lg font-semibold uppercase'>Fresh Vegitable</h2>
                        <button className='bg-black text-white text-sm px-3 py-1 rounded'>Show Now</button>
                    </div>
                </div>
                <div className='banner3 flex  p-2 items-center justify-end'>
                    <div>
                        <h2 className='text-white text-lg font-semibold uppercase'>Fresh Fruits</h2>
                        <button className='bg-black text-white text-sm px-3 py-1 rounded'>Show Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection