import { getUser } from "@/lib/data";
import Image from "next/image";
import React from "react";

// FETCH DATA WITH AN API
// const getData = async (userId: number) => {
//   // By default next js cache the data , if you don't want cache the data {cache: "no-store"}
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong!");
//   }
//   return res.json();
// };

interface PostUserProps {
  userId?: number;
}

const PostUser = async ({ userId }: PostUserProps) => {
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITH AN API
  if (userId === undefined) {
    return <div>User ID is undefined</div>;
  }
  const user = await getUser(userId);

  console.log(user);
  return (
    <div className="flex items-center gap-[20px]">
      <Image
        className=" object-cover rounded-full"
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-[10px]">
        <span className="text-gray-500 font-bold">Author</span>
        <span className="font-bold">{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
