import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, CheckCircle2 } from "lucide-react";

const withoutGMB = [
  "Invisible sur Google Maps et le Local Pack → vos concurrents captent VOS clients potentiels",
  "Informations d'entreprise introuvables ou obsolètes → clients frustrés qui abandonnent",
  "Aucun avis client visible → crédibilité zéro, prospects méfiants qui passent leur chemin",
  "Impossible de répondre aux avis négatifs → e-réputation qui se dégrade sans contrôle",
  "Dépendance totale au bouche-à-oreille physique → croissance très limitée et lente",
  "Perte de 70% des opportunités locales → argent laissé sur la table chaque jour",
];

const withGMB = [
  "Visibilité maximale sur Google Maps et dans le Local Pack → clients locaux qui vous trouvent instantanément",
  "Horaires, téléphone cliquable, itinéraire GPS, services → informations accessibles 24/7 en 1 clic",
  "Fiche complète avec photos pro et avis 4-5 étoiles → confiance et légitimité immédiates",
  "Gestion active des avis Google → dialogue constant avec prospects, e-réputation maîtrisée",
  "Pilotage centralisé de votre présence locale → tout contrôlé depuis un seul tableau de bord",
  "Chaque recherche locale devient une opportunité commerciale → conversions maximisées (appels, visites, ventes)",
];

const Comparison = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Avec ou Sans GMB : L'Impact sur Votre Visibilité Locale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une <strong>fiche Google My Business optimisée</strong> transforme radicalement votre présence locale. Comparaison concrète entre une entreprise <strong>sans fiche GMB</strong> (invisible et dépassée) et une entreprise <strong>avec fiche optimisée</strong> (visible et prospère).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-destructive/20 animate-fade-in">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-destructive">❌ Sans Fiche Google My Business</h3>
                <p className="text-muted-foreground">
                  Sans <strong>fiche Google My Business</strong>, votre entreprise est totalement <strong>invisible pour 93% des consommateurs</strong> qui cherchent des services locaux sur Google et Google Maps. Vos informations sont introuvables, votre crédibilité est nulle et vos <strong>concurrents optimisés captent tous vos prospects</strong>. Une situation catastrophique pour toute entreprise locale en 2024.
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
                <h3 className="text-2xl font-bold text-primary">✅ Avec Fiche Google My Business Optimisée</h3>
                <p className="text-muted-foreground">
                  Avec une <strong>fiche Google My Business professionnellement optimisée</strong>, vous dominez les <strong>recherches locales</strong>, apparaissez en première page Google Maps, inspirez confiance avec des avis 4-5 étoiles et facilitez l'accès à vos services. Résultat : <strong>+320% de visibilité</strong>, afflux constant de nouveaux clients locaux et <strong>croissance durable</strong> de votre chiffre d'affaires.
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
