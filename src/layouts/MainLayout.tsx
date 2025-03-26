
import { ReactNode, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Layout principal de l'application
 * @param {ReactNode} children - Les composants enfants à afficher
 * @returns {JSX.Element} Le layout avec header, contenu principal et footer
 */
const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  // Défilement vers le haut à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer author="Geoffroy Streit" />
    </div>
  );
};

export default MainLayout;
