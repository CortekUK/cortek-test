import { Button } from "@/features/funnel/components/ui/Button";
import { trackCTAClick } from "@/features/funnel/lib/analytics";
import { useQualification } from "@/features/funnel/contexts/QualificationContext";

interface CalendlyButtonProps {
  text?: string;
  section: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CalendlyButton({
  text = "Get your free workflow review",
  section,
  size = "md",
  className,
}: CalendlyButtonProps) {
  const qualification = useQualification();

  function handleClick() {
    trackCTAClick(text, section, "primary");
    qualification?.openQualification(section);
  }

  return (
    <Button size={size} onClick={handleClick} className={className}>
      {text}
    </Button>
  );
}
