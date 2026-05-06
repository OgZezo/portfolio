import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Curriculo() {
    // Sempre que a pagina for atualizada, somos jogado apra o topo dela!
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <main className="min-h-screen bg-bg-escuro flex flex-col">
      <Header />

      {/* ── Corpo da Página ── */}
      <div className="flex-1 flex flex-col items-center px-4 md:px-10 pb-20 pt-4">
        
        {/* Título com Glow */}
        <h1 className="text-white font-bold text-[clamp(3rem,8vw,5rem)] mb-10 tracking-tight" style={{fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif", letterSpacing: "-0.01em"}}>
          &lt;<span className="text-[#FBD15B] drop-shadow-[0_0_20px_rgba(251,209,91,0.35)]">Curriculo</span>&gt;
        </h1>

        {/* Container do Visualizador de PDF */}
        {/* Usamos h-[70vh] para ocupar uma boa parte da tela e manter a proporção */}
        <div className="w-full max-w-4xl h-[70vh] md:h-[100vh] bg-[#D9D9D9] mb-12 shadow-2xl relative">
          <iframe
            src="/arquivos_pdf/Jose_M_Bandeira_CV.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Visualização do Currículo"
            className="w-full h-full border-none"
          />
          {/* Fallback caso o navegador não suporte visualização de PDF */}
          <p className="absolute inset-0 flex items-center justify-center text-zinc-600 font-body -z-10">
            Carregando PDF...
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col items-center gap-8">
          {/* Botão Real de Download */}
          {/* O atributo 'download' força o navegador a baixar o arquivo em vez de abri-lo */}
          <a
            href="/arquivos_pdf/Jose_M_Bandeira_CV.pdf"
            download="Jose_M_Bandeira_CV.pdf"
            className="px-10 py-4 font-bold font-body text-[15px] tracking-widest uppercase border-[#fcc83b] bg-[#FBD15B] text-black hover:brightness-110 transition-all"
          >
            DOWNLOAD CV
          </a>

          {/* Botão de Sugestão (No-op por enquanto) */}
          <Link to="/suggestion"
              className="text-amarelo text-lg underline underline-offset-4 decoration-2 hover:opacity-75 transition-opacity"
              style={{fontFamily: "'Fira Sans Condensed', sans-serif",
                color: "#FBD15B",}}
            >
              Give a suggestion
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}