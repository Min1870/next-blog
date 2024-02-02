import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import React from "react";

// FETCH DATA WITH AN API
// const getData = async () => {
//   // By default next js cache the data , if you don't want cache the data {cache: "no-store"}
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});
//   if (!res.ok) {
//     throw new Error("Something went wrong!");
//   }
//   return res.json();
// };

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();
  return (
    <div className="flex flex-wrap gap-[20px]">
      {posts.map((post: PostProps) => (
        <div key={post.id} className="w-full md:w-[45%] lg:w-[30%]">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
