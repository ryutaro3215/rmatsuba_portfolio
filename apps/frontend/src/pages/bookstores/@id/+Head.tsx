import type { Bookstore } from "@mysite/shared";
import { useData } from "vike-react/useData";

const SITE_URL = "https://rmatsuba.com";
const AUTHOR = "Ryutaro Matsuba";

export default function Head() {
  const store = useData<Bookstore>();
  if (!store) return null;

  const title = `${store.name} — rmatsuba.com`;
  const description =
    store.features.length > 160
      ? `${store.features.slice(0, 160).trimEnd()}…`
      : store.features;
  const url = `${SITE_URL}/bookstores/${store.id}`;
  const ogImage = store.images[0]?.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: store.name,
    description,
    url,
    address: {
      "@type": "PostalAddress",
      addressLocality: store.prefecture,
      streetAddress: store.address,
    },
    author: {
      "@type": "Person",
      name: AUTHOR,
      url: SITE_URL,
    },
  };

  return (
    <>
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="rmatsuba.com" />
      <meta property="og:locale" content="ja_JP" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta name="author" content={AUTHOR} />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
