
import { Link } from 'react-router-dom';

/**
 * Pied de page du site avec liens utiles
 * @returns {JSX.Element} Le composant Footer
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-primary font-display font-bold text-xl">AI Avenir</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Explorez le monde fascinant de l'intelligence artificielle avec une approche claire et accessible.
              Nous vous guidons à travers les concepts, technologies et enjeux de l'IA.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/niveaux-ia" className="text-muted-foreground hover:text-primary transition-colors">
                  Niveaux d'IA
                </Link>
              </li>
              <li>
                <Link to="/types-ia" className="text-muted-foreground hover:text-primary transition-colors">
                  Types d'IA
                </Link>
              </li>
              <li>
                <Link to="/machine-learning" className="text-muted-foreground hover:text-primary transition-colors">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Ressources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/cas-usage" className="text-muted-foreground hover:text-primary transition-colors">
                  Cas d'usage
                </Link>
              </li>
              <li>
                <Link to="/ethique" className="text-muted-foreground hover:text-primary transition-colors">
                  Éthique
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-muted-foreground hover:text-primary transition-colors">
                  Annuaire
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} AI Avenir - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
