/* variation-b.jsx — Kinetic Editorial
   Asymmetric grid. Scroll-driven word assembly. Mouse spotlight. */

const { useEffect, useRef, useState } = React;

const chaptersB = [
  {
    no: "01",
    cat: "Research",
    title: "経営組織と多様性",
    sub: "Management organization & cognitive diversity",
    to: "About.html#research",
    text: "卒業論文では、組織におけるイントラパーソナルダイバーシティ（個人内の多様性）と認知的柔軟性の関係を扱う。大学院でも継続。",
    tags: ["経営学", "組織論", "卒論"],
  },
  {
    no: "02",
    cat: "Coding",
    title: "システムからWebまで",
    sub: "From systems to the web",
    to: "About.html#coding",
    text: "42Tokyo（23.8 — 26.1）卒業。C / C++ / TypeScript を中心に、OS・アルゴリズム・ネットワークの基礎を経て、React・Hono・Rust を学ぶ。",
    tags: ["42Tokyo", "TypeScript", "Rust"],
  },
  {
    no: "03",
    cat: "Library",
    title: "おおよそ三百五十冊",
    sub: "≈ 350 volumes, mostly Iwanami-Shinsho",
    to: "Library.html",
    text: "週に一度の書店巡り。経営・歴史・哲学・コンピュータサイエンス。岩波新書と講談社現代新書。読了書は Library で公開している。",
    tags: ["岩波新書", "新書", "書評"],
  },
];

