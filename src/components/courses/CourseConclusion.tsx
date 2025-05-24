
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

interface CourseConclusionProps {
  title: string;
  description: string;
  learningPoints: string[];
  nextSteps: string[];
}

const CourseConclusion: React.FC<CourseConclusionProps> = ({
  title,
  description,
  learningPoints,
  nextSteps
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <SectionHeading
        title={title}
        description={description}
      />
      
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Ce que vous avez appris :</h4>
              <ul className="space-y-2 text-sm">
                {learningPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <h4 className="font-medium flex items-center gap-2 mb-3">
                <ArrowRight className="h-4 w-4" />
                Pour aller plus loin
              </h4>
              <ul className="space-y-2 text-sm">
                {nextSteps.map((step, index) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <Button asChild>
                <a href="/ressources">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explorer d'autres ressources
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseConclusion;
