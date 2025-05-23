
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChatButton from '../components/chat/FloatingChatButton';
import { motion } from 'framer-motion';

/**
 * Layout principal de l'application avec améliorations d'accessibilité
 * @returns {JSX.Element} Le layout avec header, contenu principal et footer
 */
const MainLayout = () => {
  const location = useLocation();

  // Défilement vers le haut à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Gestion de la navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Affichage visuel du focus lors de la navigation au clavier
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    };

    // Désactive l'indicateur visuel si l'utilisateur utilise la souris
    const handleMouseDown = () => {
      document.body.classList.remove('user-is-tabbing');
    };

    // Ajoute les écouteurs d'événements
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Animation de transition entre les pages
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 8
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <motion.main 
        className="flex-grow"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        key={location.pathname}
      >
        <Outlet />
      </motion.main>
      <Footer author="Geoffroy Streit" email="geoffroy.streit@gmail.com" />
      <FloatingChatButton />

      {/* Skip Link pour accessibilité - visible uniquement lors du focus */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:m-2 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:z-50 focus:rounded"
      >
        Aller au contenu principal
      </a>
    </div>
  );
};

export default MainLayout;
