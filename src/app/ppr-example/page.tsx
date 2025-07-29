// app/ppr-example/page.tsx
import { Suspense } from "react";

export const experimental_ppr = true;

export default function Page() {
  return (
    <>
      <header>
        <h1>This will be prerendered</h1>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList />
        </Suspense>
      </main>
    </>
  );
}

// components/ProductList.tsx
import { Post } from "@/lib/types";
export async function ProductList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  const data = ((await res.json()) as Post[]).slice(0, 10);

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
