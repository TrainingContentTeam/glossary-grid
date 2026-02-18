import { useState } from "react";
import { X, RotateCcw } from "lucide-react";
import type { GlossaryTerm } from "@/data/glossaryTerms";
import { cn } from "@/lib/utils";

interface GlossaryCardProps {
  term: GlossaryTerm;
  onFlip?: (term: string) => void;
}

const GlossaryCard = ({ term, onFlip }: GlossaryCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer h-full"
      style={{ perspective: "1000px" }}
      onClick={() => {
        const willFlip = !flipped;
        setFlipped(willFlip);
        if (willFlip && onFlip) onFlip(term.term);
      }}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-3d",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl bg-primary border border-border/30 flex items-center justify-center p-10 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-3xl md:text-4xl font-semibold text-primary-foreground text-center leading-tight font-['Sora'] underline decoration-primary-foreground/40 underline-offset-4">
            {term.term}
          </h3>
          <RotateCcw className="absolute bottom-4 right-4 h-5 w-5 text-primary-foreground/40" />
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-xl bg-card border border-border/30 flex flex-col p-8 shadow-lg overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-sm font-bold text-primary-foreground uppercase tracking-wider font-['Sora']">
              {term.term}
            </h4>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors shrink-0 ml-2"
              aria-label="Close definition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed font-['Roboto'] whitespace-pre-line">
            {term.definition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlossaryCard;
