import { useState } from "react";
import { cn } from "@/features/funnel/lib/utils";
import { trackFAQExpand } from "@/features/funnel/lib/analytics";
import { ChevronDownIcon } from "@/features/funnel/components/ui/Icons";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function Accordion({ question, answer, isOpen: controlledOpen, onToggle }: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen ?? internalOpen;

  function toggle() {
    if (!isOpen) {
      trackFAQExpand(question);
    }
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  }

  return (
    <div className="glass-card rounded-lg overflow-hidden card-surface border border-navy-700/40">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors cursor-pointer"
      >
        <span className="text-foreground font-medium text-sm sm:text-base pr-4">{question}</span>
        <span
          className={cn(
            "text-brand-purple transition-transform duration-300 shrink-0",
            isOpen && "rotate-180"
          )}
        >
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </button>
      <div className={cn("accordion-content", isOpen && "is-open")}>
        <div>
          <p className="px-5 pb-4 text-slate-400 text-[13px] sm:text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
