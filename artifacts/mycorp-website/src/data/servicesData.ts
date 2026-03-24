import { Users, Briefcase, Target, Server, Code2, Stethoscope, type LucideIcon } from "lucide-react";

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
    slug: "staffing-outsourcing",
    icon: Users,
    color: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    title: "IT Staffing & Outsourcing",
    tagline: "Scale your team fast — without the overhead.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400",
    description: "End-to-end talent supply — contract, contract-to-hire, direct hire, and full team outsourcing across the US and India.",
    longDescription: "MyCorp Solutions provides flexible IT staffing and outsourcing models that let you grow your workforce on demand. Whether you need a single specialist or an entire delivery team, we handle sourcing, vetting, and ongoing workforce management — so you stay focused on your business. Our US and India delivery hubs ensure timezone coverage, cost efficiency, and access to a diverse talent pool.",
    benefits: [
      { title: "Staff Augmentation", desc: "Plug skilled contractors directly into your team — same tools, same standups, zero ramp-up friction." },
      { title: "Contract & C2H Hiring", desc: "Start with contract flexibility and convert top performers to permanent staff at zero conversion fee." },
      { title: "Direct Placement", desc: "Permanent hire placements backed by our 90-day guarantee — if it doesn't work out, we fill again at no cost." },
      { title: "Dedicated Offshore Teams", desc: "Full delivery teams based in Hyderabad, managed by MyCorp, aligned to your timezone and workflow." },
    ],
    specialties: ["Staff Augmentation", "Contract Staffing", "Contract-to-Hire", "Direct Placement", "Offshore Delivery", "Onsite/Offshore Hybrid", "Workforce Management", "Payroll & Compliance"],
    process: [
      { step: "01", title: "Requirement Intake", desc: "We do a focused kickoff to understand your role requirements, tech stack, team culture, and timelines." },
      { step: "02", title: "Talent Sourcing", desc: "Our recruiters tap an active pipeline of pre-vetted candidates and shortlist within 48 hours." },
      { step: "03", title: "Interview & Selection", desc: "You interview a curated shortlist — typically 3–5 candidates per role — and make the final call." },
      { step: "04", title: "Onboarding & Support", desc: "We handle paperwork, onboarding, and ongoing account management for the life of the engagement." },
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
    slug: "vendor-management",
    icon: Briefcase,
    color: "text-indigo-600",
    gradient: "from-indigo-600 to-blue-800",
    title: "Vendor Management",
    tagline: "Your preferred staffing vendor — empaneled, compliant, and ready.",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400",
    description: "MyCorp operates as a certified prime vendor and sub-vendor for enterprise and government clients — managing staffing supply chains end to end.",
    longDescription: "MyCorp Solutions is empaneled as a preferred vendor with leading enterprises and government bodies across the US. As a prime vendor or sub-vendor, we manage end-to-end staffing supply chains — coordinating sub-vendors, ensuring compliance, maintaining quality control, and delivering consolidated reporting through VMS platforms. We make vendor management simple, scalable, and transparent.",
    benefits: [
      { title: "Prime & Sub-Vendor Capability", desc: "We operate as a prime vendor coordinating sub-tier suppliers or as a qualified sub-vendor under your existing prime." },
      { title: "VMS / MSP Integration", desc: "Fully compatible with all major VMS platforms — Fieldglass, IQNavigator, Beeline, and more." },
      { title: "Compliance & Risk Management", desc: "Background checks, E-Verify, worker classification, and insurance compliance handled end to end." },
      { title: "Consolidated Billing & Reporting", desc: "Single invoice, unified SLAs, and real-time dashboards across all vendors and engagements." },
    ],
    specialties: ["Prime Vendor Programs", "Sub-Vendor Management", "VMS Integration", "MSP Programs", "Vendor Empanelment", "Staffing Compliance", "Consolidated Billing", "Government Contracting"],
    process: [
      { step: "01", title: "Vendor Assessment", desc: "We review your current vendor ecosystem, VMS setup, compliance requirements, and spend data." },
      { step: "02", title: "Program Design", desc: "We define the vendor tier structure, SLAs, billing cadence, and reporting framework." },
      { step: "03", title: "Empanelment & Integration", desc: "MyCorp is onboarded as a preferred vendor in your VMS and supplier agreements are executed." },
      { step: "04", title: "Ongoing Governance", desc: "Monthly QBRs, consolidated reports, and dedicated account management keep the program optimized." },
    ],
    stats: [
      { value: "50+", label: "Enterprise Programs Managed" },
      { value: "100%", label: "Compliance Rate" },
      { value: "25%", label: "Avg. Vendor Cost Savings" },
    ],
    testimonial: {
      quote: "MyCorp stepped in as our prime vendor and cleaned up a fragmented supplier base in 60 days. Compliance improved overnight and billing became effortless.",
      name: "James Whitfield",
      role: "Head of Procurement",
      company: "NovaCorp Enterprises",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Enterprise IT", "Government & Public Sector", "Banking & Finance", "Telecom", "Healthcare", "Defense"],
  },
  {
    slug: "it-hiring",
    icon: Target,
    color: "text-orange-600",
    gradient: "from-orange-500 to-red-600",
    title: "IT Hiring & RPO",
    tagline: "Your fully embedded recruitment team, on demand.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400",
    description: "Recruitment Process Outsourcing that embeds inside your HR team — using your tools, your brand, and your culture.",
    longDescription: "When your internal HR team can't keep pace with hiring demand — or needs niche technical expertise to fill specialized roles — MyCorp's RPO service steps in. We embed experienced IT recruiters directly into your organization, work inside your ATS, represent your employer brand, and deliver measurable improvements in cost-per-hire, time-to-fill, and candidate quality.",
    benefits: [
      { title: "Lower Cost-Per-Hire", desc: "Replace agency markups with a transparent, scalable RPO model that consistently cuts cost-per-hire." },
      { title: "Faster Pipeline Building", desc: "Dedicated sourcers proactively build talent pipelines rather than scrambling when roles open." },
      { title: "Employer Brand Continuity", desc: "Our recruiters represent your brand — delivering a consistent, high-quality candidate experience." },
      { title: "Elastic Capacity", desc: "Ramp hiring volume up or down in weeks — not months — as your business needs evolve." },
    ],
    specialties: ["End-to-End RPO", "Project RPO", "Selective RPO", "Executive Search", "ATS Management", "Employer Branding", "DEI Hiring", "Onboarding Programs"],
    process: [
      { step: "01", title: "Partnership Design", desc: "We align on scope, KPIs, ATS tools, and brand voice before the first requisition is opened." },
      { step: "02", title: "Team Embedding", desc: "Dedicated recruiters join your Slack, ATS, and hiring workflows as seamless team members." },
      { step: "03", title: "Pipeline & Sourcing", desc: "Active sourcing, referral programs, and talent marketing create a continuous candidate flow." },
      { step: "04", title: "Reporting & Optimization", desc: "Weekly dashboards and quarterly reviews keep the program improving and accountable to your KPIs." },
    ],
    stats: [
      { value: "35%", label: "Lower Cost-Per-Hire" },
      { value: "1,200+", label: "Roles Filled via RPO" },
      { value: "3x", label: "Faster Offer Acceptance" },
    ],
    testimonial: {
      quote: "MyCorp's RPO team embedded so naturally that candidates thought they were talking to our internal HR. They filled 40 roles in a quarter — something we couldn't have done alone.",
      name: "Priya Nair",
      role: "Chief People Officer",
      company: "TechScale Group",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Tech Startups", "Enterprise IT", "Consulting", "Healthcare", "Financial Services", "Media"],
  },
  {
    slug: "it-support",
    icon: Server,
    color: "text-cyan-600",
    gradient: "from-cyan-600 to-teal-700",
    title: "IT Support & Managed Services",
    tagline: "Always-on IT operations so your team never misses a beat.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400",
    description: "Round-the-clock infrastructure monitoring, L1–L3 helpdesk, proactive security management, and full NOC/SOC operations.",
    longDescription: "Every minute of downtime costs you revenue, productivity, and trust. MyCorp's Managed Services practice gives you an enterprise-grade NOC and SOC — proactive monitoring, rapid incident response, patch management, and L1-L3 helpdesk — delivered as a predictable flat-rate service. We guarantee contractual 99.99% uptime and treat your infrastructure as if it were our own.",
    benefits: [
      { title: "99.99% Uptime Guaranteed", desc: "Contractual SLAs backed by redundant monitoring, rapid escalation, and 24/7 engineering support." },
      { title: "Proactive Security Operations", desc: "Around-the-clock SOC analysts and AI-powered tools detect and neutralize threats before they escalate." },
      { title: "Predictable Monthly Cost", desc: "A fixed monthly fee replaces unpredictable emergency IT spend — no surprises, ever." },
      { title: "Tiered Helpdesk (L1–L3)", desc: "From password resets to complex infrastructure incidents — all tiers handled by our certified engineers." },
    ],
    specialties: ["24/7 NOC Operations", "Security Operations (SOC)", "L1 / L2 / L3 Helpdesk", "Cloud Infrastructure Mgmt", "Patch & Vulnerability Mgmt", "Backup & Disaster Recovery", "Network Management", "ITSM & ITIL Processes"],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "We document your current environment, identify risks, and establish performance and security baselines." },
      { step: "02", title: "Onboarding & Tooling", desc: "Monitoring agents, alerting rules, and runbooks are configured and tested in your environment." },
      { step: "03", title: "Active 24/7 Management", desc: "Our NOC team watches every system around the clock — handling incidents and proactively applying fixes." },
      { step: "04", title: "Monthly Reviews", desc: "Detailed performance reports and strategic recommendations are delivered to your leadership each month." },
    ],
    stats: [
      { value: "99.99%", label: "Guaranteed Uptime SLA" },
      { value: "<15 min", label: "P1 Incident Response" },
      { value: "350+", label: "Environments Managed" },
    ],
    testimonial: {
      quote: "Switching to MyCorp's managed services cut our infrastructure costs by 40% and pushed uptime to 99.99%. We haven't had a major outage since day one.",
      name: "Michael Torres",
      role: "IT Director",
      company: "Global Logistics Co.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Banking & Finance", "Retail", "Manufacturing", "Telecom", "Media & Entertainment", "Government"],
  },
  {
    slug: "it-solutions",
    icon: Code2,
    color: "text-violet-600",
    gradient: "from-violet-600 to-purple-800",
    title: "IT Solutions & Software Dev",
    tagline: "Websites, platforms, and custom software — built to perform.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400",
    description: "End-to-end software development — from corporate websites and web apps to enterprise platforms and legacy modernization.",
    longDescription: "From a sharp corporate website to a complex enterprise platform, MyCorp's engineering teams deliver production-quality software on time and on budget. We bring Agile discipline, cloud-native architecture, and full-stack expertise to every engagement — owning quality end to end so your team can focus on vision, not execution.",
    benefits: [
      { title: "Corporate Websites & Portals", desc: "Fast, SEO-optimized, mobile-first websites and client portals built for your brand and business goals." },
      { title: "Custom Web Applications", desc: "Bespoke SaaS platforms, workflow tools, and dashboards built with modern, scalable frameworks." },
      { title: "Enterprise Software & APIs", desc: "Complex backend systems, microservices, integrations, and API layers designed for enterprise scale." },
      { title: "Legacy Modernization", desc: "We migrate aging systems to modern cloud-native architectures — without disrupting live operations." },
    ],
    specialties: ["React & Next.js", "Node.js & Python", "AWS / Azure / GCP", "REST & GraphQL APIs", "Mobile Apps (iOS & Android)", "AI & ML Integration", "Legacy Modernization", "DevOps & CI/CD"],
    process: [
      { step: "01", title: "Discovery & Scoping", desc: "We map your goals, users, and constraints into a clear technical specification and project roadmap." },
      { step: "02", title: "Design & Architecture", desc: "UI/UX mockups and system architecture are finalized before any development begins." },
      { step: "03", title: "Agile Development", desc: "Bi-weekly sprints with live demos keep you in control and feedback loops tight throughout delivery." },
      { step: "04", title: "Launch & Handoff", desc: "We handle deployment, monitoring setup, and full knowledge transfer — so your team owns the product." },
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
    slug: "medical-billing",
    icon: Stethoscope,
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-700",
    title: "Medical Billing & Healthcare RCM",
    tagline: "Recover more revenue. Reduce denials. Stay fully compliant.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400",
    description: "Complete revenue cycle management for hospitals, clinics, physician groups, and specialty practices — from charge capture to final collections.",
    longDescription: "Healthcare providers lose millions each year to claim denials, coding errors, and slow AR cycles. MyCorp's RCM team — AAPC-certified coders, billing specialists, and AR analysts — manages your entire revenue cycle so your clinical staff can focus on patients, not paperwork. We combine deep payer knowledge with transparent reporting to maximize every dollar you've earned.",
    benefits: [
      { title: "Reduced Claim Denials", desc: "Certified coders and pre-submission scrubbing cut first-pass denial rates by up to 30%." },
      { title: "Faster AR Recovery", desc: "Aggressive, systematic follow-up shortens your average AR days and accelerates collections." },
      { title: "Full HIPAA Compliance", desc: "Every process, system, and team member is trained and audited to HIPAA Privacy and Security Rules." },
      { title: "Real-Time Reporting", desc: "Live dashboards give you complete visibility into claims status, payer performance, and collections." },
    ],
    specialties: ["ICD-10 / CPT Coding", "Claims Submission & Scrubbing", "Denial Management & Appeals", "Accounts Receivable Recovery", "Provider Credentialing", "Eligibility & Benefits Verification", "Patient Billing & Statements", "Payer Contract Analysis"],
    process: [
      { step: "01", title: "Practice Assessment", desc: "We audit your billing workflows, payer mix, and denial patterns to identify all revenue leakage points." },
      { step: "02", title: "Setup & EHR Integration", desc: "Our team integrates with your EHR/PM system and configures payer-specific billing and coding rules." },
      { step: "03", title: "Billing & AR Follow-Up", desc: "Claims are submitted daily; our AR team pursues every dollar with systematic, documented follow-up." },
      { step: "04", title: "Monthly Reporting & Review", desc: "Detailed financial reports and strategic reviews optimize your payer contracts and collection rates." },
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
];
