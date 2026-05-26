import type { ParsedPost } from "@mysite/shared";
import { useData } from "vike-react/useData";

const SITE_URL = "https://rmatsuba.com";
const AUTHOR = "Ryutaro Matsuba";

function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/\n+/g, " ")
    .trim();
}

function toDescription(body: string, maxLen = 160): string {
  const text = stripMarkdown(body);
  return text.length > maxLen ? `${text.slice(0, maxLen).trimEnd()}…` : text;
}

export default function Head() {
  const post = useData<ParsedPost>();
  if (!post) return null;

  const { frontMatter: fm, body } = post;
  const description = toDescription(body);
  const url = `${SITE_URL}/blogs/${fm.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: fm.title,
    description,
    url,
    datePublished: fm.created_at,
    dateModified: fm.updated_at,
    keywords: fm.tags.join(", "),
    author: {
      "@type": "Person",
      name: AUTHOR,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fm.title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="rmatsuba.com" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="article:published_time" content={fm.created_at} />
      <meta property="article:modified_time" content={fm.updated_at} />
      <meta property="article:author" content={AUTHOR} />
      {fm.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fm.title} />
      <meta name="twitter:description" content={description} />

      {/* 追加メタ */}
      <meta name="author" content={AUTHOR} />
      {fm.tags.length > 0 && (
        <meta name="keywords" content={fm.tags.join(", ")} />
      )}

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
