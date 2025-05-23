
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import AnimatedLogo from './AnimatedLogo';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Composant d'en-tête avec navigation responsive et accessible
 * @returns {JSX.Element} Le composant Header
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Fermer le menu lorsque la route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
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

  // Gestion des événements clavier pour l'accessibilité
  const handleKeyDown = (e: React.KeyboardEvent, category: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveDropdown(activeDropdown === category ? null : category);
    } else if (e.key === 'Escape') {
      setActiveDropdown(null);
    }
  };

  // Fermer les dropdowns si on clique en dehors
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  // Animation pour le menu mobile
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Catégories de navigation
  const navCategories = {
    "Types et niveaux": [
      { text: 'Types d\'IA', href: '/types-ia' },
      { text: 'Niveaux d\'IA', href: '/niveaux-ia' },
    ],
    "Technologies": [
      { text: 'Machine Learning', href: '/machine-learning' },
      { text: 'IA Multimodale', href: '/ia-multimodale' },
    ],
    "Applications & Ressources": [
      { text: 'Cas d\'usage', href: '/cas-usage' },
      { text: 'Histoire', href: '/histoire-ia' },
      { text: 'Éthique', href: '/ethique' },
      { text: 'Glossaire', href: '/glossaire' },
      { text: 'Ressources', href: '/ressources' },
      { text: 'Actualités', href: '/actualites' },
    ],
    "À propos": [
      { text: 'À propos', href: '/a-propos' },
    ]
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          aria-label="Accueil IA Explorer"
        >
          <AnimatedLogo compact={true} />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          {Object.entries(navCategories).map(([category, links]) => (
            <div 
              key={category} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(category)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`px-3 py-2 text-sm rounded-md transition-colors hover:bg-muted flex items-center gap-1
                  ${activeDropdown === category ? 'bg-primary/10 text-primary font-medium' : 'hover:text-foreground'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === category ? null : category);
                }}
                onKeyDown={(e) => handleKeyDown(e, category)}
                aria-expanded={activeDropdown === category}
                aria-controls={`dropdown-${category}`}
                tabIndex={0}
              >
                {category} <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === category ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === category && (
                  <motion.div 
                    id={`dropdown-${category}`}
                    className="absolute top-full left-0 mt-1 bg-background rounded-md shadow-lg border border-border min-w-[200px] z-50"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-1">
                      {links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-muted focus:bg-muted focus:outline-none
                            ${pathname === link.href ? 'bg-primary/10 text-primary font-medium' : ''}`}
                          tabIndex={0}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <ThemeToggle />
        </nav>

        {/* Boutons mobile */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 focus:ring-2 focus:ring-primary focus-visible:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Menu mobile amélioré */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-background pt-16 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <nav className="container flex flex-col p-4 space-y-4 pb-24 overflow-y-auto max-h-[calc(100vh-4rem)]">
              {Object.entries(navCategories).map(([category, links]) => (
                <div key={category} className="space-y-2">
                  <h3 className="font-semibold text-primary text-sm px-2">{category}</h3>
                  <div className="space-y-1 pl-2">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block px-4 py-3 rounded-lg transition-colors
                          ${pathname === link.href
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'hover:bg-muted active:bg-muted/70'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Bouton de fermeture en bas pour facilité d'accès sur grands téléphones */}
            <motion.div 
              className="fixed bottom-4 left-0 right-0 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              <Button 
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-primary-foreground shadow-lg"
                size="lg"
              >
                Fermer le menu
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
