import { useInView } from "../hooks/useInView";

export default function WorkExperienceSection() {
  const { ref, inView } = useInView(0.25);

  const vis = (dir: "left" | "right", delay: string) =>
    `anim-base anim-from-${dir}${inView ? " visible" : ""} ${delay}`;

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      // overflow-x-hidden adicionado para blindar o mobile contra quebras de eixo X
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20 overflow-x-hidden"
      style={{ backgroundColor: "#121211" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full max-w-6xl mx-auto z-10">

        {/* Text — fade from left */}
        <div className="flex-1 order-2 md:order-1 w-full flex flex-col items-center md:items-start">
          <h2
            // Título centralizado no mobile, alinhado à esquerda no desktop
            className={`${vis("left", "delay-100")} font-bold mb-4 md:mb-6 text-glow text-center md:text-left w-full`}
            style={{
              fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif",
              color: "#ffffff",
              fontSize: "clamp(2rem, 6vw, 4rem)", // Harmonizado para 6vw
              lineHeight: "1.1",
            }}
          >
            &lt;<span style={{ color: "#FBD15B" }}>Minha</span>{" "}experiência&gt;
          </h2>

          <p
            // text-left no mobile (para legibilidade) e text-justify no tablet/desktop
            className={`${vis("left", "delay-300")} text-base md:text-lg leading-relaxed text-left sm:text-justify w-full`}
            style={{ fontFamily: "'Fira Sans Condensed', sans-serif", color: "#ffffff" }}
          >
            <span style={{ color: "#FBD15B", fontWeight: 700 }}>LOREM IPSUM</span>{" "}
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Illustration — fade from left */}
        {/* Largura gerenciada pelo Tailwind para escalar de forma fluida sem usar inline styles fixos */}
        <div
          className={`${vis("left", "delay-500")} flex-shrink-0 order-1 md:order-2 relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-sm lg:max-w-md mx-auto md:mx-0 mt-8 md:mt-0`}
        >
          {/* Decorative shapes */}
          <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-[#7B7BFF] opacity-70" />
          <div className="absolute top-1/3 left-0 w-5 h-5 border-2 border-orange-400 opacity-60" />
          <div className="absolute bottom-16 left-6 w-3 h-3 rounded-full bg-[#7B7BFF] opacity-70" />
          <div className="absolute bottom-4 right-10 w-5 h-5 border-2 border-orange-400 opacity-60 rotate-45" />
          
          {/* Retângulos ocultos no mobile (hidden sm:block) para evitar poluição visual e colisão com a imagem base */}
          <div className="absolute top-4 right-16 w-28 h-11 rounded-lg border border-[#FBD15B] opacity-25 hidden sm:block" />
          <div className="absolute top-20 left-2 w-24 h-10 rounded-lg border border-[#FBD15B] opacity-15 hidden sm:block" />

          {/* Âncora ajustada com fluxo lógico */}
          <a href="#projetos" className="w-full h-full block" aria-label="Work experience illustration">
            <img 
              src="/images/third-image.svg" 
              alt="Ilustração Experiência" 
              // z-10 e object-contain garantem que o vetor não seja distorcido nem fique sob o fundo decorativo
              className="w-full h-auto object-contain relative z-10" 
            />
          </a>
        </div>
      </div>
    </section>
  );
}