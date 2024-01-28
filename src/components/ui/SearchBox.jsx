import React from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"

const SearchBox = () => {
    return (
        <div className='relative'>
            <span className='absolute flex items-center justify-center inset-y-0 left-2 text-zinc-600'>
                <FaMagnifyingGlass />
            </span>
            <input type='text' placeholder='Search something..' className='border border-zinc-200 rounded-md p-2 pl-8 focus:outline-none focus:border-blue-500 transition-colors duration-200' />
        </div>
    )
}

export default SearchBox
