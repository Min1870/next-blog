import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

interface SlugProps {
  params: {
    slug: string;
  };
}

export const GET = async (request: any, { params }: SlugProps) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const DELETE = async (request: any, { params }: SlugProps) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("post deleted");
  } catch (error: any) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
};
