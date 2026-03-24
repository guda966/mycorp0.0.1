import { Users, Code, Server, Target, Stethoscope, Globe2, type LucideIcon } from "lucide-react";

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
    slug: "it-staffing",
    icon: Users,
    color: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    title: "IT Staffing & Recruitment",
    tagline: "Top-tier talent, exactly when and how you need them.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400",
    description: "End-to-end talent acquisition — contract, contract-to-hire, direct placement, and offshore team outsourcing across the US and India.",
    longDescription: "MyCorp Solutions connects enterprises with pre-vetted IT talent for every engagement model. Whether you need one specialist or an entire delivery team, we source, screen, and place candidates fast — cutting your time-to-hire by up to 40%. Our NJ and Hyderabad delivery hubs give you timezone coverage, cost efficiency, and access to deep talent pools in both markets. We also operate as a certified preferred vendor and prime vendor for enterprise and government clients.",
    benefits: [
      { title: "Staff Augmentation", desc: "Embed skilled contractors into your team — same tools, same standups, zero friction from day one." },
      { title: "Contract & C2H Hiring", desc: "Start with contract flexibility and convert top performers to permanent staff at zero conversion fee." },
      { title: "Direct Placement", desc: "Permanent hire placements with a 90-day guarantee — if it's not right, we fill the role again at no charge." },
      { title: "Preferred Vendor Programs", desc: "Empaneled as a certified prime and sub-vendor for enterprise and government staffing programs." },
    ],
    specialties: [
      "Staff Augmentation", "Contract Staffing", "Contract-to-Hire", "Direct Placement",
      "Offshore Delivery Teams", "Vendor Empanelment", "Payroll & Compliance", "US & India Delivery",
    ],
    process: [
      { step: "01", title: "Requirement Intake", desc: "We run a focused kickoff to understand your tech stack, culture, and timelines." },
      { step: "02", title: "Sourcing & Screening", desc: "Our recruiters tap an active pre-vetted pipeline and shortlist candidates within 48 hours." },
      { step: "03", title: "Interview & Selection", desc: "You interview a curated shortlist of 3–5 candidates and make the final call." },
      { step: "04", title: "Onboarding & Management", desc: "We handle paperwork, compliance, and ongoing account management for the life of the engagement." },
    ],
    stats: [
      { value: "40%", label: "Faster Time-to-Fill" },
      { value: "5,000+", label: "Placements Completed" },
      { value: "92%", label: "Retention Rate" },
    ],
    testimonial: {
      quote: "MyCorp placed 3 senior cloud engineers in under 2 weeks. Every candidate was sharp, pre-vetted, and culture-fit. Best staffing experience we've had.",
      name: "David Kim",
      role: "VP Engineering",
      company: "FinTech Ventures",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Financial Services", "Healthcare", "E-Commerce", "SaaS", "Manufacturing", "Government"],
  },
  {
    slug: "software-development",
    icon: Code,
    color: "text-violet-600",
    gradient: "from-violet-600 to-purple-800",
    title: "Software Development",
    tagline: "Websites, platforms, and enterprise software — built to perform.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400",
    description: "Custom software development from corporate websites and web apps to enterprise platforms, API integrations, and cloud-native solutions.",
    longDescription: "From a sharp corporate website to a complex enterprise platform, MyCorp's engineering teams deliver production-quality software on time and on budget. We bring Agile discipline, full-stack expertise, and cloud-native architecture to every project — owning quality end to end so your team focuses on vision, not execution. Whether you need a new digital presence or a complete platform rebuild, we deliver.",
    benefits: [
      { title: "Corporate Websites & Portals", desc: "Fast, SEO-optimized, mobile-first websites and client portals built for your brand and business goals." },
      { title: "Custom Web Applications", desc: "Bespoke SaaS platforms, internal tools, and dashboards built with modern, scalable frameworks." },
      { title: "Enterprise Software & APIs", desc: "Complex backend systems, microservices, and API integrations designed for enterprise scale and reliability." },
      { title: "Legacy Modernization", desc: "We migrate aging applications to modern cloud-native architectures without disrupting live operations." },
    ],
    specialties: [
      "React & Next.js", "Node.js & Python", "AWS / Azure / GCP", "REST & GraphQL APIs",
      "Mobile Apps (iOS & Android)", "AI & ML Integration", "Legacy Modernization", "DevOps & CI/CD",
    ],
    process: [
      { step: "01", title: "Discovery & Scoping", desc: "We map your goals, users, and constraints into a clear technical specification and roadmap." },
      { step: "02", title: "Design & Architecture", desc: "UI/UX mockups and system architecture are finalized before a single line of code is written." },
      { step: "03", title: "Agile Development", desc: "Bi-weekly sprints with live demos keep you in control and feedback loops tight throughout." },
      { step: "04", title: "Launch & Handoff", desc: "We handle deployment, monitoring setup, and full knowledge transfer so your team owns the product." },
    ],
    stats: [
      { value: "200+", label: "Projects Delivered" },
      { value: "99.8%", label: "On-Time Delivery" },
      { value: "15+", label: "Tech Stacks" },
    ],
    testimonial: {
      quote: "MyCorp rebuilt our customer portal from the ground up in 5 months. The design is clean, performance is exceptional, and the codebase handoff was flawless.",
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
    title: "Managed Services",
    tagline: "Always-on IT operations so your business never misses a beat.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400",
    description: "24/7 IT support, network monitoring, proactive security management, and full NOC/SOC operations — all on a flat monthly SLA.",
    longDescription: "Every minute of downtime costs you revenue, productivity, and trust. MyCorp's Managed Services gives you enterprise-grade NOC and SOC operations — proactive monitoring, rapid incident response, patch management, and L1-L3 helpdesk — delivered as a predictable flat-rate service. We guarantee 99.99% uptime SLAs and treat your infrastructure as if it were our own.",
    benefits: [
      { title: "99.99% Uptime Guaranteed", desc: "Contractual SLAs backed by redundant monitoring, rapid escalation, and 24/7 engineering support." },
      { title: "Proactive Security Operations", desc: "Around-the-clock SOC analysts and AI-powered tools detect and neutralize threats before they escalate." },
      { title: "Predictable Monthly Cost", desc: "A fixed monthly fee replaces unpredictable emergency IT spend — budget certainty, always." },
      { title: "Tiered Helpdesk (L1–L3)", desc: "From password resets to complex infrastructure incidents — all tiers handled by certified engineers." },
    ],
    specialties: [
      "24/7 NOC Operations", "Security Operations (SOC)", "L1 / L2 / L3 Helpdesk", "Cloud Infrastructure Mgmt",
      "Patch & Vulnerability Mgmt", "Backup & Disaster Recovery", "Network Management", "ITSM & ITIL",
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "We document your environment, identify risks, and establish performance and security baselines." },
      { step: "02", title: "Onboarding & Tooling", desc: "Monitoring agents, alerting rules, and runbooks are configured and tested in your environment." },
      { step: "03", title: "Active 24/7 Management", desc: "Our NOC team watches every system around the clock — handling incidents and proactively applying fixes." },
      { step: "04", title: "Monthly Reviews", desc: "Detailed performance reports and strategic recommendations are delivered to your leadership monthly." },
    ],
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "<15 min", label: "P1 Response Time" },
      { value: "350+", label: "Environments Managed" },
    ],
    testimonial: {
      quote: "Switching to MyCorp's managed services cut our IT costs by 40% and pushed uptime to 99.99%. We haven't had a major outage since day one.",
      name: "Michael Torres",
      role: "IT Director",
      company: "Global Logistics Co.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Banking & Finance", "Retail", "Manufacturing", "Telecom", "Media & Entertainment", "Government"],
  },
  {
    slug: "it-hiring",
    icon: Target,
    color: "text-orange-600",
    gradient: "from-orange-500 to-red-600",
    title: "IT Hiring Solutions",
    tagline: "Your embedded recruitment team — RPO, executive search, and beyond.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400",
    description: "Full Recruitment Process Outsourcing — embedded inside your HR team, working your tools, your brand, and your culture.",
    longDescription: "When your internal HR team can't keep pace with hiring volume or lacks the specialized expertise to fill niche IT roles, MyCorp's RPO service fills the gap. We embed experienced IT recruiters directly into your organization, work inside your ATS, represent your employer brand, and deliver consistent improvements in cost-per-hire, time-to-fill, and candidate quality.",
    benefits: [
      { title: "Lower Cost-Per-Hire", desc: "Replace agency markups with a transparent, scalable RPO model that consistently reduces hiring cost." },
      { title: "Faster Pipeline Building", desc: "Dedicated sourcers proactively build talent pipelines before roles open — no more reactive scrambling." },
      { title: "Executive Search", desc: "Discreet, targeted search for VP, Director, and C-level IT leadership roles across the US and India." },
      { title: "Elastic Hiring Capacity", desc: "Scale recruiting bandwidth up or down in weeks — not months — as your business needs evolve." },
    ],
    specialties: [
      "End-to-End RPO", "Project RPO", "Selective RPO", "Executive Search",
      "ATS Management", "Employer Branding", "DEI Hiring Programs", "Onboarding & Retention",
    ],
    process: [
      { step: "01", title: "Partnership Design", desc: "We align on scope, KPIs, ATS tools, and brand voice before the first requisition opens." },
      { step: "02", title: "Team Embedding", desc: "Dedicated recruiters integrate into your Slack, ATS, and hiring workflows as natural team members." },
      { step: "03", title: "Pipeline & Sourcing", desc: "Active sourcing, talent marketing, and referral programs build a continuous candidate flow." },
      { step: "04", title: "Reporting & Optimization", desc: "Weekly dashboards and quarterly reviews keep the program accountable and continuously improving." },
    ],
    stats: [
      { value: "35%", label: "Lower Cost-Per-Hire" },
      { value: "1,200+", label: "Roles Filled via RPO" },
      { value: "3x", label: "Faster Offer Acceptance" },
    ],
    testimonial: {
      quote: "MyCorp's RPO team embedded so naturally that candidates thought they were talking to our HR. They filled 40 roles in a single quarter — something we couldn't have done alone.",
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
    title: "Medical Billing",
    tagline: "Recover more revenue. Reduce denials. Stay fully compliant.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400",
    description: "End-to-end healthcare Revenue Cycle Management — from charge capture and coding through claims submission, AR follow-up, and final collections.",
    longDescription: "Healthcare providers lose millions annually to claim denials, coding errors, and slow AR cycles. MyCorp's RCM team — AAPC-certified coders, billing specialists, and AR analysts — manages your entire revenue cycle so your clinical staff can focus on patients, not paperwork. We combine deep payer knowledge, pre-submission scrubbing, and transparent reporting to maximize every dollar you've earned.",
    benefits: [
      { title: "Reduced Claim Denials", desc: "Certified coders and pre-submission claim scrubbing cut first-pass denial rates by up to 30%." },
      { title: "Faster AR Recovery", desc: "Aggressive, systematic follow-up shortens average AR days and accelerates collections significantly." },
      { title: "Full HIPAA Compliance", desc: "Every process, system, and team member is trained and audited to HIPAA Privacy and Security Rules." },
      { title: "Real-Time Reporting", desc: "Live dashboards give full visibility into claims status, payer performance, and collection trends." },
    ],
    specialties: [
      "ICD-10 / CPT Coding", "Claims Submission & Scrubbing", "Denial Management & Appeals", "AR Recovery",
      "Provider Credentialing", "Eligibility & Benefits Verification", "Patient Billing", "Payer Contract Analysis",
    ],
    process: [
      { step: "01", title: "Practice Assessment", desc: "We audit your billing workflows, payer mix, and denial patterns to identify all revenue leakage." },
      { step: "02", title: "Setup & EHR Integration", desc: "We integrate with your EHR/PM system and configure payer-specific billing and coding rules." },
      { step: "03", title: "Billing & AR Follow-Up", desc: "Claims are submitted daily; our AR team pursues every dollar with systematic, documented follow-up." },
      { step: "04", title: "Monthly Reporting", desc: "Detailed financial reports and strategic reviews help optimize payer contracts and collection rates." },
    ],
    stats: [
      { value: "30%", label: "Fewer Claim Denials" },
      { value: "$50M+", label: "Revenue Recovered" },
      { value: "100%", label: "HIPAA Compliant" },
    ],
    testimonial: {
      quote: "We recovered $2.3M in denied claims in our first quarter with MyCorp. Their RCM team is thorough, transparent, and genuinely invested in our financial outcomes.",
      name: "Dr. Anita Reddy",
      role: "Practice Administrator",
      company: "Reddy Medical Group",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Hospitals & Health Systems", "Physician Groups", "Outpatient Clinics", "Dental Practices", "Behavioral Health", "Urgent Care Centers"],
  },
  {
    slug: "global-consulting",
    icon: Globe2,
    color: "text-indigo-600",
    gradient: "from-indigo-600 to-blue-800",
    title: "Global IT Consulting",
    tagline: "Strategic IT roadmaps and digital transformation consulting.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400",
    description: "Technology strategy, digital transformation advisory, and IT roadmaps for enterprises operating across the US and India.",
    longDescription: "MyCorp Solutions helps enterprise leaders make confident technology decisions. Our consultants bring cross-industry experience in digital transformation, IT strategy, and technology governance — working as an extension of your leadership team to assess your current state, design a future-state roadmap, and guide execution. Whether you're modernizing legacy systems, expanding into new markets, or optimizing your IT operating model, we provide the strategic clarity to move fast and move right.",
    benefits: [
      { title: "IT Strategy & Roadmapping", desc: "We align your technology investments with business goals through clear, actionable multi-year roadmaps." },
      { title: "Digital Transformation", desc: "End-to-end transformation programs covering cloud migration, automation, and platform modernization." },
      { title: "Technology Assessment", desc: "Objective audits of your current IT landscape — infrastructure, applications, processes, and governance." },
      { title: "US–India Market Entry", desc: "Strategic advisory for companies expanding operations or delivery capabilities across both markets." },
    ],
    specialties: [
      "IT Strategy & Planning", "Digital Transformation", "Cloud Migration Advisory", "Technology Due Diligence",
      "IT Operating Model Design", "Vendor Selection", "US–India Expansion", "IT Governance & Compliance",
    ],
    process: [
      { step: "01", title: "Discovery & Assessment", desc: "We assess your current IT landscape, identify gaps, and benchmark against industry best practices." },
      { step: "02", title: "Strategy Design", desc: "We co-design a prioritized roadmap aligned to your business objectives, budget, and risk tolerance." },
      { step: "03", title: "Implementation Planning", desc: "Detailed execution plans, vendor selection guidance, and program governance frameworks are defined." },
      { step: "04", title: "Advisory & Review", desc: "Ongoing advisory support ensures your strategy stays relevant as business needs and market conditions evolve." },
    ],
    stats: [
      { value: "150+", label: "Strategy Engagements" },
      { value: "2", label: "Continents Served" },
      { value: "95%", label: "Client Retention Rate" },
    ],
    testimonial: {
      quote: "MyCorp's consulting team gave us the clarity we needed to restructure our entire IT operating model. Their roadmap paid for itself in the first six months.",
      name: "Rajesh Menon",
      role: "Chief Information Officer",
      company: "Apex Manufacturing Group",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Enterprise IT", "Manufacturing", "Financial Services", "Healthcare", "Logistics", "Government"],
  },
];
