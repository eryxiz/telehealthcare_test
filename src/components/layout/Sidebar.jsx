"use client"
import { sidebarMenu } from "@/utils/config"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import { FaAngleDoubleLeft } from "react-icons/fa"
import SubMenu from "./SubMenu"
import { motion } from "framer-motion"
import { useUiControls } from "@/utils/store"

const Sidebar = () => {
    const pathName = usePathname()
    const [hoverCollapse, setHoverCollapse] = useState(false)

    const isCollapseSidebar = useUiControls((state) => state.isCollapseSidebar)
    const setCollapseSidebar = useUiControls((state) => state.setCollapseSidebar)

    const handleHoverCollapse = () => {
        if (isCollapseSidebar && !hoverCollapse) {
            setHoverCollapse(true)
            setCollapseSidebar(false)
        } else if (!isCollapseSidebar && hoverCollapse) {
            setHoverCollapse(false)
            setCollapseSidebar(true)
        }
    }

    return (
        <motion.div
            animate={
                isCollapseSidebar
                    ? {
                          width: "6rem",
                      }
                    : {
                          width: "16rem",
                      }
            }
            className={`w-[16rem] h-screen fixed z-20 bg-white shadow-lg px-4 ${isCollapseSidebar ? 'sidebar-collapse' : ""}`}>
            {/* Header */}
            <div className='flex items-center justify-between py-4 border-b border-zinc-200'>
                <Image src={"/assets/images/logo.png"} width={32} height={32} alt='Sidebar Logo' />
                <motion.div
                    animate={
                        isCollapseSidebar
                            ? {
                                  rotate: 180,
                              }
                            : {
                                  rotate: 0,
                              }
                    }
                    transition={{ ease: "linear" }}
                    onClick={() => setCollapseSidebar(!isCollapseSidebar)}
                    className='cursor-pointer text-lg text-zinc-600 hover:text-zinc-400 transition-colors duration-300'>
                    <FaAngleDoubleLeft />
                </motion.div>
            </div>

            {/* List Menu */}
            <ul className='w-full h-full flex flex-col gap-2 overflow-y-auto no-scrollbar mt-2' onMouseEnter={handleHoverCollapse} onMouseLeave={handleHoverCollapse}>
                {sidebarMenu?.map((val, idx) => (
                    <li key={`sidemenu-${idx}`} className='w-full flex flex-col'>
                        {val?.sub ? (
                            <SubMenu collapse={isCollapseSidebar} idx={idx} data={val} />
                        ) : (
                            <>
                                <div className={`w-full py-2 px-3 ${val?.href === pathName ? "bg-zinc-200" : "hover:bg-zinc-200/75"} cursor-pointer rounded-md flex items-center ${isCollapseSidebar ? "justify-center text-xl" : "justify-between"} text-zinc-700 transition-all duration-300`}>
                                    <div className={`flex ${isCollapseSidebar ? "justify-center" : "gap-2"} items-center`}>
                                        {val.icon}
                                        {!isCollapseSidebar && <span className='truncate w-36'>{val.label}</span>}
                                    </div>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Sidebar
