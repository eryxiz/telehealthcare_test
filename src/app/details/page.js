import ProductDetails from "@/components/catalog/details/ProductDetails"
import Breadcrumb from "@/components/ui/Breadcrumb"
import React from "react"

const Details = () => {
    return (
        <div className="h-screen">
            <Breadcrumb>
                <p>Test</p>
                <p>Test2</p>
            </Breadcrumb>
            <ProductDetails />
        </div>
    )
}

export default Details
