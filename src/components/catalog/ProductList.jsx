import React from "react"
import ProductCard from "./ProductCard"

const ProductList = () => {
    return (
        <div className='w-full flex flex-col gap-2 p-4 shadow rounded-md'>
            <div className='w-full flex items-center justify-between py-1'>
                <span className="text-lg">Product List</span>
                <button type='button' className='bg-yellow-500 hover:bg-yellow-400 text-white transition-all duration-200 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2 self-center'>
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
