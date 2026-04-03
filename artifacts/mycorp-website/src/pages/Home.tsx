import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  ArrowRight, Code, Users, Stethoscope,
  Target, Globe2, Clock, Zap, ShieldCheck,
  Quote, CheckCircle2, Star, TrendingUp, Award, MapPin
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* ─── Typing Animation ─────────────────────────────── */
const TYPED_PHRASES = [
  "IT Staffing Solutions",
  "Offshore Dev Teams",
  "Healthcare RCM Experts",
  "Enterprise Software",
  "Your Growth Partner",
];

function TypedText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const target = TYPED_PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % TYPED_PHRASES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx]);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <span style={{
      background: "linear-gradient(to right, #22d3ee, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "#22d3ee",
      display: "inline-block",
      paddingBottom: "4px",
    }}>
      {displayed}
      <span className={`inline-block w-[3px] h-[0.85em] bg-cyan-400 ml-1 align-middle transition-opacity duration-100 ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
}

/* ─── Image Slider ─────────────────────────────────── */
const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600",
    label: "Staffing & Outsourcing",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600",
    label: "IT Projects & Software",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
    label: "Healthcare Projects & RCM",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1600",
    label: "IT Hiring Support",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={HERO_SLIDES[current].img}
            alt={HERO_SLIDES[current].label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-[#0B1120]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-400 rounded-full h-1.5 ${i === current ? "w-8 bg-cyan-400" : "w-2 bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>

      {/* Slide label badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-8 right-8 z-20 hidden md:block"
        >
          <span className="px-3 py-1.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-white/70 text-xs font-medium">
            {HERO_SLIDES[current].label}
          </span>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/* ─── Stat Counter ─────────────────────────────────── */
function StatCounter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps = 60;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const eased = 1 - Math.pow(1 - step / steps, 3);
          setCount(Math.round(end * eased));
          if (step >= steps) { setCount(end); clearInterval(timer); }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-slate-300 text-sm font-medium">{label}</div>
    </div>
  );
}

/* ─── Google Star Icon ─────────────────────────────── */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.58 },
};

/* ─── Scrolling client marquee data ───────────────── */
const clients = [
  { name: "Wipro", domain: "wipro.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "TCS", domain: "tcs.com" },
  { name: "HCL Technologies", domain: "hcltech.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Cognizant", domain: "cognizant.com" },
  { name: "Mphasis", domain: "mphasis.com" },
  { name: "LTIMindtree", domain: "ltimindtree.com" },
  { name: "Apollo Hospitals", domain: "apollohospitals.com" },
  { name: "Max Healthcare", domain: "maxhealthcare.in" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "Hexaware", domain: "hexaware.com" },
];
const clientsLoop = [...clients, ...clients];

const services = [
  {
    icon: Users, title: "Staffing & Outsourcing",
    desc: "Contract, direct hire, and offshore delivery teams — placed in 48 hours.", slug: "staffing-outsourcing",
    color: "from-blue-600 to-blue-800", tag: "Staff Augmentation",
  },
  {
    icon: Target, title: "IT Hiring Support",
    desc: "Embedded RPO and executive search inside your ATS and brand.", slug: "it-hiring",
    color: "from-orange-500 to-red-600", tag: "Recruitment Process",
  },
  {
    icon: Code, title: "IT Projects",
    desc: "Websites, web apps, and enterprise platforms delivered on time.", slug: "it-projects",
    color: "from-violet-600 to-purple-700", tag: "Software Delivery",
  },
  {
    icon: Stethoscope, title: "Healthcare Projects",
    desc: "Healthcare IT, EHR integrations, and Medical Billing & Coding — full RCM under one roof.", slug: "healthcare-projects",
    color: "from-emerald-500 to-teal-700", tag: "Healthcare & RCM",
  },
];

const whyUs = [
  { icon: Zap, title: "48-Hour Delivery", desc: "Shortlist in hand within 2 business days for most roles and projects." },
  { icon: Globe2, title: "Global-Ready Talent", desc: "India-based team with deep experience serving US enterprise clients." },
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support with dedicated account managers." },
  { icon: ShieldCheck, title: "Certified & Compliant", desc: "ISO 27001 · HIPAA · SOC 2 · AAPC — compliance built in, not bolted on." },
  { icon: TrendingUp, title: "Proven Growth", desc: "Clients grow 3x faster on average with our partnership programs." },
  { icon: Award, title: "90-Day Guarantee", desc: "Every direct placement backed by our industry-leading replacement guarantee." },
];

const testimonials = [
  {
    text: "MyCorp transformed our hiring process. We filled 30 critical IT roles in under 45 days — quality candidates, zero hassle.",
    name: "Rahul Nair", role: "VP Engineering", company: "Wipro", domain: "wipro.com", rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    text: "Their healthcare billing team is exceptional. HIPAA-compliant, highly transparent, and genuinely invested in our revenue outcomes.",
    name: "Dr. Kavitha Rao", role: "CFO", company: "Apollo Hospitals", domain: "apollohospitals.com", rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    text: "They delivered our enterprise portal in 5 months — on time, on budget, and the codebase handoff was completely seamless.",
    name: "Aditya Sharma", role: "CTO", company: "Infosys", domain: "infosys.com", rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    text: "Best IT staffing partner we've worked with. Pre-vetted candidates, 48-hour turnaround, and zero compromise on quality.",
    name: "Vikram Mehta", role: "Head of Technology", company: "TCS", domain: "tcs.com", rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    text: "Our offshore team in Hyderabad became an extension of our own squad. Seamless collaboration, outstanding results, zero friction.",
    name: "Sneha Iyer", role: "Product Director", company: "HCL Technologies", domain: "hcltech.com", rating: 5,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    text: "MyCorp's RCM team increased our clean claim rate by 38% in just 3 months. Truly a game-changer for our revenue cycle.",
    name: "Priya Reddy", role: "Revenue Cycle Head", company: "Max Healthcare", domain: "maxhealthcare.in", rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    text: "Exceptional recruitment support. They understood our tech stack deeply and delivered candidates who hit the ground running.",
    name: "Suresh Kumar", role: "Engineering Manager", company: "Tech Mahindra", domain: "techmahindra.com", rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=80&h=80",
  },
  {
    text: "We scaled our dev team from 5 to 40 in under 6 months with MyCorp's staffing support. Incredible speed and quality.",
    name: "Ananya Singh", role: "VP Operations", company: "Cognizant", domain: "cognizant.com", rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=80&h=80",
  },
];
const testimonialsLoop = [...testimonials, ...testimonials];

function TestimonialCards() {
  return (
    <div className="relative w-full overflow-hidden pause-on-hover">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-5 animate-marquee w-max py-4">
        {testimonialsLoop.map((t, i) => (
          <div
            key={i}
            className="shrink-0 w-80 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            {/* Quote */}
            <p className="text-white/80 text-sm leading-relaxed mb-5">"{t.text}"</p>
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/15" />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-sm truncate">{t.name}</p>
                <p className="text-slate-400 text-xs truncate">{t.role}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 bg-white/10 rounded-lg px-2.5 py-1.5">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`}
                  alt={t.company}
                  className="w-4 h-4 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="text-white/70 text-xs font-medium">{t.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const googleReviews = [
  { name: "Kiran M.", avatar: "K", color: "#4285F4", rating: 5, date: "2 weeks ago", text: "MyCorp placed 3 senior engineers in 2 weeks. The quality was exceptional — better than any agency we've used. Highly recommend!" },
  { name: "Deepak K.", avatar: "D", color: "#34A853", rating: 5, date: "1 month ago", text: "Their IT team completely transformed our infrastructure. Support is always responsive and we've had zero downtime since partnering with them." },
  { name: "Priya S.", avatar: "P", color: "#EA4335", rating: 5, date: "3 weeks ago", text: "We switched healthcare billing to MyCorp and saw a 35% increase in clean claim rates. HIPAA-compliant and highly responsive." },
  { name: "Suresh T.", avatar: "S", color: "#FBBC04", rating: 5, date: "2 months ago", text: "Outstanding software delivery partner. Enterprise portal on time and within budget. Their Hyderabad team is their superpower." },
  { name: "Anjali W.", avatar: "A", color: "#9C27B0", rating: 5, date: "1 month ago", text: "RPO engagement reduced our time-to-hire by 60% and dramatically improved quality of tech hires. True professionals." },
  { name: "Ravi N.", avatar: "R", color: "#00BCD4", rating: 5, date: "3 months ago", text: "Top-tier IT services firm. They understood our business deeply and delivered a custom solution that saved us significant costs." },
];

