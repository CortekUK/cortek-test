import { useState } from "react";
import { cn } from "@/features/funnel/lib/utils";
import type { QualificationContactDetails } from "@/features/funnel/types";

interface StepContactDetailsProps {
  contact: QualificationContactDetails;
  onChange: (field: keyof QualificationContactDetails, value: string) => void;
  onSubmit: () => void;
  direction: "forward" | "backward";
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fields: { key: keyof QualificationContactDetails; placeholder: string; type: string; required: boolean }[] = [
  { key: "name", placeholder: "Name", type: "text", required: true },
  { key: "email", placeholder: "Email", type: "email", required: true },
  { key: "company", placeholder: "Company", type: "text", required: false },
  { key: "website", placeholder: "Website", type: "text", required: false },
  { key: "phone", placeholder: "Phone (optional)", type: "tel", required: false },
];

export function StepContactDetails({ contact, onChange, onSubmit, direction }: StepContactDetailsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!contact.name.trim()) newErrors.name = "Name is required";
    if (!contact.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(contact.email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) onSubmit();
  }

  return (
    <div className={direction === "forward" ? "step-forward" : "step-backward"}>
      <div className="text-center mb-6">
        <span className="text-[10px] uppercase tracking-[0.15em] text-brand-purple-light font-semibold mb-2 block">
          Final step
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 leading-tight">
          Where should we send your audit invite?
        </h2>
        <p className="text-slate-400 text-sm">
          Add your details, then choose a time for your free systems audit.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
        {fields.map(({ key, placeholder, type, required }) => (
          <div key={key}>
            <input
              type={type}
              value={contact[key]}
              onChange={(e) => onChange(key, e.target.value)}
              placeholder={required ? `${placeholder} *` : placeholder}
              className={cn(
                "w-full bg-navy-800/60 border rounded-xl px-4 py-3.5 text-foreground placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple/40 transition-all text-sm",
                errors[key] ? "border-red-400/50" : "border-navy-700/50"
              )}
            />
            {errors[key] && <p className="text-red-400 text-xs mt-1 ml-1">{errors[key]}</p>}
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-brand-purple to-brand-purple-light text-on-brand font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all btn-glow cursor-pointer shadow-lg shadow-brand-purple/20 text-base"
        >
          Continue to booking &rarr;
        </button>

        <p className="text-slate-500 text-[11px] text-center leading-relaxed pt-1">
          We&apos;ll use this to prepare for your audit and send your booking details.
        </p>
      </form>
    </div>
  );
}
