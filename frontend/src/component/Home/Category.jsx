import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category({ category, setselectedCategory }) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full ">
            <Slider {...settings}>
                {category.map((item, index) => (
                    <div
                        key={index}
                        className="p-3"
                        onClick={() => setselectedCategory(item?.name)}
                    >
                        <div className="bg-gray-100 rounded-md flex flex-col justify-center items-center gap-2 p-4 cursor-pointer">
                            <img src={item.icon} className="size-15" alt="" />
                            <h3 className="font-semibold text-black uppercase">{item.name}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Category;
