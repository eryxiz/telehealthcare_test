import React from "react"
import ProductCard from "./ProductCard"

const ProductList = () => {
    return (
        <div className='w-full flex flex-col gap-2 p-4 shadow rounded-md'>
            <div className='w-full flex items-center justify-between py-1'>
                <span className="text-lg">Product List</span>
                <button type='button' className='btn btn-warning'>
                    Cart
                </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> 
            </div>
        </div>
    )
}

export default ProductList
