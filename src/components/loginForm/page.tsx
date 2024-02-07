"use client";
import { login } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form className="flex flex-col items-center gap-[30px]" action={formAction}>
      <input
        className="p-[20px] bg-[--bg] text-[--textColor] border-none rounded-[5px]"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-[20px] bg-[--bg] text-[--textColor] border-none rounded-[5px]"
        type="password"
        placeholder="password"
        name="password"
      />

      <button className="p-[20px] cursor-pointer bg-[--btn] text-[--textColor] font-bold border-none rounded-[5px]">
        Login
      </button>
      {state?.error}
      <Link href="/register">
        Don't have an account? <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
