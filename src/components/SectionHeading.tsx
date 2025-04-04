
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
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-3 md:mb-4`}>
      {pretitle && (
        <p className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
          {pretitle}
        </p>
      )}
      <h2 className="heading-lg mb-2 animate-slide-up bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{title}</h2>
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
