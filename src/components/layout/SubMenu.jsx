"use client"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { FaAngleDown, FaMinus } from "react-icons/fa6"
import { motion } from "framer-motion"
import Link from "next/link"

const SubMenu = ({ data, collapse, idx }) => {
    const pathName = usePathname()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (data?.sub) {
            const isOpen = data?.sub.some((val) => val.href === pathName)
            setOpen(isOpen)
        }
    }, [pathName])

    return (
        <>
            <div onClick={() => setOpen(!open)} className={`w-full py-2 px-3 ${open ? "bg-zinc-200" : "hover:bg-zinc-200/75"} cursor-pointer rounded-md flex items-center ${collapse ? "justify-center text-xl" : "justify-between"} text-zinc-700 transition-all duration-300`}>
                <div className='flex gap-2 items-center'>
                    {data.icon}
                    {!collapse && <span className='truncate w-36'>{data.label}</span>}
                </div>
                {data?.sub && !collapse && (
                    <motion.div
                        animate={
                            open
                                ? {
                                      rotate: 0,
                                  }
                                : {
                                      rotate: -180,
                                  }
                        }>
                        <FaAngleDown />
                    </motion.div>
                )}
            </div>
            {data?.sub && !collapse && (
                <motion.ul
                    key={`sub-list-${idx}`}
                    animate={
                        open
                            ? {
                                  height: "fit-content",
                              }
                            : {
                                  height: 0,
                              }
                    }
                    className='flex h-0 flex-col gap-3 overflow-hidden'>
                    {data.sub.map((sub_val, sub_idx) => (
                        <Link href={sub_val.href}>
                            <li key={`sub-item-${idx}${sub_idx}`} className={`flex gap-2 py-2 pl-9 my-2 rounded-md hover:bg-zinc-200/75 items-center ${sub_val?.href === pathName ? "text-blue-600" : "text-zinc-500 hover:translate-x-1"} transition-all duration-300 cursor-pointer`}>
                                <FaMinus className='text-[10px]' />
                                <span className='truncate w-36'>{sub_val.label}</span>
                            </li>
                        </Link>
                    ))}
                </motion.ul>
            )}
        </>
    )
}

export default SubMenu
