
/* PÁGINA INATIVA */

import { useInView } from "../hooks/useInView";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function SobreMim() {

  // Sempre que a pagina for atualizada, somos jogado apra o topo dela!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView(0.25);
  
    const vis = (dir: "left" | "right", delay: string) =>
      `anim-base anim-from-${dir}${inView ? " visible" : ""} ${delay}`;
  return (
    <main className="min-h-screen bg-bg-escuro text-white flex flex-col">
      <Header />

      {/* ── Título Central com style gravado na memória ── */}
      <header className="flex flex-col items-center justify-center pt-12 pb-12 md:pt-3 md:pb-12 px-4">
        <h1 
          className={`${vis("left", "delay-300")} text-white drop-shadow-[0_0_20px_rgba(251,209,91,0.35)] font-bold`}
          style={{ 
            fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif", 
            fontSize: "clamp(3rem,8vw,5rem)", 
            letterSpacing: "-0.01em" 
          }}
        >
          &lt;<span className="text-[#FBD15B]">Sobre mim</span>&gt;
        </h1>
      </header>

      {/* ── Conteúdo de Texto (Simples e Direto) ── */}
      <section 
        className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-8 pb-24 flex flex-col gap-8 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left"
        style={{ fontFamily: "'Fira Sans Condensed', sans-serif" }}
        ref={ref as React.RefObject<HTMLElement>}
      >
        <p className={`${vis("left", "delay-300")}`}>
          <span style={{ color: "#FBD15B", fontWeight: 700 }}>LOREM IPSUM</span>{" "}
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

      </section>

      <Footer />
    </main>
  );
}