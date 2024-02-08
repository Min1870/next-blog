"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-[20px]">
      <h1>Add New User</h1>
      <input
        className="p-[20px] bg-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        className="p-[20px] bg-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        type="text"
        name="email"
        placeholder="email"
      />
      <input
        className="p-[20px] bg-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        className="p-[20px] bg-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        type="text"
        name="img"
        placeholder="img"
      />
      <select
        className="p-[20px] bg-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        name="isAdmin"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button className="p-[20px] cursor-pointer bg-[--btn] border-none rounded-[5px] text-[--textColor] font-bold">
        Add
      </button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
