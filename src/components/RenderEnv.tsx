export function RenderEnv() {
  return (
    <div className="mt-20">
      <p>
        This page is rendered on:{" "}
        <span className="font-bold text-blue-500">
          {new Date().toLocaleTimeString("en-GB", { timeZone: "UTC" })} UTC
        </span>
      </p>
      <p>
        Rendered on: <span className="font-bold text-blue-500">BROWSER</span>
      </p>
    </div>
  );
}
