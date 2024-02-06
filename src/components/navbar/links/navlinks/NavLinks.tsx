"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLink = ({ item }: any) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={clsx(
        "min-w-[100px] p-[10px] rounded-[20px] font-[500] text-center",
        {
          "bg-white text-[#0d0c22]": pathName === item.path,
        }
      )}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
