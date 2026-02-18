import { useState, useEffect, useRef, useCallback } from "react";
import GlossaryCard from "@/components/GlossaryCard";
import { glossaryTerms } from "@/data/glossaryTerms";

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

  return (
    <main className="h-[800px] w-full bg-background p-4 md:p-5 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1800px] h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 h-full auto-rows-fr">
          {glossaryTerms.map((term) => (
            <GlossaryCard key={term.term} term={term} onFlip={handleFlip} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Index;
