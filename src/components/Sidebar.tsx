import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Array de links para facilitar a manutenção
const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Quem eu sou?", to: "/sobremim" },
/*   { label: "Skills", to: "/skills" }, */   //----- PÁGINA DE SKILLS VAI SER FEITA DEPOIS -----
  { label: "Projetos", to: "/projetos" },
  { label: "Curriculo", to: "/curriculo" },
  { label: "Contatos", to: "/contato" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* ── Overlay Sólido (Fundo da mesma cor do site que fecha o menu ao clicar) ── */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-75 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* ── Painel do Menu (Desliza da esquerda para a direita) ── */}
      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-[450px] bg-[#121211] z-50 p-8 md:p-12 shadow-2xl flex flex-col transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botão de Fechar Exato como no Design */}
        <button
          onClick={onClose}
          className="flex flex-col items-start group w-max outline-none"
          aria-label="Fechar menu"
        >
          <span className="text-zinc-500 font-body text-sm mb-1 group-hover:text-white transition-colors">
            sair...
          </span>
          <span className="text-[#FBD15B] font-display text-4xl leading-none group-hover:scale-110 transition-transform origin-left">
            X
          </span>
        </button>

        {/* Corpo do Menu (Sintaxe de Código) */}
        <div className="mt-5 flex flex-col flex-1">
          <p className="text-[#FBD15B] font-bold text-3xl mb-4"
          style={{fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif"}}>
            menu{"{"}
          </p>

          <nav className="flex flex-col gap-6 pl-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={onClose} // Fecha o menu ao clicar em um link
                className="group font-bold text-3xl md:text-4xl tracking-wide w-max"
                style={{fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif"}}
              >
                {/* O símbolo < em branco */}
                <span className="text-white group-hover:text-[#FBD15B] transition-colors">
                  &lt;
                </span>
                
                {/* O Texto em amarelo com glow */}
                <span className="text-[#FBD15B] drop-shadow-[0_0_15px_rgba(251,209,91,0.4)] group-hover:text-white transition-colors">
                  {link.label}
                </span>
                
                {/* O símbolo > em branco */}
                <span className="text-white group-hover:text-[#FBD15B] transition-colors">
                  &gt;
                </span>
              </Link>
            ))}
          </nav>

          <p className="text-white font-display font-bold text-3xl mt-4">
            {"}"}
          </p>
        </div>
      </aside>
    </>
  );
}