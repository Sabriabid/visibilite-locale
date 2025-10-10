import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getArticleBySlug } from "@/data/blogArticles";

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

  return (
    <div className="min-h-screen">
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
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
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
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
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
