import { useInView } from "../hooks/useInView";

export default function WorkExperienceSection() {
  const { ref, inView } = useInView(0.25);

  const vis = (dir: "left" | "right", delay: string) =>
    `anim-base anim-from-${dir}${inView ? " visible" : ""} ${delay}`;

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20"
      style={{ backgroundColor: "#121211" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full max-w-6xl mx-auto">

        {/* Text — fade from left */}
        <div className="flex-1 order-2 md:order-1">
          <h2
            className={`${vis("left", "delay-100")} font-bold mb-6 text-glow`}
            style={{
              fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif",
              color: "#ffffff",
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            &lt;<span style={{ color: "#FBD15B" }}>Minha</span>{" "}experiência&gt;
          </h2>

          <p
            className={`${vis("left", "delay-300")} text-base md:text-lg leading-relaxed text-justify`}
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
        <div
          className={`${vis("left", "delay-500")} flex-shrink-0 order-1 md:order-2 relative`}
          style={{ width: "clamp(200px, 25vw, 360px)", height: "clamp(240px, 28vw, 400px)" }}
        >
          {/* Decorative shapes */}
          <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-[#7B7BFF] opacity-70" />
          <div className="absolute top-1/3 left-0 w-5 h-5 border-2 border-orange-400 opacity-60" />
          <div className="absolute bottom-16 left-6 w-3 h-3 rounded-full bg-[#7B7BFF] opacity-70" />
          <div className="absolute bottom-4 right-10 w-5 h-5 border-2 border-orange-400 opacity-60 rotate-45" />
          <div className="absolute top-4 right-16 w-28 h-11 rounded-lg border border-[#FBD15B] opacity-25" />
          <div className="absolute top-20 left-2 w-24 h-10 rounded-lg border border-[#FBD15B] opacity-15" />

          <a href="" className="w-full h-full block" aria-label="Work experience illustration">
            {/* <img src="/images/experience.png" alt="Experience" className="w-full h-full object-contain" /> */}
            <img src="/images/third-image.svg" alt="vetor 3" />
          </a>
        </div>
      </div>
    </section>
  );
}
