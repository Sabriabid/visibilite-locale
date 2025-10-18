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
              <span className="text-primary font-semibold">Expert Google Maps</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Votre commerce invisible sur Google ?{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">On change ça en 72h</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Que vous ayez un <strong>restaurant, un salon, une boutique ou un cabinet</strong> : quand vos clients vous cherchent sur Google, c'est vos concurrents qu'ils trouvent. Pas vous. Résultat : <strong>vous perdez 10 à 20 clients par mois</strong> sans le savoir. On fait en sorte que VOUS apparaissiez en premier. <strong>Plus de visibilité = Plus d'appels = Plus de clients.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Bouton "Audit gratuit" cliqué');
                  window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank');
                }}
              >
                Audit gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="cursor-pointer hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Bouton "Voir nos résultats" cliqué');
                  const resultsElement = document.getElementById('results');
                  if (resultsElement) {
                    resultsElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    console.error('Élément #results non trouvé');
                  }
                }}
              >
                Voir nos résultats
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">+15</div>
                <div className="text-sm text-muted-foreground">Clients/mois en moyenne</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">72h</div>
                <div className="text-sm text-muted-foreground">Pour voir les résultats</div>
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
