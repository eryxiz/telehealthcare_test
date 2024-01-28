"use client"
import { sidebarMenu } from "@/utils/config"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React from "react"
import { FaAngleDoubleRight, FaAngleDown, FaMinus } from "react-icons/fa"
import SubMenu from "./SubMenu"

const Sidebar = () => {
    const pathName = usePathname()

    return (
        <div className='w-[16rem] h-full fixed bg-white shadow-lg px-4'>
            {/* Header */}
            <div className='flex items-center justify-between py-4 border-b border-zinc-200'>
                <Image src={"/assets/images/logo.png"} width={32} height={32} alt='Sidebar Logo' />
                <div className='cursor-pointer text-lg text-zinc-600 hover:text-zinc-400 transition-colors duration-300'>
                    <FaAngleDoubleRight />
                </div>
            </div>

            {/* List Menu */}
            <ul className='w-full h-full flex flex-col gap-2 overflow-y-auto no-scrollbar mt-2'>
                {sidebarMenu?.map((val, idx) => (
                    <li key={`sidemenu-${idx}`} className='w-full flex flex-col'>
                        {val?.sub ? (
                            <SubMenu key={`sidemenu-${idx}`} data={val} />
                        ) : (
                            <div className={`w-full py-2 px-3 ${val?.href === pathName ? "bg-zinc-200" : "hover:bg-zinc-200/75"} cursor-pointer rounded-md flex items-center justify-between text-zinc-700 transition-all duration-300`}>
                                <div className='flex gap-2 items-center'>
                                    {val.icon}
                                    <span className='truncate w-36'>{val.label}</span>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
