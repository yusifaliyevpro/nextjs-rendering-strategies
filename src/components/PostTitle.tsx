"use client";
import { Post } from "@/lib/types";
import { use } from "react";

export function PostTitle({ postPromise }: { postPromise: Promise<Post> }) {
  const post = use(postPromise);
  return <p>Post Title: {post.title}</p>;
}
