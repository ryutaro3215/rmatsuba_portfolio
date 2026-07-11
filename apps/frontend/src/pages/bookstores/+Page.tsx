import type { Bookstore } from "@mysite/shared";
import { useData } from "vike-react/useData";
import { BookstoreCard } from "../../components/BookstoreCard";
import "../../style.css";

const Bookstores = () => {
  const { bookstores } = useData<{ bookstores: Bookstore[] }>();

  return (
    <div>
      {/* Page header */}
      <section
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "140px 40px 60px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 16,
          }}
        >
          fol. 005 / Bookstores
        </div>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 200,
            fontSize: "clamp(56px, 8vw, 120px)",
            letterSpacing: "-0.022em",
            lineHeight: 1,
            margin: "0 0 40px",
          }}
        >
          Libraria.
        </h1>
        <div className="rule-draw in" />
      </section>

      {/* Status bar */}
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "20px 40px 12px",
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
        }}
      >
        All — {bookstores.length} stores
      </div>

      {/* Bookstore grid */}
      <section
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "8px 40px 120px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {bookstores.map((store) => (
          <BookstoreCard key={store.id} {...store} />
        ))}
      </section>

      <style>{`
        @media (max-width: 720px) {
          section { padding-left: 22px !important; padding-right: 22px !important; }
          div[style*="padding: 140px 40px"] { padding-left: 22px !important; padding-right: 22px !important; }
          div[style*="padding: 20px 40px"] { padding-left: 22px !important; padding-right: 22px !important; }
        }
      `}</style>
    </div>
  );
};

export default Bookstores;
