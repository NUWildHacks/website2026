import MarkdownRenderer from "@/components/MarkdownRender";
import { LuExternalLink } from "react-icons/lu";

const RAW_URL =
  "https://raw.githubusercontent.com/MLH/mlh-policies/main/code-of-conduct.md";

export default async function Page() {
  const res = await fetch(RAW_URL);
  if (!res.ok) {
    return <p>Failed to load content.</p>;
  }
  const md = await res.text();
  return (
    <div className="flex flex-col h-full w-full min-h-screen items-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 my-2 text-nowrap hover:underline hover:underline-offset-4"
        href="https://wildhacks-2025.devpost.com/project-gallery"
      >
        <h1 className="text-2xl font-bold">MLH Code of Conduct</h1>
        <LuExternalLink size={20} />
      </a>
      <div className="px-4 md:px-32">
        <MarkdownRenderer md={md} />
      </div>
    </div>
  );
}
