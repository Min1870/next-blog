"use client";

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }: any) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className=" flex flex-col gap-[20px]">
      <h1>Add New Post</h1>
      <input
        className="p-[20px] border-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        type="hidden"
        name="userId"
        value={userId}
      />
      <input
        className="p-[20px] border-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className="p-[20px] border-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        type="text"
        name="slug"
        placeholder="slug"
      />
      <input type="text" name="img" placeholder="img" />
      <textarea
        className="p-[20px] border-[--bgSoft] border-none rounded-[5px] text-[--textColor]"
        name="desc"
        placeholder="desc"
        rows={10}
      />
      <button className="p-[20px] cursor-pointer bg-[--btn] border-none rounded-[5px] text-[--textColor] font-bold">
        Add
      </button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
