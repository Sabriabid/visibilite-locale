import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, Star, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit SEO Local Approfondi",
    description: "Analyse complète de votre fiche GMB actuelle et audit concurrentiel détaillé : NAP (nom, adresse, téléphone), catégories, mots-clés, photos, avis, performances. Identification des opportunités de référencement local inexploitées.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Optimisation Technique et Sémantique",
    description: "Optimisation avancée de tous les éléments de votre fiche : sélection des catégories principales et secondaires optimales, rédaction SEO des descriptions avec mots-clés locaux, optimisation des attributs, ajout de photos professionnelles géolocalisées.",
  },
  {
    number: "03",
    icon: Star,
    title: "Stratégie E-Réputation et Avis Google",
    description: "Mise en place d'un système de collecte d'avis clients automatisé et éthique. Réponses personnalisées à tous les avis (positifs et négatifs) pour améliorer votre note moyenne et votre taux de conversion. Gestion proactive de votre réputation en ligne.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Suivi Performance et Optimisation Continue",
    description: "Analyse mensuelle des KPIs (vues profil, clics site web, demandes d'itinéraire, appels). Rapport détaillé avec recommandations stratégiques. Ajustements continus basés sur les données pour améliorer constamment votre positionnement local.",
  },
];

const Process = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Méthodologie d'Optimisation GMB en 4 Étapes Clés
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre <strong>processus éprouvé</strong> d'optimisation Google My Business garantit des résultats rapides et durables. Une approche structurée pour maximiser votre <strong>visibilité locale</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-2 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 mx-auto mt-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-center">{step.title}</h3>
                <p className="text-muted-foreground text-sm text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
