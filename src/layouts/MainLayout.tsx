
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChatButton from '../components/chat/FloatingChatButton';
import SkipLink from '../components/SkipLink';

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

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <SkipLink />
      <Header />
      <main 
        id="main-content"
        className="flex-grow focus:outline-none" 
        tabIndex={-1}
        role="main"
      >
        <div className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer author="Geoffroy Streit" email="geoffroy.streit@gmail.com" />
      <FloatingChatButton />
    </div>
  );
};

export default MainLayout;