/* ─── MAIN COMPONENT ───────────────────────────────── */
export default function Home() {
  return (
    <div className="w-full">

      {/* ── 1. HERO — image slider + typing text ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1120]">
        <HeroSlider />

        {/* Dot grid */}
        <div className="absolute inset-0 z-[1] opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="container relative z-10 mx-auto px-4 md:px-6 pb-16 pt-28">
          <div className="max-w-3xl">

            {/* Live badge */}
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Your Trusted Partner in IT & Healthcare
              </span>
            </motion.div>

            {/* Headline with typing */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold leading-tight md:leading-[1.08] mb-6 text-white">
                India's Leading<br />
                <TypedText />
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-base md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed"
            >
              We deliver innovative IT staffing, software solutions, and healthcare revenue cycle management to help global enterprises scale efficiently.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="mailto:mycorpsolutionsteam@gmail.com?subject=Consultation%20Request" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                  Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-base bg-white/5 text-white border-white/20 hover:bg-white/15 hover:text-white">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. STATS ── */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">MyCorp by the Numbers</h2>
            <p className="text-white/70 text-sm">Five years of delivering results across IT staffing, software, and healthcare.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCounter end={50} suffix="+" label="Happy Clients" />
            <StatCounter end={95} suffix="%" label="Retention Rate" />
            <StatCounter end={5} suffix="+" label="Years of Excellence" />
            <StatCounter end={500} suffix="+" label="Placements Made" />
          </div>
        </div>
      </section>

      {/* ── 3. TRUSTED BY — scrolling marquee ── */}
      <section className="py-12 bg-white dark:bg-[#0B1120] border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-7">
          <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Trusted by Leading Organizations
          </p>
        </div>
        <div className="relative w-full overflow-hidden pause-on-hover">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#0B1120] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#0B1120] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-marquee w-max">
            {clientsLoop.map((client, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0 bg-white dark:bg-slate-800 border border-border rounded-xl px-5 py-3 shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=32`}
                  alt={client.name}
                  className="w-5 h-5 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section className="py-24 bg-slate-50 relative border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Comprehensive Solutions for Modern Business</h2>
            <p className="text-muted-foreground">End-to-end services tailored to bridge the gap between talent and technology.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((svc, i) => {
              const SIcon = svc.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: i * 0.1 }}
                >
                  <Link href={`/services/${svc.slug}`}>
                    <Card className="h-full border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group bg-white cursor-pointer">
                      <CardContent className="p-7">
                        <div className="flex items-start justify-between mb-5">
                          <div className={`w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                            <SIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold tracking-wide uppercase">{svc.tag}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{svc.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{svc.desc}</p>
                        <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:underline">
                          Explore service <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeUp} className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 h-12">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 5. WHY MYCORP ── */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">Why MyCorp</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5">
                Why Industry Leaders Choose MyCorp
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                We don't just provide services — we build partnerships. Our Hyderabad team combines deep IT expertise with rigorous healthcare compliance to solve your most critical business challenges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item, i) => {
                  const WIcon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="mt-0.5 bg-primary/10 p-2 rounded-lg text-primary shrink-0">
                        <WIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div {...fadeUp} className="mt-9">
                <Link href="/about">
                  <Button variant="outline" className="rounded-full px-7">
                    About MyCorp <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-violet-400/15 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="MyCorp Team in Hyderabad"
                className="rounded-3xl shadow-2xl object-cover w-full h-[480px]"
              />
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-border p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">500+ Placements</p>
                    <p className="text-xs text-muted-foreground">Across US & India markets</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. HOW WE WORK ── */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Simple. Fast. Results-Driven.</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">From first call to delivery in four clear steps.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
            {[
              { step: "01", title: "Requirement Intake", desc: "A focused 30-min call where we capture your exact needs, timeline, and success criteria." },
              { step: "02", title: "Curated Shortlist", desc: "We deliver a hand-picked shortlist of the best-fit candidates or project proposals within 48 hours." },
              { step: "03", title: "You Choose", desc: "Interview, evaluate, and select. We facilitate the process — you make the final decision." },
              { step: "04", title: "Onboarding & Support", desc: "We stay engaged post-placement with account management, SLA monitoring, and proactive support." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.11 }}
                className="relative bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 z-10 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-sm shadow-md mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS (dark) ── */}
      <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">What Our Clients Say</h2>
            <p className="text-slate-300">Don't just take our word for it.</p>
          </motion.div>

          <TestimonialCards />
        </div>
      </section>

      {/* ── 8. GOOGLE REVIEWS ── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GoogleIcon className="w-7 h-7" />
              <span className="text-xl font-bold text-slate-800">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xl font-bold text-slate-800 ml-1">4.9</span>
            </div>
            <p className="text-slate-500 text-sm">Based on 50+ verified Google Reviews</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {googleReviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Card className="h-full border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ backgroundColor: review.color }}>
                          {review.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{review.name}</p>
                          <p className="text-slate-400 text-xs">{review.date}</p>
                        </div>
                      </div>
                      <GoogleIcon className="w-5 h-5" />
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <svg key={j} className="w-3.5 h-3.5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-4">{review.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. HYDERABAD PRESENCE ── */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">Our Base</span>
            <h2 className="text-3xl font-display font-bold mb-3">Headquartered in Hyderabad 🇮🇳</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">HITEC City — India's technology capital — powering global IT services and healthcare solutions.</p>
          </motion.div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeUp}>
              <div className="bg-[#0B1120] rounded-2xl p-8 text-white h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Headquarters</p>
                    <p className="font-bold">Hyderabad, Telangana</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  MyCorp Solutions Pvt. Ltd.<br />
                  Mallareddy Heights, Srinivasa Nagar W Colony<br />
                  Madhura Nagar, Hyderabad, Telangana — 500 038
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["300+ Team Members", "4 Service Lines", "US Client Focus", "24/7 Availability"].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="HITEC City Hyderabad"
                className="rounded-2xl shadow-xl object-cover w-full h-64 md:h-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section className="py-24 bg-gradient-to-br from-primary via-blue-700 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold tracking-widest uppercase mb-7">
              Ready to Begin?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5 max-w-2xl mx-auto leading-tight">
              Your Next Breakthrough Hire or Project Starts Here.
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join 50+ organizations that trust MyCorp Solutions for IT staffing, software delivery, and healthcare RCM excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:mycorpsolutionsteam@gmail.com?subject=Consultation%20Request">
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-semibold shadow-xl hover:-translate-y-0.5 transition-transform">
                  Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base text-white border-white/30 bg-white/10 hover:bg-white/20 hover:text-white">
                  Explore Services
                </Button>
              </Link>
            </div>
            <p className="text-blue-200/60 text-xs mt-8">No commitment required · Response within 24 hours · Free initial consultation</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
