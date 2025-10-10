import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Audit complet de votre fiche actuelle",
  "Stratégie personnalisée",
  "Recommandations d'experts",
  "Sans engagement",
];

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Prêt à Dominer Votre Marché Local ?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Recevez un audit gratuit de votre fiche Google My Business
            </p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 space-y-8 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  type="text" 
                  placeholder="Votre nom"
                  className="h-12 border-border/50"
                />
                <Input 
                  type="text" 
                  placeholder="Nom de votre entreprise"
                  className="h-12 border-border/50"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  type="email" 
                  placeholder="Votre email"
                  className="h-12 border-border/50"
                />
                <Input 
                  type="tel" 
                  placeholder="Votre téléphone"
                  className="h-12 border-border/50"
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
              >
                Obtenir mon audit gratuit
              </Button>
            </form>
            
            <p className="text-center text-sm text-muted-foreground">
              Réponse sous 24h • 100% gratuit • Sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
