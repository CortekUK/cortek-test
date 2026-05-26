import { cn } from "@/features/funnel/lib/utils";

interface OptionCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function OptionCard({ label, selected, onClick }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative rounded-xl px-4 py-3.5 text-left transition-all duration-200 cursor-pointer w-full border",
        "bg-navy-800/60 hover:bg-navy-800",
        selected
          ? "border-brand-purple/60 bg-brand-purple/10 shadow-md shadow-brand-purple/10 option-pulse"
          : "border-navy-700/50 hover:border-navy-600"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
          selected
            ? "border-brand-purple bg-brand-purple"
            : "border-navy-600"
        )}>
          {selected && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>

        <span className={cn(
          "text-sm font-medium",
          selected ? "text-foreground" : "text-slate-300"
        )}>
          {label}
        </span>
      </div>
    </button>
  );
}
