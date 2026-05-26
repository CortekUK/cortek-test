import { useState, useEffect, useRef } from "react";
import { CalendlyButton } from "@/features/funnel/components/shared/CalendlyButton";
import { HERO_COPY } from "@/features/funnel/lib/constants";

const HERO_TESTIMONIALS = [
  {
    quote: "Cortek built us a CRM that makes running the business so much easier. Everything is in one place now with jobs, quotes and client details all organized, and it\u2019s cut our admin time right down.",
    name: "Adam Miller",
    title: "Founder, AM Secure",
    photo: "/funnel/images/adam-miller.jpg",
  },
  {
    quote: "The new CRM fits our business perfectly. We can now manage clients, inventory and inquiries in one place. It\u2019s made everything far more organized and lets us focus on growing Lost In Time.",
    name: "Carlito Graham",
    title: "Founder, Lost In Time Jewellers",
    photo: "/funnel/images/carlito-graham.jpg",
  },
  {
    quote: "They understood our business from day one and built a CRM that handles every part of our car rental operation perfectly.",
    name: "Sunny Singh",
    title: "Director, RTech Car Rentals",
    photo: "/funnel/images/sunny-singh.jpg",
  },
];

const HERO_STATS = [
  { value: "20+", label: "Businesses transformed" },
  { value: "100+", label: "Tools replaced" },
  { value: "4 weeks", label: "To live system", accent: true },
];


export function Hero() {
  // ── Snap-slide testimonial carousel ──
  const [slideIdx, setSlideIdx] = useState(0);
  const [canTransition, setCanTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const totalSlides = HERO_TESTIMONIALS.length; // 3

  // Measure slide step distance (card width + gap)
  useEffect(() => {
    function measure() {
      if (viewportRef.current) {
        const w = viewportRef.current.clientWidth;
        setStep(w * 0.85 + 12);
      }
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Auto-advance every 6s
  useEffect(() => {
    if (isPaused || step === 0) return;
    const id = setInterval(() => setSlideIdx((p) => p + 1), 6000);
    return () => clearInterval(id);
  }, [isPaused, step]);

  // Cleanup resume timer
  useEffect(() => {
    return () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); };
  }, []);

  // Infinite loop: when we land on the clone (index 3), snap back to 0 instantly
  function handleTransitionEnd() {
    if (slideIdx === totalSlides) {
      setCanTransition(false);
      setSlideIdx(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setCanTransition(true));
      });
    }
  }

  function handleCarouselEnter() {
    setIsPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }

  function handleCarouselLeave() {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 8000);
  }

  const dotIdx = slideIdx % totalSlides;

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#060A14' }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Bottom fade — smooth transition into next section */}
      <div className="hero-bottom-fade" />

      {/* Animated gradient orbs */}
      <div className="hero-orb-primary" />
      <div className="hero-orb-secondary" />

      {/* Logo only — no nav, no toggle */}
      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <img
          src="/funnel/logo.svg"
          alt="Cortek"
          width={140}
          height={26}
          className="h-7 w-auto"
        />
      </div>

      {/* Hero content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-3xl">
            <p className="text-[14px] sm:text-[15px] tracking-wide mb-1">
              Custom systems built in <span className="text-brand-cyan font-semibold">4&nbsp;weeks</span> — <span className="text-white font-semibold">or your money back.</span>
            </p>
            <p className="text-[12px] text-slate-500 tracking-wide mb-1.5">
              Trusted by <span className="text-brand-cyan font-semibold">20+</span> businesses across the US, UK &amp; UAE
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-brand-cyan/60 to-brand-cyan/0 mb-5" />

            <div className="relative">
              <div className="absolute -inset-x-12 -inset-y-6 bg-gradient-radial from-brand-purple/8 via-brand-purple/3 to-transparent rounded-full blur-2xl pointer-events-none" />
              <h1 className="relative text-[2.5rem] sm:text-[3.25rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold text-white tracking-tight mb-6" style={{ lineHeight: '1.05' }}>
              Stop running your business across{' '}
              <span className="text-brand-purple-light">12&nbsp;tools.</span>
            </h1>
            </div>

            <p className="text-lg sm:text-xl lg:text-[22px] leading-[1.5] mb-4 max-w-xl" style={{ color: 'rgba(255, 255, 255, 0.88)' }}>
              We replace your scattered tools with one custom system, built around how your business actually runs.
            </p>
            <p className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white mb-10">
              Live in <span className="text-brand-purple-light">4&nbsp;weeks.</span>{' '}
              <span className="border-b-2 border-brand-cyan/40">Guaranteed.</span>
            </p>

            {/* Stats strip */}
            <div className="flex items-start max-w-md mb-10">
              {HERO_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 text-center ${i > 0 ? 'border-l border-navy-700/60' : ''}`}
                >
                  <div className={`text-[28px] sm:text-[34px] font-bold leading-none mb-1.5 ${stat.accent ? 'text-brand-cyan' : 'text-white'}`}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA — big, commanding */}
            <CalendlyButton
              text={HERO_COPY.cta}
              section="hero"
              size="lg"
              className="!px-12 !py-5 !text-lg !rounded-2xl shadow-xl shadow-brand-purple/25 hover:shadow-2xl hover:shadow-brand-purple/35"
            />
            <p className="mt-4 text-sm text-slate-500">{HERO_COPY.supporting}</p>

            {/* Testimonial carousel — snap-slide auto-advance */}
            <div
              ref={viewportRef}
              className="mt-10 max-w-md overflow-hidden"
              onPointerEnter={handleCarouselEnter}
              onPointerLeave={handleCarouselLeave}
            >
              {/* Sliding track: 3 real cards + 1 clone for seamless loop */}
              <div
                className="flex"
                style={{
                  gap: '12px',
                  transform: `translateX(-${slideIdx * step}px)`,
                  transition: canTransition ? 'transform 600ms ease-in-out' : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {[...HERO_TESTIMONIALS, HERO_TESTIMONIALS[0]].map((t, i) => (
                  <div
                    key={`slide-${i}`}
                    className="flex-shrink-0 rounded-2xl bg-navy-800/30 border border-navy-700/40 p-5 testimonial-card overflow-hidden"
                    style={{ width: '85%' }}
                  >
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[14px] leading-relaxed mb-4" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover object-[center_20%] shrink-0 border-2 border-navy-700/50"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white leading-tight">{t.name}</p>
                        <p className="text-xs text-slate-300 leading-tight mt-0.5">{t.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div className="flex justify-start gap-3 mt-6 mb-2">
                {HERO_TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCanTransition(true); setSlideIdx(i); }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      dotIdx === i
                        ? 'bg-brand-cyan shadow-[0_0_10px_rgba(34,211,238,0.5),0_0_20px_rgba(34,211,238,0.2)]'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
