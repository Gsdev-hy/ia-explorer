
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import GeminiChat from './GeminiChat';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            size="lg" 
            className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Open AI Assistant</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:w-[440px] sm:max-w-md p-0">
          <GeminiChat />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FloatingChatButton;
