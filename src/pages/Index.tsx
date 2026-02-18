import GlossaryCard from "@/components/GlossaryCard";
import { glossaryTerms } from "@/data/glossaryTerms";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background p-4 md:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-[1800px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          {glossaryTerms.map((term) => (
            <GlossaryCard key={term.term} term={term} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Index;
