import Image from "next/image";
import Link from "next/link";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  img?: string;
  slug?: string;
  createdAt?: string;
}

interface PostCardProps {
  post: PostProps; // Specify the type of the 'post' parameter
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex flex-col gap-[20px] mb-[20px]">
      <div className="flex">
        {post.img && (
          <div className="w-[90%] h-[400px] relative">
            <Image src={post.img} alt="" fill className="object-cover" />
          </div>
        )}

        <span className="text-xs rotate-90 m-auto ">
          {post.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className="">
        <h1 className="w-[90%] mb-[20px] text-2xl">{post.title}</h1>
        <p className="w-[90%] mb-[20px] font-light text-gray-500">
          {post.body}
        </p>
        <Link className=" underline" href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
