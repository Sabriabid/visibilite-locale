import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const pricingPlans = [
  {
    name: "Création/optimisation de votre fiche GMB",
    price: "200€",
    period: "unique",
    description: "On s'occupe de tout pour vous positionner dans les premiers résultats dès les premières semaines.",
    features: [
      "Audit complet de votre visibilité actuelle",
      "Création ou optimisation de votre fiche GMB",
      "Optimisation SEO locale",
      "Création de contenus optimisés",
      "Création des fiches produits/services",
      "Veille concurrentielle",
    ],
    highlighted: false,
  },
  {
    name: "Gestion mensuelle de votre fiche GMB",
    price: "65€",
    period: "/mois",
    subtext: "sans engagement",
    description: "On s'en charge pour vous, chaque semaine. Vous gardez la main sur tout, nous nous occupons du reste.",
    features: [
      "Post hebdomadaire de contenus optimisés",
      "Gestion et réponse à vos avis clients",
      "Mise à jour régulière des informations",
      "Veille concurrentielle mensuelle",
      "Création/ajustement des fiches produits",
      "Assistance et conseils personnalisés",
    ],
    highlighted: true,
  },
  {
    name: "Gestion mensuelle avec engagement",
    price: "59€",
    period: "/mois",
    subtext: "avec engagement 6 mois minimum",
    description: "La formule la plus rentable pour les entreprises qui veulent bâtir une présence locale durable.",
    features: [
      "Post hebdomadaire de contenus optimisés",
      "Gestion et réponse à vos avis clients",
      "Mise à jour régulière des informations",
      "Veille concurrentielle mensuelle",
      "Création/ajustement des fiches produits",
      "Assistance et conseils personnalisés",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Combien coûte l'optimisation et la gestion d'une fiche Google My Business ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Faites briller votre entreprise sur Google sans exploser votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`group hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-2 border-border/50 animate-scale-in ${
                plan.highlighted ? "ring-2 ring-primary shadow-lg scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Populaire
                  </div>
                )}
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.subtext && (
                    <p className="text-sm text-muted-foreground mt-1">{plan.subtext}</p>
                  )}
                </div>

                <p className="text-muted-foreground">{plan.description}</p>

                <div className="space-y-3">
                  <p className="font-semibold text-sm">Inclus :</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.highlighted ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
