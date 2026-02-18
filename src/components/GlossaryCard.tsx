import { useState } from "react";
import { X } from "lucide-react";
import type { GlossaryTerm } from "@/data/glossaryTerms";
import { cn } from "@/lib/utils";

interface GlossaryCardProps {
  term: GlossaryTerm;
}

const GlossaryCard = ({ term }: GlossaryCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-[1000px] cursor-pointer h-full"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-3d",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl bg-primary border border-border/30 flex items-center justify-center p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground text-center leading-tight font-['Sora']">
            {term.term}
          </h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-xl bg-card border border-border/30 flex flex-col p-5 shadow-lg overflow-y-auto">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider font-['Sora']">
              {term.term}
            </h4>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0 ml-2"
              aria-label="Close definition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-card-foreground/90 leading-relaxed font-['Roboto'] whitespace-pre-line">
            {term.definition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlossaryCard;
