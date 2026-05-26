import { useReducer, useEffect, useCallback, useState } from "react";
import { useQualification } from "@/features/funnel/contexts/QualificationContext";
import { QualificationProgress } from "./QualificationProgress";
import { StepMultipleChoice } from "./StepMultipleChoice";
import { StepEmailCapture } from "./StepEmailCapture";
import { CompletionScreen } from "./CompletionScreen";
import { QUALIFICATION_STEPS, GHL_WEBHOOK_URL } from "@/features/funnel/lib/constants";
import {
  trackAuditStarted,
  trackAuditStepCompleted,
  trackAuditCompleted,
  trackAuditAbandoned,
} from "@/features/funnel/lib/analytics";

const QUESTION_STEPS = 5;
const TOTAL_STEPS = 6; // 5 questions + 1 email capture

interface State {
  step: number;
  direction: "forward" | "backward";
  answers: Record<number, string>;
  otherText: Record<number, string>;
  email: string;
  completed: boolean;
}

type Action =
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "SET_ANSWER"; step: number; answer: string }
  | { type: "SET_OTHER_TEXT"; step: number; text: string }
  | { type: "SET_EMAIL"; email: string }
  | { type: "COMPLETE" }
  | { type: "RESET" };

const initialState: State = {
  step: 0,
  direction: "forward",
  answers: {},
  otherText: {},
  email: "",
  completed: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "NEXT":
      return { ...state, step: state.step + 1, direction: "forward" };
    case "BACK":
      return { ...state, step: Math.max(0, state.step - 1), direction: "backward" };
    case "SET_ANSWER":
      return { ...state, answers: { ...state.answers, [action.step]: action.answer } };
    case "SET_OTHER_TEXT":
      return { ...state, otherText: { ...state.otherText, [action.step]: action.text } };
    case "SET_EMAIL":
      return { ...state, email: action.email };
    case "COMPLETE":
      return { ...state, completed: true };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function getAnswerLabel(stepIndex: number, answerId: string, otherText: string): string {
  if (!answerId) return "";
  if (answerId === "other" && otherText.trim()) return `Other: ${otherText.trim()}`;
  const option = QUALIFICATION_STEPS[stepIndex]?.options.find((o) => o.id === answerId);
  return option?.label ?? answerId;
}

async function submitAuditToWebhook(state: State): Promise<void> {
  const payload = {
    email: state.email,
    audit_business_type: getAnswerLabel(0, state.answers[0] || "", state.otherText[0] || ""),
    audit_current_tools: getAnswerLabel(1, state.answers[1] || "", state.otherText[1] || ""),
    audit_bottleneck: getAnswerLabel(2, state.answers[2] || "", state.otherText[2] || ""),
    audit_priority: getAnswerLabel(3, state.answers[3] || "", state.otherText[3] || ""),
    audit_urgency: getAnswerLabel(4, state.answers[4] || "", state.otherText[4] || ""),
    audit_source: "Cortek Funnel",
    audit_submitted_at: new Date().toISOString(),
    page_url: window.location.href,
    user_agent: navigator.userAgent,
  };

  const res = await fetch(GHL_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Webhook responded with ${res.status}`);
  }
}

export function AuditQualificationOverlay() {
  const ctx = useQualification();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitting, setSubmitting] = useState(false);

  const isOpen = ctx?.isOpen ?? false;
  const triggerSection = ctx?.triggerSection ?? "";
  const closeQualification = ctx?.closeQualification;

  useEffect(() => {
    if (isOpen) dispatch({ type: "RESET" });
  }, [isOpen, triggerSection]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }
    return () => document.body.classList.remove("overlay-open");
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (!state.completed) trackAuditAbandoned(state.step);
    closeQualification?.();
  }, [state.completed, state.step, closeQualification]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const questionIndex = state.step - 1;
  const isIntro = state.step === 0;
  const isQuestion = state.step >= 1 && state.step <= QUESTION_STEPS;
  const isEmailStep = state.step === QUESTION_STEPS + 1;
  const showHeader = !state.completed && !isIntro;

  function handleStartAudit() {
    trackAuditStarted(triggerSection);
    dispatch({ type: "NEXT" });
  }

  function handleSelect(qIndex: number, answerId: string) {
    dispatch({ type: "SET_ANSWER", step: qIndex, answer: answerId });
  }

  function handleOtherText(qIndex: number, text: string) {
    dispatch({ type: "SET_OTHER_TEXT", step: qIndex, text });
  }

  function handleNext() {
    const answer = state.answers[questionIndex] || "";
    trackAuditStepCompleted(state.step, answer, triggerSection);
    dispatch({ type: "NEXT" });
  }

  function handleBack() {
    dispatch({ type: "BACK" });
  }

  async function handleEmailSubmit() {
    setSubmitting(true);
    trackAuditCompleted(state.answers);

    try {
      await submitAuditToWebhook(state);
    } catch (err) {
      console.error("[Audit] Webhook submission failed:", err);
    }

    setSubmitting(false);
    dispatch({ type: "COMPLETE" });
  }

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-lg overlay-enter flex items-center justify-center p-3 sm:p-6">
      <div className="audit-panel relative w-full max-w-[720px] max-h-[92vh] bg-navy-900 border border-navy-700/50 rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden">
        <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ padding: "1px", background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(45,129,247,0.08), rgba(124,58,237,0.12))", mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor" }} />

        {showHeader && (
          <div className="relative z-10 px-4 sm:px-6 pt-4 pb-3 border-b border-navy-700/40">
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={handleBack}
                className="text-sm text-slate-400 hover:text-foreground transition-colors cursor-pointer inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              <span className="text-xs text-slate-500 font-medium">
                Step {isQuestion ? state.step : TOTAL_STEPS} of {TOTAL_STEPS}
              </span>

              <button
                type="button"
                onClick={handleClose}
                className="text-slate-400 hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <QualificationProgress currentStep={isEmailStep ? TOTAL_STEPS - 1 : state.step - 1} totalSteps={TOTAL_STEPS} />
          </div>
        )}

        {(isIntro || state.completed) && (
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-foreground transition-colors cursor-pointer z-20"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className={`relative z-10 flex-1 flex ${state.completed ? "items-start" : "items-center justify-center"} px-4 sm:px-8 overflow-y-auto`}>
          <div className="w-full py-8 sm:py-10">
            {state.completed ? (
              <CompletionScreen email={state.email} />
            ) : isIntro ? (
              <div className="step-forward text-center">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/5 mb-6">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-brand-purple-light font-semibold">
                    Free Systems Audit
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
                  Start your free systems audit
                </h2>
                <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                  Answer a few quick questions so we can understand your workflow, identify bottlenecks and make the audit call specific to your business.
                </p>

                <button
                  type="button"
                  onClick={handleStartAudit}
                  className="bg-gradient-to-r from-brand-purple to-brand-purple-light text-on-brand font-semibold px-10 py-4 rounded-xl hover:brightness-110 transition-all btn-glow cursor-pointer text-base shadow-lg shadow-brand-purple/20"
                >
                  Get started &rarr;
                </button>
                <p className="text-slate-500 text-xs mt-3">Takes less than 60 seconds.</p>
              </div>
            ) : isEmailStep ? (
              <StepEmailCapture
                email={state.email}
                onChange={(v) => dispatch({ type: "SET_EMAIL", email: v })}
                onSubmit={handleEmailSubmit}
                submitting={submitting}
                totalSteps={TOTAL_STEPS}
                direction={state.direction}
              />
            ) : isQuestion ? (
              <StepMultipleChoice
                key={state.step}
                stepNumber={state.step}
                totalSteps={TOTAL_STEPS}
                config={QUALIFICATION_STEPS[questionIndex]}
                selectedAnswer={state.answers[questionIndex] || ""}
                otherText={state.otherText[questionIndex] || ""}
                onSelect={(answerId) => handleSelect(questionIndex, answerId)}
                onOtherTextChange={(text) => handleOtherText(questionIndex, text)}
                onNext={handleNext}
                direction={state.direction}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
