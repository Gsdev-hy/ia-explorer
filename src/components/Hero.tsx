
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
      className={`relative pt-28 md:pt-32 pb-16 md:pb-20 ${image ? 'min-h-[80vh] flex items-center' : ''}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {image && overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 backdrop-blur-sm"></div>
      )}

      <div className="relative section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-slide-down">{title}</h1>
          <p className="body-lg mb-8 text-muted-foreground animate-slide-down" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              {primaryAction && (
                <Link
                  to={primaryAction.href}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                >
                  {primaryAction.label}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  to={secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-lg border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary shadow-sm hover:bg-primary/10 transition-colors"
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
