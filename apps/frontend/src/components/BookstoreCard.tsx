import type { Bookstore } from "@mysite/shared";

export const BookstoreCard = (data: Bookstore) => {
  const thumbnail = data.images[0]?.url ?? "";

  return (
    <a
      href={`/bookstores/${data.id}`}
      className="bookstore-card-link"
      style={{ display: "block" }}
    >
      <article
        style={{
          border: "1px solid var(--rule)",
          transition:
            "transform 400ms var(--ease), border-color 400ms var(--ease)",
          cursor: "pointer",
        }}
      >
        {/* Thumbnail */}
        <div
          style={{
            aspectRatio: "4/3",
            background: "var(--rule)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {thumbnail && (
            <img
              src={thumbnail}
              alt={data.name}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
          {/* Type badge */}
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              fontFamily: "var(--mono)",
              fontSize: 9,
              letterSpacing: "0.1em",
              padding: "3px 8px",
              background: "var(--bg)",
              border: "1px solid var(--rule)",
              color: "var(--ink-mute)",
            }}
          >
            {data.type}
          </span>
        </div>

        {/* Metadata */}
        <div style={{ padding: "10px 12px 12px" }}>
          <div
            style={{
              fontFamily: "var(--serif)",
              fontSize: 13,
              lineHeight: 1.35,
              marginBottom: 4,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {data.name}
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "var(--ink-mute)",
              letterSpacing: "0.05em",
            }}
          >
            {data.prefecture}
          </div>
        </div>
      </article>

      <style>{`
        .bookstore-card-link:hover article {
          transform: translateY(-4px);
          border-color: var(--accent) !important;
        }
      `}</style>
    </a>
  );
};
