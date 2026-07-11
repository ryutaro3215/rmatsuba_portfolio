const SITE_URL = "https://rmatsuba.com";

export default function Head() {
  const title = "Bookstores — rmatsuba.com";
  const description =
    "これまでに訪れた書店をまとめています。各書店の写真や詳細情報、地図を見ることができます。";
  const url = `${SITE_URL}/bookstores`;

  return (
    <>
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="rmatsuba.com" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
