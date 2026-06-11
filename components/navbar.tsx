"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/navdata";
import { navItems } from "@/data/navdata";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <ul className="flex not-md:items-start not-md:flex-col items-center justify-center gap-8">
      {navItems.map((item: NavItem) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`text-current transition-colors hover:text-primary-500 ${
                isActive
                  ? "font-semibold underline underline-offset-4"
                  : "font-normal"
              }`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
