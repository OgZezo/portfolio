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

export default function Projeto4() {
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
          &lt;/<span className="text-[#FBD15B]">Gerador de documentos</span>&gt;
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
            <img src={`/projeto4_img/kit-revisional.png`} alt="kit-revisional" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* 👇 A partir daqui, TUDO usa o <FadeIn> para animar no Scroll! 👇 */}
        
        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>KIT REVISIONAL</span>{" "} <br />
            Apelidado carinhosamente entre os colaboradores de "Kit Revisional", o sistema é uma solução inovadora desenvolvida para automatizar a criação de documentos jurídicos, como procurações e contratos. Ele utiliza o ambiente de códigos <span style={{color: "#FBD15B"}}>Google AppScript (GAS)</span> com um código baseado em JS para organizar os dados recebidos através do formulário preenchido, para assim, gerar documentos personalizados com base nesses dados. O resultado é um realmente um kit de documentos, necessários para os procedimentos jurídicos, a ferramenta é precisa, e permite aos profissionais do direito economizar tempo e oferecer um serviço de alta qualidade.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* -------------------- CATÁLOGO -------------------- */}
      <div className={`flex flex-col items-center justify-center pt-3 pb-8 md:pt-3 md:pb-12 px-4 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        <h2 
          className="text-white drop-shadow-[0_0_20px_rgba(251,209,91,0.35)] font-bold text-center"
          style={{ 
            fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif", 
            fontSize: "clamp(2rem,6vw,3rem)", 
            letterSpacing: "-0.01em" 
          }}
        >
          &lt;<span className="text-[#FBD15B]">Catálogo</span>&gt;
        </h2>
      </div>

      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* IMAGEM DO CATÁLOGO */}
              <img src={`/projeto4_img/catalogo_home.png`} alt="catalogo" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>CATÁLOGO DE EQUIPAMENTOS</span>{" "} <br />
            O catálogo de equipamentos é um microsistema essencial para o cotidiano no <span style={{color: "#FBD15B"}}>Adriano & Couto</span>, projetada para organizar e gerenciar as solicitações desses equipamentos de forma eficiente. Ele funciona como um catálogo digital, onde os colaboradores podem acessar uma lista de equipamentos disponíveis, como periféricos, suportes de notebooks e outros dispositivos necessários para suas atividades diárias. O sistema permite que os usuários façam solicitações de equipamentos específicos, que são então processadas e gerenciadas pela equipe responsável. Com isso, o catálogo não apenas otimiza a logística interna, mas também garante que os recursos sejam alocados de maneira eficaz, contribuindo para um ambiente de trabalho mais produtivo e organizado.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* -------------------- PAINEL DE ADM DO CATÁLOGO -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn delayClass="delay-200">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-8 mb-16 mt-8">
            <div className="w-full bg-[#B6A477] border-4 border-[#121211] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* IMAGEM DO PAINEL DE LOGIN */}
              <img src={`/projeto4_img/catalogo_adm.png`} alt="catalogo admin" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>TELA DE LOGIN PARA ADMINISRAÇÃO</span>{" "} <br />
            A tela de login para administração é um componente crucial do sistema de catálogo, projetada para garantir a segurança e o controle de acesso às funcionalidades administrativas. Ela serve como a porta de entrada para os administradores, onde eles podem inserir suas credenciais para acessar o painel de controle do catálogo.
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
              <img src={`/projeto4_img/catalogo_inventario.png`} alt="catalogo inventario" className="w-full h-auto object-cover" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>CRUD DE EQUIPAMENTOS (INVENTÁRIO)</span>{" "} <br />
            O CRUD de equipamentos, ou seja, as funcionalidades de <span style={{ color: "#FBD15B"}}>criar</span>, <span style={{ color: "#FBD15B"}}>ler</span>, <span style={{ color: "#FBD15B"}}>atualizar</span> e <span style={{ color: "#FBD15B"}}>deletar</span> equipamentos, é uma parte fundamental do sistema de catálogo. Ele permite que os administradores gerenciem o inventário de equipamentos de forma eficiente, garantindo que as informações estejam sempre atualizadas e precisas. Com essa funcionalidade, os administradores podem adicionar novos equipamentos ao catálogo, visualizar detalhes dos equipamentos existentes, fazer alterações nas informações quando necessário e remover equipamentos que não estão mais disponíveis. Isso TAMBÉM contribui para uma gestão mais eficaz dos recursos e para um ambiente de trabalho mais organizado.
            </p>
          </div>
        </FadeIn>
      </section>
      
      {/* -------------------- USERS -------------------- */}
      <section className="flex-1 w-full flex flex-col items-center pb-24">
        <FadeIn>
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-10 text-lg md:text-xl text-zinc-300 leading-relaxed text-justify md:text-left font-body">
            <p>
              <span style={{ color: "#FBD15B", fontWeight: 700 }}>SOBRE O DESENVOLVIMENTO</span>{" "} <br />
              O desenvolvimento do sistema foi realizado utilizando tecnologias como React, Vite.js, PostgreSQL e uma API de envio de e-mails. O processo de desenvolvimento envolveu a criação de uma interface intuitiva e responsiva, a implementação de funcionalidades robustas para gerenciamento de equipamentos e usuários, e a integração com serviços externos para garantir uma experiência completa e eficiente para os usuários finais.
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}