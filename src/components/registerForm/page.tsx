"use client";
import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

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
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        className="p-[20px] bg-[--bg] text-[--textColor] border-none rounded-[5px]"
        type="password"
        placeholder="password"
        name="password"
      />
      <input
        className="p-[20px] bg-[--bg] text-[--textColor] border-none rounded-[5px]"
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button className="p-[20px] cursor-pointer bg-[--btn] text-[--textColor] font-bold border-none rounded-[5px]">
        Register
      </button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
