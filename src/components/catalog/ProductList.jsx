import React from "react"
import ProductCard from "./ProductCard"

const ProductList = () => {
    return (
        <div className='w-full flex flex-col p-4 shadow-md rounded-md'>
            <div className='w-full flex items-center justify-between'>
                <span className="text-lg">Product List</span>
                <button type='button' class='bg-blue-600 hover:bg-blue-600 text-white transition-all duration-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-2 self-center'>
                    Reset
                </button>
            </div>
            <div className="grid grid-cols-4 gap-6">
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
