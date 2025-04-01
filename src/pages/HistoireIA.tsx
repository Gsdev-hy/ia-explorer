
import React from 'react';
import { Bot } from 'lucide-react';
import { Timeline } from '@/components';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const HistoireIA = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Histoire de l'Intelligence Artificielle</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Chronologie Interactive</h2>
        <Timeline />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Défis et Controverses</h2>
          <div className="space-y-4">
            <div className="p-4 bg-secondary/10 rounded-lg flex gap-4">
              <div className="p-2 bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h5 className="font-medium mb-1">Défis éthiques grandissants</h5>
                <p className="text-sm text-muted-foreground">Questions de biais, vie privée, désinformation, impact sur l'emploi deviennent centrales dans le développement responsable de l'IA.</p>
              </div>
            </div>
            
            <Alert>
              <AlertTitle>L'hiver de l'IA</AlertTitle>
              <AlertDescription>
                L'histoire de l'IA a connu plusieurs "hivers" - périodes de désillusion et de réduction des financements suite à des attentes trop élevées. Le premier s'est produit dans les années 1970, et un autre dans les années 1990.
              </AlertDescription>
            </Alert>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Impacts Culturels</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">L'IA a profondément influencé notre culture populaire, de HAL 9000 dans "2001: l'Odyssée de l'espace" aux récits contemporains sur la singularité technologique.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h5 className="font-medium mb-2">Littérature</h5>
                <p className="text-sm">Isaac Asimov avec ses "Trois lois de la robotique" a façonné notre vision de l'éthique des machines.</p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h5 className="font-medium mb-2">Cinéma</h5>
                <p className="text-sm">De "Metropolis" (1927) à "Her" (2013), le cinéma explore notre relation avec l'intelligence artificielle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Figures Emblématiques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {["Alan Turing", "Marvin Minsky", "John McCarthy", "Geoffrey Hinton"].map((name, index) => (
            <div key={index} className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h5 className="font-medium">{name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoireIA;
