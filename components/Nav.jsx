"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className="flex gap-8 font-semibold text-xl">
      {Links.map((lnk, index) => {
        return (
          <Link
            href={lnk.path}
            key={index}
            className={
              '${lnk.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all'
            }
          >
            {lnk.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
