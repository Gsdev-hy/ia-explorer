
import { ReactNode } from 'react';

interface SectionHeadingProps {
  pretitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  children?: ReactNode;
}

/**
 * En-tête de section avec pré-titre, titre et description
 * @param {string} pretitle - Texte au-dessus du titre (optionnel)
 * @param {string} title - Titre principal
 * @param {string} description - Description (optionnel)
 * @param {boolean} center - Si le texte doit être centré (optionnel)
 * @param {ReactNode} children - Contenu supplémentaire (optionnel)
 * @returns {JSX.Element} Le composant SectionHeading
 */
const SectionHeading = ({
  pretitle,
  title,
  description,
  center = false,
  children
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {pretitle && (
        <p className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
          {pretitle}
        </p>
      )}
      <h2 className="heading-lg mb-4 animate-slide-up">{title}</h2>
      {description && (
        <p className="body-lg text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
