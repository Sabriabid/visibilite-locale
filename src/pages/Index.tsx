import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
