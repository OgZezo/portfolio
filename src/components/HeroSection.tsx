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

  // Typewriter: começa após a linha aparecer
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

  // 2. Scroll cue: aparece depois de tudo animar
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
      // overflow-x-hidden garante que a animação anim-from-left não crie scroll horizontal no mobile
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      style={{ backgroundColor: "#121211" }}
    >
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Navbar ── */}
      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-6 md:px-10 pt-7 pb-4 z-20">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[6px] p-2 -ml-2"
          aria-label="Menu"
        >
          <span className="block w-7 h-[2px] bg-[#FBD15B]" />
          <span className="block w-7 h-[2px] bg-[#FBD15B]" />
          <span className="block w-7 h-[2px] bg-[#FBD15B]" />
        </button>

        <Link
          to="/curriculo"
          className="px-5 py-3 md:py-2 text-xs font-bold tracking-[0.2em] uppercase border border-[#FBD15B] text-white hover:bg-[#FBD15B] hover:text-[#121211] transition-colors"
          style={{ fontFamily: "'Fira Sans Condensed', sans-serif" }}
        >
          Acessar CV
        </Link>
      </nav>

      {/* ── Social Sidebar (Desktop) ── */}
      {/* CORREÇÃO: Mudado de z-10 para z-20 para garantir que fique sempre "clicável" sobre o body */}
      <div className="hidden md:flex absolute left-8 lg:left-10 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
        <SocialLinks />
      </div>

      {/* ── Hero Body ── */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-1 px-6 md:pl-28 lg:pl-36 md:pr-12 lg:pr-36 py-10 gap-8 md:gap-10 z-10">

        {/* Text block */}
        <div className="w-full md:w-auto text-left flex flex-col justify-center">
          <p
            className={vis("delay-100")}
            style={{
              fontFamily: "'Fira Sans Condensed', sans-serif",
              color: "#fff",
              fontSize: "clamp(1.2rem, 3vw, 2.2rem)", // Ajuste leve no clamp mínimo para mobile pequeno
              marginBottom: "0.5rem",
            }}
          >
            &lt;Olá, eu me chamo&gt;
          </p>

          <h1
            className={`${vis("delay-300")} text-glow font-bold uppercase leading-[1.1] md:leading-none`}
            style={{
              fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif",
              color: "#FBD15B",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              letterSpacing: "-0.01em",
              marginBottom: "1rem", // Reduzido ligeiramente para mobile
            }}
          >
            JOSE M. BANDEIRA
          </h1>

          <p
            className={vis("delay-500")}
            style={{
              fontFamily: "'Fira Sans Condensed', sans-serif",
              color: "#fff",
              fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
              lineHeight: "1.4",
            }}
          >
            &lt;/o <span style={{ color: "#FBD15B" }}>desenvolvedor web</span>, que você{" "}
            {/* inline-block evita que a palavra quebre no meio se a tela for muito estreita */}
            <span className="inline-block" style={{ color: "#FBD15B" }}>
              {word}
              <span className="cursor-blink" aria-hidden="true" />
            </span>
            &gt;
          </p>

          {/* ── Social Links (Mobile) ── */}
          {/* Aparecem abaixo do texto apenas no celular */}
          <div className={`${vis("delay-700")} flex md:hidden gap-6 mt-8`}>
            <SocialLinks />
          </div>
        </div>

        {/* Illustration */}
        {/* max-w restringe o tamanho no mobile para não ocupar a tela toda */}
        <div className={`${vis("delay-700")} flex-shrink-0 w-full max-w-[250px] sm:max-w-[300px] md:max-w-md lg:max-w-lg overflow-hidden flex items-center justify-center mt-8 md:mt-0`}>
          <a href="#about" className="w-full h-full block" aria-label="Hero illustration">
            <img src="/images/first-image.svg" alt="Ilustração principal" className="w-full h-auto object-contain" />
          </a>
        </div>
      </div>

      {/* ── Scroll Cue ── */}
      {/* Reposicionado para a direita no mobile para não brigar visualmente com o alinhamento esquerdo do texto */}
      {!cueHidden && (
        <div className="absolute bottom-6 right-6 md:bottom-8 md:left-10 md:right-auto z-10">
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

// Componente extraído para não repetir código e manter o Clean Code
function SocialLinks() {
  return (
    <>
      <a href="https://www.linkedin.com/in/jose-messias-bandeira/" target="_blank" rel="noreferrer"
        aria-label="LinkedIn" style={{ color: "#FBD15B" }} className="hover:opacity-70 transition-opacity p-2 -m-2">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/OgZezo" target="_blank" rel="noreferrer"
        aria-label="GitHub" style={{ color: "#FBD15B" }} className="hover:opacity-70 transition-opacity p-2 -m-2">
        <GitHubIcon />
      </a>
      <a href="https://www.instagram.com/og.zezo/" target="_blank" rel="noreferrer"
        aria-label="Instagram" style={{ color: "#FBD15B" }} className="hover:opacity-70 transition-opacity p-2 -m-2">
        <InstagramIcon />
      </a>
    </>
  );
}