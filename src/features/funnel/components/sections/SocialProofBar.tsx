import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";

export function SocialProofBar() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section
      ref={ref}
      className={cn(
        "fade-in-section social-proof-bar border-y border-navy-700 bg-navy-900 py-10 px-4 sm:px-6 lg:px-8",
        isVisible && "is-visible"
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 text-sm">
          Custom CRM, AI and automation systems built for service businesses, sales teams, clinics, property managers and more.
        </p>
      </div>
    </section>
  );
}
