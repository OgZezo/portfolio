import { useEffect, useState, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const PROJECTS = [
  { id: 1, name: "NEXUS IT" },
  { id: 2, name: "KawaCoffee" },
  { id: 3, name: "Grupo Opus" },
];

const CARD_COLORS = ["#A89A68", "#7A8A68", "#6A7A98"];

function ArrowLeft() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="w-10 h-10 md:w-[52px] md:h-[52px]">
      <rect x="2" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
      <rect x="26" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
      <line x1="34" y1="38" x2="6" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 28L6 38L16 48" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="w-10 h-10 md:w-[52px] md:h-[52px]">
      <rect x="2" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
      <rect x="26" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
      <line x1="18" y1="38" x2="46" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 28L46 38L36 48" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const mod = (n: number, m: number) => ((n % m) + m) % m;

// Função ajustada para lidar com a responsividade da perspectiva
function getCardStyle(index: number, center: number, total: number, isMobile: boolean): React.CSSProperties {
  let offset = index - center;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  const isCenter = offset === 0;
  const absOffset = Math.abs(offset);
  const sign = Math.sign(offset);

  // No mobile, a sobreposição precisa ser um pouco mais agressiva para caber na tela
  const overlapBase = isMobile ? 65 : 80;
  
  const translateX = `${offset * overlapBase}%`;
  const translateZ = `${absOffset * -150}px`;
  const rotateY = `${sign * -35}deg`;
  const scale = isCenter ? 1 : 0.85;

  return {
    transform: `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}) scale(${scale})`,
    opacity: absOffset > 1 ? 0 : 1,
    filter: isCenter ? "brightness(1)" : "brightness(0.35)",
    zIndex: 10 - absOffset,
    transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
  };
}

export default function ProjectsSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const total = PROJECTS.length;
  const [center, setCenter] = useState(0);
  const locked = useRef(false);
  
  // Estado para verificar se é mobile e ajustar a perspectiva no 3D
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Executa na montagem
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useCallback((dir: "next" | "prev") => {
    if (locked.current) return;
    locked.current = true;
    setCenter((c) => mod(c + (dir === "next" ? 1 : -1), total));
    setTimeout(() => { locked.current = false; }, 600);
  }, [total]);

  // Lógica de Swipe para o Mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSignificantSwipe = Math.abs(distance) > 50; // Tolerância de 50px

    if (isSignificantSwipe) {
      if (distance > 0) {
        // Swipe para a esquerda, mostra o próximo projeto (que está à direita)
        navigate("next");
      } else {
        // Swipe para a direita, mostra o projeto anterior
        navigate("prev");
      }
    }
    // Reseta as variáveis
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const cardW = "clamp(240px, 60vw, 320px)"; // Ajustado para melhor proporção no mobile
  const cardH = "clamp(300px, 75vw, 400px)";

  return (
    <section
      id="projects"
      className="min-h-[100dvh] flex flex-col items-center justify-center py-16 md:py-24 px-4 bg-bg-escuro overflow-hidden"
    >
      <h2 className="font-bold text-center mb-2 md:mb-4 text-glow"
        style={{
          fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif",
          fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
          color: "#ffffff",
        }}>
        &lt;/<span className="text-[#FBD15B]">Projetos</span>&gt;
      </h2>

      <p
        className="font-bold tracking-[0.25em] mb-8 md:mb-10 text-lg md:text-2xl text-white text-center"
        style={{ fontFamily: "'Fira Sans Condensed', sans-serif" }}
      >
        {PROJECTS[center].name}
      </p>

      {/* Container principal flex com largura total */}
      <div className="flex items-center justify-center w-full max-w-6xl gap-4 mb-10 md:mb-12 relative px-2">
        
        {/* Botão Anterior (Oculto no Mobile via 'hidden md:block') */}
        <button
          onClick={() => navigate("prev")}
          className="hidden md:block flex-shrink-0 hover:opacity-70 transition-opacity active:scale-95 z-20 p-2"
          aria-label="Anterior"
        >
          <ArrowLeft />
        </button>

        {/* Stage com Perspectiva 3D */}
        <div
          className="relative flex items-center justify-center flex-1 w-full"
          style={{ height: cardH, perspective: isMobile ? "800px" : "1200px" }} // Perspectiva ajustada para mobile
          // Adicionando os eventos de toque ao palco do carrossel
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {PROJECTS.map((project, index) => {
            let offset = index - center;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            return (
              <Link to={`/projeto${project.id}`}
                key={index}
                onClick={(e) => {
                  if (offset === -1) {
                    e.preventDefault();
                    navigate("prev");
                  } else if (offset === 1) {
                    e.preventDefault();
                    navigate("next");
                  }
                }}
                className="absolute rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] block overflow-hidden"
                style={{
                  width: cardW,
                  height: cardH,
                  backgroundColor: CARD_COLORS[index],
                  cursor: "pointer",
                  ...getCardStyle(index, center, total, isMobile),
                  // Bloqueia o clique/drag fantasma nas imagens em telas touch
                  WebkitUserSelect: "none", 
                }}
                aria-label={project.name}
                // Previne o drag default do navegador nas imagens
                onDragStart={(e) => e.preventDefault()}
              >
                <img 
                    src={`/projetos_capa/projeto${project.id}_card.png`} 
                    alt={project.name} 
                    className="w-full h-full object-cover pointer-events-none" 
                  /> 
              </Link>
            );
          })}
        </div>

        {/* Botão Próximo (Oculto no Mobile via 'hidden md:block') */}
        <button
          onClick={() => navigate("next")}
          className="hidden md:block flex-shrink-0 hover:opacity-70 transition-opacity active:scale-95 z-20 p-2"
          aria-label="Próximo"
        >
          <ArrowRight />
        </button>
      </div>

      <Link to="/projetos"
        className="px-10 py-3 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-[#e0bb50] transition-colors rounded-sm"
        style={{
          backgroundColor: "#FBD15B",
          color: "#121211",
          fontFamily: "'Fira Sans Condensed', sans-serif",
        }}>       
        ver tudo
      </Link>
    </section>
  );
}