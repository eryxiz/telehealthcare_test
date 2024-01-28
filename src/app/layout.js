import { Kanit } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/layout/Sidebar"
import Topbar from "@/components/layout/Topbar"
import Footer from "@/components/layout/Footer"

const kanit = Kanit({ subsets: ["thai"], weight: "400" })

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={kanit.className}>
                <Sidebar />
                <div className="main-content mr-8 mt-6 flex flex-col gap-4">
                    <Topbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
