import React from "react"
import CustomInput from "../ui/CustomInput"
import { FaMagnifyingGlass } from "react-icons/fa6"

const ProductFilter = () => {
    return (
        <div className='w-full p-4 shadow rounded-md grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='product_id'>Product ID:</label>
                <CustomInput placeholder='Enter Product Id' name='product_id' value='000-000-000-001' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='product_id'>Product Name:</label>
                <CustomInput placeholder='Enter Product Id' name='product_id' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='product_id'>Common Name:</label>
                <CustomInput placeholder='Enter Product Id' name='product_id' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='product_id'>Product Type:</label>
                <CustomInput placeholder='Enter Product Id' name='product_id' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='product_id'>Product Type:</label>
                <CustomInput placeholder='Enter Product Id' name='product_id' />
            </div>
            <div className='flex items-end justify-end col-span-1 xl:col-span-3 gap-2'>
                <button type='button' className='text-white bg-blue-600 hover:scale-95 transition-all duration-200 focus:outline-none shadow-lg shadow-blue-500/50 hover:shadow-none rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2'>
                    <FaMagnifyingGlass /> Search
                </button>
                <button type='button' className='text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center flex items-center gap-2'>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default ProductFilter
