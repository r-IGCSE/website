import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";


export default function Header() {
    return (
        <header className="flex items-center justify-between p-5">
            <Link href="/">
                <div className="flex items-center gap-2 font-bold">
                    <Image src="/logo.svg" alt="r/IGCSE Logo" width={30} height={30} />
                    <span className="logo-text">r/IGCSE</span>
                </div>
            </Link>
            <Navbar />
        </header>
    )
}