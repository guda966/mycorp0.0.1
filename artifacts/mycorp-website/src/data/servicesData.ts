import { Users, Code, Server, Target, Stethoscope, type LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  longDescription: string;
  benefits: { title: string; desc: string }[];
  specialties: string[];
  process: { step: string; title: string; desc: string }[];
  stats: { value: string; label: string }[];
  testimonial: { quote: string; name: string; role: string; company: string; avatar: string };
  industries: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "staffing",
    icon: Users,
    color: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    title: "IT Staffing & Recruitment",
    tagline: "The right talent, exactly when you need them.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400",
    description: "End-to-end talent acquisition for technical and non-technical roles across the US and India.",
    longDescription: "Finding elite IT talent is one of the hardest problems enterprise teams face. MyCorp Solutions has spent over a decade building a pre-vetted network of engineers, architects, and specialists so your projects never stall. We handle contract, contract-to-hire, and direct-hire placements with speed and precision — reducing your time-to-hire by up to 40%.",
    benefits: [
      { title: "Pre-Vetted Talent Pool", desc: "Every candidate is screened through multi-stage technical and cultural assessments before reaching you." },
      { title: "40% Faster Hiring", desc: "Our active pipeline and streamlined process cut average time-to-hire dramatically." },
      { title: "Flexible Engagement Models", desc: "Contract, contract-to-hire, or direct placement — we match the model to your need." },
      { title: "US & India Coverage", desc: "Delivery hubs in New Jersey and Hyderabad give you access to talent across both markets." },
    ],
    specialties: ["Software Engineers", "Data Scientists", "Cloud Architects", "DevOps Engineers", "Cybersecurity Experts", "QA Engineers", "Project Managers", "Business Analysts"],
    process: [
      { step: "01", title: "Discovery & Intake", desc: "We learn your tech stack, team culture, and role requirements in a focused kickoff call." },
      { step: "02", title: "Sourcing & Screening", desc: "Our recruiters tap our active pipeline and network to surface pre-qualified candidates within 48 hours." },
      { step: "03", title: "Interview & Selection", desc: "You interview only the shortlist — typically 3 candidates per role — saving your team's time." },
      { step: "04", title: "Onboarding Support", desc: "We stay engaged through the first 90 days to ensure a seamless transition for contractor and client alike." },
    ],
    stats: [{ value: "40%", label: "Faster Time-to-Hire" }, { value: "5,000+", label: "Placements Made" }, { value: "92%", label: "Candidate Retention" }],
    testimonial: {
      quote: "MyCorp placed 3 senior engineers on our team within 2 weeks. The quality of candidates was exceptional — better than any agency we've used before.",
      name: "David Kim",
      role: "VP Engineering",
      company: "FinTech Ventures",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Financial Services", "Healthcare", "E-Commerce", "SaaS", "Manufacturing", "Government"],
  },
  {
    slug: "solutions",
    icon: Code,
    color: "text-violet-600",
    gradient: "from-violet-600 to-purple-800",
    title: "IT Solutions & Software Dev",
    tagline: "Custom software engineered for scale and longevity.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400",
    description: "Custom software development and digital transformation for enterprises across all industries.",
    longDescription: "From legacy modernization to cloud-native greenfield builds, MyCorp's engineering teams deliver production-ready software on time and on budget. We align closely with your product vision, bring Agile discipline, and own quality end-to-end — so you ship features instead of bugs.",
    benefits: [
      { title: "Agile Delivery", desc: "Sprints, standups, and iterative releases keep you in control and stakeholders informed." },
      { title: "Cloud-Native by Default", desc: "Every architecture is designed for scalability, resilience, and cloud economics from day one." },
      { title: "Full-Stack Expertise", desc: "Frontend, backend, APIs, DevOps — one unified team owns the entire delivery chain." },
      { title: "Rigorous QA", desc: "Automated testing pipelines and dedicated QA engineers catch defects before they reach production." },
    ],
    specialties: ["React & Next.js", "Node.js & Python", "AWS / Azure / GCP", "Microservices & APIs", "Mobile (iOS & Android)", "AI & ML Integration", "Legacy Modernization", "DevOps & CI/CD"],
    process: [
      { step: "01", title: "Product Discovery", desc: "We map your goals, users, and constraints into a clear technical specification and roadmap." },
      { step: "02", title: "Architecture & Design", desc: "Our architects design a scalable, maintainable system before a single line of code is written." },
      { step: "03", title: "Agile Development", desc: "Bi-weekly sprints with working demos keep delivery transparent and feedback loops tight." },
      { step: "04", title: "Launch & Scale", desc: "We handle deployment, monitoring setup, and knowledge transfer so your team owns the product." },
    ],
    stats: [{ value: "200+", label: "Projects Delivered" }, { value: "99.8%", label: "On-time Delivery" }, { value: "15+", label: "Tech Frameworks" }],
    testimonial: {
      quote: "Their team rebuilt our core platform in 6 months. The architecture is clean, scalable, and the codebase handoff was seamless. Genuinely impressive.",
      name: "Sarah Chen",
      role: "CTO",
      company: "RetailEdge Inc.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Retail & E-Commerce", "Healthcare IT", "Logistics", "EdTech", "FinTech", "Insurance"],
  },
  {
    slug: "managed-services",
    icon: Server,
    color: "text-cyan-600",
    gradient: "from-cyan-600 to-teal-700",
    title: "IT Support & Managed Services",
    tagline: "24/7 infrastructure management so your team can focus on business.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400",
    description: "Round-the-clock infrastructure monitoring, helpdesk, and proactive security management.",
    longDescription: "Downtime costs money and reputation. MyCorp's Managed Services practice provides a full NOC/SOC capability — proactive monitoring, incident response, patch management, and L1-L3 helpdesk — delivered as a predictable monthly service. We guarantee 99.99% uptime SLAs and treat your infrastructure as our own.",
    benefits: [
      { title: "99.99% Uptime SLAs", desc: "Contractual commitments backed by redundant monitoring and rapid response teams." },
      { title: "Proactive Threat Detection", desc: "24/7 SOC analysts and automated tools identify and neutralize threats before they escalate." },
      { title: "Predictable Budgeting", desc: "A flat monthly fee replaces unpredictable break-fix costs and emergency hires." },
      { title: "Rapid Incident Response", desc: "Defined SLAs for P1/P2/P3 incidents with escalation paths that keep your business running." },
    ],
    specialties: ["24/7 NOC / SOC", "L1/L2/L3 Helpdesk", "Cloud Infrastructure Mgmt", "Cybersecurity Monitoring", "Patch & Vulnerability Mgmt", "Backup & DR", "Network Management", "ITSM / ITIL"],
    process: [
      { step: "01", title: "Environment Audit", desc: "We document your current infrastructure, identify risks, and baseline performance metrics." },
      { step: "02", title: "Onboarding & Tooling", desc: "Monitoring agents, alerting rules, and runbooks are configured in your environment." },
      { step: "03", title: "Active Management", desc: "Our NOC team monitors 24/7, handles incidents, and proactively applies patches and updates." },
      { step: "04", title: "Monthly Reviews", desc: "Detailed reports and strategic recommendations are delivered to your leadership each month." },
    ],
    stats: [{ value: "99.99%", label: "Guaranteed Uptime SLA" }, { value: "<15 min", label: "P1 Response Time" }, { value: "350+", label: "Environments Managed" }],
    testimonial: {
      quote: "Their managed services team saved us 40% in infrastructure costs while improving uptime to 99.99%. Response times are incredible — we never worry about downtime anymore.",
      name: "Michael Torres",
      role: "IT Director",
      company: "Global Logistics Co.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Banking & Finance", "Retail", "Manufacturing", "Telecom", "Media", "Government"],
  },
  {
    slug: "rpo",
    icon: Target,
    color: "text-orange-600",
    gradient: "from-orange-500 to-red-600",
    title: "IT Hiring & RPO",
    tagline: "Your fully embedded recruitment team, on demand.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400",
    description: "Recruitment Process Outsourcing that acts as an extension of your internal HR team.",
    longDescription: "When your internal team can't keep up with hiring volume — or lacks the specialist expertise to fill niche roles — RPO fills the gap. MyCorp embeds experienced recruiters directly into your workflow, using your tools, representing your brand, and delivering measurable improvements in quality-of-hire and cost-per-hire.",
    benefits: [
      { title: "Lower Cost-Per-Hire", desc: "Eliminate agency markups and internal overhead with a scalable, transparent pricing model." },
      { title: "Higher Quality Candidates", desc: "Dedicated sourcers build talent pipelines proactively instead of reacting to open reqs." },
      { title: "Employer Brand Representation", desc: "Our recruiters become extensions of your brand — delivering a consistent candidate experience." },
      { title: "Scalable Capacity", desc: "Ramp up or down hiring capacity in weeks, not months, as business needs change." },
    ],
    specialties: ["End-to-End RPO", "Project RPO", "Selective RPO", "Executive Search", "ATS Implementation", "Employer Branding", "Onboarding Programs", "DEI Hiring Strategies"],
    process: [
      { step: "01", title: "Partnership Design", desc: "We align on scope, KPIs, tools, and brand voice before the first requisition opens." },
      { step: "02", title: "Team Integration", desc: "Dedicated recruiters are embedded in your ATS and communication channels from day one." },
      { step: "03", title: "Pipeline Development", desc: "Active sourcing, talent marketing, and referral programs build a continuous candidate flow." },
      { step: "04", title: "Reporting & Optimization", desc: "Weekly dashboards and quarterly business reviews keep the program continuously improving." },
    ],
    stats: [{ value: "35%", label: "Lower Cost-Per-Hire" }, { value: "1,200+", label: "Executive Placements" }, { value: "50+", label: "RPO Partners" }],
    testimonial: {
      quote: "MyCorp's RPO team became a true extension of our HR department. They understand our culture and consistently deliver candidates who are the right fit — not just on paper.",
      name: "Priya Nair",
      role: "Chief People Officer",
      company: "TechScale Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Tech Startups", "Enterprise IT", "Consulting", "Healthcare", "Financial Services", "Media"],
  },
  {
    slug: "medical-billing",
    icon: Stethoscope,
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-700",
    title: "Medical Billing & RCM",
    tagline: "Recover more revenue. Reduce denials. Stay compliant.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400",
    description: "End-to-end healthcare revenue cycle management for hospitals, clinics, and physician groups.",
    longDescription: "Healthcare providers lose millions each year to claim denials, coding errors, and slow AR cycles. MyCorp's RCM team — certified coders, billing specialists, and AR analysts — manages the entire revenue cycle from charge capture to collections, so your clinical staff can focus on patients, not paperwork.",
    benefits: [
      { title: "Reduced Denial Rates", desc: "Our certified coders and pre-submission scrubbing reduce first-pass denials by up to 30%." },
      { title: "Faster AR Recovery", desc: "Aggressive follow-up workflows accelerate collections and shorten your average AR days." },
      { title: "HIPAA Compliant", desc: "Every process, system, and team member is compliant with HIPAA Privacy and Security Rules." },
      { title: "Transparent Reporting", desc: "Real-time dashboards give you full visibility into claims, collections, and payer performance." },
    ],
    specialties: ["ICD-10 / CPT Coding", "Claims Submission", "Denial Management & Appeals", "AR Recovery", "Provider Credentialing", "Eligibility Verification", "Patient Billing", "Payer Contract Analysis"],
    process: [
      { step: "01", title: "Practice Assessment", desc: "We audit your current billing workflows, payer mix, and denial patterns to identify revenue leaks." },
      { step: "02", title: "Setup & Integration", desc: "Our team integrates with your EHR/PM system and configures payer-specific billing rules." },
      { step: "03", title: "Billing & Follow-Up", desc: "Claims are submitted daily; our AR team pursues every dollar with systematic follow-up." },
      { step: "04", title: "Reporting & Review", desc: "Monthly financial reports and strategic reviews help optimize your payer contracts and collections." },
    ],
    stats: [{ value: "30%", label: "Fewer Claim Denials" }, { value: "$50M+", label: "Revenue Recovered" }, { value: "100%", label: "HIPAA Compliant" }],
    testimonial: {
      quote: "We recovered $2.3M in denied claims in the first quarter alone. MyCorp's RCM team is thorough, transparent, and genuinely invested in our financial health.",
      name: "Dr. Anita Reddy",
      role: "Practice Administrator",
      company: "Reddy Medical Group",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Hospitals & Health Systems", "Physician Groups", "Outpatient Clinics", "Dental Practices", "Behavioral Health", "Urgent Care"],
  },
];
