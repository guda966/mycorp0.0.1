import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Target, Eye, Heart, Award, CheckCircle2, Users, Globe2,
  Lightbulb, ShieldCheck, Zap, Handshake, ArrowRight,
  Calendar, TrendingUp, Star, Linkedin, Play,
  TreePine, GraduationCap, HandHeart, Leaf, Quote
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const milestones = [
  { year: "2020", title: "Founded", desc: "G.V Krishna Reddy founded MyCorp Solutions in Hyderabad, HITEC City — with a bold vision to build a world-class IT services company from India.", icon: Star },
  { year: "2021", title: "First Enterprise Clients", desc: "Onboarded our first 50 enterprise clients across US and India markets. IT staffing and recruitment practice gained strong momentum.", icon: Users },
  { year: "2022", title: "Healthcare Division", desc: "Launched our Healthcare Projects division — Medical Billing, RCM, and healthcare IT delivery — serving clinics and health systems.", icon: Heart },
  { year: "2023", title: "IT Projects Practice", desc: "Expanded into full-service IT project delivery — websites, custom applications, enterprise platforms, and digital transformation.", icon: Lightbulb },
  { year: "2024", title: "Scale & Growth", desc: "Crossed 200+ active clients, 5,000+ successful placements, and scaled our Hyderabad delivery centre to 300+ professionals.", icon: TrendingUp },
  { year: "2025", title: "AI & Innovation", desc: "Launched AI-powered recruitment tools and cloud transformation consulting, positioning MyCorp at the forefront of intelligent IT services.", icon: Zap },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", color: "from-blue-500 to-blue-600", desc: "We operate with full transparency and ethical standards in every client engagement, contract, and delivery." },
  { icon: Lightbulb, title: "Innovation", color: "from-amber-500 to-orange-500", desc: "We continuously evolve our processes, adopt emerging technologies, and challenge conventional thinking." },
  { icon: Award, title: "Excellence", color: "from-purple-500 to-purple-600", desc: "We hold ourselves to the highest standards — from code quality to billing accuracy to talent matching." },
  { icon: Handshake, title: "Partnership", color: "from-green-500 to-emerald-600", desc: "We embed ourselves as true partners in our clients' growth, not just vendors fulfilling a contract." },
  { icon: Zap, title: "Agility", color: "from-cyan-500 to-teal-500", desc: "We adapt swiftly to market shifts, client needs, and technological changes without missing a beat." },
  { icon: Globe2, title: "Global Mindset", color: "from-rose-500 to-pink-500", desc: "Our dual-shore model brings global scale with local accountability across every timezone." },
];

const leaders = [
  { name: "G.V Krishna Reddy", role: "Founder & CEO", bio: "Visionary entrepreneur with deep expertise in IT services, staffing, and healthcare technology. Founded MyCorp Solutions in 2020 with a mission to build a globally trusted IT company from Hyderabad.", img: "/founder-gvkrishna-reddy.jpg", linkedin: "#", expertise: ["Leadership", "IT Strategy", "Business Growth"] },
  { name: "Rajesh Kumar", role: "Chief Operating Officer", bio: "Seasoned operations leader overseeing delivery excellence across staffing, IT projects, and healthcare divisions. Based in Hyderabad, HITEC City.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400", linkedin: "#", expertise: ["Delivery Excellence", "Offshore Operations", "RCM"] },
  { name: "Kavitha Iyer", role: "Head of Healthcare Practice", bio: "AAPC-certified healthcare IT and RCM specialist. Leads our medical billing, coding, and healthcare project delivery teams with 12+ years of industry experience.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400", linkedin: "#", expertise: ["Healthcare IT", "RCM", "HIPAA Compliance"] },
];

