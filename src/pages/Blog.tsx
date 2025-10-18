import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getFeaturedArticles, getAllArticles } from "@/data/blogArticles";

const Blog = () => {
  const featuredArticles = getFeaturedArticles();
  const allArticles = getAllArticles();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-background via-background to-muted pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Blog <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Visibilité Locale</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez nos conseils d'experts pour optimiser votre visibilité locale et dominer Google My Business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.open('https://calendly.com/sabriseo19/audit-gmb', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Audit GMB Gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Articles à la Une</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="space-y-4">
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
                    </div>
                    
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Link to={`/article/${article.slug}`}>
                      <Button variant="ghost" size="sm" className="group">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tous les Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{article.category}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <Link to={`/article/${article.slug}`}>
                        <Button variant="ghost" size="sm" className="group">
                          Lire
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      <Footer />
    </div>
  );
};

export default Blog;
