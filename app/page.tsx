import HeroHeader from "./components/HeroHeader";
import InstructorSection from "./components/InstructorSection";
import AiJourneySection from "./components/AiJourneySection";
import CourseSection from "./components/CourseSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <AiJourneySection />
      <InstructorSection />
      <CourseSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
