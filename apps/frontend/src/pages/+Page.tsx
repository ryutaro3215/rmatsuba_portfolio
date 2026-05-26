import profileImg from "../assets/profile.jpg";
import { KineticText } from "../components/KineticText";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../style.css";

const chapters = [
  {
    no: "01",
    cat: "Research",
    title: "経営組織と多様性",
    sub: "Management organization & cognitive diversity",
    to: "/about#research",
    text: "大学・大学院では、組織におけるIntrapersonal Diversity（個人内の多様性）と組織の関連性について研究。",
    tags: ["経営学", "組織論"],
  },
  {
    no: "02",
    cat: "Coding",
    title: "システムからWebまで",
    sub: "From systems to the web",
    to: "/about#coding",
    text: "42Tokyo（23.8 — 26.1）卒業。C / C++ / TypeScript を中心に、OS・アルゴリズム・ネットワークの基礎を経て、React・Hono・Rust を学ぶ。",
    tags: ["42Tokyo", "TypeScript", "Rust"],
  },
  {
    no: "03",
    cat: "Library",
    title: "面白かった書籍紹介",
    sub: "≈ 350 volumes, mostly Iwanami-Shinsho",
    to: "/books",
    text: "週に一度の書店巡り。経営・歴史・哲学・コンピュータサイエンス。岩波新書と講談社現代新書。読了書は Library で公開している。",
    tags: ["新書", "書評"],
  },
];

function ChapterCard({ c }: { c: (typeof chapters)[number] }) {
  const ref = useScrollReveal<HTMLAnchorElement>(0.15);
  return (
    <a ref={ref} href={c.to} className="rv vb-ch">
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          display: "flex",
          gap: 10,
          marginBottom: 18,
        }}
      >
        <span style={{ color: "var(--accent)" }}>{c.no}</span>
        <span style={{ color: "var(--ink-mute)" }}>— {c.cat}</span>
      </div>
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 30,
          letterSpacing: "-0.01em",
          margin: "0 0 6px",
          lineHeight: 1.15,
        }}
      >
        {c.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "var(--ink-mute)",
          margin: "0 0 18px",
        }}
      >
        {c.sub}
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.8, margin: "0 0 24px", flex: 1 }}>
        {c.text}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 28,
        }}
      >
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            letterSpacing: "0.06em",
            display: "flex",
            flexWrap: "wrap" as const,
            gap: 8,
            color: "var(--ink-mute)",
          }}
        >
          {c.tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
        <span
          className="vb-arrow"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 18,
            color: "var(--accent)",
            transition: "transform 400ms var(--ease)",
          }}
        >
          →
        </span>
      </div>
    </a>
  );
}

