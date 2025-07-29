"use client";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Page() {
  const [post, setPost] = useState<Post | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then(setPost);
  }, []);

  if (!post) return <div>Loading…</div>;

  return (
    <div className="flex flex-col items-center gap-y-10">
      <div className="w-150">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className="flex flex-row items-center gap-x-5 text-3xl font-bold">
        <p>Count: {count}</p>
        <button
          type="button"
          className="rounded-lg bg-blue-500 p-2 text-white"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}
