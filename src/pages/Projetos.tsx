// src/pages/ProjetoDetalhe.tsx
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ProjectCardData {
  id: number;
  title: string;
}

const PROJECTS: ProjectCardData[] = [
  { id: 1, title: "NEXUS-IT" },
  { id: 2, title: "PROJETO 2" },
  { id: 3, title: "PROJETO 3" },
  { id: 4, title: "PROJETO 4" },
  { id: 5, title: "PROJETO 5" },
  { id: 6, title: "PROJETO 6" },
];

const CARD_COLORS = ["#A89A68", "#A89A68", "#A89A68", "#A89A68", "#A89A68", "#A89A68"];

export default function Projetos() {

  
    // Estado para animações de carregamento inicial (Título e Imagem)
    const [isLoaded, setIsLoaded] = useState(false);
    
  
    // Efeito para disparar as animações iniciais ao abrir a página
    useEffect(() => {
      setIsLoaded(true);
    }, []);


  /* Sempre que a pagina for atualizada, somos jogado apra o topo dela! */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [largeInRow1, setLargeInRow1] = useState<number>(1);
  const [largeInRow2, setLargeInRow2] = useState<number>(4);
  const [largeInRow3, setLargeInRow3] = useState<number>(5);

  // Componente interno com a estrutura do Link e Imagem comentada
  const ProjectCard = ({ project, flexClass, index }: { project: ProjectCardData, flexClass: string, index: number }) => (
    <Link
      to={`/projeto${project.id}`}
      className={`
        ${flexClass}
        group relative flex items-center justify-center 
        border-[3px] border-[#121211] rounded-xl overflow-hidden cursor-pointer
        transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1)
        h-[300px] md:h-full
      `}
      style={{ backgroundColor: CARD_COLORS[index] }}
      aria-label={project.title}
    >
      {/* 👇 ESTRUTURA DE IMAGEM PRONTA (Descomente quando tiver as fotos) 👇 */}
      {/* <img 
          src={`/images/project-${project.id}.png`} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />
      */}

      {/* Título do Projeto */}
      <h2 
        className="relative z-10 text-3xl md:text-4xl text-[#121211] font-bold transition-transform duration-300 group-hover:scale-110 drop-shadow-sm text-center px-4"
        style={{ fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif" }}
      >
        {project.title}
      </h2>
    </Link>
  );

  return (
    <main className="min-h-screen bg-bg-escuro text-white flex flex-col">
      <Header />

      {/* ── Título Central com style gravado na memória ── */}
      <header className="flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 px-4">
        <h1 
          className={`text-white drop-shadow-[0_0_20px_rgba(251,209,91,0.35)] font-bold transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
          style={{ 
            fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif", 
            fontSize: "clamp(3rem,8vw,5rem)", 
            letterSpacing: "-0.01em" 
          }}
        >
          &lt;<span className="text-[#FBD15B]">Projetos</span>&gt;
        </h1>
      </header>

      {/* ── Mosaico Dinâmico de Pares com Flexbox ── */}
      <section className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 pb-24 flex flex-col gap-4 md:gap-6">
        
        {/* PAR 1 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full h-auto md:h-[400px]" >
          <div 
            className="transition-all duration-700" 
            style={{ flex: largeInRow1 === 1 ? '2 1 0%' : '1 1 0%' }}
            onMouseEnter={() => setLargeInRow1(1)}
          >
            <ProjectCard project={PROJECTS[0]} index={0} flexClass="w-full h-full" />
          </div>
          <div 
            className="transition-all duration-700" 
            style={{ flex: largeInRow1 === 2 ? '2 1 0%' : '1 1 0%' }}
            onMouseEnter={() => setLargeInRow1(2)}
            onMouseLeave={() => setLargeInRow1(1)}
          >
            <ProjectCard project={PROJECTS[1]} index={1} flexClass="w-full h-full" />
          </div>
        </div>

        {/* PAR 2 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full h-auto md:h-[400px]">
          <div 
            className="transition-all duration-700" 
            style={{ flex: largeInRow2 === 3 ? '2 1 0%' : '1 1 0%' }}
            onMouseEnter={() => setLargeInRow2(3)} 
            onMouseLeave={() => setLargeInRow2(4)}
          >
            <ProjectCard project={PROJECTS[2]} index={2} flexClass="w-full h-full" />
          </div>
          <div 
            className="transition-all duration-700" 
            style={{ flex: largeInRow2 === 4 ? '2 1 0%' : '1 1 0%' }}
            onMouseEnter={() => setLargeInRow2(4)}
          >
            <ProjectCard project={PROJECTS[3]} index={3} flexClass="w-full h-full" />
          </div>
        </div>

        {/* PAR 3 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full h-auto md:h-[400px]">
          <div 
            className="transition-all duration-700" 
            style={{ flex: largeInRow3 === 5 ? '2 1 0%' : '1 1 0%' }}
            onMouseEnter={() => setLargeInRow3(5)}
          >
            <ProjectCard project={PROJECTS[4]} index={4} flexClass="w-full h-full" />
          </div>
          <div 
            className="transition-all duration-700" 
            style={{ flex: largeInRow3 === 6 ? '2 1 0%' : '1 1 0%' }}
            onMouseEnter={() => setLargeInRow3(6)}
            onMouseLeave={() => setLargeInRow3(5)}
          >
            <ProjectCard project={PROJECTS[5]} index={5} flexClass="w-full h-full" />
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}