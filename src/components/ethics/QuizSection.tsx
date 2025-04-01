
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import Quiz from '@/components/ethics/Quiz';

const QuizSection: React.FC = () => {
  return (
    <section className="section-container bg-muted/40 rounded-3xl py-16">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          pretitle="Testez vos connaissances"
          title="Quiz interactif sur l'éthique de l'IA"
          description="Mettez à l'épreuve votre compréhension des principes éthiques et des enjeux liés à l'intelligence artificielle."
          center
        />
        
        <div className="mt-10">
          <Quiz />
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
