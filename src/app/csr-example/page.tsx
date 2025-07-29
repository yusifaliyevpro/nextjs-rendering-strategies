"use client";
import { RenderEnv } from "@/components/RenderEnv";
import { Post } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Page() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then(setPost);
  }, []);

  if (!post) return <div>Loading…</div>;

  return (
    <>
      <div className="flex w-150 flex-col gap-y-5">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <RenderEnv />
    </>
  );
}
