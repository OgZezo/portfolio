// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

// Importando suas páginas da pasta pages/
import HomePage from "./pages/HomePage";
import Curriculo from "./pages/Curriculo";
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Sobremim from "./pages/SobreMim";
import Projeto1 from "./pages/Projeto1";
import Projeto2 from "./pages/Projeto2";    
import Projeto3 from "./pages/Projeto3";
import Projeto4 from "./pages/Projeto4";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        {/* Quando a URL for a raiz "/", renderiza a HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Quando a URL for "/curriculo", renderiza a página do Currículo */}
        <Route path="/curriculo" element={<Curriculo />} />

        <Route path="/contato" element={<Contato />} />
        {/* Rota para página de contatos */}

        <Route path="/projetos" element={<Projetos />} />
        {/* Rota para página de todos os projetos */}

        <Route path="/sobremim" element={<Sobremim />} />
        {/* Rota para página de Sobre Mim */}

        <Route path="/projeto1" element={<Projeto1 />} />
        {/* Rota para detalhes de projetos (exemplo) */}

        <Route path="/projeto2" element={<Projeto2 />} />
        {/* Rota para detalhes de projetos (exemplo) */}

        <Route path="/projeto3" element={<Projeto3 />} />
        {/* Rota para detalhes de projetos (exemplo) */}

        <Route path="/projeto4" element={<Projeto4 />} />
        {/* Rota para detalhes de projetos (exemplo) */}

        {/* <Route path="*" element={<NotFoundPage />} /> --- IGNORE --- */}
        <Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  );
}
