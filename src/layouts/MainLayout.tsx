
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChatButton from '../components/chat/FloatingChatButton';

/**
 * Layout principal de l'application
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
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer author="Geoffroy Streit" email="geoffroy.streit@gmail.com" />
      <FloatingChatButton />
    </div>
  );
};

export default MainLayout;
