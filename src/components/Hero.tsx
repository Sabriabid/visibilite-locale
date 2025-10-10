import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Agence Google My Business</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Ne laissez pas vos concurrents{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                prendre votre place
              </span>{" "}
              sur Google Maps
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Nous vous accompagnons dans l'optimisation de votre fiche Google My Business. Notre mission : rendre votre entreprise plus visible localement, attirer de nouveaux clients et renforcer votre crédibilité en ligne.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
              >
                Audit gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Voir nos résultats
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">+300%</div>
                <div className="text-sm text-muted-foreground">Visibilité moyenne</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Note client</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">72h</div>
                <div className="text-sm text-muted-foreground">Premiers résultats</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Succès Google My Business"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
