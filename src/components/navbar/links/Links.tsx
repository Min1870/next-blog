"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./navlinks/NavLinks";
import { handleLogout } from "@/lib/action";

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

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  isAdmin?: boolean | null | undefined;
}

interface Session {
  user?: User;
  expires: string;
}

interface SessionProps {
  session: Session | null;
}

const Links = ({ session }: SessionProps) => {
  const [open, setOpen] = useState(false);

  const isAdmin = true;
  return (
    <div>
      <div className="hidden md:flex items-center gap-[10px]">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session?.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="p-[10px] cursor-pointer text-black bg-white font-[500]">
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
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
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
