import ProductDetails from "@/components/catalog/details/ProductDetails"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Link from "next/link"
import React from "react"

const Details = () => {
    return (
        <div className="flex flex-col gap-4 h-screen">
            <Breadcrumb>
                <Link href={"/"}>Drug Catalog Management</Link>
                <Link href={"/"}>Drug Catalog</Link>
                <span>Detail Product</span>
            </Breadcrumb>
            <ProductDetails />
        </div>
    )
}

export default Details
