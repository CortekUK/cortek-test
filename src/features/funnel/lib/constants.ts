import type { FAQItem, Service, PainPoint, Step, QualificationStepConfig } from "@/features/funnel/types";

export const SITE_CONFIG = {
  name: "Cortek",
  tagline: "Custom CRMs, AI Assistants & Automation",
  email: "hello@cortek.io",
  url: "https://cortek.io",
  gtmId: "GTM-XXXXXXX",
};

export const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/fkD5xnJzJhT0BeEel0mK/webhook-trigger/1f4cd6dd-e23f-4618-8a8e-3c76a52c385a";

// TODO: Replace with the GHL / LeadConnector booking widget URL if it changes
// TODO: In GHL/Make, map incoming audit fields to the contact/opportunity
export const BOOKING_WIDGET_URL = "https://api.leadconnectorhq.com/widget/booking/LZhNiR0u2zx1yGEU45Kr";

export const HERO_COPY = {
  headline: "Stop running your business across 12 tabs.",
  subheadline:
    "We replace scattered tools and missed follow-ups with one bespoke system, built around how you actually work.",
  cta: "Get your free workflow review",
  secondaryCta: "See example system",
  supporting: "Free 20-minute workflow review. No pressure. No commitment.",
};

export const FINAL_STATS = [
  { value: "20+", label: "Bespoke systems built" },
  { value: "100+", label: "SaaS tools replaced" },
  { value: "10 hrs", label: "Saved per client per week" },
];

export const AUDIT_STRIP = [
  { title: "Workflow map", description: "We map how leads, tasks and follow-ups move through your business." },
  { title: "Bottleneck review", description: "We identify where work gets lost, delayed or repeated." },
  { title: "First build recommendation", description: "We recommend the most valuable system to build first." },
];

export const PAIN_POINTS: PainPoint[] = [
  { icon: "ClipboardIcon", text: "Leads sit across inboxes, forms and messages with no clear owner." },
  { icon: "RefreshIcon", text: "Staff chase customers manually for updates, payments and next steps." },
  { icon: "ChartDownIcon", text: "Spreadsheets become messy as soon as the business gets busier." },
  { icon: "UsersIcon", text: "You cannot quickly see what is active, overdue or stuck." },
];

export const BEFORE_AFTER = {
  before: [
    "Leads spread across inboxes and spreadsheets",
    "Staff chasing customers manually",
    "No single view of jobs, payments or follow-ups",
    "Owners remembering everything themselves",
    "Tools that do not talk to each other",
  ],
  after: [
    "Every lead captured in one CRM",
    "Follow-ups triggered automatically",
    "Dashboards show what needs attention",
    "Tasks, customers and payments connected",
    "One system built around your workflow",
  ],
};

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Map your current workflow",
    description:
      "We review how leads, customers, tasks and follow-ups move through your business today.",
  },
  {
    number: "02",
    title: "Find the bottlenecks",
    description:
      "We identify where work gets lost, delayed, repeated or handled manually.",
  },
  {
    number: "03",
    title: "Recommend the first build",
    description:
      "We show the CRM module, automation or AI assistant that would create the most value first.",
  },
];

export const SERVICES: Service[] = [
  {
    icon: "DatabaseIcon",
    title: "Custom CRM",
    description: "Track leads, customers, jobs and next steps in one place.",
  },
  {
    icon: "BotIcon",
    title: "AI Assistants",
    description: "Classify leads, draft replies and support repetitive admin tasks.",
  },
  {
    icon: "ZapIcon",
    title: "Workflow Automation",
    description: "Trigger follow-ups, reminders and handovers automatically.",
  },
  {
    icon: "LinkIcon",
    title: "System Integrations",
    description: "Connect forms, calendars, payments, email, SMS and internal tools.",
  },
  {
    icon: "BarChartIcon",
    title: "Dashboards & Reporting",
    description: "See what is active, overdue, paid, pending or stuck.",
  },
  {
    icon: "MailIcon",
    title: "Email & SMS Automation",
    description: "Send reminders, confirmations and follow-ups without manual chasing.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What happens on the free workflow review?",
    answer:
      "We’ll review your current workflow, identify where leads or tasks get lost, and recommend the first CRM, automation or AI assistant that would create the most value.",
  },
  {
    question: "Do I need to already have a CRM?",
    answer:
      "No. Many clients start with spreadsheets, inboxes, WhatsApp, forms or disconnected tools. The workflow review helps decide whether you need a CRM, automation, integration or a combination.",
  },
  {
    question: "Can you connect to our current tools?",
    answer:
      "Yes. We can usually connect forms, calendars, email, SMS, payment tools, dashboards and existing software depending on what your business already uses.",
  },
  {
    question: "How long does a custom build usually take?",
    answer:
      "It depends on the scope. Smaller systems can often be built quickly, while more advanced CRMs with integrations and automations take longer. The workflow review helps define the first practical version.",
  },
  {
    question: "How is pricing worked out?",
    answer:
      "Pricing depends on the system scope, integrations, automations and support required. The workflow review helps identify what is actually needed before anything is quoted.",
  },
];

