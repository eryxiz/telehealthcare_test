import ProductFilter from "@/components/catalog/ProductFilter"
import ProductList from "@/components/catalog/ProductList"
import Topbar from "@/components/layout/Topbar"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Link from "next/link"

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <Breadcrumb>
                <Link href={"/"}>Drug Catalog Management</Link>
                <Link href={"/"}>Drug Catalog</Link>
            </Breadcrumb>
            <ProductFilter />
            <ProductList />
        </div>
    )
}
