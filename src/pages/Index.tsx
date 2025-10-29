import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import {
  ServiceStructuredData
} from "@/components/StructuredData";
import { PersonStructuredData } from "@/components/AdvancedStructuredData";

const Index = () => {
  // Ne pas charger les schémas déjà dans index.html pour éviter les doublons
  // OrganizationStructuredData, WebsiteStructuredData et FAQStructuredData sont dans index.html

  return (
    <div className="min-h-screen">
      <ServiceStructuredData />
      <PersonStructuredData />
      <Navigation />
      <Hero />
      <Why />
      <Services />
      <Results />
      <Process />
      <WhyUs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
