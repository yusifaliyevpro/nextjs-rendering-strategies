import { RenderEnv } from "@/components/RenderEnv";
import { Post } from "@/lib/types";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  const items = ((await res.json()) as Post[]).slice(0, 10);
  return (
    <>
      <ul className="list-decimal">
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <RenderEnv />
    </>
  );
}
