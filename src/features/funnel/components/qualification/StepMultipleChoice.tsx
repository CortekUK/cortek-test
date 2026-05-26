import { useState } from "react";
import { OptionCard } from "./OptionCard";
import type { QualificationStepConfig } from "@/features/funnel/types";

interface StepMultipleChoiceProps {
  stepNumber: number;
  totalSteps: number;
  config: QualificationStepConfig;
  selectedAnswer: string;
  otherText: string;
  onSelect: (answerId: string) => void;
  onOtherTextChange: (text: string) => void;
  onNext: () => void;
  direction: "forward" | "backward";
}

export function StepMultipleChoice({
  stepNumber,
  totalSteps,
  config,
  selectedAnswer,
  otherText,
  onSelect,
  onOtherTextChange,
  onNext,
  direction,
}: StepMultipleChoiceProps) {
  const [showOther, setShowOther] = useState(selectedAnswer === "other");

  function handleOptionClick(optionId: string) {
    onSelect(optionId);

    if (optionId === "other") {
      setShowOther(true);
    } else {
      setShowOther(false);
      setTimeout(() => {
        onNext();
      }, 300);
    }
  }

  return (
    <div className={direction === "forward" ? "step-forward" : "step-backward"}>
      <div className="text-center mb-6">
        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-purple-light font-semibold mb-2 block">
          Step {stepNumber} of {totalSteps}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
          {config.question}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto">
        {config.options.map((option) => {
          const isOther = option.id === "other";

          if (isOther && showOther) {
            return (
              <div key={option.id}>
                <div className="relative rounded-xl border border-brand-purple/60 bg-brand-purple/10 shadow-md shadow-brand-purple/10 overflow-hidden">
                  <input
                    type="text"
                    value={otherText}
                    onChange={(e) => onOtherTextChange(e.target.value)}
                    placeholder="Tell us more..."
                    className="w-full bg-transparent px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none text-sm font-medium pr-20"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={onNext}
                    disabled={!otherText.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-purple text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:brightness-110 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div key={option.id}>
              <OptionCard
                label={option.label}
                selected={selectedAnswer === option.id}
                onClick={() => handleOptionClick(option.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
