"use client"
import React from "react"

const Breadcrumb = ({ children }) => {
    return (
        <ul className="flex items-center gap-2 text-lg">
            {children.map((child, idx) => (
                <>
                    <li className={`${idx == children.length -1 ? "text-zinc-600" : "text-blue-600"}`}>{child}</li>
                    {idx < children.length -1 && <li className="text-zinc-600">/</li>}
                </>
            ))}
        </ul>
    )
}

export default Breadcrumb