const employeeTestimonials = [
  { quote: "Working at MyCorp has given me the opportunity to lead cloud migration projects for enterprise clients across the US. The culture of learning and growth here is truly unmatched.", name: "Priya Sharma", role: "Cloud Architect", tenure: "3 years", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" },
  { quote: "I joined as a junior IT recruiter and now manage key US accounts. MyCorp's leadership — especially Krishna sir — genuinely invests in people's careers.", name: "Aravind Reddy", role: "Senior Recruitment Lead", tenure: "4 years", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
  { quote: "The healthcare team here is phenomenal. We've helped dozens of clinics optimise their revenue cycles and I'm proud of every single result we've delivered.", name: "Sowmya Lakshmi", role: "Senior RCM Specialist", tenure: "2 years", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200&h=200" },
];

const culturePhotos = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400", alt: "Team collaboration", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=400", alt: "Modern office", span: "" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=400", alt: "Team meeting", span: "" },
  { src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600&h=400", alt: "Office event", span: "col-span-2" },
];

const csrItems = [
  { icon: GraduationCap, color: "from-blue-500 to-blue-600", title: "Tech Scholarships", value: "50+", desc: "Annual scholarships for students from underrepresented communities pursuing STEM careers in Hyderabad and beyond." },
  { icon: TreePine, color: "from-green-500 to-emerald-600", title: "Carbon Neutral", value: "2026", desc: "Committed to achieving net-zero carbon emissions across all our operations by 2026." },
  { icon: HandHeart, color: "from-rose-500 to-pink-600", title: "Community Hours", value: "1,000+", desc: "Annual volunteer hours contributed by our team to local communities in Hyderabad, Telangana." },
  { icon: Leaf, color: "from-teal-500 to-cyan-600", title: "Green IT", value: "100%", desc: "All systems and workflows designed with energy efficiency and responsible digital practices at their core." },
];

function AnimatedStat({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <div ref={ref} className="text-4xl font-bold text-white font-display">{count.toLocaleString()}{suffix}</div>;
}

function VideoEmbed() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-[#0B1120] group cursor-pointer" onClick={() => setPlaying(true)}>
      {playing ? (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="MyCorp Company Overview"
          allow="autoplay; fullscreen"
        />
      ) : (
        <>
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1200&h=675"
            alt="Company Overview Video"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary fill-primary ml-1" />
            </div>
            <p className="text-white font-semibold text-lg">Watch Our Company Story</p>
            <p className="text-white/70 text-sm">3 min overview</p>
          </div>
        </>
      )}
    </div>
  );
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeTimeline, setActiveTimeline] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % milestones.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-[#0B1120] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10 mx-auto px-4 md:px-6 py-24">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Our Story Since 2020
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Built on Trust.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Driven by Results.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed">
              Founded in 2020 in Hyderabad, HITEC City by G.V Krishna Reddy — MyCorp Solutions has grown rapidly into a trusted IT services partner delivering staffing, software, and healthcare solutions to enterprises across the US and India.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-10">
              {[
                { target: 5, suffix: "+", label: "Years in Business" },
                { target: 300, suffix: "+", label: "Team Members" },
                { target: 200, suffix: "+", label: "Enterprise Clients" },
                { target: 5000, suffix: "+", label: "Placements Made" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <AnimatedStat target={stat.target} suffix={stat.suffix} />
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ── MISSION / VISION / VALUES CARDS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The principles and purpose that guide every decision at MyCorp.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, color: "bg-primary", borderColor: "border-primary", title: "Our Mission", desc: "To deliver innovative IT and healthcare solutions that empower businesses to scale, operate efficiently, and achieve sustainable growth across every market we serve." },
              { icon: Eye, color: "bg-accent", borderColor: "border-accent", title: "Our Vision", desc: "To be the most trusted global partner for enterprise IT staffing, custom software development, and healthcare revenue cycle management by 2030." },
              { icon: Heart, color: "bg-rose-500", borderColor: "border-rose-500", title: "Our Values", desc: "Integrity in all dealings. Innovation in our solutions. Excellence in delivery. True Partnership with clients. Agility in execution — every single day." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <Card className={`h-full border-t-4 ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-10 text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY VIDEO ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <Play className="w-3 h-3 fill-primary" /> Company Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">See MyCorp in Action</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                From our Hyderabad, HITEC City headquarters — see how 300+ professionals come together every day to deliver exceptional IT, staffing, and healthcare outcomes for our clients across the globe.
              </p>
              <ul className="space-y-3">
                {["A day in our Hyderabad delivery center", "How we onboard IT talent in under 48 hours", "Our medical billing quality assurance process"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <VideoEmbed />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MILESTONE TIMELINE ── */}
      <section className="py-24 bg-[#0B1120] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-semibold mb-4">
              <Calendar className="w-3 h-3" /> 2020 — 2025
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Journey</h2>
            <p className="text-slate-400 max-w-xl mx-auto">5 years of milestones that shaped who we are today.</p>
          </motion.div>

          {/* Horizontal Timeline Track */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-12 px-5"
          >
            {/* Track line background */}
            <div className="absolute top-5 left-5 right-5 h-[2px] bg-white/10" />
            {/* Animated progress fill — scaleX from left, GPU-accelerated */}
            <motion.div
              className="absolute top-5 left-5 right-5 h-[2px] bg-gradient-to-r from-primary via-blue-400 to-accent origin-left"
              animate={{ scaleX: activeTimeline / (milestones.length - 1) }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            />

            {/* Milestone nodes */}
            <div className="relative flex justify-between items-start">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                const isActive = i === activeTimeline;
                const isPast = i < activeTimeline;
                return (
                  <button
                    key={i}
                    onClick={() => { setActiveTimeline(i); setPaused(true); }}
                    className="flex flex-col items-center gap-3 group focus:outline-none"
                  >
                    {/* Node dot */}
                    <motion.div
                      animate={isActive ? { scale: 1.28, boxShadow: "0 0 22px rgba(59,130,246,0.7)" } : { scale: 1, boxShadow: "none" }}
                      transition={{ duration: 0.3 }}
                      className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center z-10
                        ${isActive
                          ? "bg-primary border-primary"
                          : isPast
                            ? "bg-primary/40 border-primary/60"
                            : "bg-white/5 border-white/20 group-hover:border-primary/60 group-hover:bg-primary/20"
                        }`}
                    >
                      <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-white" : isPast ? "text-primary/80" : "text-white/40 group-hover:text-white/70"}`} />
                      {/* Ripple ring for active node */}
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full border border-primary"
                          animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </motion.div>
                    {/* Year label */}
                    <span className={`text-xs font-bold transition-colors ${isActive ? "text-white" : isPast ? "text-slate-400" : "text-slate-600 group-hover:text-slate-400"}`}>
                      {m.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Active milestone detail card */}
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              {/* Card header */}
              <div className="flex items-start gap-5 p-8 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  {(() => { const Icon = milestones[activeTimeline].icon; return <Icon className="w-7 h-7 text-primary" />; })()}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-4xl font-display font-black text-white">{milestones[activeTimeline].year}</span>
                    <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-semibold">Milestone {activeTimeline + 1}/{milestones.length}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{milestones[activeTimeline].title}</h3>
                </div>
              </div>
              {/* Card body */}
              <div className="p-8">
                <p className="text-slate-300 text-lg leading-relaxed">{milestones[activeTimeline].desc}</p>

                {/* Nav controls */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => { setActiveTimeline(Math.max(0, activeTimeline - 1)); setPaused(true); }}
                    disabled={activeTimeline === 0}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white disabled:opacity-20 transition-colors"
                  >
                    ← Previous
                  </button>

                  <button
                    onClick={() => setPaused(!paused)}
                    className={`px-5 py-2 rounded-full text-xs font-semibold transition-all border ${
                      paused
                        ? "border-accent/40 text-accent hover:bg-accent/10"
                        : "border-white/20 text-slate-400 hover:text-white hover:border-white/40"
                    }`}
                  >
                    {paused ? "▶ Auto-play" : "⏸ Pause"}
                  </button>

                  <button
                    onClick={() => { setActiveTimeline(Math.min(milestones.length - 1, activeTimeline + 1)); setPaused(true); }}
                    disabled={activeTimeline === milestones.length - 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white disabled:opacity-20 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES GRID ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The six pillars that define our culture, guide our work, and build lasting client relationships.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="group h-full border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform`}>
                      <v.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE PHOTO GRID ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Life at MyCorp</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A glimpse into the people, spaces, and moments that make MyCorp a great place to work and build a career.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="grid grid-cols-3 gap-4 h-[460px]">
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=500" alt="Team collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300" alt="Modern office" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden flex-1">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=300" alt="Team meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 h-[240px] mt-4">
            <div className="rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400&h=300" alt="Office fun" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800&h=300" alt="Team event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EMPLOYEE TESTIMONIALS ── */}
      <section className="py-24 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Team Says</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Real voices from the people who make MyCorp exceptional every day.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employeeTestimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-accent mb-5 opacity-60" />
                    <p className="text-slate-200 leading-relaxed mb-8 italic">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
                      <div>
                        <p className="font-bold text-white text-sm">{t.name}</p>
                        <p className="text-accent text-xs">{t.role}</p>
                        <p className="text-slate-500 text-xs">{t.tenure} at MyCorp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Guided by veterans who've built, scaled, and transformed enterprise technology organizations.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <Card className="group h-full border-border/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 h-56">
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <a href={leader.linkedin} className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#0077B5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((tag, j) => (
                        <span key={j} className="px-2 py-1 bg-primary/5 text-primary rounded-md text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CSR / COMMUNITY ── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold mb-4">
              <Leaf className="w-3 h-3" /> Corporate Social Responsibility
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Giving Back. Growing Together.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Beyond business, MyCorp is committed to making a lasting positive impact in the communities we serve.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {csrItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}>
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white font-display mb-2">{item.value}</div>
                    <h3 className="font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Partner with MyCorp?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Whether you need IT talent, software, managed services, or healthcare RCM — we're your global delivery partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 h-13 text-base bg-white text-primary hover:bg-blue-50 shadow-xl hover:scale-105 transition-transform">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-13 text-base border-white/30 text-white hover:bg-white/10">
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
