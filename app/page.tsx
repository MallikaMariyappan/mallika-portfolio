import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ShaderBackground from "@/components/ShaderBackground";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main style={{ background: "#000", minHeight: "100vh", position: "relative", cursor: "none" }}>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Three.js GLSL shader background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <ShaderBackground />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
