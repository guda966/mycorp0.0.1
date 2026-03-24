import { Users, Target, Code, Stethoscope, type LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  title: string;
  tagline: string;
  heroImage: string;
  secondaryImage: string;
  description: string;
  longDescription: string;
  benefits: { title: string; desc: string }[];
  specialties: string[];
  process: { step: string; title: string; desc: string }[];
  stats: { value: string; label: string }[];
  testimonial: { quote: string; name: string; role: string; company: string; avatar: string };
  industries: string[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "staffing-outsourcing",
    icon: Users,
    color: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    title: "Staffing & Outsourcing",
    tagline: "Scale your workforce on demand — contract, direct hire, and offshore teams.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800",
    description: "End-to-end IT staffing and outsourcing — contract, C2H, direct placement, offshore delivery teams, and preferred vendor programs across the US and India.",
    longDescription: "MyCorp Solutions connects enterprises with pre-vetted IT talent across every engagement model. Whether you need a single specialist, a project team, or a fully managed offshore delivery center, we source, screen, and place candidates fast — reducing your time-to-fill by up to 40%. Our hubs in New Jersey and Hyderabad give you timezone coverage, cost efficiency, and access to deep talent pools in both markets. We are also empaneled as a certified prime and sub-vendor for enterprise and government staffing programs.",
    benefits: [
      { title: "Staff Augmentation", desc: "Embed skilled contractors into your team — same tools, same standups, zero onboarding friction from day one." },
      { title: "Contract & C2H Hiring", desc: "Start with contract flexibility and convert top performers to permanent hires at zero conversion fee." },
      { title: "Direct Placement", desc: "Permanent hires backed by a 90-day guarantee. If it's not right, we fill the role again at no charge." },
      { title: "Offshore & Hybrid Teams", desc: "Fully managed delivery teams in Hyderabad aligned to your timezone, workflows, and quality standards." },
    ],
    specialties: [
      "Staff Augmentation", "Contract Staffing", "Contract-to-Hire", "Direct Placement",
      "Offshore Delivery Teams", "Onsite / Hybrid Models", "Vendor Empanelment", "Payroll & Compliance",
    ],
    process: [
      { step: "01", title: "Requirement Intake", desc: "Focused kickoff to capture role requirements, tech stack, culture, and delivery timeline." },
      { step: "02", title: "Sourcing & Screening", desc: "Our recruiters surface pre-vetted, shortlisted candidates from our active pipeline within 48 hours." },
      { step: "03", title: "Interview & Selection", desc: "You interview a curated shortlist of 3–5 candidates and make the final hiring decision." },
      { step: "04", title: "Onboarding & Management", desc: "We handle paperwork, compliance, and ongoing account management for the life of the engagement." },
    ],
    stats: [
      { value: "40%", label: "Faster Time-to-Fill" },
      { value: "5,000+", label: "Placements Completed" },
      { value: "92%", label: "Retention Rate" },
    ],
    testimonial: {
      quote: "MyCorp placed 3 senior cloud engineers in under 2 weeks. Every candidate was sharp, pre-vetted, and culture-fit. Best staffing experience we've ever had.",
      name: "David Kim",
      role: "VP Engineering",
      company: "FinTech Ventures",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Financial Services", "Healthcare", "E-Commerce", "SaaS", "Manufacturing", "Government"],
    faqs: [
      { q: "How quickly can you provide candidates?", a: "We deliver a qualified shortlist within 48 hours for most roles. Specialized or niche positions may take 3–5 business days." },
      { q: "What engagement models do you support?", a: "Contract, contract-to-hire, direct placement, and dedicated offshore teams. We match the model to your specific need and budget." },
      { q: "What geographies do you cover?", a: "Primarily the United States and India. We operate delivery hubs in New Jersey and Hyderabad with active pipelines in both markets." },
    ],
  },
  {
    slug: "it-hiring",
    icon: Target,
    color: "text-orange-600",
    gradient: "from-orange-500 to-red-600",
    title: "IT Hiring Support",
    tagline: "Your embedded recruitment team — RPO, executive search, and everything in between.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=800",
    description: "Full Recruitment Process Outsourcing — your recruiters, your ATS, your brand — scaled up or down as your hiring needs change.",
    longDescription: "When your internal HR team can't keep pace with hiring volume or lacks the specialized expertise to fill niche IT roles, MyCorp's IT Hiring Support service steps in. We embed experienced IT recruiters directly into your organization, working inside your ATS, representing your employer brand, and delivering consistent improvements in cost-per-hire, time-to-fill, and candidate quality. From volume hiring to confidential executive search, we've got you covered.",
    benefits: [
      { title: "Lower Cost-Per-Hire", desc: "Replace agency markups with a transparent RPO model that consistently reduces your total hiring cost." },
      { title: "Proactive Pipeline Building", desc: "Dedicated sourcers build talent pipelines before roles even open — no more reactive scrambling." },
      { title: "Executive Search", desc: "Discreet, targeted search for VP, Director, and C-level technology leadership across the US and India." },
      { title: "Elastic Capacity", desc: "Scale recruiting bandwidth up or down in weeks — not months — as your business needs evolve." },
    ],
    specialties: [
      "End-to-End RPO", "Project RPO", "Selective RPO", "Executive & Leadership Search",
      "ATS Management", "Employer Branding", "DEI Hiring Programs", "Onboarding Support",
    ],
    process: [
      { step: "01", title: "Partnership Design", desc: "We align on scope, KPIs, ATS tools, and brand guidelines before the first requisition opens." },
      { step: "02", title: "Team Embedding", desc: "Dedicated recruiters integrate into your Slack, ATS, and hiring workflows as natural team members." },
      { step: "03", title: "Sourcing & Pipeline", desc: "Active sourcing, talent marketing, and referral programs build a steady, high-quality candidate flow." },
      { step: "04", title: "Reporting & Optimization", desc: "Weekly dashboards and quarterly reviews keep the program accountable and continuously improving." },
    ],
    stats: [
      { value: "35%", label: "Lower Cost-Per-Hire" },
      { value: "1,200+", label: "Roles Filled via RPO" },
      { value: "3x", label: "Faster Offer Acceptance" },
    ],
    testimonial: {
      quote: "MyCorp's hiring support team embedded so seamlessly that candidates thought they were talking to our internal HR. They filled 40 roles in a single quarter — something we couldn't have done alone.",
      name: "Priya Nair",
      role: "Chief People Officer",
      company: "TechScale Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Tech Startups", "Enterprise IT", "Consulting Firms", "Healthcare", "Financial Services", "Media & AdTech"],
    faqs: [
      { q: "How is IT Hiring Support different from staffing?", a: "Staffing supplies talent; IT Hiring Support manages your recruitment function. We use your tools, your brand, and represent you — not ourselves — through the entire hiring process." },
      { q: "How quickly can we launch a hiring program?", a: "A full RPO program typically launches in 2–4 weeks. Project or selective engagements can go live in under a week with a focused scope." },
      { q: "Do you support executive-level search?", a: "Yes. We run discreet, targeted searches for VP, Director, and C-suite technology roles, often in parallel alongside volume hiring programs." },
    ],
  },
  {
    slug: "it-projects",
    icon: Code,
    color: "text-violet-600",
    gradient: "from-violet-600 to-purple-800",
    title: "IT Projects",
    tagline: "Websites, software, and enterprise platforms — delivered on time, on budget.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    description: "End-to-end IT project delivery — from corporate websites and custom web apps to enterprise software, API integrations, and digital transformation.",
    longDescription: "From a polished corporate website to a complex enterprise platform, MyCorp's engineering teams deliver production-quality software on time and on budget. We bring Agile delivery discipline, cloud-native architecture, and full-stack expertise to every engagement — owning quality end to end so your leadership can stay focused on the business, not the build.",
    benefits: [
      { title: "Websites & Client Portals", desc: "Fast, mobile-first, SEO-optimized websites and portals that represent your brand at its very best." },
      { title: "Custom Web Applications", desc: "Bespoke SaaS platforms, internal tools, and dashboards built with modern, scalable tech stacks." },
      { title: "Enterprise Software & APIs", desc: "Complex backend systems, microservices, and integrations designed for enterprise-grade scale and reliability." },
      { title: "Legacy Modernization", desc: "Migrate aging applications to cloud-native architectures — without disrupting your live operations." },
    ],
    specialties: [
      "React & Next.js", "Node.js & Python", "AWS / Azure / GCP", "REST & GraphQL APIs",
      "Mobile Apps (iOS & Android)", "AI & ML Integration", "Legacy Modernization", "DevOps & CI/CD",
    ],
    process: [
      { step: "01", title: "Discovery & Scoping", desc: "We map goals, users, and constraints into a clear specification and project roadmap before anything is built." },
      { step: "02", title: "Design & Architecture", desc: "UI/UX mockups and system architecture are agreed upon before development begins." },
      { step: "03", title: "Agile Development", desc: "Bi-weekly sprints with live working demos keep you in control and feedback loops tight." },
      { step: "04", title: "Launch & Handoff", desc: "We manage deployment, monitoring setup, and full knowledge transfer so your team owns the product." },
    ],
    stats: [
      { value: "200+", label: "Projects Delivered" },
      { value: "99.8%", label: "On-Time Delivery" },
      { value: "15+", label: "Tech Stacks" },
    ],
    testimonial: {
      quote: "MyCorp rebuilt our customer portal from the ground up in 5 months. Clean design, exceptional performance, and the codebase handoff was completely seamless.",
      name: "Sarah Chen",
      role: "CTO",
      company: "RetailEdge Inc.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Retail & E-Commerce", "Healthcare IT", "Logistics", "EdTech", "FinTech", "Insurance"],
    faqs: [
      { q: "What size projects do you handle?", a: "Everything from a focused corporate website to a multi-year enterprise platform. We're equally comfortable with both — we just need a clear scope and defined timelines." },
      { q: "Fixed-price or time-and-material?", a: "Both. Fixed-price suits clearly scoped work; time-and-material is preferred for evolving requirements or ongoing partnerships where scope naturally flexes." },
      { q: "Will we own all the code and IP?", a: "Absolutely. All code, designs, and intellectual property developed during the engagement are fully and exclusively owned by you, the client." },
    ],
  },
  {
    slug: "medical-billing",
    icon: Stethoscope,
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-700",
    title: "Medical Billing & Coding",
    tagline: "Recover more revenue. Reduce denials. Stay fully compliant.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    description: "Complete Revenue Cycle Management — AAPC-certified medical coding, claims submission, denial management, AR recovery, and HIPAA-compliant billing.",
    longDescription: "Healthcare providers lose millions annually to claim denials, coding errors, and slow AR cycles. MyCorp's RCM team — AAPC-certified coders, billing specialists, and AR analysts — manages your entire revenue cycle so your clinical staff can focus on patients, not paperwork. We combine deep payer knowledge, rigorous pre-submission claim scrubbing, and transparent real-time reporting to maximize every dollar you've legitimately earned.",
    benefits: [
      { title: "Accurate Medical Coding", desc: "AAPC-certified ICD-10 and CPT coders with specialty-specific expertise to maximize first-pass claim acceptance." },
      { title: "Reduced Denial Rates", desc: "Pre-submission scrubbing and payer-specific rule engines cut first-pass claim denials by up to 30%." },
      { title: "Faster AR Recovery", desc: "Systematic, aggressive follow-up shortens average AR days and accelerates your entire collections pipeline." },
      { title: "Full HIPAA Compliance", desc: "Every team member, system, and workflow is HIPAA-trained, audited, and protected by a signed BAA." },
    ],
    specialties: [
      "ICD-10 / CPT / HCPCS Coding", "Claims Submission & Scrubbing", "Denial Management & Appeals", "Accounts Receivable Recovery",
      "Provider Credentialing", "Eligibility Verification", "Patient Billing & Statements", "Payer Contract Analysis",
    ],
    process: [
      { step: "01", title: "Practice Assessment", desc: "We audit billing workflows, payer mix, and denial patterns to identify every revenue leakage point." },
      { step: "02", title: "EHR Integration & Setup", desc: "We integrate with your EHR/PM system and configure payer-specific billing and coding rules." },
      { step: "03", title: "Billing & AR Follow-Up", desc: "Claims submitted daily; our AR team pursues every outstanding dollar with documented, systematic follow-up." },
      { step: "04", title: "Monthly Reporting", desc: "Detailed financial reports and strategic reviews help optimize payer contracts and collection rates." },
    ],
    stats: [
      { value: "30%", label: "Fewer Claim Denials" },
      { value: "$50M+", label: "Revenue Recovered" },
      { value: "100%", label: "HIPAA Compliant" },
    ],
    testimonial: {
      quote: "We recovered $2.3M in denied claims in our very first quarter with MyCorp. Their RCM team is thorough, transparent, and genuinely invested in our financial outcomes.",
      name: "Dr. Anita Reddy",
      role: "Practice Administrator",
      company: "Reddy Medical Group",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Hospitals & Health Systems", "Physician Groups", "Outpatient Clinics", "Dental Practices", "Behavioral Health", "Urgent Care Centers"],
    faqs: [
      { q: "Which EHR systems do you integrate with?", a: "All major platforms — Epic, Athena, eClinicalWorks, NextGen, Kareo, Practice Fusion, and many others. If you use it, we can integrate with it." },
      { q: "How are fees structured?", a: "Typically a percentage of net collections — our incentives are directly tied to your revenue performance. No recovery, no fee." },
      { q: "Is patient data safe with your team?", a: "Yes. All staff are HIPAA-trained, our systems are fully compliant, and we sign a Business Associate Agreement (BAA) with every healthcare client before work begins." },
    ],
  },
];
