import { RenderEnv } from "@/components/RenderEnv";
import { Post } from "@/lib/types";

// A static page that fetches data at build time
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "force-cache" });

  const data = ((await res.json()) as Post[]).slice(0, 10);

  return (
    <>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <RenderEnv />
    </>
  );
}
