import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className="">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div
          className="my-[20px] mx-0 flex items-center justify-between gap-[20px]"
          key={post.id}
        >
          <div className="flex items-center gap-[20px]">
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className="">{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="py-[5px] px-[10px] bg-[#dc143c97] text-[--textColor] rounded-[5px] border-none cursor-pointer">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
