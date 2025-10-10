import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
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
      <Results />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
