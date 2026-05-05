import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

export default function AboutSection() {
  const { ref, inView } = useInView(0.25);

  // Scroll-cue-up state
  const [cueVisible, setCueVisible]   = useState(false);
  const [cueBounce, setCueBounce]     = useState(false);
  const [cueHidden, setCueHidden]     = useState(false);
  const prevScrollY = useRef(0);

  // Show cue after section animations finish
  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => {
      setCueVisible(true);
      const t2 = setTimeout(() => setCueBounce(true), 300);
      return () => clearTimeout(t2);
    }, 1600);
    return () => clearTimeout(t1);
  }, [inView]);

  // Hide cue when user scrolls up (scroll position decreases)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < prevScrollY.current && !cueHidden) {
        setCueHidden(true);
      }
      prevScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [cueHidden]);

  const vis = (dir: "left" | "right", delay: string) =>
    `anim-base anim-from-${dir}${inView ? " visible" : ""} ${delay}`;

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center relative px-6 md:px-16 lg:px-24 py-20"
      style={{ backgroundColor: "#121211" }}
    >
      {/* ── Scroll Cue Right (role para cima) ── */}
      {!cueHidden && (
        <div className="absolute right-6 md:right-8 top-1/4">
          <p
            className={`scroll-cue scroll-cue-up${cueVisible ? " cue-visible" : ""}${cueBounce ? " cue-bounce" : ""} text-[#C1AE7C] text-[10px] tracking-[0.35em] uppercase select-none`}
            style={{
              fontFamily: "'Fira Sans Condensed', sans-serif",
              writingMode: "vertical-rl",
            }}
          >
            &lt;&lt;&lt; ROLE PARA CIMA
          </p>
        </div>
      )} 

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full max-w-6xl mx-auto">

        {/* Illustration — fade in com texto */}
        <div
          className={`${vis("right", "delay-100")} flex-shrink-0`}>
          <a href="" className="w-full h-full block" aria-label="About illustration">
            {/* <img src="/images/about.png" alt="About" className="w-full h-full object-contain" /> */}
            <img src="/images/second-image.svg" alt="vetor 2" />
          </a>
        </div>

        {/* Text — fade from right */}
        <div className="flex-1">
          <h2
            className={`${vis("right", "delay-200")} text-glow font-bold mb-6 text-right`}
            style={{
              fontFamily: "'Cal Sans', 'Fira Sans Condensed', sans-serif",
              color: "#ffffff",
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            &lt;<span style={{ color: "#FBD15B" }}>Mas quem é Jose?</span>&gt;
          </h2>

          <p
            className={`${vis("right", "delay-400")} text-base md:text-lg leading-relaxed text-justify`}
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
      </div>
    </section>
  );
}
