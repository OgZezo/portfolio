// src/pages/ProjetoDetalhe.tsx
import { useEffect, useState, useRef, type ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// 👇 COMPONENTE MÁGICO: Ele cuida do scroll individualmente para cada bloco que abraçar!
function FadeIn({ children, delayClass = "" }: { children: ReactNode, delayClass?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Anima só uma vez
        }
      },
      { threshold: 0.1 } // Dispara quando 10% do elemento aparecer na tela
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${delayClass} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
}

export default function Projeto1() {
  // Estado apenas para o Header e a primeira Imagem (que carregam logo de cara)
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-bg-escuro text-white flex flex-col overflow-hidden">
      <Header />

      {/* ── Título Central (Anima no Load) ── */}
      <header 
        className={`flex flex-col items-center justify-center pt-3 pb-8 md:pt-3 md:pb-12 px-4 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 
          className="text-white drop-shadow-[0_0_20px_rgba(251,209,91,0.35)] font-bold text-center"
          style={{ 
            fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif", 
            fontSize: "clamp(3rem,8vw,5rem)", 
            letterSpacing: "-0.01em" 
          }}
        >
          &lt;/<span className="text-[#FBD15B]">Nexus IT</span>&gt;
        </h1>
      </header>

      {/* ── Conteúdo Principal ── */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        
        {/* 👇 PRIMEIRA Imagem (Anima no Load com delay) 👇 */}
        <div 
          className={`w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            <img src={`/projeto1_img/projeto1_login.png`} alt="nexus-it" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* 👇 A partir daqui, TUDO usa o <FadeIn> para animar no Scroll! 👇 */}
        
        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>O QUE É?</span>{" "}
            O Nexus IT é um ecossistema de gerenciamento de operações de TI (ITOM) baseado em web, desenvolvido para empresas que buscam alta performance, organização e controle total sobre seu parque tecnológico. Ele atua como um "centro de comando" onde a gestão de inventário e a execução de demandas técnicas convergem em uma interface única, moderna e de alta velocidade.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* -------------------- HOMEPAGE -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img src={`/projeto1_img/projeto1_homepage.png`} alt="nexus-it homepage" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>LOREM IPSUM</span>{" "}
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* -------------------- KANBAM -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img src={`/projeto1_img/projeto1_kanbam.png`} alt="nexus-it kanbam" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>LOREM IPSUM</span>{" "}
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </FadeIn>
      </section>
      
      {/* -------------------- INVENTÁRIO -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img src={`/projeto1_img/projeto1_inventory.png`} alt="nexus-it inventory" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>LOREM IPSUM</span>{" "}
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </FadeIn>
      </section>
      
      {/* -------------------- USERS -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img src={`/projeto1_img/projeto1_users.png`} alt="nexus-it users" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>LOREM IPSUM</span>{" "}
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}