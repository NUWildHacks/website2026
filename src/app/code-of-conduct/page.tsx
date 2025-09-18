import MarkdownRenderer from "@/components/MarkdownRender";
import { LuExternalLink } from "react-icons/lu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      <div className="w-full items-start justify-start px-4 md:px-32 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>MLH Code of Conduct</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 my-2 text-nowrap hover:underline hover:underline-offset-4"
        href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
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
