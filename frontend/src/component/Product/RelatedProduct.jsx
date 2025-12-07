import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

function RelatedProduct({ filterdProduct }) {
    const { product } = useSelector((state) => state.products);
    const [filterdProducts, setFilteredProducts] = useState(null)
    useEffect(() => {
        if (product?.products?.length > 0 && filterdProduct?.category) {
            const data = product.products.filter(
                (item) => item.category === filterdProduct.category && item._id !== filterdProduct._id
            );
            setFilteredProducts(data);
        }
    }, [product, filterdProduct])
    return (
        
        <div className='container mx-auto flex justify-evenly flex-wrap'>

            {filterdProducts?.length > 0 ? (
                filterdProducts?.slice(1,5).map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))
            ) : (
                <p>No related products found.</p>
            )}

        </div>
    )
}

export default RelatedProduct