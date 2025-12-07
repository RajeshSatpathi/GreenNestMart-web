import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { GetProductAPI } from '../../Features/ProductFeature/productSlice';
import ProductCard from '../Product/ProductCard';
function NewProduct({selectedCategory}) {
    const { product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetProductAPI);
    }, [dispatch])
    
    // 👉 Filter products based on selected category
    const filteredProducts =
        selectedCategory && selectedCategory.length > 0
            ? product?.products?.filter(item =>
                selectedCategory.includes(item.category)
            )
            : product?.products;

    return (
        <div className='mx-5 mt-5'>
            <h2 className='text-2xl font-semibold'>New <span className='text-green-700'>Products</span></h2><br />
            <div className='flex  flex-wrap justify-center gap-5 '>
                {
                  filteredProducts?.slice(0,10).map((item)=>(
                        
                        <ProductCard item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default NewProduct