export default function Home() {
  return (
    <ol className="flex list-decimal flex-col gap-y-3 font-bold">
      {links.map((link, i) => (
        <li key={i} className="text-blue-600">
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </ol>
  );
}

const links: {
  title: string;
  href: string;
}[] = [
  { title: "Full Page CSR Example", href: "/csr-example" },
  { title: "SSR Example", href: "/ssr-example" },
];