export const QUALIFICATION_STEPS: QualificationStepConfig[] = [
  {
    question: "What type of business do you run?",
    options: [
      { id: "service", label: "Service business", icon: "WrenchIcon" },
      { id: "sales", label: "Sales team", icon: "BriefcaseIcon" },
      { id: "clinic", label: "Clinic or appointment business", icon: "CalendarIcon" },
      { id: "property", label: "Property or maintenance", icon: "BuildingIcon" },
      { id: "training", label: "Training or education", icon: "BookIcon" },
      { id: "ecommerce", label: "E-commerce or orders", icon: "ShoppingCartIcon" },
      { id: "agency", label: "Agency or consultancy", icon: "BriefcaseIcon" },
      { id: "other", label: "Other", icon: "EllipsisIcon" },
    ],
  },
  {
    question: "What are you using to manage leads, customers or jobs today?",
    options: [
      { id: "spreadsheets", label: "Spreadsheets", icon: "TableIcon" },
      { id: "email", label: "Email inbox", icon: "MailIcon" },
      { id: "whatsapp", label: "WhatsApp / messages", icon: "MessageIcon" },
      { id: "project-tools", label: "Trello / Asana / ClickUp", icon: "ClipboardIcon" },
      { id: "existing-crm", label: "Existing CRM", icon: "DatabaseIcon" },
      { id: "custom-software", label: "Custom software", icon: "CodeIcon" },
      { id: "mix", label: "A mix of tools", icon: "PuzzleIcon" },
      { id: "other", label: "Other", icon: "EllipsisIcon" },
    ],
  },
  {
    question: "Where does work get stuck most often?",
    options: [
      { id: "lead-followups", label: "Lead follow-up", icon: "AlertIcon" },
      { id: "admin-tasks", label: "Admin tasks", icon: "KeyboardIcon" },
      { id: "payments", label: "Payments or invoicing", icon: "CreditCardIcon" },
      { id: "team-visibility", label: "Team visibility", icon: "EyeOffIcon" },
      { id: "reporting", label: "Reporting", icon: "BarChartIcon" },
      { id: "reminders", label: "Reminders", icon: "ClockIcon" },
      { id: "everything-manual", label: "Everything feels manual", icon: "RefreshIcon" },
      { id: "other", label: "Other", icon: "EllipsisIcon" },
    ],
  },
  {
    question: "What would you most like to improve first?",
    options: [
      { id: "capture-leads", label: "Capture more leads", icon: "TargetIcon" },
      { id: "respond-faster", label: "Respond faster", icon: "ZapIcon" },
      { id: "reduce-admin", label: "Reduce manual admin", icon: "ClipboardIcon" },
      { id: "organise", label: "Organise customers or jobs", icon: "FolderIcon" },
      { id: "automate-reminders", label: "Automate reminders", icon: "BellIcon" },
      { id: "reporting", label: "Improve reporting", icon: "BarChartIcon" },
      { id: "connect-tools", label: "Connect existing tools", icon: "LinkIcon" },
      { id: "other", label: "Other", icon: "EllipsisIcon" },
    ],
  },
  {
    question: "How soon are you looking to improve this?",
    options: [
      { id: "asap", label: "As soon as possible", icon: "ZapIcon" },
      { id: "this-month", label: "This month", icon: "CalendarIcon" },
      { id: "1-3-months", label: "Next 1\u20133 months", icon: "ClockIcon" },
      { id: "exploring", label: "Just exploring", icon: "CompassIcon" },
    ],
  },
];

export const FINAL_CTA_COPY = {
  headline: "Ready to find the first system your business actually needs?",
  subheadline:
    "Start the free workflow review and we’ll map where your workflow is leaking time, leads and manual effort.",
  cta: "Get your free workflow review",
  supporting: "Free 20-minute workflow review. No pressure. No commitment.",
};

