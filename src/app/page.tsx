import { AboutSection } from "@/sections/About";
import CertificatesSection from "@/sections/Certificates";
import { ContactSection } from "@/sections/Contact";
import { CVTree } from "@/sections/CVTree";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="page-layout-content">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="edu&exp">
        <CVTree />
      </div>
      <div id="certificates">
        <CertificatesSection />
      </div>
      <div id="testimonial">
        <TestimonialsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
