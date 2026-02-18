import { useState, useEffect, useRef, useCallback } from "react";
import { CheckCircle } from "lucide-react";
import GlossaryCard from "@/components/GlossaryCard";
import { glossaryTerms } from "@/data/glossaryTerms";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

const Index = () => {
  const [flippedTerms, setFlippedTerms] = useState<Set<string>>(new Set());
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
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
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (flippedTerms.size === glossaryTerms.length && !completedRef.current) {
      completedRef.current = true;
      window.parent.postMessage({ type: 'complete' }, '*');
    }
  }, [flippedTerms]);

  const progress = (flippedTerms.size / glossaryTerms.length) * 100;
  const allDone = flippedTerms.size === glossaryTerms.length;

  return (
    <main className="h-[720px] w-full bg-background flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center min-h-0 px-16">
        <Carousel className="w-full max-w-2xl" setApi={setApi}>
          <CarouselContent>
            {glossaryTerms.map((term) => (
              <CarouselItem key={term.term}>
                <div className="h-[480px]">
                  <GlossaryCard term={term} onFlip={handleFlip} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 pb-3">
        {glossaryTerms.map((_, i) => (
          <button
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"
            }`}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-2xl mx-auto px-4 pb-4 flex items-center gap-3">
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
