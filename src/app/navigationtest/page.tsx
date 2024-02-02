"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTest = () => {
    
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(searchParams);
  //navigationtest
  // /navigationtest?q=test
  const q = searchParams.get("q");
  console.log(q); // test

  const handleClick = () => {
    console.log("Clicked");
    // router.push("/");
    router.refresh();
    //back to previous page
    // router.back()
  };
  return (
    <div>
      {/* prefetching the given url */}
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTest;
