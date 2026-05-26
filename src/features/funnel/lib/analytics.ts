import type { TrackingEvent } from "@/features/funnel/types";
import { getUtmParams } from "./utm";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent(event: TrackingEvent) {
  const utmParams = getUtmParams();
  const payload = { ...event, ...utmParams };

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }

  if (import.meta.env.DEV) {
    console.log("[Analytics]", payload);
  }
}

export function trackCTAClick(buttonText: string, section: string, ctaType: "primary" | "secondary") {
  trackEvent({
    event: "cta_clicked",
    button_text: buttonText,
    section,
    cta_type: ctaType,
  });
}

export function trackBookingStarted(section: string) {
  trackEvent({
    event: "booking_started",
    section,
  });
}

export function trackHeroCTA(section: string) {
  trackEvent({
    event: "hero_cta_click",
    section,
  });
}

export function trackSecondaryCTA(section: string) {
  trackEvent({
    event: "secondary_cta_click",
    section,
  });
}

export function trackAuditCTA(section: string) {
  trackEvent({
    event: "audit_section_cta_click",
    section,
  });
}

export function trackFinalCTA(section: string) {
  trackEvent({
    event: "final_cta_click",
    section,
  });
}

export function trackMobileCTA() {
  trackEvent({
    event: "mobile_sticky_cta_click",
    section: "mobile-sticky",
  });
}

export function trackExampleSystemClick(section: string) {
  trackEvent({
    event: "example_system_click",
    section,
  });
}

export function trackDiscoveryCall(section: string) {
  trackBookingStarted(section);
}

export function trackLeadMagnetSubmit(email: string) {
  const domain = email.split("@")[1] || "unknown";
  trackEvent({
    event: "lead_magnet_submitted",
    email_domain: domain,
  });
}

export function trackSectionView(sectionName: string) {
  trackEvent({
    event: "section_viewed",
    section_name: sectionName,
  });
}

export function trackFAQExpand(questionText: string) {
  trackEvent({
    event: "faq_opened",
    question_text: questionText,
  });
}

export function trackAuditStarted(triggerSection: string) {
  trackEvent({
    event: "audit_started",
    section: triggerSection,
  });
}

export function trackAuditStepCompleted(step: number, answer: string, triggerSection: string) {
  trackEvent({
    event: "audit_step_completed",
    step,
    answer,
    section: triggerSection,
  });
}

export function trackAuditCompleted(answers: Record<number, string>) {
  trackEvent({
    event: "audit_completed",
    business_type: answers[0] || "",
    bottleneck: answers[2] || "",
    urgency: answers[4] || "",
  });
}

export function trackBookingClicked() {
  trackEvent({
    event: "booking_clicked",
  });
}

export function trackAuditAbandoned(step: number) {
  trackEvent({
    event: "audit_abandoned",
    step,
  });
}
