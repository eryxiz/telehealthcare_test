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
                <button type='button' className='btn btn-shadow-primary'>
                    <FaMagnifyingGlass /> Search
                </button>
                <button type='button' className='btn btn-ghost-primary'>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default ProductFilter
