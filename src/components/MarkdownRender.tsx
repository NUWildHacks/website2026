"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

export default function MarkdownRenderer({ md }: { md: string }) {
  return (
    <article className="prose max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
        {md}
      </ReactMarkdown>
    </article>
  );
}
