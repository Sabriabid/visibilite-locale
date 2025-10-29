import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Combien ça coûte vraiment ?",
    answer: "On vous explique tout pendant l'appel gratuit. Nos prix sont adaptés à votre situation et votre budget. Pas de surprise, pas de frais cachés. Réservez un appel et on vous dit exactement combien ça coûte pour VOTRE cas.",
  },
  {
    question: "Combien de temps avant de voir des résultats ?",
    answer: "Les premiers résultats (plus de vues, plus d'appels) arrivent en 2-4 semaines. Pour être bien placé de façon stable sur Google Maps : 2-3 mois. Ça dépend de votre ville et de vos concurrents, on vous explique votre situation précise pendant l'appel.",
  },
  {
    question: "C'est vraiment utile pour mon commerce ?",
    answer: "Si vos clients vous cherchent sur Google (\"coiffeur près de moi\", \"restaurant Paris\", etc.), alors OUI c'est crucial. 93% des gens cherchent sur Google avant d'acheter. Si vous n'êtes pas visible, c'est vos concurrents qui prennent vos clients.",
  },
  {
    question: "Je peux pas le faire moi-même ?",
    answer: "Vous pouvez essayer, mais Google change les règles régulièrement et il y a beaucoup de détails techniques. Nous on fait ça tous les jours depuis 2 ans pour 500+ commerces. On connaît les astuces et on évite les erreurs qui peuvent vous faire perdre du temps. Vous gagnez 3-6 mois en nous confiant ça.",
  },
  {
    question: "Comment je sais que ça marche vraiment ?",
    answer: "Chaque mois vous voyez un rapport clair : combien de personnes ont vu votre profil, combien ont cliqué, combien ont appelé. Des chiffres concrets, pas de bla-bla. Si ça ne marche pas, on ajuste jusqu'à ce que ça marche.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Les questions qu'on nous pose souvent
            </h2>
            <p className="text-xl text-muted-foreground">
              Tout ce que vous devez savoir avant de prendre votre <strong>appel gratuit</strong>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-scale-in">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 hover:shadow-[var(--shadow-lg)] transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
            >
              J'ai encore des questions - Réserver un appel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
