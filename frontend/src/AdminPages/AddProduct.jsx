import React, { useEffect, useState } from 'react'
import { IoCloudUpload } from "react-icons/io5";
import { useDispatch } from "react-redux"
import { addProductAPI } from '../Features/ProductFeature/productSlice';
import toast, { Toaster } from 'react-hot-toast';
function AddProduct() {
    const categoryArray = [
        {
            name: "Fruits",

        },
        {
            name: "Bakerys",

        },
        {
            name: "Vagitables",

        },
        {
            name: "Dairy & Milk",

        },
        {
            name: "Snacks & Spices",

        },

    ];
    const [image1, setimage1] = useState(null);
    const [image2, setimage2] = useState(null);
    const [image3, setimage3] = useState(null);
    const [title, settitle] = useState("");
    const [category, setcategory] = useState("");
    const [originalprice, setoriginalprice] = useState("");
    const [currentprice, setcurrentprice] = useState("");
    const [desc, setdesc] = useState("");
    const [bestSeller, setBestSeller] = useState(false);
    const [discount, setdiscount] = useState(null);
    const [netweight, setnetweight] = useState("");



    useEffect(() => {
        if (originalprice && discount >= 0) {
            const discountAmount = originalprice - (originalprice * discount / 100);
            setcurrentprice(discountAmount.toFixed(2));
        }
    }, [discount, originalprice]);

    const dispatch = useDispatch()
    //add product by admin 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("category", category);
        formData.append("originalprice", originalprice);
        formData.append("currentprice", currentprice);
        formData.append("desc", desc);
        formData.append("bestseller", bestSeller);
        formData.append("netweight", netweight);


        // images
        if (image1) formData.append("images", image1);
        if (image2) formData.append("images", image2);
        if (image3) formData.append("images", image3);
        dispatch(addProductAPI(formData)).then((data) => {
            toast(data.payload.message, {
                duration: 2000,
                position: "top-center",
                style: {
                    color: "green"   // 🔥 Text color green
                }
            });
            console.log(data)

        })

    }



    return (
        <div>
            <h2 className='text-md font-semibold uppercase text-shadow-2xs'>Add Product Details</h2>
            <div className='w-full border border-gray-300 p-4'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='flex gap-5 flex-wrap'>

                        <div className='size-25 border border-dotted border-gray-400 rounded flex 
                         justify-center items-center '>
                            <label htmlFor="imgUpload1" className='text-sm flex justify-center 
                            flex-col items-center cursor-pointer '>
                                {image1 ? (
                                    <img
                                        src={image1}
                                        alt="Uploaded"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <IoCloudUpload size={25} />
                                        <span>Image 1</span>
                                    </>
                                )}

                                <input type="file" id='imgUpload1' hidden
                                    onChange={(e) => setimage1(e.target.files[0])}
                                />
                            </label>

                        </div>
                        <div className='size-25 border border-dotted border-gray-400 rounded flex 
                         justify-center items-center'>
                            <label htmlFor="imgUpload2" className='text-sm flex justify-center 
                            flex-col items-center cursor-pointer'>
                                {image2 ? (
                                    <img
                                        src={image2}
                                        alt="Uploaded"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <IoCloudUpload size={25} />
                                        <span>Image 2</span>
                                    </>
                                )}
                                <input type="file" id='imgUpload2' hidden
                                    onChange={(e) => setimage2(e.target.files[0])}
                                />
                            </label>
                        </div>
                        <div className='size-25 border border-dotted border-gray-400 rounded flex 
                         justify-center items-center'>
                            <label htmlFor="imgUpload3" className='text-sm flex justify-center 
                            flex-col items-center cursor-pointer'>
                                {image3 ? (
                                    <img
                                        src={image3}
                                        alt="Uploaded"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <IoCloudUpload size={25} />
                                        <span>Image 1</span>
                                    </>
                                )}

                                <input type="file" id='imgUpload3' hidden
                                    onChange={(e) => setimage3(e.target.files[0])}
                                />
                            </label>

                        </div>

                    </div><br />
                    {/* //actual form // */}
                    <div>
                        <input type="text"
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                            placeholder='Product title'
                            className='border mr-4 w-70 rounded border-gray-500 p-1.5'
                        />
                        <select name="" id=""
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            className='border mr-4 w-70 rounded border-gray-500 p-1.5'>
                            <option value="">Select  Product Main Category</option>
                            {
                                categoryArray.map((item) => (
                                    <option value={item.name}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div><br />
                    <div>
                        <input type="number"
                            value={originalprice}
                            onChange={(e) => setoriginalprice(e.target.value)}
                            placeholder='Original Price'
                            className='border mr-4 w-45 rounded border-gray-500 p-1.5'
                        />
                        <input type="number"
                            value={discount}
                            onChange={(e) => setdiscount(e.target.value)}
                            placeholder='Discount %'
                            className='border mr-4 w-45 rounded border-gray-500 p-1.5'
                        />
                        <input type="text"
                            value={currentprice}
                            placeholder='Current Price (Auto)'
                            readOnly
                            className='border mr-4 w-46 rounded border-gray-500 p-1.5'
                        />

                    </div><br />

                    <div>
                        <textarea name="" id=""
                            value={desc}
                            onChange={(e) => setdesc(e.target.value)}
                            placeholder='Product Description'
                            className='border mr-4 w-145 rounded border-gray-500 p-1.5'
                        ></textarea><br />


                    </div>
                    <input type="text"
                        value={netweight}
                        onChange={(e) => setnetweight(e.target.value)}
                        placeholder='NetWeight / Quantity '
                        className='border mr-4 w-45 rounded border-gray-500 p-1.5'
                    />
                    <input
                        type="checkbox"
                        checked={bestSeller}
                        onChange={() => setBestSeller(!bestSeller)}
                        className='mr-2'
                    />Best Seller
                    <div>
                        <button className='bg-gray-800 text-sm
                       p-2 hover:bg-gray-400 uppercase shadow
                      cursor-pointer text-shadow-2xs my-2
                       text-lighter text-white '>Add Product
                        </button>
                    </div>

                </form>
                <Toaster />
            </div>
        </div>
    )
}

export default AddProduct