const Home = () => {
  const profileRef = useScrollReveal<HTMLElement>(0.1);
  const chaptersRef = useScrollReveal<HTMLElement>(0.05);
  const epilogueRef = useScrollReveal<HTMLElement>(0.1);

  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          padding: "140px 40px 80px",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1.7fr 1fr",
            gap: 64,
            alignItems: "end",
          }}
          className="vb-hero-inner"
        >
          {/* Left: big Latin quote */}
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                display: "flex",
                gap: 12,
                alignItems: "center",
                marginBottom: 36,
                color: "var(--accent)",
              }}
            >
              <span>fol. 001</span>
              <span style={{ color: "var(--ink-quiet)" }}>/</span>
              <span>Spinoza · Ethica III · Praefatio</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontWeight: 200,
                fontSize: "clamp(36px, 7.4vw, 108px)",
                lineHeight: 0.95,
                letterSpacing: "-0.022em",
                margin: 0,
                wordSpacing: "0.08em",
              }}
            >
              <KineticText
                text="Non ridere, non lugere, neque detestari, sed intelligere."
                by="word"
                step={60}
                delay={200}
              />
            </h1>

            <div style={{ marginTop: 44, maxWidth: 540 }}>
              <p style={{ fontSize: 15, lineHeight: 1.9, margin: 0 }}>
                馬鹿にしたり嘆いたり疑ったりせずに、
                <br />
                ただありのままを理解する。
              </p>
              <p
                style={{
                  marginTop: 14,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "var(--ink-mute)",
                  fontStyle: "italic",
                }}
              >
                Not to laugh, nor to weep, nor to scorn —{" "}
                <em>only to understand.</em>
              </p>
            </div>
          </div>

          {/* Right: catalog cards */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                border: "1px solid var(--rule)",
                padding: "22px 22px 20px",
                background:
                  "color-mix(in oklch, var(--bg-elev) 60%, transparent)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--ink-mute)",
                  paddingBottom: 12,
                  borderBottom: "1px solid var(--rule-soft)",
                  marginBottom: 12,
                }}
              >
                Catalog
              </div>
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "78px 1fr",
                  gap: "8px 14px",
                  margin: 0,
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                }}
              >
                {[
                  ["Title", "R. Matsuba's Notebook"],
                  ["Author", "Ryutaro Matsuba"],
                  ["Period", "2025 —"],
                  ["Subject", "Management · Diversity · Computing"],
                  ["Language", "JA · EN"],
                  ["Place", "Tokyo"],
                ].map(([dt, dd]) => (
                  <>
                    <dt
                      key={`dt-${dt}`}
                      style={{
                        color: "var(--ink-mute)",
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                        fontSize: 9,
                        paddingTop: 2,
                      }}
                    >
                      {dt}
                    </dt>
                    <dd
                      key={`dd-${dt}`}
                      style={{ margin: 0, color: "var(--ink)" }}
                    >
                      {dd}
                    </dd>
                  </>
                ))}
              </dl>
            </div>

            <div
              style={{
                border: "1px solid var(--rule)",
                padding: "22px 22px 20px",
                background:
                  "color-mix(in oklch, var(--bg-elev) 60%, transparent)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--ink-mute)",
                  paddingBottom: 12,
                  borderBottom: "1px solid var(--rule-soft)",
                  marginBottom: 12,
                }}
              >
                Note
              </div>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: 13,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                ※ このサイトは私自身の思考と学びを記録するためのサイトです。
                <br />
                <span style={{ color: "var(--ink-mute)" }}>
                  A private notebook of thought.
                </span>
              </p>
            </div>
          </aside>
        </div>

        <div className="scroll-cue">Scroll</div>
      </section>

      {/* ── § 01 THE AUTHOR ── */}
      <section
        ref={profileRef}
        className="rv"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "120px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 24,
            marginBottom: 64,
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.3em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              § 01
            </span>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontWeight: 200,
                fontSize: "clamp(36px, 5.4vw, 72px)",
                letterSpacing: "-0.022em",
                margin: 0,
                lineHeight: 1,
              }}
            >
              The author
            </h2>
          </div>
          <div
            className="rule-draw in"
            style={{ flex: 1, alignSelf: "flex-end", marginBottom: 18 }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="profile-grid"
        >
          {/* Portrait */}
          <div style={{ position: "relative" }}>
            <img
              src={profileImg}
              alt="Ryutaro Matsuba"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                objectFit: "cover",
                filter: "grayscale(0.5) contrast(1.05)",
                border: "1px solid var(--rule)",
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: -22,
                left: 8,
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
              }}
            >
              fig. 01
            </span>
          </div>

          {/* Text */}
          <div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                lineHeight: 1.5,
                fontWeight: 300,
                margin: "0 0 28px",
                paddingLeft: 22,
                borderLeft: "1px solid var(--accent)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>¹</span>{" "}
              早稲田大学大学院商学研究科
              M1。趣味は読書や書店巡り、official髭男dism、美味しいものを食べること。
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                margin: "0 0 16px",
                paddingLeft: 22,
              }}
            >
              <span style={{ color: "var(--accent)" }}>²</span>{" "}
              読む本のジャンルは社会科学・人文学を中心に、Computer
              Scienceや数学など多岐にわたる。
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                margin: "0 0 16px",
                paddingLeft: 22,
              }}
            >
              <span style={{ color: "var(--accent)" }}>³</span>{" "}
              自分が学習したメモことのメモや、書籍の紹介などをしています。
            </p>

            <div
              style={{
                marginTop: 40,
                paddingTop: 28,
                borderTop: "1px solid var(--rule)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: "0.04em",
              }}
            >
              {[
                ["Roll", "Graduate School Student, Master 1"],
                ["Mail", "mrworks15@icloud.com"],
                ["Github", "https://github.com/ryutaro3215"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span
                    style={{
                      display: "block",
                      fontSize: 9,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "var(--ink-mute)",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </span>
                  <div style={{ color: "var(--ink)" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── § 02 THREE CONCERNS ── */}
      <section
        ref={chaptersRef}
        className="rv"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "120px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 24,
            marginBottom: 64,
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.3em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              § 02
            </span>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontWeight: 200,
                fontSize: "clamp(36px, 5.4vw, 72px)",
                letterSpacing: "-0.022em",
                margin: 0,
                lineHeight: 1,
              }}
            >
              Three concerns
            </h2>
          </div>
          <div
            className="rule-draw in"
            style={{ flex: 1, alignSelf: "flex-end", marginBottom: 18 }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
          className="chapters-grid"
        >
          {chapters.map((c) => (
            <ChapterCard key={c.no} c={c} />
          ))}
        </div>
      </section>

      {/* ── EPILOGUE ── */}
      <section
        ref={epilogueRef}
        className="rv"
        style={{
          padding: "160px 40px 180px",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
              marginBottom: 24,
            }}
          >
            — epigraphic afterword
          </div>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 200,
              fontSize: "clamp(28px, 4.4vw, 60px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
              margin: 0,
            }}
          >
            <KineticText
              text="To refuse neither, but only to understand —"
              by="word"
              step={50}
            />
            <br />
            <KineticText
              text="that is the work of a notebook."
              by="word"
              step={60}
              delay={1100}
              style={{ color: "var(--accent)" }}
            />
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .vb-hero-inner { grid-template-columns: 1fr !important; }
          .profile-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .chapters-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
        @media (max-width: 720px) {
          section { padding-left: 22px !important; padding-right: 22px !important; }
        }
        .vb-ch {
          display: flex;
          flex-direction: column;
          padding: 28px 0 0;
          border-top: 1px solid var(--rule);
          cursor: pointer;
          position: relative;
          transition: transform 600ms var(--ease);
          text-decoration: none;
          color: var(--ink);
        }
        .vb-ch::before {
          content: "";
          position: absolute;
          top: -1px; left: 0;
          height: 1px;
          width: 0;
          background: var(--accent);
          transition: width 700ms var(--ease);
        }
        .vb-ch:hover::before { width: 100%; }
        .vb-ch:hover { transform: translateY(-4px); }
        .vb-ch:hover .vb-arrow { transform: translateX(8px); }
      `}</style>
    </div>
  );
};

export default Home;
