import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Visibilité Locale
            </h3>
            <p className="text-background/70 mb-4">
              Votre partenaire pour dominer les recherches locales sur Google
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens Rapides</h4>
            <div className="space-y-2 text-background/70">
              <Link to="/" className="block hover:text-primary transition-colors">
                Accueil
              </Link>
              <a href="/#services" className="block hover:text-primary transition-colors">
                Nos Services
              </a>
              <a href="/#pricing" className="block hover:text-primary transition-colors">
                Tarifs
              </a>
              <Link to="/blog" className="block hover:text-primary transition-colors">
                Blog SEO Local
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+33 6 95 97 03 18</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sabriseo19@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horaires</h4>
            <div className="space-y-2 text-background/70">
              <p>Lundi - Vendredi</p>
              <p className="font-semibold text-background">9h00 - 18h00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} Visibilité Locale. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
