"use client";

import type { NavItem } from "@/data/navdata";
import { navData } from "@/data/navdata";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";

export default function Navbar(): React.JSX.Element {
    const pathname: string | null = usePathname();
    const getActiveClass = (itemLink: string): string => {
        const isExternal: boolean = itemLink.startsWith("http");
        const isActive: boolean = !isExternal && (
            itemLink === pathname || (itemLink !== "/" && pathname?.startsWith(itemLink))
        );
        
        return isActive ? "nav-link active" : "nav-link";
    };

    return (
        <nav className="navbar">
            <ul className="nav-list">
                {
                    navData.map((item: NavItem) => (
                        <li key={item.id} className="nav-item">
                            <Link href={item.link} className={getActiveClass(item.link)}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
