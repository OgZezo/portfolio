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

export default function Projeto2() {
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
          &lt;/<span className="text-[#FBD15B]">KawaCoffee</span>&gt;
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
            <img src={`/projeto2_img/projeto2_landingpage.jpg`} alt="kawacoffee" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* 👇 A partir daqui, TUDO usa o <FadeIn> para animar no Scroll! 👇 */}
        
        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>Landing Page</span>{" "} <br />
                Desenvolvi uma landing page para a KawaCoffee, uma cafeteria fictícia, como um <span style={{ color: "#FBD15B"}}>projeto acadêmico</span> utilizando Typescript, React e Tailwind CSS. O seu design é moderno e responsivo, com foco em destacar os produtos e a identidade visual da marca. A página inclui seções de apresentação, menu, localização e contato, proporcionando uma experiência agradável para os visitantes.
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}