import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";

// FETCH DATA WITH AN API
// const getData = async (slug: string) => {
//   // By default next js cache the data , if you don't want cache the data {cache: "no-store"}
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong!");
//   }
//   return res.json();
// };

interface SinglePostProps {
  params: {
    slug: string;
  };
}
interface Post {
  img?: string;
  title?: string;
  desc?: string;
  userId?: number;
}

const SinglePostPage = async ({ params }: SinglePostProps) => {
  // FETCH DATA WITH AN API
  // const { slug } = params;
  // const post = await getData(params.slug);

  // FETCH DATA WITHOUT AN API
  const post: Post = await getPost(params.slug);

  return (
    <div className="flex gap-[100px]">
      {post.img && (
        <div className=" hidden md:flex md:flex-1 relative h-[calc(100vh-200px)]">
          <Image src={post?.img} alt="" fill className="object-cover" />
        </div>
      )}

      <div className="flex-[2] flex flex-col gap-8">
        <h1 className="text-[64px] capitalize">{post?.title}</h1>
        <div className="flex gap-[20px]">
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Published</span>
            <span className="font-semibold">01.02.24</span>
          </div>
        </div>
        <div className="text-[20px] mt-4">{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
