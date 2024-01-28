import React from "react"

const IconButton = ({ icon, notify }) => {
    return (
        <div className='relative w-10 h-10 bg-zinc-100/50 hover:bg-zinc-200 transition-all duration-200 cursor-pointer rounded-full flex items-center justify-center'>
            {icon}
            {notify && <div className='w-2 h-2 bg-lime-400 rounded-full absolute top-[1px] right-[1px]' />}
        </div>
    )
}

export default IconButton
