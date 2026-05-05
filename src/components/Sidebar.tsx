import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Array de links para facilitar a manutenção
const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Quem eu sou?", to: "/sobremim" },
  /* { label: "Skills", to: "/skills" }, */   //----- PÁGINA DE SKILLS VAI SER FEITA DEPOIS -----
  { label: "Projetos", to: "/projetos" },
  { label: "Curriculo", to: "/curriculo" },
  { label: "Contatos", to: "/contato" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* ── Overlay Sólido ── */}
      {/* Adicionado backdrop-blur opcional para sofisticação, mantendo o fundo imersivo */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/95 z-40 transition-all duration-300 backdrop-blur-sm ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* ── Painel do Menu ── */}
      {/* h-[100dvh] resolve o bug da barra do Safari/Chrome no mobile */}
      {/* overflow-y-auto garante que o menu role em telas muito baixas */}
      {/* w-full base, md:w-[450px] apenas para tablets e desktop */}
      <aside
        className={`fixed top-0 left-0 h-[100dvh] w-full md:w-[450px] bg-[#121211] z-50 p-6 md:p-12 shadow-2xl flex flex-col transform transition-transform duration-500 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botão de Fechar com touch target ampliado no mobile */}
        <button
          onClick={onClose}
          className="flex flex-col items-start group w-max outline-none p-2 -ml-2 mt-2 md:mt-0"
          aria-label="Fechar menu"
        >
          <span className="text-zinc-500 font-body text-xs md:text-sm mb-1 group-hover:text-white transition-colors">
            sair...
          </span>
          <span className="text-[#FBD15B] font-display text-3xl md:text-4xl leading-none group-hover:scale-110 transition-transform origin-left">
            X
          </span>
        </button>

        {/* Corpo do Menu */}
        <div className="mt-8 md:mt-10 flex flex-col flex-1">
          <p 
            className="text-[#FBD15B] font-bold text-2xl md:text-3xl mb-4 md:mb-6"
            style={{ fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif" }}
          >
            menu{"{"}
          </p>

          {/* Ajuste de respiro lateral (pl-4 mobile vs pl-8 desktop) */}
          <nav className="flex flex-col gap-4 md:gap-6 pl-4 md:pl-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={onClose}
                // py-2 aumenta a área tocável. Fontes ajustadas (text-2xl -> text-4xl)
                className="group font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide w-max py-2"
                style={{ fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif" }}
              >
                {/* O símbolo < em branco */}
                <span className="text-white group-hover:text-[#FBD15B] transition-colors">
                  &lt;
                </span>
                
                {/* O Texto em amarelo com glow - espaçamento lateral ajustado (mx-1) */}
                <span className="text-[#FBD15B] drop-shadow-[0_0_15px_rgba(251,209,91,0.4)] group-hover:text-white transition-colors mx-1 md:mx-2">
                  {link.label}
                </span>
                
                {/* O símbolo > em branco */}
                <span className="text-white group-hover:text-[#FBD15B] transition-colors">
                  &gt;
                </span>
              </Link>
            ))}
          </nav>

          <p 
            className="text-white font-bold text-2xl md:text-3xl mt-4 md:mt-6"
            style={{ fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif" }}
          >
            {"}"}
          </p>
        </div>
      </aside>
    </>
  );
}