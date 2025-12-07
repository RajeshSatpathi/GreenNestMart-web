import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import ProductListing from '../component/AdminComponent/ProductListing'
import { useDispatch, useSelector } from "react-redux"
import { GetProductAPI } from '../Features/ProductFeature/productSlice';
const customStyles = {
  tableWrapper: {
    style: {
      borderRadius: '8px', // <-- add border radius here
      overflow: 'hidden',  // ensures content respects border radius
      // optional light border (Tailwind's gray-200)
      // boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    },
  },
  headCells: {
    style: {
      backgroundColor: 'white', // purple-800
      color: 'black',
      fontWeight: 'bold',
      fontSize: '12px',
      textTransform: 'uppercase',


    },
  },
  cells: {
    style: {
      fontSize: '14px',
      color: '',

    },
  },
  rows: {
    style: {
      minHeight: '60px', // optional
      backgroundColor: "white",
      // Recommended: soften shadow
      margin: "10px 0", // optional: adds spacing between rows
      borderRadius: "6px" // optional: rounded corners
    },
  },
};

function AdminProduct() {
  const columns = [
    {
      name: 'SL no',
      selector: (row, index) => <div className=''>,
      <span>{index+1}</span>
      </div>,
       width: '70px', 
    },
    
    {
      name: "product Image",
      cell: (row) => (
        <>
          <img
            src={row.images[0]}
            alt="product"
            className='size-12 rounded-full border-2'
          />
          <img
            src={row.images[1]}
            alt="product"
            className='size-12 rounded-full border-2'
          />
          <img
            src={row.images[2]}
            alt="product"
            className='size-12 rounded-full border-2'
          />
        </>

      )
    },
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Category',
      selector: row => row.category,
    },

    {
      name: 'Price',
      selector: row => row.originalprice,
    },
    {
      name: 'Current price',
      selector: row => row.currentprice,
    },
    {
      name: 'Action',
      selector: row => row.year,
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(GetProductAPI())
  }, [dispatch])

  return (
    <div>
      <div className='flex justify-between'>
        <h2 className='text-lg font-semibold text-shadow-2xs  uppercase '>Product List </h2>
        <button className='bg-gray-800 text-sm
        p-2 hover:bg-gray-400 uppercase shadow
        cursor-pointer text-shadow-2xs
        text-lighter text-white ' onClick={() => navigate("/admin-addproduct")}>Add Product </button>
      </div>
      <br />
      {/* ///product listing component//// */}
      <ProductListing columns={columns} data={product.products} customStyles={customStyles} />
    </div>
  )
}

export default AdminProduct