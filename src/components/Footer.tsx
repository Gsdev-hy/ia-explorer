
import { Link } from 'react-router-dom';

interface FooterProps {
  author?: string;
}

/**
 * Composant de pied de page avec liens et informations légales
 * @param {string} author - Nom de l'auteur du site (optionnel)
 * @returns {JSX.Element} Le composant Footer
 */
const Footer = ({ author }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-muted/20 py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">IA Explorer</h3>
            <p className="text-muted-foreground">
              Une ressource éducative pour découvrir et comprendre l'intelligence artificielle sous tous ses aspects.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/types-ia" className="text-muted-foreground hover:text-primary transition-colors">Types d'IA</Link></li>
              <li><Link to="/niveaux-ia" className="text-muted-foreground hover:text-primary transition-colors">Niveaux d'IA</Link></li>
              <li><Link to="/machine-learning" className="text-muted-foreground hover:text-primary transition-colors">Machine Learning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/ethique" className="text-muted-foreground hover:text-primary transition-colors">Éthique de l'IA</Link></li>
              <li><Link to="/cas-usage" className="text-muted-foreground hover:text-primary transition-colors">Cas d'usage</Link></li>
              <li><Link to="/glossaire" className="text-muted-foreground hover:text-primary transition-colors">Glossaire</Link></li>
              <li><Link to="/ressources" className="text-muted-foreground hover:text-primary transition-colors">Ressources externes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">
              Questions ou suggestions? N'hésitez pas à nous contacter.
            </p>
            <a href="mailto:contact@ia-explorer.fr" className="text-primary hover:underline">
              contact@ia-explorer.fr
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-2 sm:mb-0">
            © {currentYear} IA Explorer. Tous droits réservés.
            {author && ` Créé par ${author}.`}
          </p>
          <div className="flex space-x-4">
            <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
