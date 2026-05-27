export type NavItem = {
  id: number;
  name: string;
  link: string;
};

export const navData: NavItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Resources",
    link: "/resources",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Team",
    link: "/team",
  },
  {
    id: 5,
    name: "Certificate",
    link: "/certificate",
  },
  {
    id: 6,
    name: "Partners",
    link: "/partners",
  },
  {
    id: 7,
    name: "Discord",
    link: "https://discord.gg/igcse",
  },
  {
    id: 8,
    name: "Reddit",
    link: "https://www.reddit.com/r/igcse/",
  },
];
