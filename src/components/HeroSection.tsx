import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "./icons/SocialIcons";
import { useTypewriter } from "../hooks/useTypewriter";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [bodyVisible, setBodyVisible] = useState(false);
  const [cueVisible, setCueVisible]   = useState(false);
  const [cueBounce, setCueBounce]     = useState(false);
  const [cueHidden, setCueHidden]     = useState(false);

  // Typewriter: começa após a linha aparecer (~delay-500 = 0.5s + 0.75s transição)
  const word = useTypewriter({
    words: ["precisa", "quer", "procura", "precisa"],
    typeSpeed: 90,
    deleteSpeed: 55,
    pauseAfter: 1600,
    startDelay: 1400,
  });

  // 1. Hero body fade-in
  useEffect(() => {
    const t = setTimeout(() => setBodyVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  // 2. Scroll cue: aparece depois de tudo animar (~1.7s)
  useEffect(() => {
    if (!bodyVisible) return;
    const t1 = setTimeout(() => {
      setCueVisible(true);
      const t2 = setTimeout(() => setCueBounce(true), 300);
      return () => clearTimeout(t2);
    }, 1700);
    return () => clearTimeout(t1);
  }, [bodyVisible]);

  // 3. Oculta cue no scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10 && !cueHidden) setCueHidden(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [cueHidden]);

  const vis = (extra = "") =>
    `anim-base anim-from-left${bodyVisible ? " visible" : ""} ${extra}`.trim();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: "#121211" }}
    >
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-6 md:px-10 pt-7 pb-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[6px] p-1"
          aria-label="Menu"
        >
          <span className="block w-7 h-[2px] bg-[#FBD15B]" />
          <span className="block w-7 h-[2px] bg-[#FBD15B]" />
          <span className="block w-7 h-[2px] bg-[#FBD15B]" />
        </button>

        <Link to="/curriculo"
          className="px-5 py-2 text-xs font-bold tracking-[0.2em] uppercase border border-[#FBD15B] text-white hover:bg-[#FBD15B] hover:text-[#121211] transition-colors"
          style={{ fontFamily: "'Fira Sans Condensed', sans-serif" }}
        >
          ACESSAR CV
        </Link>
      </nav>

      {/* ── Social Sidebar ── */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        <a href="https://www.linkedin.com/in/jose-messias-bandeira/" target="_blank" rel="noreferrer"
          aria-label="LinkedIn" style={{ color: "#FBD15B" }} className="hover:opacity-70 transition-opacity">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/OgZezo" target="_blank" rel="noreferrer"
          aria-label="GitHub" style={{ color: "#FBD15B" }} className="hover:opacity-70 transition-opacity">
          <GitHubIcon />
        </a>
        <a href="https://www.instagram.com/og.zezo/" target="_blank" rel="noreferrer"
          aria-label="Instagram" style={{ color: "#FBD15B" }} className="hover:opacity-70 transition-opacity">
          <InstagramIcon />
        </a>
      </div>

      {/* ── Hero Body ── */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-6 md:pl-32 lg:pl-36 md:pr-12 lg:pr-36 pb-16 gap-10 mt-4">

        {/* Text block */}
        <div>
          <p
            className={vis("delay-100")}
            style={{
              fontFamily: "'Fira Sans Condensed', sans-serif",
              color: "#fff",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              marginBottom: "0.5rem",
            }}
          >
            &lt;Olá, eu me chamo&gt;
          </p>

          <h1
            className={`${vis("delay-300")} text-glow font-bold uppercase leading-none`}
            style={{
              fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif",
              color: "#FBD15B",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              letterSpacing: "-0.01em",
              marginBottom: "1.25rem",
            }}
          >
            JOSE M. BANDEIRA
          </h1>

          {/* Linha com typewriter */}
          <p
            className={vis("delay-500")}
            style={{
              fontFamily: "'Fira Sans Condensed', sans-serif",
              color: "#fff",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            }}
          >
            &lt;/o{" "}
            <span style={{ color: "#FBD15B" }}>desenvolvedor web</span>,{" "}
            que você{" "}
            {/* palavra animada */}
            <span style={{ color: "#FBD15B", whiteSpace: "nowrap" }}>
              {word}
              <span className="cursor-blink" aria-hidden="true" />
            </span>
            &gt;
          </p>
        </div>

        {/* Illustration */}
        <div className={`${vis("delay-700")} flex-shrink-0 overflow-hidden flex items-center justify-center`}>
          <a href="" className="w-full h-full block" aria-label="Hero illustration">
            <img src="/images/first-image.svg" alt="vetor 1" />
          </a>
        </div>
      </div>

      {/* ── Scroll Cue ── */}
      {!cueHidden && (
        <div className="absolute bottom-8 left-6 md:left-10">
          <p
            className={`scroll-cue${cueVisible ? " cue-visible" : ""}${cueBounce ? " cue-bounce" : ""} text-[#C1AE7C] text-[10px] tracking-[0.35em] uppercase select-none`}
            style={{
              fontFamily: "'Fira Sans Condensed', sans-serif",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            &lt;&lt;&lt; ROLE PARA BAIXO
          </p>
        </div>
      )}
    </section>
  );
}
