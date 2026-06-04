import Image from "next/image";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="sticky top-0 flex flex-row items-center justify-between px-6 py-4 min-w-full">
      <div className="flex flex-row items-center gap-4 font-bold">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        r/IGCSE
      </div>
      <Navbar />
      <div></div> {/* Empty div to center the navbar */}
    </div>
  );
}
