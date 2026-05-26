import { useRef, useState, useEffect } from "react";
import { SectionWrapper } from "@/features/funnel/components/ui/SectionWrapper";
import { CalendlyButton } from "@/features/funnel/components/shared/CalendlyButton";
import { useInView } from "@/features/funnel/hooks/useInView";
import { cn } from "@/features/funnel/lib/utils";

const FEATURES = [
  {
    name: "Custom lead pipeline",
    description: "Tracks every enquiry from first contact through to closed deal, with stages built around your actual sales process.",
  },
  {
    name: "Live job tracking",
    description: "See every active job, its status and who's responsible — updated in real time so nothing slips through the cracks.",
  },
  {
    name: "Built-in client comms",
    description: "Emails, follow-ups and client messages all logged against the right record. No more digging through inboxes.",
  },
];

export function DashboardPreview() {
  const { ref, isVisible } = useInView(0.1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAutoplayedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
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
    <SectionWrapper id="dashboard-preview" sectionName="Dashboard Preview" className="bg-section-spotlight !py-16 sm:!py-20">
      <div ref={ref} className={cn("mx-auto", isVisible && "is-visible")}>
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] lg:gap-12 items-center">

          {/* ── Top text block (mobile order-1, desktop col-2 row-1) ── */}
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 mb-8 lg:mb-0">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-cyan mb-3">
              Real client build
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-bold text-foreground mb-4 leading-tight">
              Here&apos;s what we&apos;ve built for <span className="gradient-text">our&nbsp;clients.</span>
            </h2>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Every business is different. Every Cortek system is built around that. Here&apos;s a real custom CRM — it replaced 10+ tools and gave the team one place to manage leads, jobs, and&nbsp;follow-ups.
            </p>
          </div>

          {/* ── Screenshot with video (mobile order-2, desktop col-1 row-span-2) ── */}
          <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:-ml-8 xl:-ml-12 mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 -m-8 bg-gradient-to-br from-brand-cyan/8 via-brand-purple/15 to-brand-cyan/6 rounded-3xl blur-[60px] pointer-events-none" />
              <div className="absolute inset-0 -m-4 rounded-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(124, 58, 237, 0.12), transparent 70%)' }} />

              <div className="relative glass-card rounded-xl card-surface border border-navy-700/40 shadow-lg shadow-brand-purple/10 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-navy-700/50 bg-navy-800/40">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400/50" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400/50" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-blue/50" />
                  </div>
                  <div className="px-2 sm:px-3 py-0.5 rounded bg-navy-900/60 border border-navy-700/40">
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">cortek.io</span>
                  </div>
                  <div className="w-8 sm:w-10" />
                </div>

                <div className="relative cursor-pointer" onClick={handlePlay}>
                  <video
                    ref={videoRef}
                    src="/funnel/videos/demo-dark.mp4"
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
            </div>
          </div>

          {/* ── Features + caption + CTA (mobile order-3, desktop col-2 row-2) ── */}
          <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2">
            <div className="space-y-7 mb-6">
              {FEATURES.map((feature) => (
                <div key={feature.name} className="flex gap-4 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-cyan shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5),0_0_16px_rgba(34,211,238,0.2)]" />
                  <div>
                    <p className="text-[15px] font-bold text-white mb-1">{feature.name}</p>
                    <p className="text-[13px] text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Built for a car rental operator to replace 11 separate tools. Designed, built, and <span className="font-bold text-slate-300">deployed in 4&nbsp;weeks</span>. Live in production.
            </p>

            <div>
              <CalendlyButton text="Get one built for your workflow" section="dashboard-preview" size="md" />
              <p className="mt-3 text-xs text-slate-500">Free 20-minute workflow review. No commitment.</p>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
