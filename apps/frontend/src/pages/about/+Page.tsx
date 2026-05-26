import type { Book, Tech } from "@mysite/shared";
import { useData } from "vike-react/useData";
import { getTechIconUrl } from "../../app/importImages";
import profileImg from "../../assets/profile.jpg";
import { BookCard } from "../../components/BookCard";
import { techs } from "../../data/tech";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "../../style.css";

const techCategories = [
  { title: "Languages", key: "Languages" },
  { title: "Frameworks & Libraries", key: "Frameworks / Libraries" },
  {
    title: "Infrastructure & Environments",
    key: "Infrastructure / Environments",
  },
  { title: "Tooling & Workflows", key: "Tooling / Workflows" },
];

function TechBlock({ title, items }: { title: string; items: Tech[] }) {
  return (
    <div
      style={{
        border: "1px solid var(--rule)",
        padding: 20,
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          marginBottom: 14,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            style={{
              border: "1px solid var(--rule-soft)",
              borderRadius: 2,
              padding: "4px 8px",
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.04em",
              color: "var(--ink-mute)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 300ms, border-color 300ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--rule)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--ink-mute)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--rule-soft)";
            }}
          >
            <img
              src={getTechIconUrl(item.cover)}
              alt={item.name}
              style={{ width: 16, height: 16, objectFit: "contain" }}
              loading="lazy"
            />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({
  no,
  kicker,
  title,
}: {
  no: string;
  kicker: string;
  title: string;
}) {
  const ruleRef = useScrollReveal<HTMLDivElement>(0.1);
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        marginBottom: 64,
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.3em",
            color: "var(--accent)",
            textTransform: "uppercase",
          }}
        >
          {no} / {kicker}
        </span>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 200,
            fontSize: "clamp(40px, 6vw, 80px)",
            letterSpacing: "-0.022em",
            margin: 0,
            lineHeight: 1,
          }}
        >
          {title}
        </h2>
      </div>
      <div
        ref={ruleRef}
        className="rule-draw"
        style={{ flex: 1, alignSelf: "flex-end", marginBottom: 18 }}
      />
    </div>
  );
}

