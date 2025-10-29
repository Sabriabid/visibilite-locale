import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedArticles } from "@/data/blogArticles";

const BlogPreview = () => {
  const featuredArticles = getFeaturedArticles().slice(0, 2);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nos Guides SEO Local et Google My Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos <strong>conseils d'experts</strong> pour optimiser votre visibilité locale,
            gérer vos avis et dominer <strong>Google Maps</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {featuredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
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

        <div className="text-center">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="group">
              Voir tous les articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
