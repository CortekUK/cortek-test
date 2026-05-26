import { useState } from "react";
import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";
import { Accordion } from "@/features/funnel/components/ui/Accordion";
import { FAQ_ITEMS } from "@/features/funnel/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" sectionName="FAQ" className="!pt-12 !pb-8 sm:!pt-14 sm:!pb-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
            Questions before you&nbsp;<span className="gradient-text">book?</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Here&apos;s what to expect from the free workflow review and what happens after.
          </p>
        </div>
        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, i) => (
            <Accordion
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