const About = () => {
  const { favoriteBooks } = useData<{ favoriteBooks: Book[] }>();

  const profileRef = useScrollReveal<HTMLElement>(0.1);
  const researchRef = useScrollReveal<HTMLElement>(0.1);
  const codingRef = useScrollReveal<HTMLElement>(0.05);
  const booksRef = useScrollReveal<HTMLElement>(0.05);

  return (
    <div>
      {/* Page header */}
      <section
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "140px 40px 80px",
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
          fol. 002 / About Me
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
          De auctore.
        </h1>
        <div className="rule-draw in" />
      </section>

      {/* § 01 Profile */}
      <section
        ref={profileRef}
        className="rv"
        style={{ maxWidth: 1320, margin: "0 auto", padding: "80px 40px 120px" }}
      >
        <SectionHeader no="§ 01" kicker="Profile" title="Profile." />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="about-profile-grid"
        >
          {/* Portrait */}
          <div>
            <div style={{ border: "2px solid var(--rule)", padding: 8 }}>
              <img
                src={profileImg}
                alt="Ryutaro Matsuba"
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  filter: "grayscale(0.4)",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
                marginTop: 12,
              }}
            >
              Ryutaro Matsuba
            </div>
            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "8px 16px",
                marginTop: 16,
                fontFamily: "var(--mono)",
              }}
            >
              {[
                ["Status", "B4 → M1 (予定)"],
                ["Field", "経営学・組織論"],
                ["Place", "Tokyo, Japan"],
              ].map(([dt, dd]) => (
                <>
                  <dt
                    key={`dt-${dt}`}
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--ink-mute)",
                    }}
                  >
                    {dt}
                  </dt>
                  <dd key={`dd-${dt}`} style={{ margin: 0, fontSize: 12 }}>
                    {dd}
                  </dd>
                </>
              ))}
            </dl>
          </div>

          {/* Bio */}
          <div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: 20,
                lineHeight: 1.6,
                fontWeight: 300,
                margin: "0 0 28px",
                paddingLeft: 22,
                borderLeft: "1px solid var(--accent)",
                fontStyle: "italic",
              }}
            >
              東京理科大学経営学部経営学科。趣味は読書と書店巡り、好きなアーティストのライブ。好奇心が強く、気になったことを片端から調べてしまう。
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                margin: "0 0 16px",
                color: "var(--ink-mute)",
              }}
            >
              大学入学後に読書とプログラミングにハマる。本のジャンルは社会科学・人文学を中心に多岐にわたり、特に経営学・歴史・哲学・コンピュータサイエンスを好む。
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                margin: 0,
                color: "var(--ink-mute)",
              }}
            >
              このサイトは私自身の思考と学びを整理し可視化する場。自分の記録として書きつつ、誰かにとっての小さな灯火になれば幸いです。
            </p>
            <div
              style={{
                marginTop: 24,
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--accent)",
                letterSpacing: "0.15em",
              }}
            >
              ¹ profile
            </div>
          </div>
        </div>
      </section>

      {/* § 02 Research */}
      <section
        ref={researchRef}
        id="research"
        className="rv"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px 40px 120px",
          scrollMarginTop: 80,
        }}
      >
        <SectionHeader no="§ 02" kicker="Research" title="Research." />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: 80,
            alignItems: "start",
          }}
          className="about-research-grid"
        >
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.9, margin: "0 0 20px" }}>
              現在大学では経営学における
              <strong>経営組織や経営管理・経営戦略論</strong>
              を専門として勉強しています。
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, margin: "0 0 20px" }}>
              卒業研究では主に組織の中における人材の多様性と組織の知の関係性をテーマとしており、具体的には個人内の多様性である
              <strong>イントラパーソナルダイバーシティ</strong>と
              <strong>認知的柔軟性</strong>
              の関連性についての研究を行なっています。
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, margin: 0 }}>
              大学院ではこのテーマから発展させ引き続き研究を進めて行く予定です。
            </p>
          </div>

          {/* Keyword card */}
          <div
            style={{
              border: "1px solid var(--rule)",
              padding: 24,
            }}
          >
            <dl style={{ margin: 0 }}>
              {[
                ["Field", "Management · Organization Science"],
                ["Theme", "Intrapersonal Diversity"],
                ["Focus", "Cognitive Flexibility"],
                ["Method", "Empirical · Survey study"],
                ["Status", "Undergrad thesis → M.A. plan"],
              ].map(([dt, dd]) => (
                <div key={dt as string} style={{ marginBottom: 16 }}>
                  <dt
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "var(--ink-mute)",
                      marginBottom: 4,
                    }}
                  >
                    {dt}
                  </dt>
                  <dd
                    style={{
                      margin: 0,
                      fontFamily: "var(--mono)",
                      fontSize: 13,
                    }}
                  >
                    {dd}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* § 03 Coding */}
      <section
        ref={codingRef}
        id="coding"
        className="rv"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px 40px 120px",
          scrollMarginTop: 80,
        }}
      >
        <SectionHeader no="§ 03" kicker="Coding" title="Coding." />

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.9,
            margin: "0 0 40px",
            maxWidth: 720,
          }}
        >
          <a
            href="https://42tokyo.jp/"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            42Tokyo
          </a>
          というエンジニア養成機関を卒業。完全初学者からC言語を通じてコンピュータサイエンスの基礎を習得し、同時に基本情報技術者試験も一発で合格。個人ではTypeScriptをはじめReact、Vite、HonoといったWeb技術や、Rustなども勉強中。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
          className="tech-grid"
        >
          {techCategories.map(({ title, key }) => (
            <TechBlock
              key={key}
              title={title}
              items={techs.filter((t) => t.category === key)}
            />
          ))}
        </div>
      </section>

      {/* § 04 Books */}
      <section
        ref={booksRef}
        id="books"
        className="rv"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px 40px 120px",
          scrollMarginTop: 80,
        }}
      >
        <SectionHeader no="§ 04" kicker="Books" title="Books." />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: 80,
            alignItems: "start",
            marginBottom: 60,
          }}
          className="about-books-grid"
        >
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.9, margin: "0 0 20px" }}>
              読書にハマったのは大学に入学してから。元々知的好奇心みたいなものは比較的高かったので気になった本を片っ端から買っては読みを繰り返していたら、4年で大体350冊くらいの本を読んでいました。
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, margin: "0 0 20px" }}>
              特によく読むジャンルとしては、経営学や歴史、思想・哲学、コンピュータサイエンスなど。新書が好きで、特に岩波新書、講談社現代新書が個人的好きな出版レーベルです。
            </p>
            <a
              href="/books"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
              className="u-link"
            >
              Open Library →
            </a>
          </div>

          {/* Stats */}
          <div>
            {[
              ["≈ 350", "冊読了"],
              ["岩波文庫 / 講談社現代新書", "好きなレーベル"],
            ].map(([num, label]) => (
              <div
                key={label as string}
                style={{
                  paddingBottom: 20,
                  marginBottom: 20,
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 200,
                    fontSize:
                      (num as string).length > 10
                        ? "clamp(16px, 2.2vw, 24px)"
                        : "clamp(28px, 4vw, 48px)",
                    color: "var(--accent)",
                    lineHeight: 1.2,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: "var(--ink-mute)",
                    marginTop: 6,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite books */}
        {favoriteBooks.length > 0 && (
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
                marginBottom: 24,
              }}
            >
              おすすめの本
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 16,
              }}
            >
              {favoriteBooks.map((book, i) => (
                <div
                  key={book.id}
                  className={i >= 4 ? "fav-book-pc-only" : ""}
                  style={{ width: 160, flexShrink: 0 }}
                >
                  <BookCard {...book} />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <style>{`
        @media (max-width: 820px) {
          .about-profile-grid,
          .about-research-grid,
          .about-books-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .tech-grid { grid-template-columns: 1fr !important; }
          .fav-book-pc-only { display: none; }
        }
        @media (max-width: 720px) {
          section { padding-left: 22px !important; padding-right: 22px !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
