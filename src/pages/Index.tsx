import { useState, useEffect, useRef, useCallback } from "react";
import { CheckCircle } from "lucide-react";
import GlossaryCard from "@/components/GlossaryCard";
import { glossaryTerms } from "@/data/glossaryTerms";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [flippedTerms, setFlippedTerms] = useState<Set<string>>(new Set());
  const completedRef = useRef(false);

  const handleFlip = useCallback((term: string) => {
    setFlippedTerms((prev) => {
      if (prev.has(term)) return prev;
      const next = new Set(prev);
      next.add(term);
      return next;
    });
  }, []);

  useEffect(() => {
    if (flippedTerms.size === glossaryTerms.length && !completedRef.current) {
      completedRef.current = true;
      window.parent.postMessage({ type: 'complete' }, '*');
    }
  }, [flippedTerms]);

  const progress = (flippedTerms.size / glossaryTerms.length) * 100;
  const allDone = flippedTerms.size === glossaryTerms.length;

  return (
    <main className="h-[720px] w-full bg-background p-4 md:p-5 flex flex-col overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto flex-1 min-h-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 h-full auto-rows-fr">
          {glossaryTerms.map((term) => (
            <GlossaryCard key={term.term} term={term} onFlip={handleFlip} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1800px] mx-auto pt-3 pb-1 flex items-center gap-3">
        <Progress value={progress} className="h-2 flex-1 bg-muted" />
        <span className="text-xs text-muted-foreground font-medium whitespace-nowrap flex items-center gap-1">
          {allDone ? (
            <>
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              All terms explored!
            </>
          ) : (
            `${flippedTerms.size} of ${glossaryTerms.length} explored`
          )}
        </span>
      </div>
    </main>
  );
};

export default Index;
