interface QualificationProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function QualificationProgress({ currentStep, totalSteps }: QualificationProgressProps) {
  const pct = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full h-1 bg-navy-800/80 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-brand-purple to-brand-blue rounded-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
