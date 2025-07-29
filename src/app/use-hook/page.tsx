import { PostTitle } from "@/components/PostTitle";
import { Post } from "@/lib/types";
import { Suspense } from "react";

export default function Page() {
  const postPromise: Promise<Post> = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (r) => r.json(),
  );

  return (
    <>
      <h1 className="mb-10 text-2xl font-bold">use() Hook Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostTitle postPromise={postPromise} />
      </Suspense>
    </>
  );
}
