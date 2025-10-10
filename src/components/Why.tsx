import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Clock, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Visibilité Immédiate sur Google Maps",
    description: "Google favorise GMB : apparaissez instantanément dans le Local Pack (les 3 premiers résultats sur Google Maps) et dominez les recherches de type 'près de moi'. Plus visible qu'un site web classique.",
  },
  {
    icon: Award,
    title: "Positionnement Rapide en Première Page",
    description: "Avec une fiche Google My Business optimisée, atteignez la première page Google en quelques semaines seulement. Bien plus rapide et efficace qu'un référencement naturel traditionnel pour capter vos clients locaux.",
  },
  {
    icon: Clock,
    title: "Informations Accessibles 24h/24",
    description: "Horaires d'ouverture, numéro de téléphone cliquable, itinéraire GPS, services proposés : tout est accessible en un clic. Vos clients trouvent ce qu'ils cherchent sans friction, ce qui augmente les conversions.",
  },
  {
    icon: MessageSquare,
    title: "Interaction Client et E-Réputation",
    description: "Avis clients, photos authentiques, questions/réponses : créez un dialogue direct avec vos prospects. Gérez votre réputation en ligne, rassurez les indécis et transformez les visiteurs en clients fidèles.",
  },
];

const Why = () => {
  return (
    <section id="why" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pourquoi Optimiser Votre Fiche Google My Business ?
            </h2>
            <p className="text-2xl font-semibold">
              Google favorise ses propres services…{" "}
              <span className="text-primary">Profitez-en pour dominer votre marché local !</span>
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Sans fiche Google My Business optimisée</strong>, vous êtes invisible pour 93% des consommateurs qui cherchent des services locaux sur Google. Pendant ce temps, vos concurrents captent VOS clients. Une <strong>fiche GMB bien optimisée</strong> vous permet de gagner en <strong>visibilité locale</strong>, en crédibilité et de convertir chaque recherche locale en opportunité commerciale.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
            >
              Nous contacter
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
