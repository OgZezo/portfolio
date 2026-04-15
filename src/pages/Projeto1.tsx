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
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>O QUE É?</span>{" "} <br />
            O Nexus IT é um ecossistema de gerenciamento de operações de TI (ITOM) baseado em web, desenvolvido para quem busca alta performance, organização e controle total sobre seu parque tecnológico. Ele atua como um "centro de comando" onde a gestão de inventário e a execução de demandas técnicas convergem em uma interface única, moderna e de alta performance.
            </p>
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>E o que ele faz?:</span><br />
              O sistema é estruturado em três pilares fundamentais que garantem a continuidade dos negócios: <br />
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li><span style={{ color: "fff"}}>Inteligência de Dados</span></li>
                <li><span style={{ color: "fff"}}>Central de Operações Kanban</span></li>
                <li><span style={{ color: "fff"}}>Gestão Inteligente de Ativos</span></li>
              </ol>
            </p>
          </div>
        </FadeIn>
      </section>

      {/* -------------------- HOMEPAGE -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* IMAGEM DA HOMEPAGE */}
              <img src={`/projeto1_img/projeto1_homepage.png`} alt="nexus-it homepage" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>NTELIGÊNCIA DE DADOS (DASHBOARD)</span>{" "} <br />
            O painel executivo traduz a operação em números claros para a tomada de decisão. Ele apresenta KPIs essenciais, como os casos pendentes de resolução, número de tasks atrasadas, e a saúde geral do parque tecnológico. Com gráficos interativos e indicadores visuais, o administrador tem uma visão panorâmica da operação, podendo identificar gargalos e oportunidades de melhoria com um simples olhar.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* -------------------- KANBAM -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* IMAGEM DO KANBAM */}
              <img src={`/projeto1_img/projeto1_kanbam.png`} alt="nexus-it kanbam" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>CENTRAL DE OPERAÇÕES KANBAN</span>{" "} <br />
            A central de operações é o coração do Nexus IT, onde a gestão de demandas técnicas acontece de forma fluida e visual. Inspirada na metodologia Kanban, essa área permite que os técnicos organizem suas tarefas em colunas personalizáveis como (<span style={{ color: "#FBD15B"}}>"A Fazer"</span>, <span style={{ color: "#FBD15B"}}>"Em Progresso"</span>, <span style={{ color: "#FBD15B"}}>"Concluído"</span>), facilitando o acompanhamento do fluxo de trabalho. Cada demanda pode ser detalhada com informações relevantes, como descrição do problema, prioridade, e prazo, garantindo que nada seja esquecido e que a equipe esteja sempre alinhada.
            </p>
          </div>
        </FadeIn>
      </section>
      
      {/* -------------------- INVENTÁRIO -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* IMAGEM DO INVENTÁRIO */}
              <img src={`/projeto1_img/projeto1_inventory.png`} alt="nexus-it inventory" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>GESTÃO INTELIGENTE DE ATIVOS (INVENTÁRIO)</span>{" "} <br />
            O módulo de inventário é a base para uma gestão eficiente dos ativos de TI. Ele permite o cadastro detalhado de cada equipamento, incluindo informações como modelo, fabricante, data de aquisição, e status atual. Além disso, o sistema oferece funcionalidades avançadas como alertas de manutenção preventiva e histórico de intervenções. Com isso, o Nexus IT garante que a gestão dos recursos tecnológicos seja proativa e orientada por dados, minimizando riscos e otimizando a performance do parque tecnológico.
            </p>
            <p>Incluindo controle de estoque, rastreamento de equipamentos e um suporte integrado e organizado, utilizando credenciais de acesso remoto diretamente vinculadas aos ativos, além de estabelecer um vinculo de responsabilidade do ativo com o usuário responsável..</p>
          </div>
        </FadeIn>
      </section>
      
      {/* -------------------- USERS -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* IMAGEM DOS USERS */}
              <img src={`/projeto1_img/projeto1_users.png`} alt="nexus-it users" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>GESTÃO INTELIGENTE DE USUÁRIOS</span>{" "} <br />
            O módulo de gestão de usuários do Nexus IT é projetado para oferecer controle total sobre o acesso ao sistema. Ele permite a criação de perfis personalizados, onde cada usuário pode ser atribuído a grupos específicos com níveis de acesso diferenciados. Isso garante que as informações sensíveis e as funcionalidades críticas estejam protegidas, enquanto os administradores têm acesso apenas às áreas relevantes para suas funções. Além disso, o sistema oferece um painel de administração intuitivo, onde é possível monitorar a atividade dos usuários, gerenciar credenciais e implementar políticas de segurança eficazes.
            </p> <br />
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>SOBRE O DESENVOLVIMENTO</span>{" "} <br />
              O desenvolvimento do Nexus IT foi uma jornada de aprendizado e superação. Desde a concepção da ideia até a implementação final, cada etapa do processo foi marcada por desafios técnicos que exigiram soluções inteligentes. A escolha da stack tecnológica, a definição da arquitetura do sistema e a implementação das funcionalidades foram realizadas com foco na escalabilidade, segurança e usabilidade. O resultado é um produto simples e eficiente, que reflete o compromisso com a excelência e a paixão por criar soluções que realmente fazem a diferença no dia a dia.
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}