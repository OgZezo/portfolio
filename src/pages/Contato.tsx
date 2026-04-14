import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

export default function Contato() {

  // Sempre que a pagina for atualizada, somos jogado apra o topo dela!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-bg-escuro text-white flex flex-col">
      <Header />

      {/* ── Título Central ── */}
      <header className="text-center py-5 md:py-7">
        <h1 
          className="text-5xl md:text-7xl text-white drop-shadow-[0_0_20px_rgba(251,209,91,0.35)] tracking-tight" 
          style={{fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif", letterSpacing: "-0.01em"}}
        >
          &lt;<span style={{color: "#FBD15B"}}>Contatos</span>&gt;
        </h1>
      </header>

      {/* ── Conteúdo Principal (Duas Colunas) ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 lg:px-32 pb-24 items-center">
        
        {/* Coluna da Esquerda: Sintaxe de Código e Lista de Contatos */}
        <div className="flex flex-col font-display text-2xl md:text-4xl max-w-2xl" style={{fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif"}}>
          
          {/* Sintaxe "menu{" */}
          <span className="text-white mb-8 mt-8 font-bold">menu{"{"}</span>

          {/* Lista Manual Simplificada */}
          <ul className="pl-6 md:pl-10 flex flex-col gap-6 md:gap-8 text-[#FBD15B]">
            
            <li className="flex items-center gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group flex-shrink-0">
                <a href="https://wa.me/5521990360555/" target="_blank">
                    <img src="/src/components/icons/contact-whatsapp.svg" alt="WhatsApp"/>
                </a>
              </div>
              <span className="drop-shadow-[0_0_15px_rgba(251,209,91,0.4)] font-bold tracking-wide break-all">
                <a href="https://wa.me/5521990360555/" className="hover:text-white transition-colors" target="_blank">
                    +55 (21) 99036-0555;
                </a>
              </span>
            </li>

            <li className="flex items-center gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group flex-shrink-0">
                <a href="https://www.linkedin.com/in/jose-messias-bandeira/" target="_blank">
                    <img src="/src/components/icons/contact-linkedin.svg" alt="LinkedIn" />            
                </a>
              </div>
              <span className="drop-shadow-[0_0_15px_rgba(251,209,91,0.4)] font-bold tracking-wide break-all">
                <a href="https://www.linkedin.com/in/jose-messias-bandeira/" className="hover:text-white transition-colors" target="_blank">
                    /jose-messias-bandeira;
                </a>
              </span>
            </li>

            <li className="flex items-center gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group flex-shrink-0">
                <a href="https://www.instagram.com/og.zezo/" target="_blank">
                    <img src="/src/components/icons/contact-instagram.svg" alt="Instagram" />                
                </a>
              </div>
              <span className="drop-shadow-[0_0_15px_rgba(251,209,91,0.4)] font-bold tracking-wide break-all">
                <a href="https://www.instagram.com/og.zezo/" className="hover:text-white transition-colors" target="_blank">
                    @og.zezo;
                </a>
              </span>
            </li>

            <li className="flex items-center gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group flex-shrink-0">
                <a href="https://github.com/OgZezo" target="_blank">
                    <img src="/src/components/icons/contact-github.svg" alt="Github" />            
                </a>
              </div>
              <span className="drop-shadow-[0_0_15px_rgba(251,209,91,0.4)] font-bold tracking-wide break-all">
                <a href="https://github.com/OgZezo" className="hover:text-white transition-colors" target="_blank">
                    /OgZezo;
                </a>
              </span>
            </li>

            <li className="flex items-center gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group flex-shrink-0">
                <a href="mailto:software.devjm@gmail.com" target="_blank">
                    <img src="/src/components/icons/contact-email.svg" alt="e-mail" />
                </a>
              </div>
              <span className="drop-shadow-[0_0_15px_rgba(251,209,91,0.4)] font-bold tracking-wide break-all">
                <a href="mailto:software.devjm@gmail.com" className="hover:text-white transition-colors" target="_blank">
                  software.devjm@gmail.com;
                </a>
              </span>
            </li>

          </ul>

          {/* Sintaxe "}" */}
          <span className="text-white mt-8 font-bold">{"}"}</span>
        </div>

        {/* Coluna da Direita: Placeholder da Ilustração */}
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <img src="/images/second-image.svg" alt="vetor 2" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}