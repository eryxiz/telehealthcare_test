import React from "react"

const CustomSelect = ({ className }) => {
    return (
        /* Ref: https://flowbite.com/docs/forms/select/ */
        <select class={`${className} border border-zinc-200 text-zinc-600 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}>
            <option selected>Ex : หลอด , ชุด , ขวด</option>
            <option value='1'>Item 1</option>
            <option value='2'>Item 2</option>
            <option value='3'>Item 3</option>
            <option value='4'>Item 4</option>
        </select>
    )
}

export default CustomSelect
