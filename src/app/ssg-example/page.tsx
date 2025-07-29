import { RenderEnv } from "@/components/RenderEnv";

// No fetch, no revalidate, no dynamic params or searchParams. Just plain static content.
export default function Page() {
  return (
    <>
      <div>This is a fully static page</div>
      <RenderEnv />
    </>
  );
}
