import React from "react"
import { FaPlus } from "react-icons/fa6"
import CustomSelect from "../ui/CustomSelect"
import CustomInput from "../ui/CustomInput"
import Image from "next/image"
import Link from "next/link"

const ProductCard = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='w-full h-80 bg-white shadow rounded-lg self-center flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <Image src={"/assets/images/image-placeholder.png"} width={128} height={128} alt='Image Placeholder' />
                    <span className='text-blue-400'>อัตราส่วนรูปภาพ (1:1)</span>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-blue-500'>3M CAVILION DURABLE CREAM 2G</span>
                <span className='text-zinc-700'>Product ID : 1190001</span>
                <span className='text-blue-500 text-xl font-bold'>280.00 บาท/หลอด</span>
                <div className='grid grid-cols-4 gap-2'>
                    <CustomInput placeholder='Ex: 1' />
                    <CustomSelect className='col-span-3' />
                </div>
                <Link href={"/details"}>
                    <button type='button' className='btn btn-primary w-full'>
                        <FaPlus /> Add To Cart
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
