
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  image?: string;
  children?: ReactNode;
  overlay?: boolean;
}

/**
 * Composant héros pour les entêtes de page avec actions
 * @param {Object} props - Les propriétés du composant
 * @returns {JSX.Element} Le composant Hero
 */
const Hero = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  image,
  children,
  overlay = false
}: HeroProps) => {
  return (
    <section 
      className={`relative pt-16 md:pt-20 pb-2 md:pb-3 ${image ? 'min-h-[50vh] flex items-center' : ''}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      aria-labelledby="hero-title"
    >
      {image && overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 backdrop-blur-sm" aria-hidden="true"></div>
      )}

      <div className="relative section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 id="hero-title" className="heading-xl mb-3 animate-slide-down bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{title}</h1>
          <p className="body-lg mb-4 text-muted-foreground animate-slide-down" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              {primaryAction && (
                <Link
                  to={primaryAction.href}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`${primaryAction.label}: naviguer vers la section correspondante`}
                >
                  {primaryAction.label}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  to={secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-lg border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary shadow-sm hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`${secondaryAction.label}: naviguer vers la section correspondante`}
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
