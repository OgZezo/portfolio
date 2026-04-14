// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esse setTimeout com 0ms é o pulo do gato! 
    // Ele joga a execução para o final da fila, garantindo que o DOM já atualizou
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null; // Ele não renderiza nada na tela, é só um guardião lógico
}