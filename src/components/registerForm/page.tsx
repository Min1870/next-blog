import { register } from "@/lib/action";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  return (
    <form className="flex flex-col items-center gap-[30px]" action={register}>
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
      {/* {state?.error} */}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
