import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Clock, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Soyez mis en avant par Google",
    description: "Google favorise ses propres services : une fiche GMB bien optimisée apparaît plus facilement dans les résultats locaux qu'un site web classique.",
  },
  {
    icon: Award,
    title: "Atteignez les premières positions",
    description: "Se positionner en tête des résultats Google est plus simple avec une fiche GMB qu'avec un site internet, pour toucher vos clients rapidement.",
  },
  {
    icon: Clock,
    title: "Facilitez l'accès à vos infos",
    description: "Une fiche GMB bien renseignée permet à vos clients de trouver vos horaires, coordonnées et services en un clic, sans naviguer sur un site complexe.",
  },
  {
    icon: MessageSquare,
    title: "Engagez facilement vos clients",
    description: "Grâce aux avis, photos et questions/réponses, vous pouvez interagir avec vos clients, répondre à leurs besoins et améliorer votre réputation locale.",
  },
];

const Why = () => {
  return (
    <section id="why" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pourquoi avoir une fiche Google My Business ?
            </h2>
            <p className="text-2xl font-semibold">
              Google favorise les fiches bien renseignées…{" "}
              <span className="text-primary">profitez-en !</span>
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Sans fiche Google My Business optimisée</strong>, vos clients vous ignorent et vos concurrents prennent l'avantage. Gagnez en visibilité, crédibilité et convertissez chaque prospect local.
            </p>
            <Button variant="hero" size="xl">
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
