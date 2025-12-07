import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetProductAPI } from '../../Features/ProductFeature/productSlice';
import ProductCard from '../../component/Product/ProductCard';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { LuChevronsRight } from "react-icons/lu";
import FilterProduct from '../../component/Product/FilterProduct';

function ProductPage() {
  const category = ["Fruits", "Bakerys", "Vagitables", "Dairy & Milk", "Snacks & Spices"];

  //handle the checkbox value and filter product /////////////
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      // add value to array
      setSelectedCategories(prev => [...prev, value]);
    } else {
      // remove value from array
      setSelectedCategories(prev => prev.filter(item => item !== value));
    }
  };
  const filterdOnCategory = () => {
    if (selectedCategories.length === 0) {
      // no filter → show all
      setFilteredProducts(product.products);
      return;

    }
    const filtered = product.products.filter(item =>
      selectedCategories.includes(item.category)
    );

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }

  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(GetProductAPI());
  }, [dispatch]);

  useEffect(() => {
    if (product?.products) {
      setFilteredProducts(product.products); // full list by default
    }
  }, [product]);


  //////pagination logic here ///////////////////
  // 👉 Calculate sliced product list
  // 👉 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // show 6 cards per page
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  // 👉 Total pages
  const totalPages = Math.ceil((filteredProducts.length || 0) / productsPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };



  return (
    <div>
      <div className='container mx-auto flex flex-wrap mt-3 p-2'>
        {/* // FILTER SECTION // */}
        <div className='lg:w-[20%] w-full border  border-gray-200 p-4'>
          <FilterProduct
            category={category}
            handleCheckboxChange={handleCheckboxChange}
            filterdOnCategory={filterdOnCategory}
          />
        </div>
        <br />
        {/* // PRODUCT SECTION // */}
        <div className='lg:w-[80%] mt-4 w-full flex justify-evenly flex-wrap gap-5 p-1'>
          {
            currentProducts?.map((item) => (
              <ProductCard
                item={item}
              />
            ))
          }
        </div>
        {/* 👉 Pagination Controls */}
        <div className='w-full flex justify-end my-5 gap-4'>
          <button
            disabled={currentPage === 1}
            onClick={prevPage}
            className='px-4 py-2 bg-gray-200 rounded disabled:bg-gray-100'
          >
            <MdKeyboardDoubleArrowLeft />
          </button>

          <span className='text-lg font-medium'>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={nextPage}
            className='px-4 py-2 bg-gray-200 rounded disabled:bg-gray-100'
          >
            <LuChevronsRight />
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductPage;
