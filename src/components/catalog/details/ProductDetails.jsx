import CustomInput from "@/components/ui/CustomInput"
import Image from "next/image"
import React from "react"
import { FaPlus } from "react-icons/fa6"

const ProductDetails = () => {
    return (
        <div className='w-full p-6 shadow-md rounded-md grid grid-cols-4 gap-4'>
            <div className='w-[24rem] h-[24rem] bg-white shadow-md rounded-lg justify-self-center flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <Image src={"/assets/images/image-placeholder.png"} width={128} height={128} alt='Image Placeholder' />
                    <span className='text-blue-400'>อัตราส่วนรูปภาพ (1:1)</span>
                </div>
            </div>
            <div className='flex flex-col gap-4 col-span-2 ml-3'>
                <span className='text-2xl'>3M CAVILION DURABLE CREAM 2G</span>
                <span className='text-zinc-700 text-lg'>Product ID : 1190001</span>
                <span className='text-blue-500 text-xl'>280.00 บาท/หลอด</span>
                <div className='flex flex-col gap-2'>
                    <span>ตารางราคา:</span>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='w-full bg-zinc-100 p-4 rounded-md'>จำนวน</div>
                        <div className='w-full bg-zinc-100 p-4 rounded-md'>หน่วย</div>
                        <div className='w-full bg-zinc-100 p-4 rounded-md'>ราคา / หน่วย</div>
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='w-full bg-zinc-100 p-4 rounded-md'>1</div>
                        <div className='w-full bg-zinc-100 p-4 rounded-md'>หลอด</div>
                        <div className='w-full bg-zinc-100 p-4 rounded-md'>280.00</div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <CustomInput placeholder='Ex: 1' />
                    <button type='button' class='w-full h-full col-span-2 bg-blue-600 hover:bg-blue-600 text-white transition-all duration-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 flex items-center justify-center gap-2'>
                        <FaPlus /> Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
