 import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import SelectedWork from "@/components/work/selected-work";
import SkillsSection from "@/components/skills/skills-section";
import JourneySection from "@/components/journey/journey-section";
import ContactSection from "@/components/contact/contact-section";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
     <main className="bg-[#080808] text-white overflow-hidden">
  <Navbar />
  <Hero />
  <SelectedWork />
  <SkillsSection />
  <JourneySection />
  <ContactSection />
  <Footer />
</main>
  );
}