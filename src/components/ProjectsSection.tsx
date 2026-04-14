import { useEffect, useState, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const PROJECTS = [
  { id: 1, name: "NEXUS IT" },
  { id: 2, name: "PROJETO 2" },
  { id: 3, name: "PROJETO 3" },
];

// O ideal é que essas cores venham do seu banco ou de variáveis do Tailwind depois
const CARD_COLORS = ["#A89A68", "#7A8A68", "#6A7A98"];

function ArrowLeft() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="2" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
      <rect x="26" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
      <line x1="34" y1="38" x2="6" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 28L6 38L16 48" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="2" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
      <rect x="26" y="2" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
      <line x1="18" y1="38" x2="46" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 28L46 38L36 48" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Matemática pura para calcular a posição no carrossel infinito
const mod = (n: number, m: number) => ((n % m) + m) % m;

// A MÁGICA DO 3D ACONTECE AQUI
function getCardStyle(index: number, center: number, total: number): React.CSSProperties {
  // Calcula a distância do card até o centro (buscando o caminho mais curto no círculo)
  let offset = index - center;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  const isCenter = offset === 0;
  const absOffset = Math.abs(offset);
  const sign = Math.sign(offset); // -1 para esquerda, 1 para direita

  // Valores da Vitrine 3D
  const translateX = `${offset * 80}%`;          // Distância lateral (sobreposição)
  const translateZ = `${absOffset * -150}px`;    // Joga os cards laterais para o fundo
  const rotateY = `${sign * -35}deg`;            // Inclina os cards olhando para o centro
  const scale = isCenter ? 1 : 0.85;             // Reduz o tamanho dos laterais

  return {
    transform: `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}) scale(${scale})`,
    opacity: absOffset > 1 ? 0 : 1,              // Esconde cards muito distantes (caso adicione mais de 3 projetos)
    filter: isCenter ? "brightness(1)" : "brightness(0.35)",
    zIndex: 10 - absOffset,
    transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)", // Curva de animação super fluida (ease-out)
  };
}

export default function ProjectsSection() {

  const { pathname } = useLocation(); // 👈 Pega a URL atual (ex: "/projeto1")

  // 👇 Agora o useEffect "vigia" a URL
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const total = PROJECTS.length;
  const [center, setCenter] = useState(0);
  const locked = useRef(false);

  const navigate = useCallback((dir: "next" | "prev") => {
    if (locked.current) return;
    locked.current = true;
    setCenter((c) => mod(c + (dir === "next" ? 1 : -1), total));
    setTimeout(() => { locked.current = false; }, 600); // Tempo igual ao da transição CSS
  }, [total]);

  const cardW = "clamp(180px, 22vw, 320px)";
  const cardH = "clamp(220px, 28vw, 400px)";

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-bg-escuro overflow-hidden"
    >
      <h2 className="font-bold text-center mb-4 text-glow"
        style={{
          fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif",
          fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
          color: "#ffffff",
        }}>
        &lt;/<span className="text-[#FBD15B]">Projetos</span>&gt;
      </h2>

      <p
        className="font-bold tracking-[0.25em] mb-10 text-xl md:text-2xl text-white"
        style={{ fontFamily: "'Fira Sans Condensed', sans-serif"
        }}>
        {PROJECTS[center].name}
      </p>

      <div className="flex items-center justify-center w-full max-w-5xl gap-4 mb-12">
        <button
          onClick={() => navigate("prev")}
          className="flex-shrink-0 hover:opacity-70 transition-opacity active:scale-95 z-20"
          aria-label="Anterior"
        >
          <ArrowLeft />
        </button>

        {/* Stage com Perspectiva 3D */}
        <div
          className="relative flex items-center justify-center flex-1"
          style={{ height: cardH, perspective: "1200px" }}
        >
         {/* Mapeando TODOS os projetos em vez de apenas 3 */}
          {PROJECTS.map((project, index) => {
            // Calcula o offset apenas para saber se o card atual é clicável ou não
            let offset = index - center;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            return (
              <Link to={`/projeto${project.id}`}
                key={index}
                onClick={(e) => {
                  // Só bloqueia o link e gira a vitrine se o clique for nos cards LATERAIS
                  if (offset === -1) {
                    e.preventDefault();
                    navigate("prev");
                  } else if (offset === 1) {
                    e.preventDefault();
                    navigate("next");
                  }
                  // Se for 0 (centro), passa direto e o Link leva para a página!
                }}
                className="absolute rounded-lg shadow-2xl block"
                style={{
                  width: cardW,
                  height: cardH,
                  backgroundColor: CARD_COLORS[index],
                  cursor: "pointer", // Agora todos têm o cursor de clique
                  // Aplica o estilo 3D
                  ...getCardStyle(index, center, total),
                }}
                aria-label={project.name}
              >
                <img 
                    src={`/projetos_capa/projeto${project.id}_card.png`} 
                    alt={project.name} 
                    className="w-full h-full object-cover rounded-lg" 
                  /> {/* Imagem do projeto (descomente quando tiver as fotos) */}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => navigate("next")}
          className="flex-shrink-0 hover:opacity-70 transition-opacity active:scale-95 z-20"
          aria-label="Próximo"
        >
          <ArrowRight />
        </button>
      </div>

      <Link to="/projetos"
        className="px-10 py-3 font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
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