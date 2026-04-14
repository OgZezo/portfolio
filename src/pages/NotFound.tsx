import { Link } from "react-router-dom";

export default function NotFound() {
  

  return (
    <main className="min-h-screen bg-bg-escuro flex items-center justify-center px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        
        {/* ── Bloco de Texto (Esquerda) ── */}
        <div className="flex flex-col items-center md:items-center text-center md:text-center">
          {/* As tags < > em branco e o 404 em amarelo com glow */}
          <h1 className={`font-display font-bold text-[clamp(5rem,12vw,8rem)] leading-none text-white tracking-tight" transition-all duration-1000`} style={{fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif"}} >
            &lt;<span className="text-[#FBD15B] drop-shadow-[0_0_30px_rgba(251,209,91,0.4)]">404</span>&gt;
          </h1>
          
          <p className={`text-white font-body text-xl md:text-center mt-4 max-w-sm leading-snug" transition-all duration-1000`} style={{
              fontFamily: "'Fira Sans Condensed', sans-serif"}}
            >
            Parece que eu ainda não programei essa parte...
          </p>

          {/* Botão de escape para o usuário não ficar preso */}
          <Link
            to="/"
            className={`mt-10 px-8 py-3 font-bold font-body text-center tracking-[0.25em] uppercase border border-[#FBD15B] text-[#FBD15B] hover:bg-[#FBD15B] hover:text-black transition-all" transition-all duration-1000`}
          >
            VOLTAR PARA A HOME
          </Link>
        </div>

        {/* ── Bloco da Ilustração (Direita) ── */}
        <div className="w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center flex-shrink-0 relative">
          
          {/* 👇 SEU VETOR ENTRA AQUI 👇 */}
          {/* Exemplo: <img src="/images/vetor-404.png" alt="Dev trabalhando" className="w-full h-full object-contain" /> */}
          
          {/* Placeholder visual (Pode apagar esta div pontilhada quando colocar a imagem) */}
          <div className={`absolute inset-0 flex items-center justify-center`}>
            <img src="/images/first-image.svg" alt="vetor 1 404" />
          </div>

        </div>

      </div>
    </main>
  );
}