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
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Vous perdez des clients chaque jour où vous attendez
            </h2>
            <p className="text-2xl text-primary-foreground/90 mb-4">
              Pendant que vous lisez cette page, vos concurrents sont trouvés sur Google à votre place
            </p>
            <p className="text-xl text-primary-foreground/80">
              Prenez 15 minutes pour un audit gratuit. On vous montre exactement ce qui ne va pas et comment le réparer en 72h.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 space-y-8 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-6">
              <Button
                type="button"
                variant="hero"
                size="xl"
                className="w-full md:w-auto px-12 text-lg"
                onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
              >
                Réserver Mon Appel Gratuit Maintenant
              </Button>

              <p className="text-sm text-muted-foreground">
                ⚡ Places limitées • Réponse sous 24h • Sans engagement
              </p>

              <div className="pt-6 border-t border-border/50">
                <p className="text-base text-muted-foreground font-semibold mb-2">
                  Vous hésitez encore ?
                </p>
                <p className="text-sm text-muted-foreground">
                  Un simple appel de 15 minutes peut vous faire gagner 10-20 clients par mois. Ça vaut le coup, non ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
