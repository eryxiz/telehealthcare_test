import React from "react"
import SearchBox from "../ui/SearchBox"
import Image from "next/image"
import IconButton from "../ui/IconButton"
import { FaRegBell, FaRegEnvelope, FaRegMoon } from "react-icons/fa6"

const Topbar = () => {
    return (
        <div className='w-full flex items-center justify-between bg-[#fff] shadow-md rounded-lg p-3'>
            <SearchBox />
            <div className='flex items-center justify-end flex-row-reverse gap-3'>
                <div className='w-10 h-10 bg-zinc-100/50 rounded-full overflow-hidden flex items-center justify-center'>
                    <Image src={"/assets/images/mockup.jpg"} width={64} height={64} alt="Avatar" />
                </div>
                <IconButton notify icon={<FaRegBell />} />
                <IconButton icon={<FaRegEnvelope />} />
                <IconButton icon={<Image src={"/assets/images/us.png"} width={24} height={24} alt="Language" />} />
                <IconButton icon={<FaRegMoon/>} />
            </div>
        </div>
    )
}

export default Topbar
