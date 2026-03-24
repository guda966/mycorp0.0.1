import { Users, Code, Server, Target, Stethoscope, Globe2, type LucideIcon } from "lucide-react";

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
    slug: "it-staffing",
    icon: Users,
    color: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    title: "IT Staffing & Recruitment",
    tagline: "Top-tier talent, exactly when and how you need them.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800",
    description: "End-to-end talent acquisition — contract, C2H, direct placement, and offshore team delivery across the US and India.",
    longDescription: "MyCorp Solutions connects enterprises with pre-vetted IT talent for every engagement model. Whether you need a single specialist or an entire delivery team, we source, screen, and place candidates fast — cutting your time-to-hire by up to 40%. Our NJ and Hyderabad delivery hubs give you timezone coverage, cost efficiency, and access to deep talent pools across both markets. We also operate as a certified preferred vendor and prime vendor for enterprise and government staffing programs.",
    benefits: [
      { title: "Staff Augmentation", desc: "Embed skilled contractors into your team with same tools, same standups, and zero onboarding friction." },
      { title: "Contract & C2H Hiring", desc: "Start with contract flexibility and convert top performers to permanent staff at zero conversion fee." },
      { title: "Direct Placement", desc: "Permanent hire placements backed by a 90-day guarantee. If it doesn't work out, we fill it again free." },
      { title: "Preferred Vendor Programs", desc: "Empaneled as a certified prime and sub-vendor for enterprise and government staffing programs." },
    ],
    specialties: [
      "Staff Augmentation", "Contract Staffing", "Contract-to-Hire", "Direct Placement",
      "Offshore Delivery Teams", "Vendor Empanelment", "Payroll & Compliance", "US & India Delivery",
    ],
    process: [
      { step: "01", title: "Requirement Intake", desc: "Focused kickoff to capture your tech stack, culture, role requirements, and timeline." },
      { step: "02", title: "Sourcing & Screening", desc: "Recruiters surface pre-vetted, shortlisted candidates from our active pipeline within 48 hours." },
      { step: "03", title: "Interview & Selection", desc: "You interview a curated shortlist of 3–5 candidates and make the final hiring decision." },
      { step: "04", title: "Onboarding & Management", desc: "We handle paperwork, compliance, and ongoing account management throughout the engagement." },
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
    faqs: [
      { q: "How quickly can you provide candidates?", a: "We deliver a qualified shortlist within 48 hours for most roles. Highly specialized or niche positions may take 3–5 business days." },
      { q: "What engagement models do you support?", a: "Contract, contract-to-hire, and direct placement. For larger engagements, we offer dedicated offshore delivery teams and managed staffing programs." },
      { q: "What geographies do you cover?", a: "Primarily the United States and India. We operate from delivery hubs in New Jersey and Hyderabad with active pipelines in both markets." },
    ],
  },
  {
    slug: "software-development",
    icon: Code,
    color: "text-violet-600",
    gradient: "from-violet-600 to-purple-800",
    title: "Software Development",
    tagline: "Websites, platforms, and enterprise software — built to perform.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    description: "Custom software from corporate websites and web apps to enterprise platforms, APIs, and cloud-native solutions.",
    longDescription: "From a polished corporate website to a complex enterprise platform, MyCorp's engineering teams deliver production-quality software on time and on budget. We bring Agile discipline, cloud-native architecture, and full-stack expertise to every engagement — owning quality end to end so your team can stay focused on the business, not the build.",
    benefits: [
      { title: "Corporate Websites & Portals", desc: "Fast, SEO-optimized, mobile-first websites and client portals built to represent your brand at its best." },
      { title: "Custom Web Applications", desc: "Bespoke SaaS platforms, internal tools, and dashboards built with modern, scalable tech stacks." },
      { title: "Enterprise Software & APIs", desc: "Complex backend systems, microservices, and integration layers designed for enterprise-grade reliability." },
      { title: "Legacy Modernization", desc: "Migrate aging applications to cloud-native architecture without disrupting live operations." },
    ],
    specialties: [
      "React & Next.js", "Node.js & Python", "AWS / Azure / GCP", "REST & GraphQL APIs",
      "Mobile Apps (iOS & Android)", "AI & ML Integration", "Legacy Modernization", "DevOps & CI/CD",
    ],
    process: [
      { step: "01", title: "Discovery & Scoping", desc: "We map your goals, users, and constraints into a clear specification and project roadmap." },
      { step: "02", title: "Design & Architecture", desc: "UI/UX mockups and system architecture are finalized before a single line of code is written." },
      { step: "03", title: "Agile Development", desc: "Bi-weekly sprints with live demos keep you in control and feedback loops tight throughout delivery." },
      { step: "04", title: "Launch & Handoff", desc: "We manage deployment, monitoring setup, and full knowledge transfer so your team owns the product." },
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
    faqs: [
      { q: "What size projects do you take on?", a: "Everything from a focused corporate website to a multi-year enterprise platform. We're comfortable with both — we just need a clear scope and defined timelines." },
      { q: "Do you work fixed-price or time-and-material?", a: "Both. Fixed-price suits clearly scoped projects; time-and-material works better for evolving requirements or longer-running partnerships where scope flexes." },
      { q: "Will we own the code and intellectual property?", a: "Absolutely. All code and IP developed during the engagement is fully and exclusively owned by you, the client." },
    ],
  },
  {
    slug: "managed-services",
    icon: Server,
    color: "text-cyan-600",
    gradient: "from-cyan-600 to-teal-700",
    title: "Managed Services",
    tagline: "Always-on IT operations so your business never misses a beat.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "24/7 infrastructure monitoring, network management, proactive security, and full L1–L3 helpdesk on a flat monthly SLA.",
    longDescription: "Every minute of downtime costs revenue, productivity, and client trust. MyCorp's Managed Services delivers enterprise-grade NOC and SOC operations — proactive monitoring, rapid incident response, patch management, and tiered helpdesk — as a predictable, flat-rate monthly service. We guarantee 99.99% uptime SLAs and treat your infrastructure as if it were our own.",
    benefits: [
      { title: "99.99% Uptime Guaranteed", desc: "Contractual SLAs backed by redundant monitoring, rapid escalation paths, and 24/7 engineering coverage." },
      { title: "Proactive Security Operations", desc: "24/7 SOC analysts and AI-driven tools identify and neutralize threats before they escalate." },
      { title: "Predictable Monthly Cost", desc: "One flat fee covers everything — no surprise break-fix charges or emergency IT spend." },
      { title: "Tiered Helpdesk (L1–L3)", desc: "Password resets to complex infrastructure failures — all tiers handled by certified, responsive engineers." },
    ],
    specialties: [
      "24/7 NOC Operations", "Security Operations (SOC)", "L1 / L2 / L3 Helpdesk", "Cloud Infrastructure Mgmt",
      "Patch & Vulnerability Mgmt", "Backup & Disaster Recovery", "Network Management", "ITSM & ITIL",
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "We document your environment, identify risks, and establish performance and security baselines." },
      { step: "02", title: "Onboarding & Tooling", desc: "Monitoring agents, alerting rules, and runbooks are configured and tested across your environment." },
      { step: "03", title: "Active 24/7 Management", desc: "Our NOC team monitors every system continuously — resolving incidents and proactively applying patches." },
      { step: "04", title: "Monthly Reviews", desc: "Detailed performance and security reports with strategic recommendations, delivered to leadership monthly." },
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
    faqs: [
      { q: "What's included in a managed services engagement?", a: "Infrastructure monitoring, 24/7 NOC/SOC, L1–L3 helpdesk, patch management, backup management, and monthly executive reporting — all under one SLA." },
      { q: "What uptime SLA do you guarantee?", a: "We guarantee 99.99% uptime. P1 incidents get a 15-minute response; P2 within 1 hour. Contractual remedies apply if SLAs are missed." },
      { q: "Can you manage hybrid and multi-cloud environments?", a: "Yes. We manage AWS, Azure, GCP, on-premises, and hybrid setups — often all together for the same client." },
    ],
  },
  {
    slug: "it-hiring",
    icon: Target,
    color: "text-orange-600",
    gradient: "from-orange-500 to-red-600",
    title: "IT Hiring Solutions",
    tagline: "Your embedded recruitment team — RPO, executive search, and beyond.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&q=80&w=800",
    description: "Full RPO embedded inside your HR team — using your ATS, your brand, and your culture to build your dream engineering organization.",
    longDescription: "When your internal HR team can't keep pace with hiring volume or lacks the specialized expertise for niche IT roles, MyCorp's RPO service steps in. We embed experienced IT recruiters directly into your organization, work inside your ATS, represent your employer brand, and deliver consistent improvements in cost-per-hire, time-to-fill, and candidate quality.",
    benefits: [
      { title: "Lower Cost-Per-Hire", desc: "Replace agency markups with a transparent, scalable RPO model that consistently reduces your hiring cost." },
      { title: "Faster Pipeline Building", desc: "Dedicated sourcers proactively build talent pipelines before roles open — no more reactive scrambling." },
      { title: "Executive Search", desc: "Discreet, targeted search for VP, Director, and C-level technology leadership across the US and India." },
      { title: "Elastic Hiring Capacity", desc: "Scale recruiting bandwidth up or down in weeks — not months — as your business needs change." },
    ],
    specialties: [
      "End-to-End RPO", "Project RPO", "Selective RPO", "Executive Search",
      "ATS Management", "Employer Branding", "DEI Hiring Programs", "Onboarding & Retention",
    ],
    process: [
      { step: "01", title: "Partnership Design", desc: "We align on scope, KPIs, ATS tools, and employer brand guidelines before the first role opens." },
      { step: "02", title: "Team Embedding", desc: "Dedicated recruiters integrate into your Slack, ATS, and hiring workflows as natural team members." },
      { step: "03", title: "Pipeline & Sourcing", desc: "Active sourcing, talent marketing, and referral programs build a continuous, high-quality candidate flow." },
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
    faqs: [
      { q: "How is RPO different from using a staffing agency?", a: "With RPO, our team operates as an extension of your HR function — using your ATS, representing your brand, and working exclusively on your roles. An agency works independently and juggles many clients at once." },
      { q: "How quickly can we launch an RPO program?", a: "A full RPO engagement typically launches in 2–4 weeks. Project or selective RPO can be stood up in under a week with a focused scope." },
      { q: "Do you handle executive-level search?", a: "Yes. We conduct discreet, targeted searches for VP, Director, and C-level technology roles — often running in parallel alongside volume hiring programs." },
    ],
  },
  {
    slug: "medical-billing",
    icon: Stethoscope,
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-700",
    title: "Medical Billing",
    tagline: "Recover more revenue. Reduce denials. Stay fully compliant.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    description: "End-to-end healthcare Revenue Cycle Management — from charge capture and coding through claims submission, AR follow-up, and final collections.",
    longDescription: "Healthcare providers lose millions annually to claim denials, coding errors, and slow AR cycles. MyCorp's RCM team — AAPC-certified coders, billing specialists, and AR analysts — manages your entire revenue cycle so your clinical staff can focus on patients, not paperwork. We combine deep payer knowledge, rigorous pre-submission scrubbing, and transparent reporting to maximize every dollar you've earned.",
    benefits: [
      { title: "Reduced Claim Denials", desc: "Certified coders and pre-submission scrubbing cut first-pass denial rates by up to 30%." },
      { title: "Faster AR Recovery", desc: "Systematic, aggressive follow-up shortens average AR days and accelerates your collections pipeline." },
      { title: "Full HIPAA Compliance", desc: "Every process, system, and team member is trained and audited to HIPAA Privacy and Security Rules." },
      { title: "Real-Time Reporting", desc: "Live dashboards give full visibility into claim status, payer performance, and collection trends." },
    ],
    specialties: [
      "ICD-10 / CPT Coding", "Claims Submission & Scrubbing", "Denial Management & Appeals", "AR Recovery",
      "Provider Credentialing", "Eligibility Verification", "Patient Billing", "Payer Contract Analysis",
    ],
    process: [
      { step: "01", title: "Practice Assessment", desc: "We audit your billing workflows, payer mix, and denial patterns to identify all revenue leakage points." },
      { step: "02", title: "EHR Integration & Setup", desc: "Our team integrates with your EHR/PM system and configures payer-specific billing and coding rules." },
      { step: "03", title: "Billing & AR Follow-Up", desc: "Claims submitted daily; our AR team pursues every outstanding dollar with systematic follow-up." },
      { step: "04", title: "Monthly Reporting", desc: "Detailed financial reports and strategic reviews help you optimize payer contracts and collections." },
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
    faqs: [
      { q: "Which EHR and practice management systems do you integrate with?", a: "We integrate with all major platforms including Epic, Athena, eClinicalWorks, NextGen, Kareo, and Practice Fusion, among many others." },
      { q: "How are your fees structured?", a: "Typically a percentage of net collections — meaning our incentives are directly aligned with your revenue performance. No recovery, no fee." },
      { q: "Is patient data safe with your team?", a: "Yes. All staff are HIPAA-trained, our systems are HIPAA-compliant, and we conduct annual security audits. We sign a Business Associate Agreement (BAA) with every healthcare client." },
    ],
  },
  {
    slug: "global-consulting",
    icon: Globe2,
    color: "text-indigo-600",
    gradient: "from-indigo-600 to-blue-800",
    title: "Global IT Consulting",
    tagline: "Strategic IT roadmaps and digital transformation consulting.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400",
    secondaryImage: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    description: "Technology strategy, digital transformation advisory, and IT roadmaps for enterprise clients across the US and India.",
    longDescription: "MyCorp Solutions helps enterprise leaders make confident technology decisions. Our consultants bring cross-industry experience in digital transformation, IT strategy, and technology governance — working as an extension of your leadership team. Whether you're modernizing legacy systems, expanding into new markets, or redesigning your IT operating model, we provide the strategic clarity to move fast and move right.",
    benefits: [
      { title: "IT Strategy & Roadmapping", desc: "Align technology investments with business goals through clear, actionable multi-year roadmaps." },
      { title: "Digital Transformation", desc: "End-to-end transformation programs covering cloud migration, automation, and platform modernization." },
      { title: "Technology Assessment", desc: "Objective audits of your IT landscape — infrastructure, applications, processes, and governance." },
      { title: "US–India Market Advisory", desc: "Strategic guidance for companies expanding operations or delivery capabilities across both markets." },
    ],
    specialties: [
      "IT Strategy & Planning", "Digital Transformation", "Cloud Migration Advisory", "Technology Due Diligence",
      "IT Operating Model Design", "Vendor Selection", "US–India Expansion", "IT Governance & Compliance",
    ],
    process: [
      { step: "01", title: "Discovery & Assessment", desc: "We assess your current IT landscape, identify gaps, and benchmark against industry best practices." },
      { step: "02", title: "Strategy Design", desc: "We co-design a prioritized roadmap aligned to your business objectives, budget, and risk tolerance." },
      { step: "03", title: "Implementation Planning", desc: "Detailed execution plans, vendor selection guidance, and governance frameworks are defined and agreed." },
      { step: "04", title: "Advisory & Review", desc: "Ongoing advisory ensures your strategy stays relevant as business needs and market conditions evolve." },
    ],
    stats: [
      { value: "150+", label: "Strategy Engagements" },
      { value: "2", label: "Continents Served" },
      { value: "95%", label: "Client Retention" },
    ],
    testimonial: {
      quote: "MyCorp's consulting team gave us the clarity we needed to restructure our entire IT operating model. Their roadmap paid for itself within the first six months.",
      name: "Rajesh Menon",
      role: "Chief Information Officer",
      company: "Apex Manufacturing Group",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    },
    industries: ["Enterprise IT", "Manufacturing", "Financial Services", "Healthcare", "Logistics", "Government"],
    faqs: [
      { q: "What makes your consulting different from a Big 4 firm?", a: "We specialize exclusively in IT strategy for mid-market and enterprise organizations. Every engagement is led by practitioners who have built and operated the systems they advise on — not generalist consultants." },
      { q: "Do you assist with vendor and technology selection?", a: "Yes. Vendor evaluation and selection is a core component of most strategy engagements — from cloud platforms and ERP systems to staffing technology and security tools." },
      { q: "Can you advise on US–India expansion?", a: "This is one of our core specializations. We guide companies on building delivery centers in India, navigating regulatory environments, and designing cross-border operating models that actually work." },
    ],
  },
];
