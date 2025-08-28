
import React from 'react';
import { Sparkles, Zap, Target, Lightbulb } from 'lucide-react';

const PromptGeneratorHeader: React.FC = () => {
  return (
    <div className="text-center space-y-6 mb-8">
      {/* En-tête principal avec meilleur contraste */}
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
            <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Générateur de Prompts Intelligent
          </h1>
          <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Créez des prompts professionnels optimisés pour tous les types d'IA : 
          <span className="font-semibold text-purple-600 dark:text-purple-400"> LLM</span>, 
          <span className="font-semibold text-blue-600 dark:text-blue-400"> génération d'images</span>, 
          <span className="font-semibold text-green-600 dark:text-green-400"> audio</span>, 
          <span className="font-semibold text-red-600 dark:text-red-400"> vidéo</span>, 
          <span className="font-semibold text-orange-600 dark:text-orange-400"> vision IA</span>, 
          et <span className="font-semibold text-indigo-600 dark:text-indigo-400">systèmes RAG</span>
        </p>
      </div>

      {/* Statistiques avec meilleure lisibilité */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-700/50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            <div className="text-left">
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">200+</div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Templates Spécialisés</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-700/50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <div className="text-left">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">15</div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Catégories IA</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-700/50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
            <div className="text-left">
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">Pro</div>
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">Qualité Studio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Nouvelles fonctionnalités avec meilleur contraste */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
          🆕 Nouvelles Fonctionnalités Avancées
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-purple-600 dark:text-purple-400">🔬</span>
              <span className="text-gray-700 dark:text-gray-200">Recherche académique & analyse</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">⚙️</span>
              <span className="text-gray-700 dark:text-gray-200">Automatisation intelligente</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">👁️</span>
              <span className="text-gray-700 dark:text-gray-200">Vision IA et analyse d'images</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-orange-600 dark:text-orange-400">🎵</span>
              <span className="text-gray-700 dark:text-gray-200">Composition musicale IA sophistiquée</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600 dark:text-red-400">🎬</span>
              <span className="text-gray-700 dark:text-gray-200">Génération vidéo cinématographique</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400">🤖</span>
              <span className="text-gray-700 dark:text-gray-200">Intégration IA dans les processus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptGeneratorHeader;
