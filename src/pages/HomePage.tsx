import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main style={{ backgroundColor: "#121211" }}>
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
