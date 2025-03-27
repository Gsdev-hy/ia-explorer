
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

/**
 * Composant d'en-tête avec navigation responsive
 * @returns {JSX.Element} Le composant Header
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Fermer le menu lorsque la route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Empêcher le défilement lorsque le menu est ouvert sur mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'Types d\'IA', href: '/types-ia' },
    { text: 'Niveaux d\'IA', href: '/niveaux-ia' },
    { text: 'Machine Learning', href: '/machine-learning' },
    { text: 'IA Multimodale', href: '/ia-multimodale' },
    { text: 'Cas d\'usage', href: '/cas-usage' },
    { text: 'Histoire', href: '/histoire-ia' },
    { text: 'Éthique', href: '/ethique' },
    { text: 'Glossaire', href: '/glossaire' },
    { text: 'Ressources', href: '/ressources' },
    { text: 'Actualités', href: '/actualites' },
    { text: 'À propos', href: '/about' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">IA Explorer</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                pathname === link.href
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'hover:bg-muted hover:text-foreground'
              }`}
            >
              {link.text}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Boutons mobile */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 md:hidden animate-fade-in">
          <nav className="container flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg ${
                  pathname === link.href
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'hover:bg-muted'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
