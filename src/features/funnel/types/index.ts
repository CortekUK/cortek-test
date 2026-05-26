export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface PainPoint {
  icon: string;
  text: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface TrackingEvent {
  event: string;
  button_text?: string;
  section?: string;
  cta_type?: string;
  question_text?: string;
  section_name?: string;
  email_domain?: string;
  [key: string]: string | number | undefined;
}

export interface QualificationOption {
  id: string;
  label: string;
  icon: string;
}

export interface QualificationStepConfig {
  question: string;
  subtitle?: string;
  options: QualificationOption[];
}

export interface QualificationContactDetails {
  name: string;
  email: string;
  company: string;
  website: string;
  phone: string;
}

export interface QualificationFormData {
  answers: Record<number, string>;
  otherText: Record<number, string>;
  contact: QualificationContactDetails;
}
