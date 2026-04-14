import { useEffect, useState } from "react";

interface Options {
  words: string[];
  typeSpeed?: number;   // ms por caractere ao digitar
  deleteSpeed?: number; // ms por caractere ao apagar
  pauseAfter?: number;  // ms de pausa após palavra completa
  startDelay?: number;  // ms antes de começar
}

export function useTypewriter({
  words,
  typeSpeed = 90,
  deleteSpeed = 55,
  pauseAfter = 1400,
  startDelay = 0,
}: Options) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "typing" | "pausing" | "deleting">("idle");
  const [charIndex, setCharIndex] = useState(0);

  // Start after delay
  useEffect(() => {
    const t = setTimeout(() => setPhase("typing"), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (phase === "idle") return;

    const current = words[wordIndex];

    if (phase === "typing") {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typeSpeed);
        return () => clearTimeout(t);
      } else {
        // word complete → pause
        const t = setTimeout(() => setPhase("deleting"), pauseAfter);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, deleteSpeed);
        return () => clearTimeout(t);
      } else {
        // deleted → next word
        const nextIndex = (wordIndex + 1) % words.length;
        setWordIndex(nextIndex);
        setCharIndex(0);
        setPhase("typing");
      }
    }
  }, [phase, charIndex, wordIndex, words, typeSpeed, deleteSpeed, pauseAfter]);

  return displayed;
}
