import { FaRegFilePowerpoint, FaChartPie, FaRegFile, FaRegFileLines, FaUserGroup, FaBox, FaRegClipboard } from "react-icons/fa6";
import { AiOutlinePieChart } from "react-icons/ai";

export const sidebarMenu = [
    {
        label: "Dashboard",
        icon: <FaChartPie />,
        href: "/"
    },
    {
        label: "Seller Management",
        icon: <FaRegFileLines />,
    },
    {
        label: "Item Management",
        icon: <FaBox />,
    },
    {
        label: "Order Management",
        icon: <FaUserGroup />,
    },
    {
        label: "Drug Catalog Manager",
        icon: <FaRegFileLines />,
        sub: [
            {
                label: "Drug Catalog",
                href: "/"
            }
        ]
    },
    {
        label: "Benefit Management",
        icon: <FaRegClipboard />,
    },
    
]