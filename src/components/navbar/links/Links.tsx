"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="">
      <div className="md:flex hidden items-center gap-[10px]">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={clsx(
              "min-w-[100px] p-[10px] rounded-[20px] font-semibold text-center",
              {
                "bg-white text-[#0d0c22]": pathname === link.path,
              }
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
      
      <Image
        className="md:hidden block cursor-pointer"
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute top-20 right-0 w-1/2 h-[calc(100vh-100px)] bg-var(--bg) flex flex-col items-center justify-center gap-4 md:hidden">
          {links.map((link) => {
            return (
              <Link href={link.path} key={link.title}>
                {link.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Links;
