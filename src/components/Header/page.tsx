"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Resources", href: "/resources" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
    { name: "About Us", href: "/about" },
    { name: "Get in Touch", href: "./#contact" },
  ];

  const lastLink = navLinks[navLinks.length - 1];
  const menuLinks = navLinks.slice(0, -1);

  return (
    <></>
  // <header className="header px-3">
  //   <div className="header-wrapper d-flex justify-content-between gap-4 align-items-center">
  //     <Link href="/" className="logo">
  //       <Image src="/logo.svg" alt="Logo" width={150} height={50} />
  //     </Link>
  //     <nav className="nav">
  //       {menuLinks.map((link, i) => (
  //         <Link
  //           key={i}
  //           href={link.href}
  //           className={
  //             link.href === "/"
  //               ? pathname === "/"
  //                 ? "active"
  //                 : ""
  //               : pathname.startsWith(link.href)
  //               ? "active"
  //               : ""
  //           }>
  //           {link.name}
  //         </Link>
  //       ))}
  //       {/* LAST LINK HERE */}
  //       <Link href={lastLink.href} className="">
  //         {lastLink.name}
  //       </Link>
  //     </nav>
  //   </div>
  // </header>
  );
}
