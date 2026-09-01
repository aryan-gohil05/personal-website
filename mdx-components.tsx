import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { slugify } from "@/lib/slugify";

function headingText(children: ReactNode): string {
  return typeof children === "string" ? children : String(children);
}

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2
      id={slugify(headingText(children))}
      className="mt-4 md:mt-12 text-2xl md:text-4xl font-black tracking-tight text-black/90 dark:text-white"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-4 md:mt-8 mb-2 text-xl md:text-2xl font-bold text-black/90 dark:text-white">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 md:mt-6 leading-relaxed md:leading-8 text-black/90 dark:text-white">
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline underline-offset-2 hover:text-primary/70"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-black/90 dark:text-white">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-black/90 dark:text-white">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="flex flex-row mt-4 max-w-full rounded-2xl border-l-4 border-primary/30 bg-base-300 p-4 italic text-base-content/70">
      <span className="mb-1 block text-3xl leading-none text-primary/40">
        &ldquo;
      </span>
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-base-200 px-1.5 py-0.5 text-sm text-primary">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <div className="mt-6 overflow-x-auto">
      <pre className="rounded-lg bg-base-200 p-4 text-sm">{children}</pre>
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
