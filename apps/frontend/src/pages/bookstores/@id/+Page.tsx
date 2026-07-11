import type { Bookstore } from "@mysite/shared";
import { useState } from "react";
import { useData } from "vike-react/useData";
import "../../../style.css";

const BookstoreDetail = () => {
  const store = useData<Bookstore>();
  const [activeImage, setActiveImage] = useState(0);

  if (!store) return null;

  return (
    <div
      style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "120px 40px 160px",
      }}
    >
      {/* Back link */}
      <a
        href="/bookstores"
        className="u-link"
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          display: "inline-block",
          marginBottom: 60,
        }}
      >
        ← Bookstores
      </a>

      {/* Hero: gallery + metadata */}
      <div
        className="bookstore-detail-hero"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          paddingBottom: 80,
          borderBottom: "1px solid var(--rule)",
          marginBottom: 80,
        }}
      >
        {/* Gallery */}
        <div>
          {/* Main image */}
          <div
            style={{
              aspectRatio: "4/3",
              background: "var(--rule)",
              position: "relative",
              overflow: "hidden",
              border: "1px solid var(--rule)",
            }}
          >
            {store.images[activeImage] && (
              <img
                src={store.images[activeImage].url}
                alt={`${store.name} - ${activeImage + 1}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>

          {/* Thumbnails */}
          {store.images.length > 1 && (
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 12,
              }}
            >
              {store.images.map((img, i) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`写真 ${i + 1} を表示`}
                  style={{
                    flex: 1,
                    aspectRatio: "4/3",
                    background: "var(--rule)",
                    position: "relative",
                    overflow: "hidden",
                    border:
                      i === activeImage
                        ? "2px solid var(--accent)"
                        : "1px solid var(--rule)",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <img
                    src={img.url}
                    alt={`${store.name} - ${i + 1}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Metadata */}
        <div>
          {/* Type kicker */}
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            {store.type}
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 200,
              fontSize: "clamp(36px, 5vw, 68px)",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              margin: "0 0 16px",
            }}
          >
            {store.name}
          </h1>

          {/* Metadata DL */}
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "16px 24px",
              margin: "32px 0",
            }}
          >
            {(
              [
                ["都道府県", store.prefecture],
                ["住所", store.address],
                ["最寄り駅", store.nearestStation],
                ["種別", store.type],
                [
                  "おすすめ度",
                  "★".repeat(store.rating) + "☆".repeat(5 - store.rating),
                ],
              ] as const
            ).map(([dt, dd]) => (
              <div key={dt} style={{ display: "contents" }}>
                <dt
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--ink-mute)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {dt}
                </dt>
                <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>
                  {dd}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features */}
      <section style={{ marginBottom: 80 }}>
        <h2
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 24,
          }}
        >
          Features
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            maxWidth: 720,
            whiteSpace: "pre-wrap",
          }}
        >
          {store.features}
        </p>
      </section>

      {/* Map */}
      {store.mapUrl && (
        <section>
          <h2
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 24,
            }}
          >
            Map
          </h2>
          <iframe
            src={store.mapUrl}
            title={`${store.name} の地図`}
            width="100%"
            height="400"
            style={{ border: "1px solid var(--rule)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      )}

      <style>{`
        @media (max-width: 720px) {
          .bookstore-detail-hero {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          div[style*="padding: 120px 40px"] {
            padding-left: 22px !important;
            padding-right: 22px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BookstoreDetail;
