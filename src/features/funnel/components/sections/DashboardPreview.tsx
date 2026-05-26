import { useRef, useState, useEffect } from "react";
import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";
import { CalendlyButton } from "@/features/funnel/components/shared/CalendlyButton";
import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";

const outcomes = [
  "Built around your workflow, not a generic template",
  "One system that replaces 10+ disconnected tools",
  "One predictable cost — no per-seat fees stacking up as you grow",
];

export function DashboardPreview() {
  const { ref, isVisible } = useInView(0.1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAutoplayedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = document.querySelector(".funnel-root");
    if (!root) return;
    function checkTheme() {
      setIsLight(root!.classList.contains("funnel-light"));
    }
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible || hasAutoplayedRef.current) return;
    hasAutoplayedRef.current = true;
    video.muted = true;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  }, [isVisible]);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    }
  }

  return (
    <SectionWrapper id="dashboard-preview" sectionName="Dashboard Preview" className="bg-navy-900 section-alt !py-12 sm:!py-14">
      <div ref={ref} className={cn("grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-5xl mx-auto", isVisible && "is-visible")}>

        <div>
          <span className="text-[11px] uppercase tracking-[0.15em] text-brand-purple-light font-semibold mb-3 block">
            Example system
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
            See how a custom system could run&nbsp;<span className="gradient-text">your&nbsp;workflow</span>
          </h2>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
            From lead capture to follow-up, tasks and reporting, a Cortek system gives your team one place to manage the work.
          </p>

          <div className="space-y-2.5">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-brand-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-4 bg-gradient-to-br from-brand-blue/5 via-brand-purple/8 to-brand-blue/4 rounded-2xl blur-2xl pointer-events-none" />

          <div className="relative glass-card rounded-xl card-surface border border-navy-700/40 shadow-md shadow-black/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-navy-700/50 bg-navy-800/40">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/50" />
                <div className="w-2 h-2 rounded-full bg-gold-400/50" />
                <div className="w-2 h-2 rounded-full bg-brand-blue/50" />
              </div>
              <div className="px-3 py-0.5 rounded bg-navy-900/60 border border-navy-700/40">
                <span className="text-[10px] text-slate-500 font-medium">cortek.io</span>
              </div>
              <div className="w-10" />
            </div>

            <div className="relative cursor-pointer" onClick={handlePlay}>
              <video
                ref={videoRef}
                src={isLight ? "/funnel/videos/demo.mp4" : "/funnel/videos/demo-dark.mp4"}
                className="w-full block"
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                  isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                )}
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-purple/20 border border-brand-purple/30 backdrop-blur-md shadow-lg shadow-brand-purple/10 transition-all duration-300 hover:bg-brand-purple/35 hover:border-brand-purple/50 hover:scale-110">
                  {isPlaying ? (
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4">
            Example only. Every Cortek system is built around the client&apos;s actual workflow.
          </p>
        </div>
      </div>

      <div className="text-center mt-10 sm:mt-12">
        <CalendlyButton text="Get one built for your workflow" section="dashboard-preview" size="md" />
        <p className="mt-3 text-xs text-slate-500">Free 20-minute workflow review. No commitment.</p>
      </div>
    </SectionWrapper>
  );
}
