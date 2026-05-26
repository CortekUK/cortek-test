import { useInViewOnce } from "@/hooks/useInViewOnce";
import { useIsMobile } from "@/hooks/use-mobile";
import { Video, GitBranch, FileCheck2, Gauge, Shield, Heart, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";

const ConsultationValueAndTrust = () => {
  const { ref, isInView } = useInViewOnce({ threshold: 0.35 });
  const isMobile = useIsMobile();

  /*
   * Animation Timing Guide - "Scroll and See" Strategy:
   * 
   * Sequence designed so user WATCHES the animation unfold:
   * 0ms: Section enters viewport (35% visible - heading is IN VIEW)
   * 150ms: Heading appears quickly (users see content immediately)
   * 150-1050ms: Heading fades + slides up from 48px (900ms total)
   * 1150ms: THE MONEY SHOT - Both columns start dramatic slide (user is watching!)
   * 1150-2050ms: Left from 80px left, Right from 80px right (beautiful pull-in)
   * 1800ms+: Cards/bullets cascade in while columns are settling
   *   - Value cards: +0ms, +80ms, +160ms, +240ms (tight cascade)
   *   - Trust points: +0ms, +80ms, +160ms (synchronized with cards)
   *   - KPI marker: +400ms after first card starts
   * 
   * To adjust:
   * - Change duration: duration-[900ms] → duration-[1000ms]
   * - Change delays: delay-[500ms] → delay-[600ms]
   * - Change distances: translate-y-12 → translate-y-16 (even more dramatic)
   * - Change easing: ease-[cubic-bezier(0.16,1,0.3,1)] → ease-out (less bounce)
   * - Reduced motion: All transforms disabled via useInViewOnce hook
   */

  const valueProps = [
    {
      icon: Video,
      title: "Free 30-Minute Consultation",
      description: "We dive deep into your challenges, goals, and current workflows to identify quick wins.",
    },
    {
      icon: GitBranch,
      title: "Workflow Review",
      description: "Deep dive into your current processes, bottlenecks, and pain points to understand what's holding your team back.",
    },
    {
      icon: FileCheck2,
      title: "Tailored Action Plan",
      description: "Receive a custom roadmap with prioritized steps and recommended integrations.",
    },
    {
      icon: Gauge,
      title: "Efficiency & Impact Review",
      description: "We'll highlight measurable time savings and efficiency gains where your custom CRM can deliver the biggest impact.",
    },
  ];

  const trustPoints = [
    {
      icon: Heart,
      title: "No Hard Selling",
      description: "Just honest advice and recommendations",
    },
    {
      icon: Compass,
      title: "Actionable Insights",
      description: "Walk away with clear next steps",
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "Your business information stays private",
    },
  ];

  return (
    <section ref={ref} className="value-trust-section py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Premium background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-light to-background"></div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(106,56,194,0.03)_0%,transparent_50%,rgba(59,130,246,0.03)_100%)]"></div>
      
      {/* Subtle dots pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="section-container relative px-4">
        {/* Header - Appears almost immediately with quick animation */}
        <div
          className={`value-trust-heading text-center mb-14 md:mb-16 will-change-transform transition-all ease-out ${
            (isInView && !isMobile) 
              ? 'opacity-100 translate-y-0 scale-100' 
              : isMobile 
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-98'
          }`}
          style={{
            transitionDuration: isMobile ? '0ms' : '400ms',
            transitionDelay: '0ms'
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-sora">
            What <span className="bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent">You'll Get</span> — and Why It's <span className="bg-gradient-to-r from-deep-purple to-electric-blue bg-clip-text text-transparent">Risk-Free</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-4xl mx-auto mb-3">
            Every consultation delivers real value upfront — no obligations, no pressure, just results you can act on.
          </p>
          <p className="text-lg text-foreground-secondary max-w-4xl mx-auto">
            You'll get a tailored plan and a clear estimate of weekly time saved.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: What You'll Get Cards - Slides from far left with dramatic distance */}
          <div
            className={`value-cards grid grid-cols-1 md:grid-cols-2 gap-6 will-change-transform transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
              (isInView && !isMobile) 
                ? 'opacity-100 translate-x-0 scale-100' 
                : isMobile
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-20 scale-95'
            }`}
            style={{
              transitionDuration: isMobile ? '0ms' : '350ms',
              transitionDelay: '0ms'
            }}
          >
            {valueProps.map((item, index) => {
              const Icon = item.icon;
              const cardDelays = [150, 250, 350, 450]; // Fast cascade while container slides in

              return (
                <div
                  key={index}
                  className={`value-card group will-change-transform transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    (isInView && !isMobile) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : isMobile
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{
                    transitionDuration: isMobile ? '0ms' : '900ms',
                    transitionDelay: (isInView && !isMobile) ? `${cardDelays[index]}ms` : '0ms'
                  }}
                >
                  <Card className="relative h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-deep-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-deep-purple/5">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-purple/10 to-electric-blue/10 flex items-center justify-center group-hover:from-deep-purple/20 group-hover:to-electric-blue/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-deep-purple" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>

                    {/* Subtle corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-deep-purple/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Vertical Divider (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-32 bottom-16 w-px bg-gradient-to-b from-transparent via-deep-purple/20 to-transparent"></div>

          {/* Right Column: No Pressure, Just Value - Slides from far right with dramatic distance */}
          <div
            className={`trust-panel lg:sticky lg:top-24 flex flex-col items-center lg:items-start text-center lg:text-left will-change-transform transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
              (isInView && !isMobile) 
                ? 'opacity-100 translate-x-0 scale-100' 
                : isMobile
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-20 scale-95'
            }`}
            style={{
              transitionDuration: isMobile ? '0ms' : '350ms',
              transitionDelay: (isInView && !isMobile) ? '200ms' : '0ms'
            }}
          >
            {/* Icon */}
            <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 rounded-2xl bg-gradient-to-br from-deep-purple/20 to-electric-blue/20 flex items-center justify-center">
              <Shield className="w-10 h-10 text-deep-purple" />
            </div>

            {/* Headline */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 font-sora">
              No Pressure, Just Value
            </h3>

            {/* Subtext */}
            <p className="text-base md:text-lg text-foreground-secondary mb-8 leading-relaxed">
              Our consultation is completely free with no obligation. Even if you decide not to proceed, 
              you'll walk away with valuable insights about optimizing your business with a custom CRM.
            </p>

            {/* Trust points - Stagger in */}
            <div className="flex flex-col gap-6 w-full">
              {trustPoints.map((point, index) => {
                const TrustIcon = point.icon;
                const trustDelays = [350, 450, 550]; // Account for 200ms container delay
                
                return (
                  <div
                    key={index}
                    className={`trust-point flex items-start gap-4 will-change-transform transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      (isInView && !isMobile) 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : isMobile
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{
                      transitionDuration: isMobile ? '0ms' : '900ms',
                      transitionDelay: (isInView && !isMobile) ? `${trustDelays[index]}ms` : '0ms'
                    }}
                  >
                    <div className="flex-shrink-0">
                      <TrustIcon className="w-6 h-6 text-deep-purple" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                      <p className="text-sm text-foreground-secondary">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust marker - Fades in last */}
            <p
              className={`trust-kpi text-sm text-foreground-muted mt-8 flex items-center gap-2 will-change-transform transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                (isInView && !isMobile) 
                  ? 'opacity-100 scale-100' 
                  : isMobile
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDuration: isMobile ? '0ms' : '900ms',
                transitionDelay: (isInView && !isMobile) ? '650ms' : '0ms'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Average response time: 2 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationValueAndTrust;
