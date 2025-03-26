
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Fournisseur de thème pour l'application
 * @param {object} props - Props du composant
 * @param {React.ReactNode} props.children - Composants enfants
 * @returns {JSX.Element} Le fournisseur de thème
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Vérifier s'il y a un thème sauvegardé dans localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    
    // Vérifier si l'utilisateur préfère le mode sombre au niveau du système
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Utiliser le thème sauvegardé ou la préférence système, sinon utiliser le thème clair
    return savedTheme || (prefersDark ? "dark" : "light");
  });

  // Appliquer la classe dark au body lorsque le thème change
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Sauvegarder le thème dans localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook pour accéder au contexte de thème
 * @returns {ThemeContextType} Contexte de thème
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit être utilisé au sein d'un ThemeProvider");
  }
  return context;
};
