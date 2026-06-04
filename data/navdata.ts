export type NavItem = {
  id: number;
  name: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About us",
    href: "/about",
  },
  {
    id: 3,
    name: "Resources",
    href: "/resources",
  },
  {
    id: 4,
    name: "Certificates",
    href: "/certificates",
  },
  {
    id: 5,
    name: "Socials",
    href: "/socials",
  },
  {
    id: 6,
    name: "Contact us",
    href: "/contact",
  },
];
