import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getArticleBySlug } from "@/data/blogArticles";
import { BlogPostStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";
import { HowToStructuredData } from "@/components/AdvancedStructuredData";
import "@/styles/article.css";

// Fonction pour nettoyer et normaliser le HTML des articles
// - Convertit les listes (ul/li) en paragraphes pour une lecture plus naturelle
// - Supprime les nœuds vides et espaces superflus
const cleanHTML = (html: string): string => {
  const trimmed = html.trim();
  if (typeof window === 'undefined') return trimmed; // sécurité (non-SSR ici)

  const container = document.createElement('div');
  container.innerHTML = trimmed;

  // Convertir toutes les listes en paragraphes successifs
  const uls = Array.from(container.querySelectorAll('ul'));
  for (const ul of uls) {
    const parent = ul.parentElement;
    if (!parent) continue;
    const fragment = document.createDocumentFragment();
    const items = Array.from(ul.querySelectorAll(':scope > li'));
    for (const li of items) {
      const p = document.createElement('p');
      p.innerHTML = li.innerHTML;
      fragment.appendChild(p);
    }
    parent.replaceChild(fragment as unknown as Node, ul);
  }

  // Supprimer les paragraphes vides
  const paragraphs = Array.from(container.querySelectorAll('p'));
  for (const p of paragraphs) {
    if (!p.textContent || p.textContent.trim() === '') {
      p.remove();
    }
  }

  // Normaliser les retours à la ligne multiples dans le HTML final
  return container.innerHTML.replace(/\n\s*\n/g, '\n').trim();
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : null;

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-muted-foreground mb-8">L'article que vous recherchez n'existe pas.</p>
          <Link to="/blog">
            <Button variant="hero">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Ajout conditionnel du schéma HowTo pour l'article principal
  const isHowToArticle = article.slug === "optimiser-fiche-google-my-business-2024";

  return (
    <div className="min-h-screen">
      <BlogPostStructuredData
        title={article.title}
        description={article.excerpt}
        author={article.author}
        datePublished={article.date}
        dateModified={article.date}
        slug={article.slug}
      />
      <BreadcrumbStructuredData
        items={[
          { name: "Accueil", url: "https://visibilite-locale.fr" },
          { name: "Blog", url: "https://visibilite-locale.fr/blog" },
          { name: article.title, url: `https://visibilite-locale.fr/article/${article.slug}` }
        ]}
      />
      {isHowToArticle && (
        <HowToStructuredData
          name="Comment Optimiser Votre Fiche Google My Business en 5 Étapes"
          description="Guide complet pour optimiser votre fiche GMB et dominer les résultats locaux en suivant une méthode éprouvée"
          totalTime="PT45M"
          supply={[
            "Compte Google",
            "Fiche Google My Business validée",
            "Photos professionnelles de votre établissement",
            "Logo de votre entreprise"
          ]}
          tool={[
            "Google My Business Dashboard",
            "Google Search Console",
            "Google Analytics"
          ]}
          steps={[
            {
              name: "Normaliser vos informations NAP",
              text: "Vérifiez que le NAP (Nom, Adresse, Téléphone) et l'URL soient identiques partout: site, réseaux sociaux, annuaires. Une incohérence mine la confiance de Google et des utilisateurs. Ajoutez des horaires détaillés, y compris jours fériés, choisissez une catégorie principale précise et une description naturelle qui reflète votre activité réelle.",
              url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024"
            },
            {
              name: "Valoriser par l'image",
              text: "Les photos déclenchent l'attention et la confiance. Publiez des visuels authentiques de l'extérieur, de l'intérieur, de l'équipe et des produits. Préférez la lumière naturelle, des cadrages nets, des légendes descriptives et renouvelez le contenu visuel tous les mois pour rester actuel.",
              url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024"
            },
            {
              name: "Activer les avis comme preuve sociale",
              text: "Sollicitez des avis après des expériences positives et répondez systématiquement, même aux retours mitigés. Mentionnez le contexte, remerciez, expliquez, proposez une solution. Cette dynamique améliore la confiance, fait remonter votre fiche et rassure les hésitants.",
              url: "https://visibilite-locale.fr/article/gestion-avis-google-my-business-strategie-complete"
            },
            {
              name: "Publier régulièrement",
              text: "Les publications nourrissent la pertinence et montrent que l'entreprise est active. Annoncez vos offres, événements, nouveautés, réalisations. Un format simple fonctionne très bien: une image claire, un court texte utile et un appel à l'action orienté résultat.",
              url: "https://visibilite-locale.fr/article/strategie-contenu-gmb-publications-convertissent"
            },
            {
              name: "Exploiter les fonctionnalités avancées",
              text: "Activez la messagerie si vous pouvez répondre rapidement, structurez vos services, ajoutez vos produits avec descriptions et prix, et complétez les attributs pertinents (accessibilité, paiement, terrasse, etc.). Ce niveau de détail accélère le choix côté utilisateur et clarifie votre proposition de valeur pour Google.",
              url: "https://visibilite-locale.fr/article/optimiser-fiche-google-my-business-2024"
            }
          ]}
        />
      )}
      <Navigation />

      {/* Article Header */}
      <section className="relative py-24 bg-gradient-to-br from-background via-background to-muted pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{article.category}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
                <span>{article.date}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Audit GMB Gratuit
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Partager
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article 
              className="article-content prose prose-gray prose-headings:font-bold prose-headings:tracking-tight prose-lg max-w-none 
                prose-headings:font-bold prose-headings:text-foreground 
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-primary/20
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:text-primary prose-h3:font-semibold
                prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-accent prose-h4:font-semibold
                prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:mb-5 prose-p:text-base
                prose-strong:text-foreground prose-strong:font-bold
                prose-ul:my-6 prose-ul:space-y-3 prose-ul:pl-6
                prose-li:text-muted-foreground prose-li:leading-[1.7] prose-li:pl-2
                prose-a:text-primary prose-a:underline prose-a:font-medium hover:prose-a:text-primary/80
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:bg-muted/30
                prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                [&>*:first-child]:mt-0
                [&_ul]:list-disc
                [&_ul_li]:marker:text-primary"
              dangerouslySetInnerHTML={{ __html: cleanHTML(article.content) }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à Optimiser Votre Fiche GMB ?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Recevez un audit gratuit de votre fiche Google My Business et découvrez comment améliorer votre visibilité locale
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Réserver Mon Audit Gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Articles Similaires</h2>
            <p className="text-muted-foreground mb-8">
              Découvrez d'autres conseils pour optimiser votre visibilité locale
            </p>
            <Link to="/blog">
              <Button variant="outline" size="lg">
                Voir tous les articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article;