function VariationB() {
  // Hero word assembly tied to scroll (0..220)
  const heroRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;
    const words = Array.from(root.querySelectorAll(".vb-word"));
    wordsRef.current = words;

    let raf = 0;
    const update = () => {
      raf = 0;
      const top = root.getBoundingClientRect().top;
      const h = window.innerHeight;
      // 0 when hero fully in view, 1 when scrolled past
      const t = Math.min(1, Math.max(0, -top / (h * 0.6)));
      // Start "assembled" (t=0) -> exit drifts upward (t=1)
      words.forEach((w, i) => {
        const k = (i % 5) / 5;
        const dx = (k - 0.5) * 60 * t;
        const dy = -60 * t;
        const rot = (k - 0.5) * 6 * t;
        const o = 1 - t * 0.8;
        w.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
        w.style.opacity = o;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="vb">
      {/* ── HERO ── */}
      <section ref={heroRef} className="vb-hero">
        <div className="vb-hero-inner">
          {/* Left: huge italic Latin */}
          <div className="vb-hero-main">
            <div className="mono accent vb-eyebrow">
              <span>fol. 001</span>
              <span className="vb-eyebrow-sep">/</span>
              <span>Spinoza · Ethica III · Praefatio</span>
            </div>

            <h1 className="vb-latin latin">
              {"Non ridere, non lugere, neque detestari, sed intelligere."
                .split(" ")
                .map((w, i) => (
                  <React.Fragment key={i}>
                    <span className="vb-word">
                      <KineticText
                        text={w}
                        by="char"
                        step={28}
                        delay={i * 90}
                      />
                    </span>
                    {i < 7 && " "}
                  </React.Fragment>
                ))}
            </h1>

            <div className="vb-ja-block">
              <p className="vb-ja-jp">
                馬鹿にしたり嘆いたり疑ったりせずに、
                <br />
                ただありのままを理解する。
              </p>
              <p className="vb-ja-en">
                Not to laugh, nor to weep, nor to scorn —{" "}
                <em>only to understand.</em>
              </p>
            </div>
          </div>

          {/* Right: catalog metadata */}
          <aside className="vb-hero-meta">
            <div className="vb-card">
              <div className="vb-card-head mono">Catalog</div>
              <dl className="vb-card-dl mono">
                <dt>Title</dt>
                <dd>R. Matsuba's Notebook</dd>
                <dt>Author</dt>
                <dd>Ryutaro Matsuba</dd>
                <dt>Period</dt>
                <dd>MMXXII —</dd>
                <dt>Subject</dt>
                <dd>Management · Diversity · Computing · Reading</dd>
                <dt>Language</dt>
                <dd>JA · EN · LAT</dd>
                <dt>Place</dt>
                <dd>Tokyo, 35.68°N 139.69°E</dd>
              </dl>
            </div>

            <div className="vb-card vb-card-quote">
              <div className="vb-card-head mono">Note</div>
              <p className="vb-card-quote-text">
                ※ このサイトは私自身の思考と学びを記録するための私的な書斎。
                <br />
                <span className="muted">A private notebook of thought.</span>
              </p>
            </div>
          </aside>
        </div>

        <div className="scroll-cue mono">Scroll</div>
      </section>

      {/* ── PROFILE ── */}
      <SectionB no="§ 01" title="The author">
        <ProfileB />
      </SectionB>

      {/* ── CHAPTERS ── */}
      <SectionB no="§ 02" title="Three concerns">
        <ChaptersB />
      </SectionB>

      {/* ── COLOPHON quote ── */}
      <section className="vb-colophon">
        <div className="vb-colophon-inner">
          <div className="mono muted vb-colophon-eyebrow">
            — epigraphic afterword
          </div>
          <p className="latin vb-colophon-text">
            <KineticText
              text="To refuse neither, but only to understand —"
              by="word"
              step={50}
            />
            <br />
            <em className="accent">
              <KineticText
                text="that is the work of a notebook."
                by="word"
                step={60}
                delay={1100}
              />
            </em>
          </p>
        </div>
      </section>

      <style>{vbStyles}</style>
    </div>
  );
}

function SectionB({ no, title, children }) {
  const ref = useReveal(0.1);
  return (
    <section ref={ref} className="rv vb-sect">
      <div className="vb-sect-head">
        <div className="vb-sect-head-l">
          <span
            className="mono accent"
            style={{ fontSize: 11, letterSpacing: "0.3em" }}
          >
            {no}
          </span>
          <h2 className="latin vb-sect-title">{title}</h2>
        </div>
        <div
          className="rule-draw in"
          style={{ flex: 1, alignSelf: "end", marginBottom: 18 }}
        />
      </div>
      {children}
    </section>
  );
}

function ProfileB() {
  return (
    <div className="vb-profile">
      <div className="vb-profile-portrait">
        <img src="assets/profile.jpg" alt="" />
        <span className="mono vb-portrait-tag">fig. 01</span>
      </div>
      <div className="vb-profile-text">
        <p className="vb-pull">
          <span className="accent">¹</span> 東京理科大学経営学部経営学科
          4年。趣味は読書、書店巡り、好きなアーティストのライブ、美味しいもの。好奇心が強く、気になったことや知りたいことを片端から調べてしまう。
        </p>
        <p className="vb-prose">
          <span className="accent">²</span>{" "}
          読む本のジャンルは社会科学・人文学を中心に多岐にわたる。
          このノートは私自身が考えたこと、疑問に思ったこと、学んだことの備忘録として綴っている。
        </p>
        <p className="vb-prose">
          <span className="accent">³</span>{" "}
          自分が書きたいことを優先しつつも、読んでくださる方に何か小さな価値を感じていただけるように心がけている。
        </p>

        <div className="vb-foot mono">
          <div>
            <span className="muted">Roll</span>
            <div>Undergraduate · Bound for graduate</div>
          </div>
          <div>
            <span className="muted">Mail</span>
            <div>
              <a href="mailto:mrworks15@icloud.com" className="u-link">
                mrworks15@icloud.com
              </a>
            </div>
          </div>
          <div>
            <span className="muted">Github</span>
            <div>
              <a href="https://github.com/ryutaro3215" className="u-link">
                ryutaro3215
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChaptersB() {
  return (
    <div className="vb-chapters">
      {chaptersB.map((c, i) => (
        <ChapterCardB key={c.no} c={c} i={i} />
      ))}
    </div>
  );
}

function ChapterCardB({ c, i }) {
  const ref = useReveal(0.15);
  return (
    <a ref={ref} href={c.to} className="rv vb-ch">
      <div className="vb-ch-no mono">
        <span className="accent">{c.no}</span>
        <span className="muted">— {c.cat}</span>
      </div>
      <h3 className="vb-ch-title latin">{c.title}</h3>
      <p className="vb-ch-sub mono muted">{c.sub}</p>
      <p className="vb-ch-text">{c.text}</p>
      <div className="vb-ch-foot">
        <div className="vb-ch-tags mono">
          {c.tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
        <span className="mono vb-ch-arrow">→</span>
      </div>
    </a>
  );
}

/* ─────────── Styles ─────────── */

const vbStyles = `
.vb { position: relative; }

/* HERO */
.vb-hero {
  min-height: 100vh;
  padding: 140px 40px 80px;
  position: relative;
  display: flex;
  align-items: center;
}
.vb-hero-inner {
  max-width: 1320px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 64px;
  align-items: end;
}
.vb-eyebrow {
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 36px;
}
.vb-eyebrow-sep { color: var(--ink-quiet); }
.vb-latin {
  font-size: clamp(36px, 7.4vw, 108px);
  line-height: 0.95;
  font-weight: 200;
  letter-spacing: -0.022em;
  margin: 0;
}
.vb-word {
  display: inline-block;
  will-change: transform, opacity;
  transition: transform 200ms linear, opacity 200ms linear;
}
.vb-ja-block {
  margin-top: 44px;
  max-width: 540px;
}
.vb-ja-jp {
  font-size: 15px;
  line-height: 1.9;
  margin: 0;
}
.vb-ja-en {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--ink-mute);
  font-style: italic;
}

/* Hero metadata cards */
.vb-hero-meta {
  display: flex; flex-direction: column; gap: 16px;
}
.vb-card {
  border: 1px solid var(--rule);
  padding: 22px 22px 20px;
  background: color-mix(in oklch, var(--bg-elev) 60%, transparent);
}
.vb-card-head {
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink-mute);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--rule-soft);
  margin-bottom: 12px;
}
.vb-card-dl {
  display: grid;
  grid-template-columns: 78px 1fr;
  gap: 8px 14px;
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.06em;
}
.vb-card-dl dt {
  color: var(--ink-mute);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 9px;
  padding-top: 2px;
}
.vb-card-dl dd { margin: 0; color: var(--ink); }
.vb-card-quote-text {
  font-family: var(--serif);
  font-style: italic;
  font-size: 13px;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 980px) {
  .vb-hero-inner { grid-template-columns: 1fr; }
  .vb-hero-meta { flex-direction: row; flex-wrap: wrap; }
  .vb-card { flex: 1; min-width: 240px; }
}
@media (max-width: 720px) {
  .vb-hero { padding: 110px 22px 70px; }
  .vb-card-dl { grid-template-columns: 1fr; gap: 2px; }
  .vb-card-dl dt { margin-top: 6px; }
}

/* SECTIONS */
.vb-sect {
  max-width: 1320px;
  margin: 0 auto;
  padding: 120px 40px;
}
.vb-sect-head {
  display: flex;
  gap: 24px;
  margin-bottom: 64px;
}
.vb-sect-head-l {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.vb-sect-title {
  font-size: clamp(36px, 5.4vw, 72px);
  font-style: italic;
  font-weight: 200;
  letter-spacing: -0.022em;
  margin: 0;
  line-height: 1;
}

/* PROFILE */
.vb-profile {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 80px;
  align-items: start;
}
.vb-profile-portrait {
  position: relative;
}
.vb-profile-portrait img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  filter: grayscale(0.5) contrast(1.05);
  border: 1px solid var(--rule);
}
.vb-portrait-tag {
  position: absolute;
  bottom: -22px;
  left: 8px;
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--ink-mute);
}
.vb-pull {
  font-family: var(--serif);
  font-size: 22px;
  line-height: 1.5;
  font-weight: 300;
  margin: 0 0 28px;
  padding-left: 22px;
  border-left: 1px solid var(--accent);
}
.vb-prose {
  font-size: 15px;
  line-height: 1.85;
  margin: 0 0 16px;
  padding-left: 22px;
}
.vb-foot {
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  font-size: 12px;
  letter-spacing: 0.04em;
}
.vb-foot .muted {
  display: block;
  font-size: 9px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

@media (max-width: 820px) {
  .vb-profile { grid-template-columns: 1fr; gap: 40px; }
  .vb-profile-portrait { max-width: 280px; }
  .vb-foot { grid-template-columns: 1fr; gap: 16px; }
}

/* CHAPTERS */
.vb-chapters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.vb-ch {
  display: flex;
  flex-direction: column;
  padding: 28px 0 0;
  border-top: 1px solid var(--rule);
  cursor: pointer;
  position: relative;
  transition: transform 600ms var(--ease);
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

.vb-ch-no {
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}
.vb-ch-title {
  font-size: 30px;
  font-style: italic;
  font-weight: 300;
  letter-spacing: -0.01em;
  margin: 0 0 6px;
  line-height: 1.15;
}
.vb-ch-sub {
  font-size: 11px;
  letter-spacing: 0.12em;
  margin: 0 0 18px;
}
.vb-ch-text {
  font-size: 14px;
  line-height: 1.8;
  margin: 0 0 24px;
  flex: 1;
}
.vb-ch-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 28px;
}
.vb-ch-tags {
  font-size: 10px;
  letter-spacing: 0.06em;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--ink-mute);
}
.vb-ch-arrow {
  font-size: 18px;
  color: var(--accent);
  transition: transform 400ms var(--ease);
}
.vb-ch:hover .vb-ch-arrow { transform: translateX(8px); }

@media (max-width: 980px) {
  .vb-chapters { grid-template-columns: 1fr; gap: 0; }
  .vb-ch { padding-top: 36px; }
}

/* COLOPHON */
.vb-colophon {
  padding: 160px 40px 180px;
  border-top: 1px solid var(--rule);
}
.vb-colophon-inner {
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;
}
.vb-colophon-eyebrow {
  font-size: 10px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.vb-colophon-text {
  font-style: italic;
  font-weight: 200;
  font-size: clamp(28px, 4.4vw, 60px);
  line-height: 1.25;
  letter-spacing: -0.015em;
  margin: 0;
}
`;

window.VariationB = VariationB;
