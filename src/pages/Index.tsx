import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Results from "@/components/Results";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import {
  OrganizationStructuredData,
  WebsiteStructuredData,
  FAQStructuredData,
  ServiceStructuredData
} from "@/components/StructuredData";
import { PersonStructuredData, ReviewStructuredData } from "@/components/AdvancedStructuredData";
import { getAllTestimonials } from "@/data/testimonials";

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
      <Pricing />
      <Comparison />
      <Process />
      <WhyUs />
      <Results />
      <BlogPreview />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
