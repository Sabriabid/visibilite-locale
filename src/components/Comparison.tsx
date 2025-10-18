import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, CheckCircle2 } from "lucide-react";

const withoutGMB = [
  "Personne ne vous trouve sur Google → vos clients vont chez vos concurrents",
  "Vos horaires et téléphone difficiles à trouver → les gens abandonnent et vont ailleurs",
  "Pas d'avis visibles → les nouveaux clients n'ont pas confiance",
  "Vous ne pouvez pas répondre aux avis négatifs → votre réputation se dégrade",
  "Vous comptez uniquement sur le bouche-à-oreille → croissance très lente",
  "Vous perdez 500 à 1000€ de chiffre d'affaires par mois → de l'argent qui part chez vos concurrents",
];

const withGMB = [
  "Les gens vous trouvent facilement sur Google → plus de monde qui vient chez vous",
  "Tout est clair : horaires, téléphone, itinéraire → les clients vous contactent en 1 clic",
  "Plein d'avis 5 étoiles bien visibles → les nouveaux clients ont confiance",
  "On répond aux avis pour vous → votre réputation est bien gérée",
  "Tout est centralisé et facile à gérer → vous gagnez du temps",
  "Plus de clients qui vous appellent et viennent → vous gagnez plus d'argent",
];

const Comparison = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            La différence entre être invisible et être trouvé
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Voici ce qui change <strong>concrètement</strong> quand on vous rend visible sur Google. La différence entre <strong>perdre des clients tous les jours</strong> et <strong>en gagner tous les jours</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-destructive/20 animate-fade-in">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-destructive">❌ Sans nous</h3>
                <p className="text-muted-foreground">
                  Vous êtes invisible pour 93% des gens qui cherchent des commerces comme le vôtre sur Google. Vos infos sont introuvables, les clients n'ont pas confiance et vos concurrents récupèrent tous les clients à votre place. Résultat : <strong>vous perdez de l'argent tous les jours</strong>.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">Inconvénients :</p>
                {withoutGMB.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
              >
                Demander un devis
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">✅ Avec nous</h3>
                <p className="text-muted-foreground">
                  Vous apparaissez en premier quand les gens cherchent votre type de commerce. Ils voient vos avis 5 étoiles, ils peuvent vous appeler en 1 clic. Résultat : <strong>+15 nouveaux clients par mois en moyenne</strong>, et <strong>votre chiffre d'affaires qui augmente</strong> tous les mois.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">Avantages :</p>
                {withGMB.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
              >
                Demander un devis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
