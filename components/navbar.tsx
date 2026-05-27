import Link from "next/link";
import { navData } from "@/data/navdata";


export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-4 list-none">
                {
                    navData.map((item) => (
                        <li key={item.id}>
                            <Link href={item.link} className="no-underline text-foreground transition-colors duration-200 ease-in-out hover:text-primary-500">
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}