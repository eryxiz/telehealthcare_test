import React from "react"

const IconButton = ({ icon, notify }) => {
    return (
        <div className='relative w-10 h-10 bg-zinc-100/50 hover:bg-zinc-200 transition-all duration-200 cursor-pointer rounded-full flex items-center justify-center'>
            {icon}
            {notify && 
                <div className='w-4 h-4 absolute flex justify-center items-center top-[-4px] right-[-4px]'>
                    <div className="w-[8px] h-[8px] bg-lime-400 rounded-full absolute z-[1]"></div>
                    <div className="w-full h-full bg-lime-400/35 rounded-full absolute z-[0] animate-pulse"></div>
                </div>
            }
        </div>
    )
}

export default IconButton
