import { LikeButton } from "@/components/LikeButton";
import { RenderEnv } from "@/components/RenderEnv";
import { Post } from "@/lib/types";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", { cache: "force-cache" });
  let post = (await res.json()) satisfies Post;
  post = { ...post, likes: 0 };
  return (
    <>
      <article className="flex flex-col items-center">
        <h1>{post.title}</h1>
        <LikeButton initialLikes={post.likes} />
      </article>
      <RenderEnv />
    </>
  );
}
