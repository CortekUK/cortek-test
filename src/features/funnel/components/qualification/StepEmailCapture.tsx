import { useState } from "react";
import { cn } from "@/features/funnel/lib/utils";

interface StepEmailCaptureProps {
  email: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  submitting: boolean;
  totalSteps: number;
  direction: "forward" | "backward";
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function StepEmailCapture({ email, onChange, onSubmit, submitting, totalSteps, direction }: StepEmailCaptureProps) {
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    onSubmit();
  }

  return (
    <div className={direction === "forward" ? "step-forward" : "step-backward"}>
      <div className="text-center mb-6">
        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-purple-light font-semibold mb-2 block">
          Step {totalSteps} of {totalSteps}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 leading-tight">
          Enter your email to continue
        </h2>
        <p className="text-slate-400 text-sm max-w-sm mx-auto">
          We&apos;ll use this to prepare your audit and link it to your booking. You&apos;ll choose a time next.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              onChange(e.target.value);
              if (error) setError("");
            }}
            placeholder="Email *"
            autoFocus
            className={cn(
              "w-full bg-navy-800/60 border rounded-xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple/40 transition-all text-sm",
              error ? "border-red-400/50" : "border-navy-700/50"
            )}
          />
          {error && <p className="text-red-400 text-xs mt-1 ml-1">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full mt-2 bg-gradient-to-r from-brand-purple to-brand-purple-light text-on-brand font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all btn-glow cursor-pointer shadow-lg shadow-brand-purple/20 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting\u2026" : "Continue to booking \u2192"}
        </button>

        <p className="text-slate-500 text-[11px] text-center leading-relaxed pt-1">
          No spam. This just links your answers to your booking.
        </p>
      </form>
    </div>
  );
}
