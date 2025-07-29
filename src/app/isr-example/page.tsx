import { RenderEnv } from "@/components/RenderEnv";
import { Post } from "@/lib/types";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

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
