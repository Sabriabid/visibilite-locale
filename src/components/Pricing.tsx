import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const pricingPlans = [
  {
    name: "Création & Optimisation Fiche GMB",
    price: "200€",
    period: "unique",
    description: "Prestation complète de création ou refonte totale de votre fiche Google My Business. Positionnement optimal dans les recherches locales dès les premières semaines grâce à notre expertise SEO local.",
    features: [
      "Audit SEO local approfondi (analyse concurrence + opportunités)",
      "Création complète ou optimisation avancée fiche GMB",
      "Optimisation SEO locale (catégories, mots-clés, NAP)",
      "Rédaction de contenus optimisés pour le référencement",
      "Création fiches produits/services avec mots-clés ciblés",
      "Rapport de veille concurrentielle détaillé",
    ],
    highlighted: false,
  },
  {
    name: "Gestion Mensuelle GMB",
    price: "65€",
    period: "/mois",
    subtext: "sans engagement",
    description: "Gestion hebdomadaire professionnelle de votre présence locale. Nous maintenons et améliorons votre visibilité Google Maps pendant que vous vous concentrez sur votre activité. Arrêt possible à tout moment.",
    features: [
      "Posts Google My Business hebdomadaires (contenu SEO optimisé)",
      "Gestion complète des avis Google (réponses personnalisées)",
      "Mise à jour continue des informations (horaires, services, photos)",
      "Analyse concurrentielle mensuelle + recommandations",
      "Optimisation continue des fiches produits/services",
      "Support prioritaire et conseils stratégiques personnalisés",
    ],
    highlighted: true,
  },
  {
    name: "Gestion Mensuelle Engagement 6 Mois",
    price: "59€",
    period: "/mois",
    subtext: "engagement 6 mois minimum",
    description: "Le meilleur rapport qualité-prix pour bâtir une présence locale durable et dominer durablement votre secteur sur Google Maps. Idéal pour les entreprises ambitieuses cherchant une croissance régulière.",
    features: [
      "Posts Google My Business hebdomadaires (stratégie de contenu long terme)",
      "Gestion experte des avis clients (réponses + stratégie e-réputation)",
      "Optimisation continue (informations, photos, offres spéciales)",
      "Veille concurrentielle approfondie + rapport mensuel détaillé",
      "Ajustements continus fiches produits/services basés sur performances",
      "Accompagnement stratégique personnalisé + priorisation",
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
            Tarifs Optimisation Google My Business : Transparents et Abordables
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des <strong>forfaits GMB adaptés</strong> à votre budget : de la création ponctuelle à la <strong>gestion mensuelle complète</strong> de votre référencement local
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
                  onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
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
