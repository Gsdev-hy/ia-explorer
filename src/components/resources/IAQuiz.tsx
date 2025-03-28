
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, XCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Quelle est l'année généralement considérée comme marquant la naissance de l'IA?",
    options: ["1943", "1956", "1965", "1970"],
    correctAnswer: 1,
    explanation: "La conférence de Dartmouth en 1956 est considérée comme l'événement fondateur du domaine de l'intelligence artificielle."
  },
  {
    id: 2,
    text: "Qui est l'auteur du test de Turing?",
    options: ["John McCarthy", "Alan Turing", "Marvin Minsky", "Claude Shannon"],
    correctAnswer: 1,
    explanation: "Alan Turing a proposé ce test en 1950 pour évaluer la capacité d'une machine à imiter le comportement intelligent humain."
  },
  {
    id: 3,
    text: "Quelle technique est à la base des modèles de langage comme GPT?",
    options: ["Apprentissage supervisé", "Apprentissage par renforcement", "Transformers", "Réseaux de neurones convolutifs"],
    correctAnswer: 2,
    explanation: "Les transformers, introduits en 2017, sont l'architecture fondamentale des grands modèles de langage comme GPT."
  },
  {
    id: 4,
    text: "Qu'est-ce qu'un réseau de neurones artificiels?",
    options: [
      "Un système expert basé sur des règles", 
      "Un modèle inspiré du cerveau humain avec des couches de neurones interconnectés", 
      "Un algorithme de clustering de données",
      "Un système de stockage de connaissances"
    ],
    correctAnswer: 1,
    explanation: "Les réseaux de neurones sont des modèles inspirés du fonctionnement des neurones biologiques, organisés en couches interconnectées."
  },
  {
    id: 5,
    text: "Qu'est-ce que l'apprentissage profond (deep learning)?",
    options: [
      "Un type d'IA qui imite parfaitement la conscience humaine", 
      "Un sous-ensemble de l'apprentissage automatique utilisant des réseaux de neurones à plusieurs couches", 
      "Une méthode pour stocker de grandes quantités de données",
      "Une technique pour programmer des robots"
    ],
    correctAnswer: 1,
    explanation: "Le deep learning est une branche de l'apprentissage automatique utilisant des réseaux de neurones comportant de nombreuses couches (d'où le terme 'profond')."
  },
  {
    id: 6,
    text: "Qu'est-ce que l'IA multimodale?",
    options: [
      "Une IA qui peut fonctionner sur différents systèmes d'exploitation", 
      "Une IA qui peut traiter et combiner différents types de données (texte, images, son)", 
      "Une IA qui fonctionne avec plusieurs utilisateurs simultanément",
      "Une IA qui utilise plusieurs algorithmes en parallèle"
    ],
    correctAnswer: 1,
    explanation: "L'IA multimodale peut traiter et comprendre différents types d'entrées comme le texte, les images et le son, souvent simultanément."
  },
  {
    id: 7,
    text: "Que signifie l'acronyme NLP dans le contexte de l'IA?",
    options: [
      "Natural Language Processing", 
      "Neural Learning Protocol", 
      "Network Layer Protocol",
      "New Learning Paradigm"
    ],
    correctAnswer: 0,
    explanation: "NLP signifie Natural Language Processing (Traitement du Langage Naturel), une branche de l'IA qui traite les interactions entre les ordinateurs et le langage humain."
  },
  {
    id: 8,
    text: "Qu'est-ce que l'apprentissage par renforcement?",
    options: [
      "Un type d'apprentissage où l'IA est récompensée pour les bonnes décisions", 
      "Une méthode pour renforcer les connexions neuronales", 
      "Une technique pour améliorer les performances matérielles",
      "Un processus pour valider les données d'entraînement"
    ],
    correctAnswer: 0,
    explanation: "L'apprentissage par renforcement est une méthode où un agent apprend à prendre des décisions en recevant des récompenses ou des pénalités selon ses actions."
  }
];

const IAQuiz = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return; // Prevent selection during feedback
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) {
      toast({
        title: "Sélectionnez une réponse",
        description: "Veuillez choisir une option avant de continuer.",
        variant: "destructive",
      });
      return;
    }

    // Check if answer is correct
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowFeedback(true);

    // Move to next question after delay
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
    setShowFeedback(false);
  };

  if (showResults) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Résultats du quiz</CardTitle>
          <CardDescription>
            Vous avez terminé le quiz sur l'intelligence artificielle!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-4 text-4xl font-bold text-primary">
            {score} / {quizQuestions.length}
          </div>
          <Progress 
            value={(score / quizQuestions.length) * 100} 
            className="h-2 mb-4"
          />
          <p className="mb-6">
            {score === quizQuestions.length 
              ? "Félicitations! Vous maîtrisez parfaitement les concepts fondamentaux de l'IA!" 
              : score > quizQuestions.length * 0.7 
                ? "Excellent travail! Vous avez une très bonne compréhension des concepts de l'IA."
                : score > quizQuestions.length * 0.5
                  ? "Bon travail! Vous avez une bonne compréhension des bases de l'IA."
                  : "Continuez à explorer les concepts de l'IA pour améliorer vos connaissances."}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>Fermer</Button>
          <Button onClick={resetQuiz}>Recommencer le quiz</Button>
        </CardFooter>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Quiz IA</CardTitle>
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentQuestion + 1}/{quizQuestions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <CardDescription>
          Testez vos connaissances sur l'intelligence artificielle
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">{question.text}</h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border cursor-pointer transition-all
                ${selectedOption === index 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                }
                ${showFeedback 
                  ? index === question.correctAnswer 
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/30' 
                    : selectedOption === index 
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/30' 
                      : ''
                  : ''
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showFeedback && index === question.correctAnswer && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                  {showFeedback && selectedOption === index && index !== question.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {showFeedback && (
            <div className={`mt-4 p-3 rounded-lg ${
              selectedOption === question.correctAnswer 
                ? 'bg-green-50 text-green-800 dark:bg-green-950/30 dark:text-green-300' 
                : 'bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-300'
            }`}>
              <p className="font-medium">
                {selectedOption === question.correctAnswer ? "Correct!" : "Incorrect!"}
              </p>
              <p className="text-sm mt-1">{question.explanation}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="text-sm text-muted-foreground">
          Score: {score} / {currentQuestion}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            Quitter
          </Button>
          <Button 
            onClick={handleNext} 
            disabled={selectedOption === null || showFeedback}
          >
            {currentQuestion === quizQuestions.length - 1 ? "Terminer" : "Suivant"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default IAQuiz;
