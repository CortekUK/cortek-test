import { useRef, useState, useEffect, useCallback } from "react";
import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";
import { BEFORE_AFTER } from "@/features/funnel/lib/constants";
import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";

const tileOffsets = [
  { rotate: "-1.2deg", x: "0px" },
  { rotate: "0.8deg",  x: "10px" },
  { rotate: "-0.6deg", x: "-6px" },
  { rotate: "1.1deg",  x: "14px" },
  { rotate: "-0.9deg", x: "4px" },
];

function useCurvePaths(isVisible: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const beforeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<{ left: string[]; width: number; height: number }>({
    left: [], width: 0, height: 0,
  });

  const measure = useCallback(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    if (!container || !logo) return;

    const cRect = container.getBoundingClientRect();
    const lRect = logo.getBoundingClientRect();
    const cx = lRect.left + lRect.width / 2 - cRect.left;
    const cy = lRect.top + lRect.height / 2 - cRect.top;

    const left: string[] = [];

    beforeRefs.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = r.right - cRect.left;
      const y = r.top + r.height / 2 - cRect.top;
      const cpx1 = x + (cx - x) * 0.4;
      const cpx2 = cx - (cx - x) * 0.2;
      left.push(`M ${x} ${y} C ${cpx1} ${y}, ${cpx2} ${cy}, ${cx} ${cy}`);
    });

    setPaths({ left, width: cRect.width, height: cRect.height });
  }, []);

  useEffect(() => {
    const t = setTimeout(measure, 100);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(t); window.removeEventListener("resize", measure); };
  }, [measure, isVisible]);

  return { containerRef, logoRef, beforeRefs, paths };
}

export function BeforeAfter() {
  const { ref, isVisible } = useInView(0.1);
  const { containerRef, logoRef, beforeRefs, paths } = useCurvePaths(isVisible);

  return (
    <SectionWrapper id="before-after" sectionName="Before After" className="bg-navy-900 section-alt !pt-16 !pb-14 sm:!pt-20 sm:!pb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
          From messy admin to <span className="gradient-text">one connected system</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          The audit shows where your workflow is breaking down, then we map what the better version could look like.
        </p>
      </div>

      <div
        ref={(el) => {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
          containerRef.current = el;
        }}
        className={cn("relative grid md:grid-cols-[1fr_160px_1fr] gap-6 md:gap-0 max-w-5xl mx-auto items-center", isVisible && "is-visible")}
      >
        {paths.width > 0 && (
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${paths.width} ${paths.height}`}
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="flow-red-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="flow-blue-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2d81f7" stopOpacity="0.4" />
              </linearGradient>
              <filter id="flow-glow-2">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {paths.left.map((d, i) => (
              <path
                key={`l-${i}`}
                d={d}
                stroke="url(#flow-red-2)"
                strokeWidth="2"
                filter="url(#flow-glow-2)"
                style={{
                  strokeDasharray: 600,
                  strokeDashoffset: isVisible ? 0 : 600,
                  transition: `stroke-dashoffset 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.3 + i * 0.1}s`,
                  animation: isVisible ? `line-glow-pulse 3s ease-in-out ${1.5 + i * 0.2}s infinite` : "none",
                }}
              />
            ))}
          </svg>
        )}

        <div className="relative z-[1]">
          <h3 className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-4 ml-1">Before</h3>
          <div className="flex flex-col gap-2">
            {BEFORE_AFTER.before.map((item, i) => (
              <div
                key={item}
                ref={(el) => { beforeRefs.current[i] = el; }}
                className="glass-card card-surface rounded-lg px-4 py-3 before-tile"
                style={{
                  transform: isVisible
                    ? `rotate(${tileOffsets[i].rotate}) translateX(${tileOffsets[i].x})`
                    : "rotate(0) translateX(0)",
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${150 + i * 100}ms, opacity 0.5s ease ${150 + i * 100}ms, box-shadow 0.8s ease ${300 + i * 100}ms`,
                  boxShadow: isVisible
                    ? "0 0 12px rgba(248, 113, 113, 0.08), 0 0 24px rgba(248, 113, 113, 0.04)"
                    : "none",
                  border: "1px solid rgba(248, 113, 113, 0.15)",
                }}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400/60 mt-0.5 shrink-0 text-sm">&times;</span>
                  <span className="text-slate-300/80 text-[13px] sm:text-sm leading-snug">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center relative z-[2] overflow-visible">
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[2px] rounded-full"
            style={{
              left: "calc(50% + 32px)",
              width: isVisible ? "48px" : "0px",
              background: "linear-gradient(to right, rgba(124, 58, 237, 0.5), rgba(45, 129, 247, 0.6))",
              boxShadow: "0 0 6px rgba(45, 129, 247, 0.3), 0 0 12px rgba(124, 58, 237, 0.15)",
              transition: "width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s",
              animation: isVisible ? "line-glow-pulse 3s ease-in-out 2s infinite" : "none",
            }}
          />
          <div
            ref={logoRef}
            className="relative z-10 w-16 h-16 rounded-2xl bg-navy-800/90 backdrop-blur-sm border border-brand-purple/25 flex items-center justify-center"
            style={{
              boxShadow: isVisible
                ? "0 0 24px rgba(124, 58, 237, 0.3), 0 0 48px rgba(124, 58, 237, 0.12), 0 4px 12px rgba(0, 0, 0, 0.15)"
                : "none",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.8)",
              transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s",
              animation: isVisible ? "logo-breathe 3s ease-in-out 1.8s infinite" : "none",
            }}
          >
            <img src="/funnel/icons/cortek-mark.svg" alt="" width={36} height={36} className="w-9 h-9 object-contain" />
          </div>
        </div>

        <div className="flex md:hidden items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-navy-800 border border-navy-600/40 flex items-center justify-center"
            style={{ boxShadow: "0 0 16px rgba(124, 58, 237, 0.2)" }}
          >
            <img src="/funnel/icons/cortek-mark.svg" alt="" width={24} height={24} className="w-6 h-6 object-contain" />
          </div>
        </div>

        <div className="relative z-[1]">
          <h3 className="text-brand-blue font-semibold text-sm uppercase tracking-wider mb-4 ml-1">After</h3>
          <div
            className="glass-card card-surface rounded-xl overflow-hidden after-card"
            style={{
              border: "1px solid rgba(45, 129, 247, 0.18)",
              boxShadow: isVisible
                ? "0 0 16px rgba(45, 129, 247, 0.1), 0 0 32px rgba(45, 129, 247, 0.05), 0 4px 16px rgba(0, 0, 0, 0.08)"
                : "0 4px 16px rgba(0, 0, 0, 0.08)",
              transition: "box-shadow 1s ease 0.6s",
              animation: isVisible ? "after-card-pulse 3s ease-in-out 2s infinite" : "none",
            }}
          >
            {BEFORE_AFTER.after.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-3 px-5 py-3.5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(16px)",
                  transition: `all 0.5s ease ${600 + i * 120}ms`,
                  borderBottom: i !== BEFORE_AFTER.after.length - 1 ? "1px solid rgba(45, 129, 247, 0.08)" : "none",
                }}
              >
                <span className="text-brand-blue mt-0.5 shrink-0 text-sm">&#10003;</span>
                <span className="text-slate-300 text-[13px] sm:text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
