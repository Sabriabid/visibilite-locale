import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Why />
      <Services />
      <Pricing />
      <Comparison />
      <Process />
      <WhyUs />
      <Results />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
