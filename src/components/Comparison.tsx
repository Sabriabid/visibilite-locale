import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, CheckCircle2 } from "lucide-react";

const withoutGMB = [
  "Invisible dans les résultats locaux → clients perdus",
  "Les informations sur l'entreprise sont difficiles à trouver",
  "Crédibilité faible → les clients hésitent à vous contacter",
  "Interaction limitée avec les clients → difficile de répondre aux avis et questions",
  "Dépendance aux recommandations hors ligne",
  "Opportunités de ventes manquées",
];

const withGMB = [
  "Visible dans les recherches locales → attire de nouveaux clients",
  "Horaires, coordonnées et services accessibles en un clic",
  "Fiche complète → inspire confiance et légitimité",
  "Avis, photos et questions/réponses → dialogue facile avec les clients",
  "Gestion centralisée de votre présence locale",
  "Chaque recherche locale devient une opportunité de contact ou de conversion",
];

const Comparison = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Les bénéfices d'une fiche Google My Business optimisée
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une fiche Google My Business est un outil clé pour toute entreprise : elle valorise votre image, améliore votre réputation locale, attire de nouveaux clients et facilite la fidélisation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-destructive/20 animate-fade-in">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-destructive">Sans fiche GMB</h3>
                <p className="text-muted-foreground">
                  Sans fiche Google My Business, votre entreprise reste invisible aux yeux des clients locaux. Vos informations sont difficiles à trouver et vos concurrents captent vos prospects.
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
                <h3 className="text-2xl font-bold text-primary">Avec fiche GMB</h3>
                <p className="text-muted-foreground">
                  Avec une fiche Google My Business optimisée, vous gagnez en visibilité locale, inspirez confiance et facilitez l'accès à vos services pour attirer de nouveaux clients.
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
