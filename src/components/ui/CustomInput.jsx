import React from 'react'

const CustomInput = ({ placeholder, type = "text", name, value, className }) => {
  return (
    <input className={`${className} border border-zinc-200 rounded-md p-2 focus:outline-none focus:border-blue-500 transition-colors duration-200`} type={type} placeholder={placeholder} name={name} value={value} />
  )
}

export default CustomInput