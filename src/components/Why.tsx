import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Clock, MessageSquare } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Vos clients vous trouvent en premier",
    description: "Quand quelqu'un cherche 'coiffeur près de moi', 'restaurant Paris' ou 'avocat Lyon', vous apparaissez dans les 3 premiers résultats sur Google. Résultat : plus de monde qui découvre votre commerce.",
  },
  {
    icon: Award,
    title: "Ça marche vite",
    description: "En quelques semaines, vous commencez à apparaître en haut de Google. Bien plus rapide que de créer un site internet ou d'attendre que les gens parlent de vous.",
  },
  {
    icon: Clock,
    title: "Tout est clair pour vos clients",
    description: "Vos horaires, votre téléphone, comment venir chez vous : tout est affiché clairement. Les gens peuvent vous appeler ou venir vous voir en 1 clic, sans se poser de questions.",
  },
  {
    icon: MessageSquare,
    title: "Des avis qui rassurent",
    description: "Les avis 5 étoiles de vos clients satisfaits sont visibles par tout le monde. Ça rassure les nouveaux clients qui hésitent encore et ça donne envie de venir chez vous.",
  },
];

const Why = () => {
  return (
    <section id="why" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pourquoi c'est important d'être visible sur Google ?
            </h2>
            <p className="text-2xl font-semibold">
              Aujourd'hui, tout le monde cherche sur Google…{" "}
              <span className="text-primary">Si on ne vous trouve pas, vous perdez des clients tous les jours</span>
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Sans Google Maps bien configuré</strong>, vous êtes invisible pour 93% des gens qui cherchent des commerces comme le vôtre. Pendant ce temps, vos concurrents récupèrent VOS clients. On s'occupe de tout pour que vous soyez facile à trouver et que <strong>les gens viennent chez vous plutôt que chez la concurrence</strong>.
            </p>
            <p className="text-base text-muted-foreground">
              Le référencement local est devenu incontournable : <strong>76% des recherches locales sur mobile aboutissent à une visite en magasin dans les 24 heures</strong>.
              Avec une fiche Google My Business optimisée, vous apparaissez dans le <strong>Local Pack</strong> (les 3 premiers résultats Google Maps),
              vous obtenez plus d'avis positifs, et vous générez plus d'appels téléphoniques et de demandes d'itinéraire.
              Notre méthode éprouvée sur 500+ entreprises locales vous garantit une visibilité maximale et des résultats mesurables.
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
            >
              Je veux plus de clients
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
