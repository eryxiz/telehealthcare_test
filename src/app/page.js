import ProductFilter from "@/components/catalog/ProductFilter"
import ProductList from "@/components/catalog/ProductList"
import Topbar from "@/components/layout/Topbar"
import Breadcrumb from "@/components/ui/Breadcrumb"

export default function Home() {
    return (
        <>
            <Breadcrumb>
                <p>Test</p>
                <p>Test2</p>
            </Breadcrumb>
            <ProductFilter />
            <ProductList />
        </>
    )
}
